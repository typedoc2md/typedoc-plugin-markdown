import path from 'path';
import { removeFirstScopedDirectory } from './remove-first-scoped-directory';

describe('removeFirstScopedDirectory', () => {
  it('should remove first scoped directory', () => {
    const input = '@scoped/dir1/dir2/file.txt';
    const expectedOutput = `dir1${path.sep}dir2${path.sep}file.txt`;

    const result = removeFirstScopedDirectory(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle string without scoped directory', () => {
    const input = 'dir1/dir2/file.txt';
    const expectedOutput = `dir1${path.sep}dir2${path.sep}file.txt`;

    const result = removeFirstScopedDirectory(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle string with multiple scoped directories', () => {
    const input = '@scoped/dir1/@scoped/dir2/file.txt';
    const expectedOutput = `dir1${path.sep}@scoped${path.sep}dir2${path.sep}file.txt`;

    const result = removeFirstScopedDirectory(input);

    expect(result).toEqual(expectedOutput);
  });
});
