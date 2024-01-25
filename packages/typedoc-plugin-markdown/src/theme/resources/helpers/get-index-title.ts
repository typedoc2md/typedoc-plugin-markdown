export function getIndexTitle(
  textContent: string,
  name: string,
  version?: string,
) {
  return textContent
    .replace('{projectName}', name)
    .replace('{version}', version ? `v${version}` : '')
    .replace(/\s+/g, ' ')
    .trim();
}
