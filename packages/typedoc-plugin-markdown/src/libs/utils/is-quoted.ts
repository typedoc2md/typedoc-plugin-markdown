export function isQuoted(str: string) {
  return str.startsWith('"') && str.endsWith('"');
}
