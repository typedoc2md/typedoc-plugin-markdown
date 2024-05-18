import * as path from 'path';
import { getFileNameWithExtension } from './get-file-name-with-extension';

describe('getFileNameWithExtension', () => {
  it('should return filename with extension', () => {
    const fileName = 'example';
    const fileExtension = '.txt';
    const expectedOutput = 'example.txt';

    const result = getFileNameWithExtension(fileName, fileExtension);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle filename with directory', () => {
    const fileName = path.join('dir1', 'dir2', 'example');
    const fileExtension = '.txt';
    const expectedOutput = path.join('dir1', 'dir2', 'example.txt');

    const result = getFileNameWithExtension(fileName, fileExtension);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle filename with existing extension', () => {
    const fileName = 'example.old';
    const fileExtension = '.txt';
    const expectedOutput = 'example.txt';

    const result = getFileNameWithExtension(fileName, fileExtension);

    expect(result).toEqual(expectedOutput);
  });
});
