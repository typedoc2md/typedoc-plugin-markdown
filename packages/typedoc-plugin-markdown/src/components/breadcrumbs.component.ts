import { Reflection } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../theme';

@Component({ name: 'breadcrumbs' })
export class BreadcrumbsComponent extends ContextAwareRendererComponent {
  initialize() {
    super.initialize();

    const component = this;

    MarkdownTheme.HANDLEBARS.registerHelper(
      'breadcrumbs',
      (page: PageEvent) => {
        const theme = this.application.renderer.theme as MarkdownTheme;
        if (!this.project?.readme && page.model.url == this.project?.url) {
          return null;
        }
        const breadcrumbs: string[] = [];
        if (this.project?.readme) {
          breadcrumbs.push(
            page.url === theme.entryFile
              ? 'README'
              : `[README](${this.getRelativeUrl(theme.entryFile)})`,
          );
        }
        breadcrumbs.push(
          page.url === this.project?.url
            ? 'Globals'
            : `[Globals](${this.getRelativeUrl(this.project?.url as string)})`,
        );
        return component.breadcrumb(page, page.model, breadcrumbs);
      },
    );
  }

  public breadcrumb(page: PageEvent, model: Reflection, md: string[]) {
    if (model && model.parent) {
      this.breadcrumb(page, model.parent, md);
      if (model.url) {
        md.push(
          page.url === model.url
            ? `${model.name}`
            : `[${model.name}](${this.getRelativeUrl(model.url)})`,
        );
      }
    }
    return md.join(' / ');
  }
}
