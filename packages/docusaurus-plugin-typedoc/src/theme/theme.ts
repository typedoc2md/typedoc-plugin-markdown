import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { DocsaurusFrontMatterComponent } from './front-matter-component';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.listenTo(renderer, PageEvent.END, this.onDocusaurusPageEnd, 1024);
    super(renderer, basePath);
    renderer.addComponent(
      'docusaurus-frontmatter',
      new DocsaurusFrontMatterComponent(renderer),
    );
  }

  private onDocusaurusPageEnd(page: PageEvent) {
    page.contents = page.contents.replace(/</g, '‹').replace(/>/g, '›');
  }
}
