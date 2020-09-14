export function escape(str: string) {
  return str.replace(/</g, '\\<').replace(/_/g, '\\_').replace(/`/g, '\\`');
}
