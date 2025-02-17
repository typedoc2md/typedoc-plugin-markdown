import * as path from 'path';

/**
 * Returns file path without extension
 */
export function getFilePath(filePathWithExtension: string) {
  if (!filePathWithExtension) {
    return '';
  }
  return path.join(
    path.dirname(filePathWithExtension),
    path.basename(filePathWithExtension, path.extname(filePathWithExtension)),
  );
}
