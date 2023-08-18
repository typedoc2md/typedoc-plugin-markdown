import { NavigationItem } from 'typedoc-plugin-markdown';

export = (navigation: NavigationItem[], basePath: string) => {
  return navigation.map((navigationItem) => {
    return getNavigationItem(navigationItem, basePath);
  });
};

function getNavigationItem(navigationItem: NavigationItem, basePath: string) {
  return {
    text: navigationItem.title,
    ...(Boolean(navigationItem.url) && {
      link: `/${basePath}/${navigationItem.url}`,
    }),
    collapsed: true,
    items: navigationItem.children?.map((group) => {
      return getNavigationItem(group, basePath);
    }),
  };
}
