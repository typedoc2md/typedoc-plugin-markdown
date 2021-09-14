import * as Handlebars from 'handlebars';
import { Comment } from 'typedoc';

export default function () {
  Handlebars.registerHelper('comments', function (this: Comment) {
    const md: string[] = [];

    if (this.shortText) {
      md.push(Handlebars.helpers.comment.call(this.shortText));
    }

    if (this.text) {
      md.push(Handlebars.helpers.comment.call(this.text));
    }

    if (this.tags) {
      const tags = this.tags.map(
        (tag) =>
          `**\`${tag.tagName}\`**${
            tag.text
              ? Handlebars.helpers.comment.call(
                  (tag.text.startsWith('\n') ? '' : ' ') + tag.text,
                )
              : ''
          }`,
      );
      md.push(tags.join('\n\n'));
    }

    return md.join('\n\n');
  });
}
