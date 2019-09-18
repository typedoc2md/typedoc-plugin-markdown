import * as Handlebars from 'handlebars';
import { Component, ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';

@Component({ name: 'options' })
export class OptionsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    const platform = this.application.options.getValue('platform');
    const namedAnchors = this.application.options.getValue('namedAnchors');
    const hideBreadcrumbs = this.application.options.getValue('hideBreadcrumbs');
    const hideIndexes = this.application.options.getValue('hideIndexes');
    const hideSourceFiles = this.application.options.getValue('hideSources');

    Handlebars.registerHelper('ifNamedAnchors', function(options) {
      if (namedAnchors) {
        return options.fn(this);
      }
      return options.inverse(this);
    });

    Handlebars.registerHelper('ifMainTitle', function(options) {
      if (platform === 'docusaurus' || platform === 'docusaurus2') {
        return options.inverse(this);
      }
      return options.fn(this);
    });

    Handlebars.registerHelper('ifBreadcrumbs', function(options) {
      if (hideBreadcrumbs || platform === 'gitbook' || platform === 'vuepress') {
        return options.inverse(this);
      }
      return options.fn(this);
    });

    Handlebars.registerHelper('ifIndexes', function(options) {
      if (hideIndexes || platform === 'vuepress') {
        return options.inverse(this);
      }
      return options.fn(this);
    });

    Handlebars.registerHelper('ifSources', function(options) {
      if (hideSourceFiles) {
        return options.inverse(this);
      }
      return options.fn(this);
    });
  }
}
