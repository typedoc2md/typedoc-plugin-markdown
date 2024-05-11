import { escapeChars } from './escape-chars';

describe('escapeChars', () => {
  it('should escape special characters correctly', () => {
    const input = 'This is a string with >, <, {, }, _, `, |, [, ], and *';
    const expectedOutput =
      'This is a string with \\>, \\<, \\{, \\}, \\_, \\`, \\|, \\[, \\], and \\*';
    const result = escapeChars(input);
    expect(result).toEqual(expectedOutput);
  });
});
