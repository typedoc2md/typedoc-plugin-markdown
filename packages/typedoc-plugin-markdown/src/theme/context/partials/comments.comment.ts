import { backTicks, bold, heading } from 'libs/markdown';
import { camelToTitleCase, sanitizeComments } from 'libs/utils';
import { MarkdownThemeContext } from 'theme';
import { Comment, CommentTag } from 'typedoc';

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

  //Add flags and summary
  if (opts.showSummary) {
    // Add flags
    const flagsNotRendered: `@${string}`[] = [
      '@showCategories',
      '@showGroups',
      '@hideCategories',
      '@hideGroups',
    ];

    const flags: string[] = [];

    for (const tag of model.modifierTags) {
      if (!flagsNotRendered.includes(tag)) {
        flags.push(bold(backTicks(camelToTitleCase(tag.substring(1)))));
      }
    }

    md.push(flags.join(' '));

    // Add summary
    if (model.summary?.length > 0) {
      md.push(this.helpers.getCommentParts(model.summary));
    }
  }

  // Add Tags
  if (opts.showTags && model.blockTags?.length) {
    const blockTags = model.blockTags.reduce(
      (previous: CommentTag[], current: CommentTag) => {
        if (current.tag === '@example') {
          const prevExampleTag = previous.find((tag) =>
            ['@example', '@examples'].includes(tag.tag),
          );
          if (prevExampleTag) {
            return previous.map((prevTag) => {
              if (prevTag === prevExampleTag) {
                current.content.unshift({ kind: 'text', text: '\n\n' });
                return {
                  ...prevTag,
                  tag: '@examples',
                  content: [...prevTag.content, ...current.content],
                };
              }
              return prevTag;
            });
          }
        }
        return [...previous, current];
      },
      [],
    );

    const tags = blockTags
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
            : bold(tagText) + '\n',
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

  return parsedOutput;
}
