import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { FrontMatterComponent } from './front-matter';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.addComponent('fm', new FrontMatterComponent(renderer));
  }

  allowedDirectoryListings() {
    return [...super.allowedDirectoryListings(), ...['_category_.yml']];
  }
}
