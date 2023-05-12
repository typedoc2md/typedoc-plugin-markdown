export function parseUrl(url: string) {
  return encodeURI('../wiki/' + url.replace('.md', ''));
}
