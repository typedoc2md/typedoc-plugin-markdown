import { Renderer } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';

export class GithubWikiTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);
  }

  getRelativeUrl(url: string) {
    return encodeURI('../wiki/' + url.replace('.md', ''));
  }

  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
