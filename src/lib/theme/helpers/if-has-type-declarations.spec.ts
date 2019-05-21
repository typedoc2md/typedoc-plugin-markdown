import { Fixture, getFixture, getReflectionByName, handlebarsHelpersOptionsStub } from '../../../test/test.utils';
import { ifHasTypeDeclarations } from './if-has-type-declarations';

describe(`ifHasTypeDeclarations helper`, () => {
  test(`should return true if ifHasTypeDeclarations is true and expectation is truthy`, () => {
    const reflection = getReflectionByName(getFixture(Fixture.Destructuring), 'drawText').signatures[0];
    const data = {
      ...reflection,
      parent: {
        kind: 2097152,
      },
    };
    const result = ifHasTypeDeclarations.call(data, true, handlebarsHelpersOptionsStub);
    expect(result).toEqual('true');
  });

  test(`should return true if ifHasTypeDeclarations is false and expectation is truthy`, () => {
    const data = getReflectionByName(getFixture(Fixture.Function), 'exportedFunction');
    const result = ifHasTypeDeclarations.call(data.signatures[0], true, handlebarsHelpersOptionsStub);
    expect(result).toEqual('false');
  });

  test(`should return true if ifHasTypeDeclarations is false and expectation is falsey`, () => {
    const data = getReflectionByName(getFixture(Fixture.Function), 'exportedFunction');
    const result = ifHasTypeDeclarations.call(data.signatures[0], false, handlebarsHelpersOptionsStub);
    expect(result).toEqual('true');
  });
});
