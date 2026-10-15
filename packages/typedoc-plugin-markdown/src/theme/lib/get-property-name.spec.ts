import { strict as assert } from 'assert';
import { getPropertyName } from './get-property-name.js';

describe('typedoc-plugin-markdown (Theme / getPropertyName)', () => {
  it('should not quote identifiers, numbers or symbol names', () => {
    ['prop', '_prop', '$prop', 'prop1', '0', '[dispose]'].forEach((name) => {
      assert.strictEqual(getPropertyName(name), name);
    });
  });

  it('should quote names that are not identifiers', () => {
    assert.strictEqual(getPropertyName('prop.with.dot'), '"prop.with.dot"');
    assert.strictEqual(getPropertyName('<x>'), '"<x>"');
    assert.strictEqual(getPropertyName('1a'), '"1a"');
  });

  it('should escape quotes and backslashes', () => {
    assert.strictEqual(getPropertyName('"'), '"\\""');
    assert.strictEqual(getPropertyName('\\'), '"\\\\"');
  });
});
