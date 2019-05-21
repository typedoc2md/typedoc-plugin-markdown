import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { typeAndParent } from './type-and-parent';

describe(`typeAndParent helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Classes), 'BaseClass');
    const result = typeAndParent.call(data.children[3].implementationOf);
    expect(result).toMatchSnapshot();
  });
});
