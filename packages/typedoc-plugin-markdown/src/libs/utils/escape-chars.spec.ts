import { strict as assert } from 'assert';
import { escapeChars } from './escape-chars.js';

describe('typedoc-plugin-markdown (Utils / escapeChars)', () => {
  it('should escape special characters correctly', () => {
    const input = 'This is a string with >, <, {, }, _, `, |, [, ], and *';
    const expectedOutput =
      'This is a string with \\>, \\<, \\{, \\}, \\_, \\`, \\|, \\[, \\], and \\*';
    const result = escapeChars(input);
    assert.strictEqual(result, expectedOutput);
  });
});
