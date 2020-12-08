import { BindOption, Reflection } from 'typedoc';
import {
  Component,
  ContextAwareRendererComponent,
} from 'typedoc/dist/lib/output/components';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../theme';

@Component({ name: 'breadcrumbs' })
export class Breadcrumbs extends ContextAwareRendererComponent {
  @BindOption('entryPoints')
  entryPoints!: string[];
  @BindOption('readme')
  readme!: string;

  initialize() {
    super.initialize();

    MarkdownTheme.HANDLEBARS.registerHelper(
      'breadcrumbs',
      (page: PageEvent) => {
        const breadcrumbs: string[] = [];
        const globalsName = this.entryPoints.length > 1 ? 'Modules' : 'Exports';
        breadcrumbs.push(
          page.url === 'README.md'
            ? page.project.name
            : `[${
                page.project.name
              }](${MarkdownTheme.HANDLEBARS.helpers.relativeURL('README.md')})`,
        );
        if (this.readme !== 'none') {
          breadcrumbs.push(
            page.url === page.project.url
              ? globalsName
              : `[${globalsName}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(
                  'modules.md',
                )})`,
          );
        }
        const breadcrumbsOut = breadcrumb(page, page.model, breadcrumbs);
        return breadcrumbsOut;
      },
    );
  }
}

function breadcrumb(page: PageEvent, model: Reflection, md: string[]) {
  if (model && model.parent) {
    breadcrumb(page, model.parent, md);
    if (model.url) {
      md.push(
        page.url === model.url
          ? `${escape(model.name)}`
          : `[${escape(
              model.name,
            )}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(model.url)})`,
      );
    }
  }
  return md.join(' / ');
}
