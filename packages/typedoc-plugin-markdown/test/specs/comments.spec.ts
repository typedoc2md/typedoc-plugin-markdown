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
  });

  test(`should get tables for emum`, () => {
    expectFileToEqual('comments', 'members', [
      '/enumerations/EnumMembersTable.md',
      '/Enumeration.EnumMembersTable.md',
    ]);
  });
});
