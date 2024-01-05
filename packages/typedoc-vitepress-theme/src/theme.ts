import { Reflection } from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class VitepressTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: MarkdownPageEvent<Reflection>) {
    return new ThemeRenderContext(this, pageEvent, this.application.options);
  }
}

class ThemeRenderContext extends MarkdownThemeRenderContext {
  override parseUrl(url: string) {
    const urlWithAnchor = url.split('#');
    if (urlWithAnchor.length > 1) {
      const anchorPart = slugify(urlWithAnchor[1]);
      return encodeURI(`${urlWithAnchor[0]}#${anchorPart}`);
    }
    return encodeURI(url);
  }
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
