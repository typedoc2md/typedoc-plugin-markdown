import MarkdownTheme from '../../theme';

export function ifBreadcrumbs(options) {
  return MarkdownTheme.handlebars.helpers.ifBreadcrumbs.call(this, options);
}
