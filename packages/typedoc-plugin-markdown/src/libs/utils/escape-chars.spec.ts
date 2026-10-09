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

  it('should escape backslashes so they display as written', () => {
    assert.strictEqual(escapeChars('"C:\\temp"'), '"C:\\\\temp"');
  });
});
