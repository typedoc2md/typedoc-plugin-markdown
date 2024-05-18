import { toPascalCase } from './to-pascal-case';

describe('toPascalCase', () => {
  it('should convert a string to start case', () => {
    expect(toPascalCase('Type Alias')).toBe('TypeAlias');
  });
});
