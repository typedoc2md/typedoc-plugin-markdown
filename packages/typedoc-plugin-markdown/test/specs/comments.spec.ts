import { expectFileToEqual } from '@devtools/testing';

describe(`Comments`, () => {
  test(`should compile comments for module`, () => {
    expectFileToEqual('comments', ['members'], ['README.md']);
  });

  test(`should handle single example tags`, () => {
    expectFileToEqual(
      'comments',
      ['members'],
      ['/functions/multipleExampleTags.md'],
    );
  });

  test(`should handle multiple example tags`, () => {
    expectFileToEqual(
      'comments',
      ['members'],
      ['/functions/multipleExampleTags.md'],
    );
  });

  test(`should get tables for properties`, () => {
    expectFileToEqual('comments', 'members', [
      '/classes/ClassPropertiesTable.md',
      '/Class.ClassPropertiesTable.md',
    ]);
  });

  test(`should get tables for parameters`, () => {
    expectFileToEqual('comments', 'members', ['/functions/parametersTable.md']);
  });

  test(`should get tables for type declarations`, () => {
    expectFileToEqual('comments', 'members', [
      '/type-aliases/TypeDeclarationTable.md',
      '/TypeAlias.TypeDeclarationTable.md',
    ]);
    expectFileToEqual('comments', 'members', [
      '/variables/TypeDeclarationTable.md',
      '/Variable.TypeDeclarationTable.md',
    ]);
  });

  test(`should get tables for emum`, () => {
    expectFileToEqual('comments', 'members', [
      '/enumerations/EnumMembersTable.md',
      '/Enumeration.EnumMembersTable.md',
    ]);
  });

  test(`should get function with block tags`, () => {
    expectFileToEqual('comments', 'members', [
      '/functions/functionWithBlockTags.md',
      '/Function.functionWithBlockTags.md',
    ]);
  });

  test(`should get variable with block tags`, () => {
    expectFileToEqual('comments', 'members', [
      '/type-aliases/typeWithBlockTags.md',
      '/TypeAlias.typeWithBlockTags.md',
    ]);
  });
});
