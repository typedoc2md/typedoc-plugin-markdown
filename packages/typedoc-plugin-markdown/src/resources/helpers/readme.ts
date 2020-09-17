import MarkdownTheme from '../../theme';
export function readme(this: string) {
  return MarkdownTheme.HANDLEBARS.helpers.comment.call(this);
}
