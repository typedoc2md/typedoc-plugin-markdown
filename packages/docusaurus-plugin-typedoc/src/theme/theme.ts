import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { DocsaurusFrontMatterComponent } from './front-matter-component';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.indexName = 'index';
    renderer.addComponent(
      'docusaurus-frontmatter',
      new DocsaurusFrontMatterComponent(renderer),
    );
  }
}
