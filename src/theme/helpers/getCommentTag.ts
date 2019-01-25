export function getCommentTag(tagName: string) {
  let md = `*__${tagName}__*:`;
  if (tagName === 'deprecated' || tagName === 'description') {
    md = md + '\n';
  }
  return md;
}
