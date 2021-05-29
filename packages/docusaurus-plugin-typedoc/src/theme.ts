import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

import { FrontMatterComponent } from './front-matter';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.application.options.setValue('hideInPageTOC', true);
    renderer.application.options.setValue('hideBreadcrumbs', true);
    renderer.application.options.setValue('hidePageTitle', true);
    renderer.application.options.setValue('entryDocument', 'index.md');
    renderer.addComponent('fm', new FrontMatterComponent(renderer));
  }

  allowedDirectoryListings() {
    return [...super.allowedDirectoryListings(), ...['_category_.yml']];
  }
}
