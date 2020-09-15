import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onDocusaurusPageEnd, 1024);
  }

  private onDocusaurusPageEnd(page: PageEvent) {
    if (page.contents) {
      page.contents = page.contents
        .replace(/\\</g, '&#60;')
        .replace(/\\"/g, '&#34;');
    }
  }

  get entryFile() {
    return 'index.md';
  }
}
