import { strict as assert } from 'assert';
import { removeFirstScopedDirectory } from './remove-first-scoped-directory.js';

describe('typedoc-plugin-markdown (Utils / removeFirstScopedDirectory)', () => {
  it('should remove first scoped directory', () => {
    const input = '@scoped/dir1/dir2/file.txt';
    const expectedOutput = 'dir1/dir2/file.txt';
    const result = removeFirstScopedDirectory(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle string without scoped directory', () => {
    const input = 'dir1/dir2/file.txt';
    const expectedOutput = 'dir1/dir2/file.txt';
    const result = removeFirstScopedDirectory(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle string with multiple scoped directories', () => {
    const input = '@scoped/dir1/@scoped/dir2/file.txt';
    const expectedOutput = 'dir1/@scoped/dir2/file.txt';
    const result = removeFirstScopedDirectory(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should never use the platform path separator', () => {
    const result = removeFirstScopedDirectory(
      '@scope/ui/namespaces/helpers.md',
    );
    assert.strictEqual(result.includes('\\'), false);
  });

  it('should remove first scoped part with a custom separator', () => {
    const input = '@scope/ui.Foo.Bar';
    const expectedOutput = 'Foo.Bar';
    const result = removeFirstScopedDirectory(input, '.');
    assert.strictEqual(result, expectedOutput);
  });
});
