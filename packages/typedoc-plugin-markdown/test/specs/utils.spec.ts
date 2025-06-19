import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration / Utils)`, () => {
  it(`should get interface with brackets`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'brackets/interfaces/InterfaceWithChars.md',
    );
  });

  it(`should get class with brackets`, () => {
    expectFileToEqual('utils', 'members', 'brackets/classes/ClassWithChars.md');
  });

  it(`should get variable with brackets`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'brackets/variables/variableWithChars.md',
    );
  });

  it(`should get prettified function`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'prettier/functions/some_prettier_function.md',
    );
  });

  it(`should get prettified function`, () => {
    expectFileToEqual(
      'utils',
      'members',
      'prettier/type-aliases/SomePrettierTypeAlias.md',
    );
  });

  it(`should format type with constructor overrides`, () => {
    expectFileToEqual(
      'utils',
      ['members'],
      'constructor-override/classes/Cache.md',
    );
  });

  it(`should format index signature type`, () => {
    expectFileToEqual(
      'utils',
      ['members'],
      'index-signature/type-aliases/LongIndexSignature.md',
    );
  });
});
