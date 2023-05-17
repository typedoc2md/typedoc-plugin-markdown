import { Comment } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';
import { backTicks, heading } from '../../support/els';
import { getTagName } from '../../support/helpers';
import { camelToTitleCase, escapeAngleBrackets } from '../../support/utils';

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
        const tagName = getTagName(tag);
        const tagText = camelToTitleCase(tagName);
        const tagMd = [
          headingLevel ? heading(headingLevel, tagText) : backTicks(tagText),
        ];
        tagMd.push(context.commentParts(tag.content));
        return tagMd.join('\n\n');
      });
    md.push(tags.join('\n\n'));
  }

  return escapeAngleBrackets(md.join('\n\n'));
}
