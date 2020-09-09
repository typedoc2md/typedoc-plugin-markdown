import MarkdownTheme from '../../theme';

export function comment(this: string) {
  return MarkdownTheme.HANDLEBARS.helpers.comment.call(this);
}
