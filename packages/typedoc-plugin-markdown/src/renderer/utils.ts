import * as fs from 'fs';
import * as path from 'path';
import { normalizePath, ProjectReflection } from 'typedoc';

/**
 *  Writes a file to disc.
 */
export function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}

/**
 * Recursively copy files
 */
export function copySync(src: string, dest: string): void {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    const contained = fs.readdirSync(src);
    contained.forEach((file) =>
      copySync(path.join(src, file), path.join(dest, file)),
    );
  } else if (stat.isFile()) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Helper to copy media files
export function copyMediaFiles(
  project: ProjectReflection,
  outputDirectory: string,
) {
  const media = path.join(outputDirectory, '_media');
  const toCopy = project.files.getNameToAbsoluteMap();

  for (const [fileName, absolute] of toCopy.entries()) {
    copySync(absolute, path.join(media, fileName));
  }
}
