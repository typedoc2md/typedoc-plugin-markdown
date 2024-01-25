import { expectFileToEqual } from '@devtools/testing';

describe(`Variable Reflection`, () => {
  test(`should compile variable assigned to a string`, () => {
    expectFileToEqual('reflections', 'members', 'variables/stringVariable.md');
  });

  test(`should compile variable assigned to an object literal`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'variables/objectLiteralVariable.md',
    );
  });

  test(`should compile type operator variable`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'variables/typeOperatorVariable.md',
    );
  });

  test(`should compile object with symbol`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'variables/objectWithSymbol.md',
    );
  });
});
