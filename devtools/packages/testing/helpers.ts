import fs from 'fs-extra';
import path from 'path';

export function getSnapshot(name: string, actual: string | string[]) {
  const snapshotDir = `${process.cwd()}/test/__snapshots__`;
  const snapshotPath = path.join(snapshotDir, `${name}.snap`);

  if (!fs.existsSync(snapshotPath)) {
    fs.outputFileSync(snapshotPath, serialize(actual));
    return actual;
  }

  return fs.readFileSync(snapshotPath, 'utf-8');
}

export function getFileContents(filePath: string) {
  const fullFilePath = `${process.cwd()}/test/${filePath}`;
  return fs.readFileSync(fullFilePath).toString();
}

export function getDirContents(dirPath: string) {
  const fullDirPath = `${process.cwd()}/test/${dirPath}`;
  return JSON.stringify(fs.readdirSync(fullDirPath), null, 2);
}

export function serialize(content: string | string[]) {
  if (Array.isArray(content)) {
    return JSON.stringify(content, null, 2);
  }
  return content;
}
