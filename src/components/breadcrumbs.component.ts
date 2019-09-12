import * as Handlebars from 'handlebars';
import { ProjectReflection, Reflection } from 'typedoc';
import { Component, ContextAwareRendererComponent } from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../theme';

@Component({ name: 'breadcrumbs' })
export class BreadcrumbsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    const component = this;

    Handlebars.registerHelper('breadcrumbs', function(this: PageEvent) {
      return component.breadcrumb(this.model, this.project, []);
    });
  }

  public breadcrumb(model: Reflection, project: ProjectReflection, md: string[]) {
    const theme = this.application.renderer.theme as MarkdownTheme;
    if (model && model.parent) {
      this.breadcrumb(model.parent, project, md);
      if (model.url) {
        md.push(`[${model.name}](${Handlebars.helpers.relativeURL.call(this, model.url)})`);
      } else {
        md.push(model.url);
      }
    } else {
      if (!!project.readme) {
        md.push(`[${project.name}](${Handlebars.helpers.relativeURL.call(this, theme.indexName + theme.fileExt)})`);
      }
      md.push(
        `[${project.readme ? 'Globals' : project.name}](${Handlebars.helpers.relativeURL.call(this, project.url)})`,
      );
    }
    return md.join(' › ');
  }
}
