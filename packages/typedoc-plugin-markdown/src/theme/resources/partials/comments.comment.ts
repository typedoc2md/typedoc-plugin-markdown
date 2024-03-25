import { bold, heading } from '@theme/lib/markdown';
import { camelToTitleCase } from '@theme/lib/utils';
import { MarkdownThemeRenderContext } from '@theme/render-context';
import { Comment } from 'typedoc';

/**

 * @category Comment Partials
 */
export function comment(
  context: MarkdownThemeRenderContext,
  model: Comment,
  options: {
    headingLevel?: number;
    showSummary?: boolean;
    showTags?: boolean;
  } = {
    headingLevel: undefined,
    showSummary: true,
    showTags: true,
  },
) {
  const opts = {
    headingLevel: undefined,
    showSummary: true,
    showTags: true,
    ...options,
  };

  const md: string[] = [];

  if (opts.showSummary && model.summary?.length > 0) {
    md.push(context.partials.commentParts(model.summary));
  }

  if (opts.showTags && model.blockTags?.length) {
    const tags = model.blockTags
      .filter((tag) => tag.tag !== '@returns')
      .map((tag) => {
        const tagName = tag.tag.substring(1);
        const tagText = camelToTitleCase(tagName);
        const tagMd = [
          opts.headingLevel
            ? heading(opts.headingLevel, tagText) + '\n'
            : bold(tagText),
        ];
        tagMd.push(context.partials.commentParts(tag.content));
        return tagMd.join('\n');
      });
    md.push(tags.join('\n\n'));
  }

  return md.join('\n\n');
}
