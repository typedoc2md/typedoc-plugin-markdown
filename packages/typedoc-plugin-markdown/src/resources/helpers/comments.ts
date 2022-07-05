import * as Handlebars from 'handlebars';
import { Comment } from 'typedoc';
import { camelToTitleCase } from '../../utils';

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
            `**\`${camelToTitleCase(
              tag.tag.substring(1),
            )}\`**\n\n${Handlebars.helpers.comment(tag.content)}`,
        );
      md.push(tags.join('\n\n'));
    }

    return md.join('\n\n');
  });
}
