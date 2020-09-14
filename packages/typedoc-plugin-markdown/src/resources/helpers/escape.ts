export function escape(str: string) {
  return str
    .replace(/</g, '\\<')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}
