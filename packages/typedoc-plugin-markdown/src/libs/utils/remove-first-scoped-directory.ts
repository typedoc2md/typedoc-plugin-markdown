import * as path from 'path';

export function removeFirstScopedDirectory(
  urlString: string,
  sep?: string,
): string {
  sep = sep || path.sep;
  const pathParts = urlString.replace(/\//g, path.sep).split(sep);
  const scopedDirectoryIndex = pathParts.findIndex((part) =>
    part.startsWith('@'),
  );
  if (scopedDirectoryIndex !== -1) {
    pathParts.splice(scopedDirectoryIndex, 1);
  }
  return pathParts.join(sep);
}
