import { NavigationItem } from 'typedoc';
import { SidebarOptions } from './types';

export const getSidebarJson = (
  navigation: NavigationItem,
  outFolder: string,
  sidebar: SidebarOptions,
) => {
  const navJson: any = [];

  const getShortName = (title: string) => {
    const longTitle = title.split('.');
    return longTitle[longTitle.length - 1];
  };

  navigation.children?.forEach((navigationItem) => {
    if (navigationItem.url && navigationItem.children?.length === 0) {
      const urlKey = navigationItem.url.replace('.md', '');
      navJson.push([
        urlKey === 'README' ? `/${outFolder}/` : 'modules',
        navigationItem.title,
      ]);
    } else {
      navJson.push({
        title: navigationItem.title,
        children: navigationItem.children?.map((navItem) => {
          return [
            getUrlKey(navItem.url),
            sidebar.fullNames ? navItem.title : getShortName(navItem.title),
          ];
        }),
      });
    }
  });
  if (sidebar.parentCategory && sidebar.parentCategory !== 'none') {
    return [{ title: sidebar.parentCategory, children: navJson }];
  }
  return navJson;
};

const getUrlKey = (url: string) => {
  return url.replace('.md', '');
};
