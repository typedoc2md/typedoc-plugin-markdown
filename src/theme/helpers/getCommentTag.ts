export function getCommentTag(tagName: string, text: string) {
  let md = `*__${tagName}__*:`;
  if (text.startsWith('\n```')) {
    md = md + '\n';
  }
  return md;
}
