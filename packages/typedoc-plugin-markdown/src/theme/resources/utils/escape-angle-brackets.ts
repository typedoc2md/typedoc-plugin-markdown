/**
 * Escapes non html tag angle brackets inside comment blocks by wrapping in backticks.
 *
 * Ignores strings inside code blocks
 */
export function escapeAngleBrackets(str: string) {
  const re = /<(?=(?:[^`]*`[^`]*`)*[^`]*$)[^<]+?>/gi;
  return str.replace(re, (tags) => {
    const htmlRe =
      /<(?!\/?(div|span|p|a|br|img|ul|li|strike|em|strong|b)(>|\s))[^<]+?>/g;
    const shouldEscape = tags.match(htmlRe);
    return shouldEscape ? tags.replace(/>/g, '>`').replace(/</g, '`<') : tags;
  });
}
