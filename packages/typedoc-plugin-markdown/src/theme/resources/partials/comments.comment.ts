import { bold, heading } from '@plugin/libs/markdown';
import { camelToTitleCase, formatTableColumn } from '@plugin/libs/utils';
import { sanitizeComments } from '@plugin/libs/utils/sanitize-comments';
import { MarkdownThemeContext } from '@plugin/theme';
import { Comment } from 'typedoc';

/**
 * @category Comment Partials
 */
export function comment(
  this: MarkdownThemeContext,
  model: Comment,
  options: {
    headingLevel?: number;
    showSummary?: boolean;
    showTags?: boolean;
    isTableColumn?: boolean;
  } = {},
) {
  const opts = {
    headingLevel: undefined,
    showSummary: true,
    showTags: true,
    isTableColumn: false,
    ...options,
  };

  const md: string[] = [];

  if (opts.showSummary && model.summary?.length > 0) {
    md.push(this.partials.commentParts(model.summary));
  }

  if (opts.showTags && model.blockTags?.length) {
    const tags = model.blockTags
      .filter((tag) => tag.tag !== '@returns')
      .filter(
        (tag) =>
          !opts.isTableColumn ||
          (opts.isTableColumn && tag.tag !== '@defaultValue'),
      )
      .map((tag) => {
        const tagName = tag.tag.substring(1);
        const tagText = camelToTitleCase(tagName);
        const tagMd = [
          opts.headingLevel
            ? heading(opts.headingLevel, tagText) + '\n'
            : bold(tagText),
        ];
        tagMd.push(this.partials.commentParts(tag.content));
        return tagMd.join('\n');
      });
    md.push(tags.join('\n\n'));
  }

  const output = md.join('\n\n');

  const parsedOutput = this.options.getValue('sanitizeComments')
    ? sanitizeComments(output)
    : output;

  return opts.isTableColumn ? formatTableColumn(parsedOutput) : parsedOutput;
}
