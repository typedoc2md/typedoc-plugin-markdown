import { formatTableColumn } from './format-table-column';

describe('formatTableColumn', () => {
  it('should correctly escape pipes', () => {
    const input = 'This is a test | with a pipe.';
    const expectedOutput = 'This is a test \\| with a pipe.';
    expect(formatTableColumn(input)).toBe(expectedOutput);
  });

  it('should correctly convert multi-line markdown to HTML', () => {
    const input = `1. First item
2. Second item`;
    const expectedOutput = '<ol><li>First item</li><li>Second item</li></ol>';
    expect(formatTableColumn(input)).toBe(expectedOutput);
  });
});
