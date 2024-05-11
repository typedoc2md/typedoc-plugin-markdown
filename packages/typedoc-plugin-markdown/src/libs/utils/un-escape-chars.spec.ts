import { unEscapeChars } from './un-escape-chars';

describe('unEscapeChars', () => {
  it('should unescape characters correctly', () => {
    const input = '\\*\\<\\>\\_\\{\\}\\`\\*\\|\\]\\[';
    const expectedOutput = '*<>_{}`*|][';

    const result = unEscapeChars(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle string without escaped characters', () => {
    const input = 'This is a string without escaped characters';
    const expectedOutput = 'This is a string without escaped characters';

    const result = unEscapeChars(input);

    expect(result).toEqual(expectedOutput);
  });
});
