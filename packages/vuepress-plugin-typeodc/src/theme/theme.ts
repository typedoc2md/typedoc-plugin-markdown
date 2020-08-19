import { FrontMatterComponent } from 'typedoc-plugin-markdown/dist/components/front-matter.component';
import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    this.indexName = 'index';
    renderer.addComponent('frontmatter', new FrontMatterComponent(renderer));
  }
}
