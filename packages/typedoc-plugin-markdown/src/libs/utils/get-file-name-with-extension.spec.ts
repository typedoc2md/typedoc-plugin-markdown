import path from 'path';
import { getFileNameWithExtension } from './get-file-name-with-extension';

describe('getFileNameWithExtension', () => {
  it('should return filename with extension', () => {
    const fileName = 'testFile';
    const fileExtension = '.txt';
    const expectedOutput = 'testFile.txt';

    const result = getFileNameWithExtension(fileName, fileExtension);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle fileExtension without dot', () => {
    const fileName = 'testFile';
    const fileExtension = 'txt';
    const expectedOutput = 'testFile.txt';

    const result = getFileNameWithExtension(fileName, fileExtension);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle fileName with directories', () => {
    const fileName = path.join('dir1', 'dir2', 'testFile');
    const fileExtension = 'txt';
    const expectedOutput = path.join('dir1', 'dir2', 'testFile.txt');

    const result = getFileNameWithExtension(fileName, fileExtension);

    expect(result).toEqual(expectedOutput);
  });
});
