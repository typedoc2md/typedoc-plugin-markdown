import { formatTableColumn } from './format-table-column';

describe('formatTableColumn', () => {
  it('should format table column correctly', () => {
    const input = `This is a string with
a newline, | a pipe, and a code block:
\`\`\`ts
const x = 10;
\`\`\``;
    const expectedOutput =
      'This is a string with<br />a newline, \\| a pipe, and a code block:<br />`const x = 10;`';
    const result = formatTableColumn(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should remove trailing <br /> tags', () => {
    const input = 'This is a string with a trailing <br /> tag<br />     ';
    const expectedOutput = 'This is a string with a trailing <br /> tag';
    const result = formatTableColumn(input);
    expect(result).toEqual(expectedOutput);
  });
});
