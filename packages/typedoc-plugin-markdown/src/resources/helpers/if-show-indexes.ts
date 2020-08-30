import MarkdownTheme from '../../theme';

export function ifShowIndexes(options) {
  return MarkdownTheme.handlebars.helpers.ifShowIndexes.call(this, options);
}
