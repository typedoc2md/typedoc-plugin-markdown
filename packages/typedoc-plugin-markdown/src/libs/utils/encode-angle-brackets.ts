export function encodeAngleBrackets(str: string) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
