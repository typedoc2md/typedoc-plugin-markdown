import MarkdownTheme from '../../theme';

export function ifShowProjectName(options) {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowProjectName.call(this, options);
}
