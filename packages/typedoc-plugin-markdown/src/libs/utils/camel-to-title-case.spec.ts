import { strict as assert } from 'assert';
import { camelToTitleCase } from './camel-to-title-case.js';

describe('typedoc-plugin-markdown (Utils / camelToTitleCase)', () => {
  it('should convert camel case to title case correctly', () => {
    const input = 'camelCaseText';
    const expectedOutput = 'Camel Case Text';
    const result = camelToTitleCase(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle single word correctly', () => {
    const input = 'word';
    const expectedOutput = 'Word';
    const result = camelToTitleCase(input);
    assert.strictEqual(result, expectedOutput);
  });
});
