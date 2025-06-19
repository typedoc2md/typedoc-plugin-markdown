import { strict as assert } from 'assert';
import { toPascalCase } from './to-pascal-case.js';

describe('typedoc-plugin-markdown (Utils / toPascalCase)', () => {
  it('should convert a string to start case', () => {
    assert.strictEqual(toPascalCase('Type Alias'), 'TypeAlias');
  });
});
