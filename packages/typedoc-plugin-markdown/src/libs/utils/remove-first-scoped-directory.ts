export function removeFirstScopedDirectory(urlString: string): string {
  const pathParts = urlString.split('/');
  const scopedDirectoryIndex = pathParts.findIndex((part) =>
    part.startsWith('@'),
  );
  if (scopedDirectoryIndex !== -1) {
    pathParts.splice(scopedDirectoryIndex, 1);
  }
  return pathParts.join('/');
}
