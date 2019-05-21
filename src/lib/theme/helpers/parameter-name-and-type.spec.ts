import { Fixture, getFixture, getReflectionByName } from '../../../test/test.utils';
import { parameterNameAndType } from './parameter-name-and-type';

describe(`parameterNameAndType helper`, () => {
  test(`should compile`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralObject), 'objectLiteral');
    const result = parameterNameAndType.call(data);
    expect(result).toMatchSnapshot();
  });
});
