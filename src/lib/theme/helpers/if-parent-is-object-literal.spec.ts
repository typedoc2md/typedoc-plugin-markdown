import { handlebarsHelpersOptionsStub } from '../../../test/test.utils';
import { ifParentIsObjectLiteral } from './if-parent-is-object-literal';

describe(`ifParentIsObjectLiteral helper`, () => {
  test(`should return true if ifParentIsObjectLiteral is is true and expectation is truthy`, () => {
    const data = {
      parent: {
        parent: {
          kind: 2097152,
        },
      },
    };
    const result = ifParentIsObjectLiteral.call(data, true, handlebarsHelpersOptionsStub);
    expect(result).toEqual('true');
  });

  test(`should return false if ifParentIsObjectLiteral is is false and expectation is truthy`, () => {
    const data = {};
    const result = ifParentIsObjectLiteral.call(data, true, handlebarsHelpersOptionsStub);
    expect(result).toEqual('false');
  });

  test(`should return true if ifParentIsObjectLiteral is is false and expectation is falsey`, () => {
    const data = {};
    const result = ifParentIsObjectLiteral.call(data, false, handlebarsHelpersOptionsStub);
    expect(result).toEqual('true');
  });
});
