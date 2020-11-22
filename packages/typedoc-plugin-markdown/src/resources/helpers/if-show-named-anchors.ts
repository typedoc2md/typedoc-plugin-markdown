import * as Handlebars from 'handlebars';

import MarkdownTheme from '../../theme';

export function ifShowNamedAnchors(options: Handlebars.HelperOptions) {
  return MarkdownTheme.HANDLEBARS.helpers.namedAnchors()
    ? options.fn(this)
    : options.inverse(this);
}
