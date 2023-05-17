import { PageEvent, Reflection } from 'typedoc';
import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class GitlabWikiTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new ThemeRenderContext(pageEvent, this.application.options);
  }
}

class ThemeRenderContext extends MarkdownThemeRenderContext {
  override parseUrl(url: string) {
    const relativeUrl = url?.replace(/(.*).md/, '$1').replace(/ /g, '-');
    return encodeURI(
      relativeUrl?.startsWith('..') ? relativeUrl : './' + relativeUrl,
    );
  }
}
