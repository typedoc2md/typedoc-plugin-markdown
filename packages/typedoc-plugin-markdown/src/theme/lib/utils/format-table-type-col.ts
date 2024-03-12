export function formatTableTypeCol(str: string, includeHTML = true) {
  return str.replace(/\n/g, ' ').replace(/ {2,}/g, ' ');
}
