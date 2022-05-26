import { SidebarOptions } from '../shared/types';

export const getSidebarJson = (
  navigation: any,
  sidebarOptions: SidebarOptions,
  outDir: string,
) => {
  const navJson: any = [];

  navigation.children?.forEach((navigationItem) => {
    if (navigationItem.isLabel) {
      navJson.push({
        title: navigationItem.title,
        children: navigationItem.children?.map((navItem) => {
          return [
            getUrlKey(navItem.url),
            sidebarOptions.fullNames
              ? navItem.title
              : getShortName(navItem.title),
          ];
        }),
      });
    } else {
      navJson.push([
        getUrlKey(navigationItem.url) === 'README'
          ? `/${outDir}/`
          : `/${outDir}/modules`,
        navigationItem.title,
      ]);
    }
  });
  if (
    sidebarOptions.parentCategory &&
    sidebarOptions.parentCategory !== 'none'
  ) {
    return [
      {
        title: sidebarOptions.parentCategory,
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
