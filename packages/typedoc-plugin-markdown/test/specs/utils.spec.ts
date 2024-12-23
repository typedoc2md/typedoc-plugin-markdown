import { expectFileToEqual } from '@devtools/testing';

describe(`Utils`, () => {
  test(`should get interface with brackets`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'brackets/interfaces/InterfaceWithChars.md',
    );
  });

  test(`should get class with brackets`, () => {
    expectFileToEqual('utils', 'members', 'brackets/classes/ClassWithChars.md');
  });

  test(`should get variable with brackets`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'brackets/variables/variableWithChars.md',
    );
  });

  test(`should get prettified function`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'prettier/functions/some_prettier_function.md',
    );
  });

  test(`should get prettified function`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'prettier/type-aliases/SomePrettierTypeAlias.md',
    );
  });

  test(`should format type with constructor overrides`, () => {
    expectFileToEqual(
      'utils',
      ['members'],
      'constructor-override/classes/Cache.md',
    );
  });

  test(`should format index signature type`, () => {
    expectFileToEqual(
      'utils',
      ['members'],
      'index-signature/type-aliases/LongIndexSignature.md',
    );
  });
});
