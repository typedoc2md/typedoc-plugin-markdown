import { stripLineBreaks } from './strip-line-breaks';

describe(`spaces helper`, () => {
  test(`should compile`, () => {
    const result = stripLineBreaks.call('line 1\n line2\n');
    expect(result).toMatchSnapshot();
  });
});
