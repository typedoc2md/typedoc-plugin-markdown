import { NavigationItem } from 'typedoc-plugin-markdown';

export function getSidebar(
  navigation: NavigationItem[],
  basePath: string,
  numberPrefixParser?: any,
) {
  return navigation
    .map((navigationItem) =>
      getNavigationItem(navigationItem, basePath, numberPrefixParser),
    )
    .filter((navItem) => Boolean(navItem));
}

function getNavigationItem(
  navigationItem: NavigationItem,
  basePath: string,
  numberPrefixParser?: any,
) {
  const parsedUrl =
    numberPrefixParser === false
      ? navigationItem.path
      : navigationItem.path?.replace(/\d+\-/g, '');

  const getId = () => {
    const idParts: string[] = [];
    if (basePath.length > 0) {
      idParts.push(basePath);
    }
    if (parsedUrl) {
      idParts.push(parsedUrl);
    }
    if (navigationItem.path) {
      return idParts.join('/').replace(/(.*)\.\w+$/, '$1');
    }
    return null;
  };
  const id = getId();

  if (navigationItem.children?.length) {
    return {
      type: 'category',
      label: `${navigationItem.title}`,
      items: getSidebar(navigationItem.children, basePath, numberPrefixParser),
      ...(id && {
        link: {
          type: 'doc',
          id,
        },
      }),
    };
  }

  return id
    ? {
        type: 'doc',
        id,
        label: `${navigationItem.title}`,
      }
    : null;
}
