export function sanitizeComments(str: string) {
  const re = /<(?=(?:[^`]*`[^`]*`)*[^`]*$)[^<]+?>/gi;
  const codeBlocks: string[] = [];
  const placeholder = '___CODEBLOCKPLACEHOLDER___';

  // Replace code blocks with placeholders
  str = str.replace(/(```[\s\S]*?```|`[^`]*?`)/g, (match) => {
    codeBlocks.push(match);
    return placeholder;
  });

  // Perform escaping outside of code blocks
  str = str
    .replace(re, (tags) => tags.replace(/>/g, '\\>').replace(/</g, '\\<'))
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}');

  // Replace placeholders with original code blocks
  str = str.replace(
    new RegExp(placeholder, 'g'),
    () => codeBlocks.shift() || '',
  );

  return str;
}
