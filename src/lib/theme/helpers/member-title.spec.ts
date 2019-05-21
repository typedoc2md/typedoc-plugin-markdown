import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { memberTitle } from './member-title';

describe(`memberTitle helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Variable), 'myConst');
    const result = memberTitle.call(data);
    expect(result).toMatchSnapshot();
  });
});
