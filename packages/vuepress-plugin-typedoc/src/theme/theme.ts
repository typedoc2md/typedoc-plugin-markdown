import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { VuepressFrontMatterComponent } from './front-matter-component';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.addComponent('vuepress-frontmatter', new VuepressFrontMatterComponent(renderer));
  }
}
