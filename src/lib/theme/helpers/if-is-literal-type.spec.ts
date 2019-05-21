import { Fixture, getFixture, getReflectionByName, handlebarsHelpersOptionsStub } from '../../../test/test.utils';
import { ifIsLiteralType } from './if-is-literal-type';

describe(`ifIsLiteralType helper`, () => {
  test(`should return true if isLiteralType is is true and expectation is truthy`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralObject), 'objectLiteral');
    const result = ifIsLiteralType.call(data, true, handlebarsHelpersOptionsStub);
    expect(result).toEqual('true');
  });

  test(`should return false if isLiteralType is is true and expectation is falsey`, () => {
    const data = getReflectionByName(getFixture(Fixture.LiteralObject), 'objectLiteral');
    const result = ifIsLiteralType.call(data, false, handlebarsHelpersOptionsStub);
    expect(result).toEqual('false');
  });

  test(`should return true if isLiteralType is is false and expectation is falsey`, () => {
    const data = getReflectionByName(getFixture(Fixture.Variable), 'myConst');
    const result = ifIsLiteralType.call(data, false, handlebarsHelpersOptionsStub);
    expect(result).toEqual('true');
  });
});
