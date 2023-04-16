import { MarkdownThemeRenderContext } from 'typedoc-plugin-markdown';

export class GithubWikiThemeRenderContext extends MarkdownThemeRenderContext {
  override getRelativeUrl(url: string) {
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }
}
