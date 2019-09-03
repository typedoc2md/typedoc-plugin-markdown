import * as Handlebars from 'handlebars';
import { CommentTag } from 'typedoc/dist/lib/models';

export function commentTags(this: CommentTag[]) {
  const md = ['\n'];
  this.forEach(tag => {
    md.push(`**\`${tag.tagName}\`** ${tag.text ? Handlebars.helpers.comment.call(tag.text) : ''}`);
  });
  return md.join('\n\n');
}
