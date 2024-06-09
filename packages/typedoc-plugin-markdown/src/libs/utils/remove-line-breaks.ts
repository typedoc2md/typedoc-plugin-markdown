export function removeLineBreaks(str: string) {
  return str?.replace(/\n/g, ' ').replace(/ {2,}/g, ' ');
}
