import type { MetadataRoute } from 'next';
import type { PageMapItem } from 'nextra';
import { getPageMap } from 'nextra/page-map';

const SITE_URL = 'https://typedoc-plugin-markdown.org';

function collectRoutes(items: PageMapItem[], routes: Set<string>) {
  for (const item of items) {
    if ('children' in item) {
      // An `asIndexPage` index file is folded into its folder, which then
      // carries the page's front matter in place of a child entry.
      if ('frontMatter' in item && item.frontMatter) {
        routes.add(item.route);
      }
      collectRoutes(item.children, routes);
    } else if ('route' in item) {
      routes.add(item.route);
    }
  }
  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = collectRoutes(await getPageMap(), new Set());
  return [...routes].sort().map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
  }));
}
