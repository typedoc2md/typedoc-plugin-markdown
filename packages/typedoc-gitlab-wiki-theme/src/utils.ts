import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';

import MarkdownTheme from './theme';

@Component({ name: 'gitlab-wiki-utils' })
export class UtilsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();
    MarkdownTheme.HANDLEBARS.registerHelper('relativeURL', (url) => {
      const relativeUrl = this.getRelativeUrl(
        url.replace(/(.*).md/, '$1'),
      ).replace(/ /g, '-');
      return relativeUrl.startsWith('..') ? relativeUrl : './' + relativeUrl;
    });
  }
}
