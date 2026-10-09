/**
 * - Replace new lines with spaces
 * - Replaces code blocks with single backticks
 * - Replaces multiple spaces with single spaces
 * - Escapes pipes not already escaped, which would otherwise end the cell.
 *   GFM splits rows before parsing code spans, so this applies inside code
 *   spans too; renderers drop the backslash and show a plain `|`.
 */
export function formatTableCell(str: string) {
  return str
    .replace(/\r?\n/g, ' ')
    .replace(
      /```(\w+\s)?([\s\S]*?)```/gs,
      (match, p1, p2) => `\`${p2.trim()}\``,
    )
    .replace(/ +/g, ' ')
    .replace(/(?<!\\)\|/g, '\\|')
    .trim();
}
