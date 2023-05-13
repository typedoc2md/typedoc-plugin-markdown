import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class GitlabWikiTheme extends MarkdownTheme {
  private _contextCache?: ThemeRenderContext;
  override getRenderContext() {
    if (!this._contextCache) {
      this._contextCache = new ThemeRenderContext(
        this,
        this.application.options,
      );
    }
    return this._contextCache;
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
