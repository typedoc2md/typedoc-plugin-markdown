import * as path from 'path';

/**
 * Returns a filename with extension while normalizing both the input name and input extension.
 */
export function getFileNameWithExtension(
  fileName: string,
  fileExtension: string,
) {
  const parsedPath = path.parse(fileName);
  const extension = fileExtension.startsWith('.')
    ? fileExtension.slice(1)
    : fileExtension;
  return path.join(parsedPath.dir, `${parsedPath.name}.${extension}`);
}
