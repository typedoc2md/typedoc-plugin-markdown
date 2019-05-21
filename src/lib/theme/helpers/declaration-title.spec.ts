import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { declarationTitle } from './declaration-title';

describe(`declarationTitle helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Variable), 'myConst');
    const result = declarationTitle.call(data);
    expect(result).toMatchSnapshot();
  });
});
