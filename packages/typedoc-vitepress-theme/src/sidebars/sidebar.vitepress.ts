import * as path from 'path';
import { NavigationItem } from 'typedoc-plugin-markdown';
import { Sidebar } from '../types';

export = (navigation: NavigationItem[], basePath: string, options: Sidebar) => {
  return navigation.map((navigationItem) => {
    return getNavigationItem(navigationItem, basePath, options);
  });
};

function getNavigationItem(
  navigationItem: NavigationItem,
  basePath: string,
  options: any,
) {
  const hasChildren = navigationItem?.children?.length;

  const linkParts: string[] = [];

  if (navigationItem?.path) {
    if (basePath.length) {
      linkParts.push(basePath);
    }
    linkParts.push(
      getParsedUrl(navigationItem.path as string).replace(/\\/g, '/'),
    );
  }

  return {
    text: navigationItem.title,
    ...(linkParts.length && {
      link: `/${linkParts.join('/')}`,
    }),
    ...(hasChildren && { collapsed: options.collapsed }),
    ...(hasChildren && {
      items: navigationItem.children?.map((group) =>
        getNavigationItem(group, basePath, options),
      ),
    }),
  };
}

function getParsedUrl(url: string) {
  if (path.basename(url) === 'index.md') {
    return path.dirname(url) + '/';
  }
  return url;
}
