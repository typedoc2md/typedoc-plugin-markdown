import MarkdownTheme from '../../theme';

export function ifShowNamedAnchors(options) {
  return MarkdownTheme.handlebars.helpers.ifShowNamedAnchors.call(this, options);
}
