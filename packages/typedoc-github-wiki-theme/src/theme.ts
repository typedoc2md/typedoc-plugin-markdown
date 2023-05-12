import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';
import { parseUrl } from './helpers';

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
  override getRelativeUrl(url: string) {
    return parseUrl(url);
  }
}
