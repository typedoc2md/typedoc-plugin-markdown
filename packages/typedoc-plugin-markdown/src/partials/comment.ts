import { Comment } from 'typedoc';
import { backTicks, heading } from '../support/els';
import { getTagName } from '../support/helpers';
import { camelToTitleCase } from '../support/utils';
import { MarkdownThemeRenderContext } from '../theme-context';

export function comment(
  context: MarkdownThemeRenderContext,
  comment: Comment,
  headingLevel?: number,
) {
  const md: string[] = [];

  if (comment.summary?.length > 0) {
    md.push(context.partials.commentParts(comment.summary));
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
        tagMd.push(context.partials.commentParts(tag.content));
        return tagMd.join('\n\n');
      });
    md.push(tags.join('\n\n'));
  }

  return md.join('\n\n');
}
