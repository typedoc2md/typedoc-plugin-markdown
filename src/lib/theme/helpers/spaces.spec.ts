import { spaces } from './spaces';

describe(`spaces helper`, () => {
  test(`should compile`, () => {
    const result = spaces(3);
    expect(result).toEqual('!spaces   ');
  });
});
