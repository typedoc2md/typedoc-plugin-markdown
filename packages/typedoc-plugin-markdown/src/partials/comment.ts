import { Comment } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme-context';
import { camelToTitleCase } from '../utils';

export function comment(context: MarkdownThemeRenderContext, comment: Comment) {
  const md: string[] = [];

  if (comment.summary?.length > 0) {
    md.push(context.partials.commentParts(comment.summary));
  }

  if (comment.blockTags?.length) {
    const tags = comment.blockTags
      .filter((tag) => tag.tag !== '@returns')
      .map(
        (tag) =>
          `**\`${camelToTitleCase(
            tag.tag.substring(1),
          )}\`**\n\n${context.partials.commentParts(tag.content)}`,
      );
    md.push(tags.join('\n\n'));
  }

  return md.join('\n\n');
}
