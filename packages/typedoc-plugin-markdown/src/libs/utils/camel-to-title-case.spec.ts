import { camelToTitleCase } from './camel-to-title-case';

describe('camelToTitleCase', () => {
  it('should convert camel case to title case correctly', () => {
    const input = 'camelCaseText';
    const expectedOutput = 'Camel Case Text';
    const result = camelToTitleCase(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle single word correctly', () => {
    const input = 'word';
    const expectedOutput = 'Word';
    const result = camelToTitleCase(input);
    expect(result).toEqual(expectedOutput);
  });
});
