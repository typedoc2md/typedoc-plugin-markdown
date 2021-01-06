import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';

export function ifShowBreadcrumbs(
  this: PageEvent,
  options: Handlebars.HelperOptions,
) {
  return MarkdownTheme.HANDLEBARS.helpers.hideBreadcrumbs()
    ? options.inverse(this)
    : options.fn(this);
}
