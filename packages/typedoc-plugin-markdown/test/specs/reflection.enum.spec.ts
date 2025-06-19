import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Enum Reflection)`, () => {
  it(`should compile basic enum`, () => {
    expectFileToEqual('reflections', 'members', 'enumerations/BasicEnum.md');
  });

  it(`should compile enum with values`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      '/enumerations/EnumWithValues.md',
    );
  });
});
