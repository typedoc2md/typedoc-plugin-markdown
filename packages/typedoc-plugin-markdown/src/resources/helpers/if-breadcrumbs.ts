import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';

export function ifBreadcrumbs(this: PageEvent, options) {
  return MarkdownTheme.handlebars.helpers.ifBreadcrumbs.call(this, options);
}
