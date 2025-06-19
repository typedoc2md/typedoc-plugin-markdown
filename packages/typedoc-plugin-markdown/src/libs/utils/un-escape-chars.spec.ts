import { strict as assert } from 'assert';
import { unEscapeChars } from './un-escape-chars.js';

describe('typedoc-plugin-markdown (Utils / unEscapeChars)', () => {
  it('should unescape characters correctly', () => {
    const input = '\\*\\<\\>\\_\\{\\}\\`\\*\\|\\]\\[';
    const expectedOutput = '*<>_{}`*|][';
    const result = unEscapeChars(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle string without escaped characters', () => {
    const input = 'This is a string without escaped characters';
    const expectedOutput = 'This is a string without escaped characters';
    const result = unEscapeChars(input);
    assert.strictEqual(result, expectedOutput);
  });
});
