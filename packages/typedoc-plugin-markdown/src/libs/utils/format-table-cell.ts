/**
 * - Replace new lines with spaces
 * - Replaces code blocks with single backticks
 * - Replaces multiple spaces with single spaces
 */
export function formatTableCell(str: string) {
  return str
    .replace(/\r?\n/g, ' ')
    .replace(
      /```(\w+\s)?([\s\S]*?)```/gs,
      (match, p1, p2) => `\`${p2.trim()}\``,
    )
    .replace(/ +/g, ' ')
    .trim();
}
