import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';

import MarkdownTheme from '../theme';

@Component({ name: 'options' })
export class OptionsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    const application = this.application;

    MarkdownTheme.handlebars.registerHelper('ifShowNamedAnchors', function (
      options,
    ) {
      return application.options.getValue('namedAnchors')
        ? options.fn(this)
        : options.inverse(this);
    });

    MarkdownTheme.handlebars.registerHelper('ifShowBreadcrumbs', function (
      options,
    ) {
      return application.options.getValue('hideBreadcrumbs')
        ? options.inverse(this)
        : options.fn(this);
    });

    MarkdownTheme.handlebars.registerHelper('ifShowIndexes', function (
      options,
    ) {
      return application.options.getValue('hideIndexes')
        ? options.inverse(this)
        : options.fn(this);
    });

    MarkdownTheme.handlebars.registerHelper('ifShowSources', function (
      options,
    ) {
      return application.options.getValue('hideSources')
        ? options.inverse(this)
        : options.fn(this);
    });
  }
}
