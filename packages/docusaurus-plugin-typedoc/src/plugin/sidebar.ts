import * as fs from 'fs';
import * as path from 'path';
import { NavigationItem } from 'typedoc-plugin-markdown';
import { Sidebar } from '../types/options.js';
import { adjustBaseDirectory } from '../utils/adjust-basedir.js';

export function writeSidebar(
  navigation: NavigationItem[],
  outputDir: string,
  sidebar: Sidebar,
  siteDir: string,
  docsPresetPath: string,
  numberPrefixParser: any,
) {
  if (sidebar?.autoConfiguration) {
    const sidebarFileName = sidebar.typescript
      ? 'typedoc-sidebar.ts'
      : 'typedoc-sidebar.cjs';
    const sidebarPath = path.resolve(outputDir, sidebarFileName);

    let baseDir = path
      .relative(siteDir, outputDir)
      .split(path.sep)
      .slice(1)
      .join('/');

    if (docsPresetPath) {
      baseDir = adjustBaseDirectory(baseDir, docsPresetPath);
    }

    const sidebarJson = getSidebar(
      navigation,
      baseDir,
      sidebar,
      numberPrefixParser,
    );

    const sidebarContent = sidebar.typescript
      ? getTypescriptSidebar(sidebarJson, sidebar)
      : getJsSidebar(sidebarJson, sidebar);

    fs.writeFileSync(sidebarPath, sidebarContent);
  }
}

function getTypescriptSidebar(sidebarJson: any, sidebar: Sidebar) {
  return `import { SidebarsConfig } from '@docusaurus/plugin-content-docs';
const typedocSidebar: SidebarsConfig = { items: ${JSON.stringify(
    sidebarJson,
    null,
    sidebar.pretty ? 2 : 0,
  )}};
export default typedocSidebar;`;
}

function getJsSidebar(sidebarJson: any, sidebar: Sidebar) {
  return `// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: ${JSON.stringify(
    sidebarJson,
    null,
    sidebar.pretty ? 2 : 0,
  )}};
module.exports = typedocSidebar.items;`;
}

function getSidebar(
  navigation: NavigationItem[],
  basePath: string,
  options: Sidebar,
  numberPrefixParser?: any,
) {
  return navigation
    .map((navigationItem) =>
      getNavigationItem(navigationItem, basePath, options, numberPrefixParser),
    )
    .filter((navItem) => Boolean(navItem));
}

function getNavigationItem(
  navigationItem: NavigationItem,
  basePath: string,
  options: Sidebar,
  numberPrefixParser?: any,
) {
  const navigationItemPath = navigationItem.path || (navigationItem as any).url;

  const parsedUrl =
    numberPrefixParser === false
      ? navigationItemPath
      : navigationItemPath?.replace(/\d+-/g, '');

  const getId = () => {
    const idParts: string[] = [];
    if (basePath.length > 0) {
      idParts.push(basePath);
    }
    if (parsedUrl) {
      idParts.push(parsedUrl.replace(/\\/g, '/'));
    }
    if (navigationItemPath) {
      return idParts.join('/').replace(/(.*)\.\w+$/, '$1');
    }
    return null;
  };
  const id = getId();

  if (navigationItem.children?.length) {
    return {
      type: 'category',
      label: navigationItem.title,
      items: getSidebar(
        navigationItem.children,
        basePath,
        options,
        numberPrefixParser,
      ),
      ...(id && {
        link: {
          type: 'doc',
          id,
        },
      }),
    };
  }

  return id
    ? {
        type: 'doc',
        id,
        label: navigationItem.title,
        ...(navigationItem.isDeprecated && {
          className: options.deprecatedItemClassName,
        }),
      }
    : null;
}
