import { Reflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';
import { escape } from './escape';

export function breadcrumbs(this: PageEvent) {
  const breadcrumbs: string[] = [];

  breadcrumbs.push(
    this.url === this.project?.url
      ? 'Exports'
      : `['Exports](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(
          this.project?.url as string,
        )})`,
  );
  return breadcrumb(this, this.model, breadcrumbs);
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
