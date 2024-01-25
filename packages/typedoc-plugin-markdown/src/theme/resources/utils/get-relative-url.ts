import * as path from 'path';
export function getRelativeUrl(url: string, root?: string) {
  const baseUrl = path.relative(path.dirname(root || '.'), path.dirname(url));
  const relativeUrl = path
    .join(baseUrl, path.basename(url))
    .replace(/\\/g, '/');
  return relativeUrl;
}
