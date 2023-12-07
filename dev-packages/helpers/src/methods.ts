import * as path from 'path';

export function getPackageName() {
  const cwdParts = process.cwd().split(path.sep);
  return cwdParts[cwdParts.length - 1];
}
