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

  const getId = () => {
    const idParts: string[] = [];
    if (basePath.length > 0) {
      idParts.push(basePath);
    }
    if (parsedUrl) {
      idParts.push(parsedUrl);
    }
    if (navigationItem.url) {
      return idParts.join('/').replace(/(.*).md/, '$1');
    }
    return null;
  };
  const id = getId();

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
