import { NavigationItem } from 'typedoc';

import { PluginOptions } from './types';

export const getSidebarJson = (
  navigation: NavigationItem,
  options: PluginOptions,
) => {
  const navJson: any = [];

  navigation.children?.forEach((navigationItem) => {
    if (navigationItem.isLabel) {
      navJson.push({
        title: navigationItem.title,
        children: navigationItem.children?.map((navItem) => {
          return [
            getUrlKey(navItem.url),
            options.sidebar?.fullNames
              ? navItem.title
              : getShortName(navItem.title),
          ];
        }),
      });
    } else {
      navJson.push([
        getUrlKey(navigationItem.url) === 'README'
          ? `/${options.out}/`
          : `/${options.out}/modules`,
        navigationItem.title,
      ]);
    }
  });
  if (
    options.sidebar?.parentCategory &&
    options.sidebar.parentCategory !== 'none'
  ) {
    return [
      {
        title: options.sidebar.parentCategory,
        children: navJson,
        initialOpenGroupIndex: -1,
        collapsable: false,
      },
    ];
  }

  return navJson;
};

const getShortName = (title: string) => {
  const longTitle = title.split('.');
  return longTitle[longTitle.length - 1];
};

const getUrlKey = (url: string) => {
  return url.replace('.md', '');
};
