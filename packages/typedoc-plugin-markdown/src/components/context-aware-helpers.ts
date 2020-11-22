import { BindOption } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';

import MarkdownTheme from '../theme';

@Component({ name: 'helpers' })
export class ContextAwareHelpers extends ContextAwareRendererComponent {
  @BindOption('publicPath')
  publicPath!: string;

  @BindOption('namedAnchors')
  namedAnchors!: boolean;

  @BindOption('hideProjectName')
  hideProjectName!: boolean;

  @BindOption('hideBreadcrumbs')
  hideBreadcrumbs!: boolean;

  initialize() {
    super.initialize();

    // plugin options

    MarkdownTheme.HANDLEBARS.registerHelper('namedAnchors', () => {
      return this.namedAnchors;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('hideBreadcrumbs', () => {
      return this.hideBreadcrumbs;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('hideProjectName', () => {
      return this.hideProjectName;
    });

    // theme properties

    MarkdownTheme.HANDLEBARS.registerHelper('navigationEnabled', () => {
      const theme = this.application.renderer.theme as MarkdownTheme;
      return theme?.navigationEnabled;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('hideReflectionTitle', () => {
      const theme = this.application.renderer.theme as MarkdownTheme;
      return theme?.hideReflectionTitle;
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
