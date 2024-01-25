/**
 * Comments for table
 * @param headers
 * @param rows
 */
export function table(headers: string[], rows: string[][]) {
  return `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.map((row) => `| ${row.join(' | ')} |\n`).join('')}`;
}
