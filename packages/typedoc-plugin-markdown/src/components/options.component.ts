import { Component, ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import MarkdownTheme from '../theme';

@Component({ name: 'options' })
export class OptionsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    const namedAnchors = this.application.options.getValue('namedAnchors');
    const hideBreadcrumbs = this.application.options.getValue('hideBreadcrumbs');
    const hideSourceFiles = this.application.options.getValue('hideSources');
    const hideIndexes = this.application.options.getValue('hideIndexes');

    MarkdownTheme.handlebars.registerHelper('ifShowNamedAnchors', function (options) {
      return namedAnchors ? options.fn(this) : options.inverse(this);
    });

    MarkdownTheme.handlebars.registerHelper('ifShowBreadcrumbs', function (options) {
      return hideBreadcrumbs ? options.inverse(this) : options.fn(this);
    });

    MarkdownTheme.handlebars.registerHelper('ifShowSources', function (options) {
      return hideSourceFiles ? options.inverse(this) : options.fn(this);
    });

    MarkdownTheme.handlebars.registerHelper('ifShowIndexes', function (options) {
      return hideIndexes ? options.inverse(this) : options.fn(this);
    });
  }
}
