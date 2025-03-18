import * as path from 'path';

export function replaceFilename(originalPath: string, newFileName: string) {
  const normalizedPath = originalPath.replace(/\\/g, '/');
  const updatedPath = normalizedPath.replace(
    /\/[^/]+(\.[^/.]+)$/,
    `${path.sep}${newFileName}$1`,
  );
  return path.sep === '\\' ? updatedPath.replace(/\//g, '\\') : updatedPath;
}
