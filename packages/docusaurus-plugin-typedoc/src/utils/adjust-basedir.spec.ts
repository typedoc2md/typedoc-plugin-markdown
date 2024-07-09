import { adjustBaseDirectory } from './adjust-basedir';

describe('adjustPath', () => {
  it('should handle paths', () => {
    const originalPath = 'folder/api-reference';
    const subPath = 'folder';
    const expected = 'api-reference';
    expect(adjustBaseDirectory(originalPath, subPath)).toBe(expected);
  });

  it('should handle relative paths', () => {
    const originalPath = 'docs/api-reference';
    const subPath = '../docs';
    const expected = 'api-reference';
    expect(adjustBaseDirectory(originalPath, subPath)).toBe(expected);
  });
});
