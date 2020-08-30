import MarkdownTheme from '../../theme';

export function ifShowSources(options) {
  return MarkdownTheme.handlebars.helpers.ifShowSources.call(this, options);
}
