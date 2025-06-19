import { strict as assert } from 'assert';
import { formatTableCell } from './format-table-cell.js';

describe('typedoc-plugin-markdown (Utils / formatTableCell)', () => {
  it('should correctly format the cell content', () => {
    const input = `
      This is a test
      \`\`\`ts
      const x = 10;
      \`\`\`
      with multiple   spaces.
    `;
    const expectedOutput =
      'This is a test `const x = 10;` with multiple spaces.';
    assert.strictEqual(formatTableCell(input), expectedOutput);
  });
});
