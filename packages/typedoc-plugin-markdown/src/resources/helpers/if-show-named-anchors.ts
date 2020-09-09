import MarkdownTheme from '../../theme';

export function ifShowNamedAnchors(options) {
  return MarkdownTheme.HANDLEBARS.helpers.ifShowNamedAnchors.call(
    this,
    options,
  );
}
