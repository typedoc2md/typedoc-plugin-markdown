export function replaceFilename(originalPath: string, newFileName: string) {
  return originalPath
    .replace(/\\/g, '/')
    .replace(/\/[^/]+(\.[^/.]+)$/, `/${newFileName}$1`);
}
