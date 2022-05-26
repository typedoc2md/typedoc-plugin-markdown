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
        text: navigationItem.title,
        collapsible: true,
        children: navigationItem.children?.map((navItem) => {
          return {
            link: `/${outDir}/${navItem.url}`,
            text: sidebarOptions.fullNames
              ? navItem.title
              : getShortName(navItem.title),
          };
        }),
      });
    } else {
      navJson.push({
        link:
          getUrlKey(navigationItem.url) === 'README.md'
            ? `/${outDir}/`
            : `/${outDir}/modules.md`,
        text: navigationItem.title,
      });
    }
  });
  if (
    sidebarOptions.parentCategory &&
    sidebarOptions.parentCategory !== 'none'
  ) {
    return [
      {
        text: sidebarOptions.parentCategory,
        children: navJson,
        collapsible: false,
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
  return url;
};
