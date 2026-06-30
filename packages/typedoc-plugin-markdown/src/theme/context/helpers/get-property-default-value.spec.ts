import { strict as assert } from 'assert';
import { DeclarationReflection } from 'typedoc';
import { getPropertyDefaultValue } from './get-property-default-value.js';

describe('typedoc-plugin-markdown (Helpers / getPropertyDefaultValue)', () => {
  it('should escape pipes in a @defaultValue tag so they do not break the table row', () => {
    const model = {
      comment: {
        blockTags: [{ tag: '@defaultValue', content: [{ text: '`0 | 1`' }] }],
      },
    } as unknown as DeclarationReflection;
    assert.strictEqual(getPropertyDefaultValue(model), '`0 \\| 1`');
  });

  it('should escape pipes in plain-text @defaultValue content', () => {
    const model = {
      comment: {
        blockTags: [{ tag: '@defaultValue', content: [{ text: '"a" | "b"' }] }],
      },
    } as unknown as DeclarationReflection;
    assert.strictEqual(getPropertyDefaultValue(model), '"a" \\| "b"');
  });

  it('should wrap an inferred default value with backTicks (escaping pipes)', () => {
    const model = {
      defaultValue: 'READ | WRITE',
    } as unknown as DeclarationReflection;
    assert.strictEqual(getPropertyDefaultValue(model), 'READ \\| WRITE');
  });
});
