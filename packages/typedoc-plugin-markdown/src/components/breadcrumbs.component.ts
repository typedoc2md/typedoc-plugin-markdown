import { BindOption, ProjectReflection, Reflection } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../theme';

@Component({ name: 'breadcrumbs' })
export class BreadcrumbsComponent extends ContextAwareRendererComponent {
  @BindOption('entryFileName')
  entryFileName!: string;

  initialize() {
    super.initialize();

    const component = this;

    MarkdownTheme.HANDLEBARS.registerHelper('breadcrumbs', function (
      this: PageEvent,
    ) {
      if (!this.project.readme && this.url == this.project.url) {
        return null;
      }
      return component.breadcrumb(this.model, this.project, []);
    });
  }

  public breadcrumb(
    model: Reflection,
    project: ProjectReflection,
    md: string[],
  ) {
    if (model && model.parent) {
      this.breadcrumb(model.parent, project, md);
      if (model.url) {
        md.push(`[${model.name}](${this.getRelativeUrl(model.url)})`);
      }
    } else {
      if (!!project.readme) {
        md.push(
          `[${project.name}](${this.getRelativeUrl(
            this.entryFileName + '.md',
          )})`,
        );
      }
      md.push(
        `[${project.readme ? 'Globals' : project.name}](${this.getRelativeUrl(
          project.url as string,
        )})`,
      );
    }
    return md.join(' › ');
  }
}
