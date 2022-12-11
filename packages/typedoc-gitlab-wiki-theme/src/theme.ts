import { Renderer } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';

export class GitlabWikiTheme extends MarkdownTheme {
  constructor(renderer: Renderer) {
    super(renderer);

    this.entryDocument = 'home.md';
    // this.hideBreadcrumbs = true;
    // this.hidePageTitle = true;
  }

  get globalsFile() {
    return this.entryPoints.length > 1 ? 'Modules.md' : 'Exports.md';
  }
}
