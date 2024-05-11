import { isQuoted } from './is-quoted';

describe('isQuoted', () => {
  it('should return true for quoted strings', () => {
    const input = '"This is a quoted string"';
    const expectedOutput = true;

    const result = isQuoted(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should return false for unquoted strings', () => {
    const input = 'This is an unquoted string';
    const expectedOutput = false;

    const result = isQuoted(input);

    expect(result).toEqual(expectedOutput);
  });
});
