import { expectFileToEqual } from '@devtools/testing';

describe(`Enum Reflection`, () => {
  test(`should compile basic enum`, () => {
    expectFileToEqual('reflections', 'members', 'enumerations/BasicEnum.md');
  });

  test(`should compile enum with values`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      '/enumerations/EnumWithValues.md',
    );
  });
});
