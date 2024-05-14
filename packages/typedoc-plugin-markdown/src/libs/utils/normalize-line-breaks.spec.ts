import { normalizeLineBreaks } from './normalize-line-breaks';

describe('normalizeLineBreaks', () => {
  it('should correctly concatenate lines', () => {
    const input = `This line should be concatenated with the next one.
The next line.

This is the next line double break.
- list item 1
- list item 2

This is another test.`;

    const expectedOutput = `This line should be concatenated with the next one. The next line.

This is the next line double break.
- list item 1
- list item 2

This is another test.`;

    expect(normalizeLineBreaks(input)).toBe(expectedOutput);
  });
});
