import { bold, heading } from '@plugin/theme/lib/markdown';
import { camelToTitleCase } from '@plugin/theme/lib/utils';
import { Comment } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';

/**
 * Renders a comment model, determining how to parse summary and tags.
 *
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
