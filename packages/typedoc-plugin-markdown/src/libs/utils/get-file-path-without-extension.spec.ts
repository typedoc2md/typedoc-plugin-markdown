import { getFilePathWithoutExtension } from './get-file-path-without-extension';

describe('getFilePath', () => {
  it('should return the file path without extension', () => {
    const input = '/path/to/file.txt';
    const expectedOutput = '/path/to/file';
    const result = getFilePathWithoutExtension(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle file paths with multiple extensions', () => {
    const input = '/path/to/archive.tar.gz';
    const expectedOutput = '/path/to/archive.tar';
    const result = getFilePathWithoutExtension(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty string if the input is an empty string', () => {
    const input = '';
    const expectedOutput = '';
    const result = getFilePathWithoutExtension(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle file paths without extensions', () => {
    const input = '/path/to/file';
    const expectedOutput = '/path/to/file';
    const result = getFilePathWithoutExtension(input);
    expect(result).toEqual(expectedOutput);
  });
});
