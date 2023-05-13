import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

export class GithubWikiTheme extends MarkdownTheme {
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
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }
}
