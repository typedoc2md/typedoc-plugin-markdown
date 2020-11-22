import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';

export function ifShowReflectionPath(
  this: PageEvent,
  options: Handlebars.HelperOptions,
) {
  return MarkdownTheme.HANDLEBARS.helpers.navigationEnabled()
    ? options.fn(this)
    : options.inverse(this);
}
