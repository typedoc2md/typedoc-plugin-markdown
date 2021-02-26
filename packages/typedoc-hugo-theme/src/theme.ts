import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import {
  getPageTitle,
  prependYAML,
} from 'typedoc-plugin-markdown/dist/utils/front-matter';
import { PageEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';

export default class HugoTheme extends MarkdownTheme {
  constructor(renderer: Renderer, basePath: string) {
    super(renderer, basePath);
    // set relevant default options
    renderer.application.options.setValue('hideBreadcrumbs', true);
    renderer.application.options.setValue('hidePageTitle', true);
    // listen for triggered events
    this.listenTo(renderer, PageEvent.END, this.onHugoPageEnd);
  }
  private onHugoPageEnd(page: PageEvent) {
    // yaml variables
    const yamlVars = {
      title: getPageTitle(page),
      slug: page.url.replace(/\.[^.$]+$/, ''),
      linkTitle: page.model.name,
    };
    // pass yaml variables to prependYAML util
    if (page.contents) {
      page.contents = prependYAML(page.contents, yamlVars);
    }
  }
}
