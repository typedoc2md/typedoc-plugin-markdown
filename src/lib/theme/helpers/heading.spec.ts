import { heading } from './heading';

describe(`heading helper`, () => {
  test(`should compile`, () => {
    const result = heading(2);
    expect(result).toEqual('##');
  });
});
