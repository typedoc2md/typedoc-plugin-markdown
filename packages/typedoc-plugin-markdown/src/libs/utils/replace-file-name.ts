export function replaceFilename(originalPath: string, newFileName: string) {
  return originalPath.replace(/\/[^/]+(\.[^/.]+)$/, `/${newFileName}$1`);
}
