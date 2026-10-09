/**
 * Reverses the markdown the theme adds when rendering a type, so the result can
 * be shown as plain code (e.g. inside a code block):
 *
 * - Code spans keep their content verbatim. Code spans are literal markdown, so
 *   the theme never escapes inside them, and their content must not be altered.
 * - Links (`[text](url)`) are reduced to their text.
 * - Backslash escapes are undone (`\\<` to `<`, `\\\\` to `\\`).
 * - Unescaped `*` (bold and italic markers) are removed.
 * - `&lt;` and `&gt;` (from `useHTMLEncodedBrackets`) are decoded.
 *
 * The string is read once from left to right, so content produced by one rule
 * is never rewritten by another.
 */
export function unEscapeChars(str: string): string {
  let out = '';
  let i = 0;
  while (i < str.length) {
    const rest = str.slice(i);

    const escape = /^\\([!-/:-@[-`{-~])/.exec(rest);
    if (escape) {
      out += escape[1];
      i += escape[0].length;
      continue;
    }

    if (rest.startsWith('`')) {
      const fence = /^`+/.exec(rest)![0];
      const end = str.indexOf(fence, i + fence.length);
      if (end !== -1) {
        const content = str.slice(i + fence.length, end);
        // backTicks() pads double-backtick spans with a space on each side.
        out +=
          fence.length > 1 ? content.replace(/^ ([\s\S]*) $/, '$1') : content;
        i = end + fence.length;
        continue;
      }
      out += fence;
      i += fence.length;
      continue;
    }

    const link = /^\[((?:\\.|`[^`]*`|[^\]\\`])*)\]\([^)\s]*\)/.exec(rest);
    if (link) {
      out += unEscapeChars(link[1]);
      i += link[0].length;
      continue;
    }

    const entity = /^&(lt|gt);/.exec(rest);
    if (entity) {
      out += entity[1] === 'lt' ? '<' : '>';
      i += entity[0].length;
      continue;
    }

    if (rest[0] !== '*') {
      out += rest[0];
    }
    i += 1;
  }
  return out;
}
