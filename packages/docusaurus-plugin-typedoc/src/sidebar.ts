import { NavigationItem } from 'typedoc-plugin-markdown';

export function getSidebar(navigation: NavigationItem[], basePath: string) {
  return navigation
    .map((navigationItem) => {
      return getNavigationItem(navigationItem, basePath);
    })
    .filter((navItem) => Boolean(navItem));
}

function getNavigationItem(navigationItem: NavigationItem, basePath: string) {
  const id = navigationItem.url
    ? `${basePath}/${navigationItem.url}`.replace(/(.*).md/, '$1')
    : null;

  if (navigationItem.children?.length) {
    return {
      type: 'category',
      label: navigationItem.title,
      items: getSidebar(navigationItem.children, basePath),
      ...(id && { link: { type: 'doc', id } }),
    };
  }

  return id
    ? {
        type: 'doc',
        id,
        label: navigationItem.title,
      }
    : null;
}
