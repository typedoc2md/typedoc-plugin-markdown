import { strict as assert } from 'assert';
import { replaceFilename } from './replace-file-name.js';

describe('typedoc-plugin-markdown (Utils / replaceFileName)', () => {
  it('should replace the filename in the path with the new filename', () => {
    const originalPath = '/path/to/oldfile.txt';
    const newFileName = 'newfile';
    const expectedOutput = '/path/to/newfile.txt';
    const result = replaceFilename(originalPath, newFileName);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle paths with multiple extensions', () => {
    const originalPath = '/path/to/archive.tar.gz';
    const newFileName = 'newarchive';
    const expectedOutput = '/path/to/newarchive.gz';
    const result = replaceFilename(originalPath, newFileName);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle relative paths', () => {
    const originalPath = './oldfile.txt';
    const newFileName = 'newfile';
    const expectedOutput = './newfile.txt';
    const result = replaceFilename(originalPath, newFileName);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle paths with special characters', () => {
    const originalPath = '/path/to/old-file@123.txt';
    const newFileName = 'new-file@456';
    const expectedOutput = '/path/to/new-file@456.txt';
    const result = replaceFilename(originalPath, newFileName);
    assert.strictEqual(result, expectedOutput);
  });
});
