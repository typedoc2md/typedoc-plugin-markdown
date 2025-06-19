import { strict as assert } from 'assert';
import { slugify } from './slugify.js';

describe('Utils: slugifyUrl', () => {
  it('should convert to slug correctly', () => {
    const input = ' Type  Alias ';
    const expectedOutput = 'type-alias';
    const result = slugify(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle URL with special characters', () => {
    const input = 'Reflection!';
    const expectedOutput = 'reflection';
    const result = slugify(input);
    assert.strictEqual(result, expectedOutput);
  });
});
