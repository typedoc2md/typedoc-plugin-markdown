export function sanitizeComments(str: string) {
  const codeBlocks: string[] = [];
  const placeholder = '___CODEBLOCKPLACEHOLDER___';

  // Replace code blocks with placeholders
  str = str.replace(/(```[\s\S]*?```|`[^`]*?`)/g, (match) => {
    codeBlocks.push(match);
    return placeholder;
  });

  // If line starts with a > treat it as a blockquote
  // Otherwise escape all <, >, {, and } characters
  str = str
    .replace(/(?!^)>/gm, '\\>')
    .replace(/</g, '\\<')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}');

  // Replace placeholders with original code blocks
  str = str.replace(
    new RegExp(placeholder, 'g'),
    () => codeBlocks.shift() || '',
  );

  return str;
}
