export function table(headers: string[], rows: string[][]) {
  return `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => `------`)
    .join(
      ' | ',
    )} |\n${rows.map((row) => `| ${row.map((cell) => cell).join(' | ')} |\n`).join('')}`;
}
