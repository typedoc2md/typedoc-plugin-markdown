import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { memberSymbol } from './member-symbol';

describe(`memberSymbol helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.Variable), 'myConst');
    const result = memberSymbol.call(data);
    expect(result).toMatchSnapshot();
  });
});
