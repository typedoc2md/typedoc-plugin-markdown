import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class DocusaurusTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    renderer.application.options.setValue('hideInPageTOC', true);
    renderer.application.options.setValue('hideBreadcrumbs', true);
    renderer.application.options.setValue('entryDocument', 'index.md');
  }

  allowedDirectoryListings() {
    return [...super.allowedDirectoryListings(), ...['_category_.yml']];
  }
}
