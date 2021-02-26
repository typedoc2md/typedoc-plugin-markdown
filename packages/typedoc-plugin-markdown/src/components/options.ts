import { BindOption } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';

import MarkdownTheme from '../theme';

@Component({ name: 'options' })
export class ContextAwareHelpers extends ContextAwareRendererComponent {
  @BindOption('publicPath')
  publicPath!: string;

  @BindOption('namedAnchors')
  namedAnchors!: boolean;

  @BindOption('hideBreadcrumbs')
  hideBreadcrumbs!: boolean;

  @BindOption('hidePageTitle')
  hidePageTitle!: boolean;

  @BindOption('indexTitle')
  indexTitle!: string;

  initialize() {
    super.initialize();

    // plugin options

    MarkdownTheme.HANDLEBARS.registerHelper('namedAnchors', () => {
      return this.namedAnchors;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('hideBreadcrumbs', () => {
      return this.hideBreadcrumbs;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('hidePageTitle', () => {
      return this.hidePageTitle;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('indexTitle', () => {
      return this.indexTitle;
    });

    // utility helper

    MarkdownTheme.HANDLEBARS.registerHelper('relativeURL', (url: string) => {
      return url
        ? this.publicPath
          ? this.publicPath + url
          : this.getRelativeUrl(url)
        : url;
    });
  }
}
