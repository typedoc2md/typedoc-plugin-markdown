import { CommentTag } from 'typedoc/dist/lib/models';
import { comment } from './comment';

export function commentTags(this: CommentTag[]) {
  const md = ['\n'];
  this.forEach(tag => {
    md.push(`**\`${tag.tagName}\`** ${tag.text ? comment.call(tag.text) : ''}`);
  });
  return md.join('\n\n');
}
