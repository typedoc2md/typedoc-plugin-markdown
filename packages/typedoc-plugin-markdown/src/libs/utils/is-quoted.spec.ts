import { strict as assert } from 'assert';
import { isQuoted } from './is-quoted.js';

describe('typedoc-plugin-markdown (Utils / isQuoted)', () => {
  it('should return true for quoted strings', () => {
    const input = '"This is a quoted string"';
    const expectedOutput = true;
    const result = isQuoted(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should return false for unquoted strings', () => {
    const input = 'This is an unquoted string';
    const expectedOutput = false;
    const result = isQuoted(input);
    assert.strictEqual(result, expectedOutput);
  });
});
