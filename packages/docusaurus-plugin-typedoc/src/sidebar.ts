import { NavigationItem } from 'typedoc-plugin-markdown';

export function getSidebar(
  navigation: NavigationItem[],
  basePath: string,
  filteredIds: string[] = [],
) {
  return navigation
    .map((navigationItem) =>
      getNavigationItem(navigationItem, basePath, filteredIds),
    )
    .filter((navItem) => Boolean(navItem));
}

function getNavigationItem(
  navigationItem: NavigationItem,
  basePath: string,
  filteredIds: string[],
) {
  const id = navigationItem.url
    ? `${basePath}/${navigationItem.url.replace(/\d+\-/g, '')}`.replace(
        /(.*).md/,
        '$1',
      )
    : null;

  if (navigationItem.children?.length) {
    return {
      type: 'category',
      label: navigationItem.title,
      items: getSidebar(navigationItem.children, basePath, filteredIds),
      ...(id && { link: { type: 'doc', id } }),
    };
  }

  return id && !filteredIds.includes(id)
    ? {
        type: 'doc',
        id,
        label: navigationItem.title,
      }
    : null;
}
