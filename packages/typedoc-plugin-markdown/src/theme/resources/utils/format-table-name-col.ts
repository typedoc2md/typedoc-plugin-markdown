export function formatTableNameCol(str: string) {
  return str.includes('|') ? str.replace(/\|/g, '\\|') : `\`${str}\``;
}
