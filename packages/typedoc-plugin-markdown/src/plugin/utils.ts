import * as fs from 'fs';
import * as path from 'path';

/**
 * Some useful utility functions - essentially cherry picked from:
 *
 * - https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/fs.ts
 * - https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/path.ts
 *
 * @module
 */

/**
 *  Writes a file to disc.
 */
export function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}

/**
 * Returns a readable path from an absolute path.
 */
export function nicePath(absPath: string) {
  if (!path.isAbsolute(absPath)) return absPath;
  const relativePath = path.relative(process.cwd(), absPath);
  if (relativePath.startsWith('..')) {
    return normalizePath(absPath);
  }
  return `./${normalizePath(relativePath)}`;
}

/**
 * Normalizes directory seperators from a given path.
 */
export function normalizePath(path: string) {
  return path.replace(/\\/g, '/');
}
