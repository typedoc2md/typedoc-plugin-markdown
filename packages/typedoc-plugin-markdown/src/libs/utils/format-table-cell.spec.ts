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

  it('should escape pipes for the table, including inside code spans', () => {
    const input = `Union of a | b.
      \`\`\`ts
      const c = a || b;
      \`\`\``;
    const expectedOutput = 'Union of a \\| b. `const c = a \\|\\| b;`';
    assert.strictEqual(formatTableCell(input), expectedOutput);
  });

  it('should not escape pipes that are already escaped', () => {
    assert.strictEqual(formatTableCell('`a` \\| `b`'), '`a` \\| `b`');
  });
});
