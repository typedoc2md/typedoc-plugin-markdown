import * as path from 'path';

/**
 * Returns file path without extension
 */
export function getPathWithoutExt(filePathWithExtension: string) {
  if (!filePathWithExtension) {
    return '';
  }
  const filePath = path.join(
    path.dirname(filePathWithExtension),
    path.basename(filePathWithExtension, path.extname(filePathWithExtension)),
  );
  return filePath.replace(/\\/g, '/');
}
