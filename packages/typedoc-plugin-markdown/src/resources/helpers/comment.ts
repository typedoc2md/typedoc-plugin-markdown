import { Comment } from 'typedoc/dist/lib/models';

import MarkdownTheme from '../../theme';

export function comment(this: Comment) {
  const md: string[] = [];

  if (this.shortText) {
    md.push(MarkdownTheme.HANDLEBARS.helpers.comment.call(this.shortText));
  }
  if (this.text) {
    md.push(MarkdownTheme.HANDLEBARS.helpers.comment.call(this.text));
  }
  if (this.tags) {
    const tags = this.tags.map(
      (tag) =>
        `**\`${tag.tagName}\`**${
          tag.text
            ? MarkdownTheme.HANDLEBARS.helpers.comment.call(
                (tag.text.startsWith('\n') ? '' : ' ') + tag.text,
              )
            : ''
        }`,
    );
    md.push(tags.join('\n\n'));
  }
  return md.join('\n\n');
}
