import * as fs from 'fs';
import * as path from 'path';
import { Application } from 'typedoc';
import { MarkdownRendererEvent, NavigationItem } from 'typedoc-plugin-markdown';
import { DEFAULT_SIDEBAR_OPTIONS } from './options.js';
import { Sidebar } from './types/options.js';
import { SidebarConfig, SidebarItemConfig } from './types/sidebar.js';

export function writeSidebar(
  app: Application,
  renderer: MarkdownRendererEvent,
) {
  const sidebar = {
    ...DEFAULT_SIDEBAR_OPTIONS,
    ...app.options.getValue('sidebar'),
  };

  const docsPath = app.options.getValue('docsPath');
  const numberPrefixParser = app.options.getValue('numberPrefixParser');

  if (sidebar?.autoConfiguration && renderer.navigation) {
    const sidebarFileName = sidebar.typescript
      ? 'typedoc-sidebar.ts'
      : 'typedoc-sidebar.cjs';

    const sidebarPath = path.resolve(renderer.outputDirectory, sidebarFileName);

    const baseDir = path
      .relative(docsPath, renderer.outputDirectory)
      .replace(/\\/g, '/');

    const sidebarJson = getSidebarConfig(
      renderer.navigation,
      baseDir,
      sidebar,
      numberPrefixParser,
    );

    const sidebarContent = sidebar.typescript
      ? getTypescriptSidebar(sidebarJson, sidebar)
      : getJsSidebar(sidebarJson, sidebar);

    fs.writeFileSync(sidebarPath, sidebarContent.trim());
  }
}

function getTypescriptSidebar(sidebarConfig: SidebarConfig, sidebar: Sidebar) {
  return `import { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const typedocSidebar: SidebarsConfig = ${getSidebarJson(sidebarConfig, sidebar.pretty)};
export default typedocSidebar;`;
}

function getJsSidebar(sidebarConfig: SidebarConfig, sidebar: Sidebar) {
  return `// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const typedocSidebar = ${getSidebarJson(sidebarConfig, sidebar.pretty)};
module.exports = typedocSidebar.items;`;
}

function getSidebarJson(sidebarConfig: SidebarConfig, pretty: boolean) {
  return unquoteObjectKeys(JSON.stringify(sidebarConfig, null, pretty ? 2 : 0));
}

function getSidebarConfig(
  navigation: NavigationItem[],
  basePath: string,
  options: Sidebar,
  numberPrefixParser: boolean,
): SidebarConfig {
  return {
    items: getSidebarItems(navigation, basePath, options, numberPrefixParser),
  };
}

function getSidebarItems(
  navigation: NavigationItem[],
  basePath: string,
  options: Sidebar,
  numberPrefixParser: boolean,
): SidebarItemConfig[] {
  return navigation
    .map((navigationItem) =>
      getSidebarItem(navigationItem, basePath, options, numberPrefixParser),
    )
    .filter((navItem) => navItem !== null);
}

function getSidebarItem(
  navigationItem: NavigationItem,
  basePath: string,
  options: Sidebar,
  numberPrefixParser: boolean,
): SidebarItemConfig | null {
  const navigationItemPath = navigationItem.path;

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
      items: getSidebarItems(
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

function unquoteObjectKeys(json: string): string {
  return json.replace(/"([^"]+)":/g, (_, key) => {
    return /^[a-zA-Z_$][\w$]*$/.test(key) ? `${key}:` : `"${key}":`;
  });
}
