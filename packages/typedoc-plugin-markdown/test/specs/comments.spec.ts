import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Comments)`, () => {
  it(`should compile comments for module`, () => {
    expectFileToEqual('comments', ['members'], ['README.md']);
  });

  it(`should compile @links with anchors`, () => {
    expectFileToEqual('comments', ['modules'], ['README.md'], 1, [8, 18]);
  });

  it(`should handle single example tags`, () => {
    expectFileToEqual(
      'comments',
      ['members'],
      ['/functions/singleExampleTag.md'],
    );
  });

  it(`should handle multiple example tags`, () => {
    expectFileToEqual(
      'comments',
      ['members'],
      ['/functions/multipleExampleTags.md'],
    );
  });

  it(`should handle const function`, () => {
    expectFileToEqual('comments', ['members'], ['/functions/constFunction.md']);
  });

  it(`should handle const function with returns`, () => {
    expectFileToEqual(
      'comments',
      ['members'],
      ['/functions/constFunctionWithReturns.md'],
    );
  });

  it(`should get tables for properties`, () => {
    expectFileToEqual('comments', 'members', [
      '/classes/ClassPropertiesTable.md',
      '/Class.ClassPropertiesTable.md',
    ]);
  });

  it(`should get tables for parameters`, () => {
    expectFileToEqual('comments', 'members', ['/functions/parametersTable.md']);
  });

  it(`should get tables for type declarations`, () => {
    expectFileToEqual('comments', 'members', [
      '/type-aliases/TypeDeclarationType.md',
      '/TypeAlias.TypeDeclarationType.md',
    ]);
    expectFileToEqual('comments', 'members', [
      '/variables/TypeDeclarationConst.md',
      '/Variable.TypeDeclarationConst.md',
    ]);
  });

  it(`should get tables for enum`, () => {
    expectFileToEqual('comments', 'members', [
      '/enumerations/EnumMembersTable.md',
      '/Enumeration.EnumMembersTable.md',
    ]);
  });

  it(`should get function with block tags`, () => {
    expectFileToEqual('comments', 'members', [
      '/functions/functionWithBlockTags.md',
      '/Function.functionWithBlockTags.md',
    ]);
  });

  it(`should get variable with block tags`, () => {
    expectFileToEqual('comments', 'members', [
      '/type-aliases/typeWithBlockTags.md',
      '/TypeAlias.typeWithBlockTags.md',
    ]);
  });
});
