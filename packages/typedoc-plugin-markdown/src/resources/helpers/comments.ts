import * as Handlebars from 'handlebars';
import { Comment } from 'typedoc';

export default function () {
  Handlebars.registerHelper('comments', function (comment: Comment) {
    const md: string[] = [];

    if (comment.summary) {
      md.push(Handlebars.helpers.comment(comment.summary));
    }

    if (comment.blockTags?.length) {
      const tags = comment.blockTags
        .filter((tag) => tag.tag !== '@returns')
        .map(
          (tag) =>
            `**\`${tag.tag.substring(1)}\`** ${Handlebars.helpers.comment(
              tag.content,
            )}`,
        );
      md.push(tags.join('\n\n'));
    }

    return md.join('\n\n');
  });
}
