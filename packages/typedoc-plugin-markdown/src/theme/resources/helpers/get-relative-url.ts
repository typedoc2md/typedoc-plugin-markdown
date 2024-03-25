import * as path from 'path';
import { MarkdownThemeRenderContext } from '../../render-context';
export function getRelativeUrl(
  this: MarkdownThemeRenderContext,
  url: string,
  ignorePublicPath = false,
) {
  const URL_PREFIX = /^(http|ftp)s?:\/\//;

  if (URL_PREFIX.test(url)) {
    return url;
  } else {
    const publicPath = this.options.getValue('publicPath');

    if (publicPath && !ignorePublicPath) {
      return encodeURI(path.join(publicPath, url));
    }

    const baseUrl = path.relative(
      path.dirname(this.page?.url || '.'),
      path.dirname(url),
    );

    const relativeUrl = path
      .join(baseUrl, path.basename(url))
      .replace(/\\/g, '/');

    return encodeURI(relativeUrl);
  }
}
