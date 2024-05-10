import * as path from 'path';

export function removeFirstScopedDirectory(urlString: string): string {
  const pathParts = urlString.replace(/\//g, path.sep).split(path.sep);
  const scopedDirectoryIndex = pathParts.findIndex((part) =>
    part.startsWith('@'),
  );
  if (scopedDirectoryIndex !== -1) {
    pathParts.splice(scopedDirectoryIndex, 1);
  }
  return pathParts.join(path.sep);
}
