import * as path from 'path';

/**
 * This method is designed to resolve the base directory paths for documentation presets.
 */
export function adjustBaseDirectory(originalPath: string, subPath: string) {
  // Normalize the paths to handle different path formats and OS differences
  originalPath = path.normalize(originalPath);
  subPath = path.normalize(subPath);

  // Split the original path into an array of segments
  const segments = originalPath.split(path.sep);

  // Split the sub path into an array of segments and filter out ".." to handle relative paths
  const subSegments = subPath
    .split(path.sep)
    .filter((segment) => segment !== '..');

  // Find the index of the first sub path segment in the original path segments
  const startIndex = segments.indexOf(subSegments[0]);

  // Remove the sub path segments from the original path segments if found
  if (startIndex !== -1) {
    segments.splice(startIndex, subSegments.length);
  }

  // Join the segments back into a path and remove the leading slash if present
  let newPath = segments.join(path.sep);

  // Ensure there is no leading slash
  if (newPath.startsWith(path.sep)) {
    newPath = newPath.slice(1);
  }

  return newPath;
}
