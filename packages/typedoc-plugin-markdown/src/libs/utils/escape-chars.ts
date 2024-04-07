export function escapeChars(str: string) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/>/g, '\\>')
    .replace(/</g, '\\<')
    .replace(/{/g, '\\{')
    .replace(/}/g, '\\}')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|')
    .replace(/\*/g, '\\*')
    .replace(/\n/g, '\\n');
}
