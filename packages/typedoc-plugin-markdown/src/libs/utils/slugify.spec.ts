import { slugify } from './slugify';

describe('slugifyUrl', () => {
  it('should convert to slug correctly', () => {
    const input = ' Type  Alias ';
    const expectedOutput = 'type-alias';

    const result = slugify(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle URL with special characters', () => {
    const input = 'Reflection!';
    const expectedOutput = 'reflection';

    const result = slugify(input);

    expect(result).toEqual(expectedOutput);
  });
});
