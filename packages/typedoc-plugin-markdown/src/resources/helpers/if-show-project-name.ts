import * as Handlebars from 'handlebars';

import MarkdownTheme from '../../theme';

export function ifShowProjectName(options: Handlebars.HelperOptions) {
  if (MarkdownTheme.HANDLEBARS.helpers.navigationEnabled()) {
    return options.inverse(this);
  }
  return MarkdownTheme.HANDLEBARS.helpers.hideProjectName()
    ? options.inverse(this)
    : options.fn(this);
}
