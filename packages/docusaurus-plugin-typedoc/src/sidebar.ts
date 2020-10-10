import * as path from 'path';

import * as fs from 'fs-extra';
import { NavigationItem } from 'typedoc';

import { SidebarItem, SidebarOptions } from './types';

export function writeSidebar(
  outputCheck: boolean,
  siteDir: string,
  outFolder: string,
  sidebar: SidebarOptions,
  navigation: NavigationItem,
) {
  const sidebarPath = path.resolve(siteDir, sidebar.sidebarFile);

  // if output check failed (docs not generated) then gracefully return empty sidebar
  if (!outputCheck) {
    fs.outputFileSync(sidebarPath, `module.exports = [];`);
    return;
  }

  // map the navigation object to a Docuaurus sidebar format
  const sidebarItems = navigation.children
    ? navigation.children.map((navigationItem) => {
        if (navigationItem.isLabel) {
          const sidebarCategoryItems = navigationItem.children
            ? navigationItem.children.map((navItem) => {
                const url = getUrlKey(outFolder, navItem.url);
                if (navItem.children && navItem.children.length > 0) {
                  const sidebarCategoryChildren = navItem.children.map(
                    (childGroup) =>
                      sidebarCategory(
                        childGroup.title,
                        childGroup.children
                          ? childGroup.children.map((childItem) =>
                              getUrlKey(outFolder, childItem.url),
                            )
                          : [],
                      ),
                  );
                  return sidebarCategory(navItem.title, [
                    url,
                    ...sidebarCategoryChildren,
                  ]);
                }
                return url;
              })
            : [];
          return sidebarCategory(navigationItem.title, sidebarCategoryItems);
        }
        return getUrlKey(outFolder, navigationItem.url);
      })
    : [];

  // write result to disk
  fs.outputFileSync(
    sidebarPath,
    `module.exports = ${JSON.stringify(sidebarItems, null, 2)};`,
  );

  console.log(`[docusaurus-plugin-typedoc] sidebar written to ${sidebarPath}`);
}

/**
 * returns a sidebar category node
 */
function sidebarCategory(title: string, items: SidebarItem[]) {
  return {
    type: 'category',
    label: title,
    items,
  };
}

/**
 * returns the url key for relevant doc
 */
function getUrlKey(outFolder: string, url: string) {
  const urlKey = url.replace('.md', '');
  return outFolder ? outFolder + '/' + urlKey : urlKey;
}
