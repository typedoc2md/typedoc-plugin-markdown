import { NavigationItem } from 'typedoc-plugin-markdown';

export function getSidebar(
  navigation: NavigationItem[],
  basePath: string,
  filteredIds: string[] = [],
  numberPrefixParser?: any,
) {
  return navigation
    .map((navigationItem) =>
      getNavigationItem(
        navigationItem,
        basePath,
        filteredIds,
        numberPrefixParser,
      ),
    )
    .filter((navItem) => Boolean(navItem));
}

function getNavigationItem(
  navigationItem: NavigationItem,
  basePath: string,
  filteredIds: string[],
  numberPrefixParser?: any,
) {
  const parsedUrl =
    numberPrefixParser === false
      ? navigationItem.url
      : navigationItem.url?.replace(/\d+\-/g, '');
  const id = navigationItem.url
    ? `${basePath}/${parsedUrl}`.replace(/(.*).md/, '$1')
    : null;

  if (navigationItem.children?.length) {
    return {
      type: 'category',
      label: navigationItem.title,
      items: getSidebar(
        navigationItem.children,
        basePath,
        filteredIds,
        numberPrefixParser,
      ),
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
