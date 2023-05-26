import { Comment } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { bold, heading } from '../../../support/elements';
import { camelToTitleCase, escapeAngleBrackets } from '../../../support/utils';

/**
 * @category Partials
 */
export function comment(
  context: MarkdownThemeRenderContext,
  comment: Comment,
  headingLevel?: number,
): string {
  const md: string[] = [];

  if (comment.summary?.length > 0) {
    md.push(context.commentParts(comment.summary));
  }

  if (comment.blockTags?.length) {
    const tags = comment.blockTags
      .filter((tag) => tag.tag !== '@returns')
      .map((tag) => {
        const tagName = tag.tag.substring(1);
        const tagText = camelToTitleCase(tagName);
        const tagMd = [
          headingLevel ? heading(headingLevel, tagText) : bold(tagText),
        ];
        tagMd.push(context.commentParts(tag.content));
        return tagMd.join('\n\n');
      });
    md.push(tags.join('\n\n'));
  }

  return escapeAngleBrackets(md.join('\n\n'));
}
