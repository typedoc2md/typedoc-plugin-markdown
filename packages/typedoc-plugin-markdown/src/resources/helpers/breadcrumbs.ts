import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';

export function breadcrumbs(this: PageEvent) {
  return MarkdownTheme.HANDLEBARS.helpers.breadcrumbs(this);
}
