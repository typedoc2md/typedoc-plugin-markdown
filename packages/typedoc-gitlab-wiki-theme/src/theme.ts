import { DeclarationReflection, Renderer } from 'typedoc';
import {
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

class GitlabWikiThemeRenderContext extends MarkdownThemeRenderContext {
  relativeURL = (url: string) => {
    const relativeUrl = this.getRelativeUrl(url)
      ?.replace(/(.*).md/, '$1')
      .replace(/ /g, '-');
    return relativeUrl?.startsWith('..') ? relativeUrl : './' + relativeUrl;
  };
}

export class GitlabWikiTheme extends MarkdownTheme {
  private _contextCache?: GitlabWikiThemeRenderContext;
  constructor(renderer: Renderer) {
    super(renderer);
  }

  override getRenderContext() {
    this._contextCache ||= new GitlabWikiThemeRenderContext(
      this,
      this.application.options,
    );
    return this._contextCache;
  }

  toUrl(mapping: any, reflection: DeclarationReflection) {
    return `${mapping.directory}/${reflection.getFullName()}.md`;
  }
}
