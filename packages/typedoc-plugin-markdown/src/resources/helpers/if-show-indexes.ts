import MarkdownTheme from '../../theme';

export function ifShowIndexes(options) {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowIndexes.call(this, options);
}
