import { formatTableCell } from './format-table-cell';

describe('formatTableCell', () => {
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
    expect(formatTableCell(input)).toBe(expectedOutput);
  });
});
