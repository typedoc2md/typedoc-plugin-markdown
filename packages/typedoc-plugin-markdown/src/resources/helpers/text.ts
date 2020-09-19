import MarkdownTheme from '../../theme';
export function text(this: string) {
  return MarkdownTheme.HANDLEBARS.helpers.comment.call(this);
}
