import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';

import MarkdownTheme from '../theme';

@Component({ name: 'github-wiki-utils' })
export class UtilsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    MarkdownTheme.HANDLEBARS.registerHelper('relativeURL', (url: string) => {
      return encodeURI('../wiki/' + url.replace('.md', ''));
    });
  }
}
