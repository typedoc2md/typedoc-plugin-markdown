import { MarkdownTheme } from 'typedoc-plugin-markdown';
import { GithubWikiThemeRenderContext } from './theme-context';

export class GithubWikiTheme extends MarkdownTheme {
  private _contextCache?: GithubWikiThemeRenderContext;

  override getRenderContext() {
    this._contextCache ||= new GithubWikiThemeRenderContext(
      this,
      this.application.options,
    );
    return this._contextCache;
  }
}
