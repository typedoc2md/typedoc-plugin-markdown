import { BindOption } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import MarkdownTheme from '../theme';

@Component({ name: 'utils' })
export class HelperUtilsComponent extends ContextAwareRendererComponent {
  @BindOption('publicPath')
  publicPath!: string;

  @BindOption('namedAnchors')
  namedAnchors!: boolean;

  @BindOption('hideProjectName')
  hideProjectName!: boolean;

  @BindOption('hideBreadcrumbs')
  hideBreadcrumbs!: boolean;

  @BindOption('hideSources')
  hideSources!: boolean;

  initialize() {
    super.initialize();

    const component = this;

    MarkdownTheme.HANDLEBARS.registerHelper('relativeURL', (url: string) => {
      return url
        ? this.publicPath
          ? this.publicPath + url
          : this.getRelativeUrl(url)
        : url;
    });

    MarkdownTheme.HANDLEBARS.registerHelper('ifShowNamedAnchors', function (
      options,
    ) {
      return component.namedAnchors ? options.fn(this) : options.inverse(this);
    });

    MarkdownTheme.HANDLEBARS.registerHelper('ifShowBreadcrumbs', function (
      options,
    ) {
      return component.hideBreadcrumbs
        ? options.inverse(this)
        : options.fn(this);
    });

    MarkdownTheme.HANDLEBARS.registerHelper('ifShowSources', function (
      options,
    ) {
      return component.hideSources ? options.inverse(this) : options.fn(this);
    });

    MarkdownTheme.HANDLEBARS.registerHelper('ifShowProjectName', function (
      options,
    ) {
      return component.hideProjectName
        ? options.inverse(this)
        : options.fn(this);
    });
  }
}
