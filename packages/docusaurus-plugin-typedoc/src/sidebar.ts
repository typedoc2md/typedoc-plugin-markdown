import * as path from 'path';

import * as fs from 'fs-extra';
import { NavigationItem } from 'typedoc';

import { Sidebar, SidebarItem, SidebarOptions } from './types';

export function writeSidebar(
  siteDir: string,
  outFolder: string,
  sidebar: SidebarOptions,
  navigation: NavigationItem,
) {
  // map the navigation object to a Docuaurus sidebar format
  const sidebarItems = navigation.children
    ? navigation.children.map((navigationItem) => {
        if (navigationItem.url && navigationItem.children?.length === 0) {
          return getUrlKey(outFolder, navigationItem.url);
        } else {
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
      })
    : [];

  // full path to sidebar
  const sidebarPath = path.resolve(siteDir, sidebar.sidebarFile);

  // if sidebar already exists merge non typedoc sidebars
  const initialSidebarContent = fs.existsSync(sidebarPath)
    ? require(sidebarPath)
    : JSON.parse('{}');

  const sidebarContent: Sidebar = Object.assign({}, initialSidebarContent, {
    typedoc:
      sidebar.parentCategory && sidebar.parentCategory !== 'none'
        ? [
            {
              type: 'category',
              label: sidebar.parentCategory,
              items: sidebarItems,
            },
          ]
        : sidebarItems,
  });

  // write result to disk
  fs.outputFileSync(
    sidebarPath,
    'module.exports = ' + JSON.stringify(sidebarContent, null, 2) + ';',
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
