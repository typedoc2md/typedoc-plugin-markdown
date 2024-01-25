import { Reflection } from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class GitlabWikiTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: MarkdownPageEvent<Reflection>) {
    return new ThemeRenderContext(this, pageEvent, this.application.options);
  }
}

class ThemeRenderContext extends MarkdownThemeRenderContext {
  parseUrl = (url: string) => {
    const relativeUrl = url?.replace(/(.*).md/, '$1').replace(/ /g, '-');
    return encodeURI(
      relativeUrl?.startsWith('..') ? relativeUrl : './' + relativeUrl,
    );
  };
}
