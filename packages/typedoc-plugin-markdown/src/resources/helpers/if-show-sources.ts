import MarkdownTheme from '../../theme';

export function ifShowSources(options) {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowSources.call(this, options);
}
