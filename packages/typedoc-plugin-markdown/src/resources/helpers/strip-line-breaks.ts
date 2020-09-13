export function stripLineBreaks(str: string) {
  return str ? str.replace(/\n/g, ' ') : '';
}
