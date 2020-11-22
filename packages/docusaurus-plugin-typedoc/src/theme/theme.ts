import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class DocusaurusTheme extends MarkdownTheme {
  /**
   * Escape characters for mdx support after render
   */
  static formatContents(contents: string) {
    return contents.replace(/\\</g, '&#60;').replace(/\\"/g, '&#34;');
  }

  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onDocusaurusPageEnd, 1024);
  }

  private onDocusaurusPageEnd(page: PageEvent) {
    page.contents = page.contents
      ? DocusaurusTheme.formatContents(page.contents)
      : '';
  }

  get entryFile() {
    return 'index.md';
  }

  get navigationEnabled() {
    return true;
  }

  get hideReflectionTitle() {
    return true;
  }
}
