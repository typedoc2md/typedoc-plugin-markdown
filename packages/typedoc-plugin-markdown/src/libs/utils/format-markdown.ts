export function formatMarkdown(str: string) {
  return str.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n';
}
