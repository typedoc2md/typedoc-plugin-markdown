import { NavigationItem } from 'typedoc-plugin-markdown';
import { Sidebar } from '../types/options.js';

export function getSidebar(
  navigation: NavigationItem[],
  basePath: string,
  options: Sidebar,
  numberPrefixParser?: any,
) {
  return navigation
    .map((navigationItem) =>
      getNavigationItem(navigationItem, basePath, options, numberPrefixParser),
    )
    .filter((navItem) => Boolean(navItem));
}

function getNavigationItem(
  navigationItem: NavigationItem,
  basePath: string,
  options: Sidebar,
  numberPrefixParser?: any,
) {
  const navigationItemPath = navigationItem.path || (navigationItem as any).url;

  const parsedUrl =
    numberPrefixParser === false
      ? navigationItemPath
      : navigationItemPath?.replace(/\d+-/g, '');

  const getId = () => {
    const idParts: string[] = [];
    if (basePath.length > 0) {
      idParts.push(basePath);
    }
    if (parsedUrl) {
      idParts.push(parsedUrl.replace(/\\/g, '/'));
    }
    if (navigationItemPath) {
      return idParts.join('/').replace(/(.*)\.\w+$/, '$1');
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
        options,
        numberPrefixParser,
      ),
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
        label: navigationItem.title,
        ...(navigationItem.isDeprecated && {
          className: options.deprecatedItemClassName,
        }),
      }
    : null;
}
