import { strict as assert } from 'assert';
import { removeLineBreaks } from './remove-line-breaks.js';

describe('typedoc-plugin-markdown (Utils / removeLineBreaks)', () => {
  it('should remove line breaks and replace with a single space', () => {
    const input = 'This is a string\nwith multiple\n\nline breaks';
    const expectedOutput = 'This is a string with multiple line breaks';
    const result = removeLineBreaks(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should replace multiple spaces with a single space', () => {
    const input = 'This is a string  with   multiple    spaces';
    const expectedOutput = 'This is a string with multiple spaces';
    const result = removeLineBreaks(input);
    assert.strictEqual(result, expectedOutput);
  });
});
