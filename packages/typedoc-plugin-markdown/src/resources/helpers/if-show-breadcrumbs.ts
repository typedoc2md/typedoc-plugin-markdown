import { PageEvent } from 'typedoc/dist/lib/output/events';
import MarkdownTheme from '../../theme';

export function ifShowBreadcrumbs(this: PageEvent, options) {
  return MarkdownTheme.handlebars.helpers.ifShowBreadcrumbs.call(this, options);
}
