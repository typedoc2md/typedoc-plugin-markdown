import * as Handlebars from 'handlebars';
import { PageEvent } from 'typedoc/dist/lib/output/events';

import MarkdownTheme from '../../theme';

export function ifShowReflectionTitle(
  this: PageEvent,
  options: Handlebars.HelperOptions,
) {
  return MarkdownTheme.HANDLEBARS.helpers.hideReflectionTitle()
    ? options.inverse(this)
    : options.fn(this);
}
