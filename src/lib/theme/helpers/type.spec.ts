import { IntrinsicType } from 'typedoc/dist/lib/models';
import { type } from './type';

describe(`type helper`, () => {
  test(`should compile intrinsic type`, () => {
    const intrinsicType = new IntrinsicType('string');
    const result = type.call(intrinsicType);
    expect(result).toMatchSnapshot();
  });
});
