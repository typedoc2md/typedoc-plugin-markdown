import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Variable Reflection)`, () => {
  it(`should compile variable assigned to a string`, () => {
    expectFileToEqual('reflections', 'members', 'variables/stringVariable.md');
  });

  it(`should compile variable assigned to an object literal`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'variables/objectLiteralVariable.md',
    );
  });

  it(`should compile type operator variable`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'variables/typeOperatorVariable.md',
    );
  });

  it(`should compile object with symbol`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'variables/objectWithSymbol.md',
    );
  });
});
