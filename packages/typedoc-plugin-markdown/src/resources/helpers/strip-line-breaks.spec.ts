import { stripLineBreaks } from './strip-line-breaks';
describe(`[helpers] stripLineBreaks`, () => {
  test(`should compile `, () => {
    const result = stripLineBreaks.call('line 1\n line2\n');
    expect(result).toMatchSnapshot('line 1  line2');
  });
});
