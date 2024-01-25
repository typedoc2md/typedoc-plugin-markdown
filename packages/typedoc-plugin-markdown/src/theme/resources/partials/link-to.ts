import * as path from 'path';
import { MarkdownThemeRenderContext } from '../..';
import { link } from '../markdown';
import { getRelativeUrl } from '../utils';

export function linkTo(
  context: MarkdownThemeRenderContext,
  label: string,
  url?: string,
) {
  const URL_PREFIX = /^(http|ftp)s?:\/\//;

  if (typeof url !== 'string') {
    return label;
  }
  if (URL_PREFIX.test(url)) {
    return link(label, url);
  } else {
    const publicPath = context.options.getValue('publicPath');

    if (publicPath) {
      return path.join(publicPath, url);
    }

    const relativeUrl = getRelativeUrl(url, context.page?.url);

    return link(label, context.parseUrl(relativeUrl));
  }
}
