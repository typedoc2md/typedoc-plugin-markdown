/**
 * Escapes non html tag angle brackets by wrapping inside backticks.
 *
 * Ignores strings inside code blocks
 */
export function escapeComments(str: string) {
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
    .replace(re, (tags) => {
      const htmlRe =
        /<(?!\/?(div|span|p|a|br|img|ul|li|strike|em|strong|b)(>|\s))[^<]+?>/g;
      const shouldEscapeTags = tags.match(htmlRe);
      return shouldEscapeTags
        ? tags.replace(/>/g, '>`').replace(/</g, '`<')
        : tags;
    })
    .replace(/(?<!\\)(?<!`)(?<!{)(?<!{{){(?!`)(?!{)(?!{{)/g, '\\{')
    .replace(/(?<!\\)(?<!`)(?!{)(?!{{)(?<!})}(?!`)(?!{)(?!})/g, '\\}');

  // Replace placeholders with original code blocks
  str = str.replace(
    new RegExp(placeholder, 'g'),
    () => codeBlocks.shift() || '',
  );

  return str;
}
