import { MarkdownThemeContext } from 'theme';
import { CommentDisplayPart } from 'typedoc';

/**
 * Returns the first paragraph from given comment parts
 */
export function getShortDescription(
  this: MarkdownThemeContext,
  commentDisplayParts?: CommentDisplayPart[],
) {
  if (commentDisplayParts) {
    return this.helpers
      .getCommentParts(commentDisplayParts)
      ?.split(/(\r?\n){2}/)[0]
      .replace(/\r?\n/g, ' ');
  }
  return '';
}
