import * as Handlebars from 'handlebars';
import { Component, ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';

@Component({ name: 'options' })
export class OptionsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    const namedAnchors = this.application.options.getValue('namedAnchors');
    const hideBreadcrumbs = this.application.options.getValue('hideBreadcrumbs');
    const hideSourceFiles = this.application.options.getValue('hideSources');

    Handlebars.registerHelper('ifNamedAnchors', function(options) {
      return namedAnchors ? options.fn(this) : options.inverse(this);
    });

    Handlebars.registerHelper('ifBreadcrumbs', function(options) {
      return hideBreadcrumbs ? options.inverse(this) : options.fn(this);
    });

    Handlebars.registerHelper('ifSources', function(options) {
      return hideSourceFiles ? options.inverse(this) : options.fn(this);
    });
  }
}
