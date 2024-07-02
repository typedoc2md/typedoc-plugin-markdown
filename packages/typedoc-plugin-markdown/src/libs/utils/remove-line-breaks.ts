export function removeLineBreaks(str: string) {
  return str?.replace(/\r?\n/g, ' ').replace(/ {2,}/g, ' ');
}
