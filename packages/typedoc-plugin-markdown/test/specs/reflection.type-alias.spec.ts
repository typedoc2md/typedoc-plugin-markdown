import { expectFileToEqual } from '@devtools/testing';

describe(`Type Alias Reflection`, () => {
  test(`should compile primitive type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/PrimitiveType.md',
    );
  });

  test(`should compile array type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/ArrayType.md');
  });

  test(`should compile union type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/UnionType.md');
  });

  test(`should compile string literal type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/StringLiteralType.md',
    );
  });

  test(`should compile string tuple type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/TupleType.md');
  });

  test(`should compile intersection type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/IntersectionType.md',
    );
  });

  test(`should compile conditional type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ConditionalType.md',
    );
  });

  test(`should compile type parameter type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithTypeParams.md',
    );
  });

  test(`should compile external reference type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ExternalReferenceType.md',
    );
  });

  test(`should compile partial mapped type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/PartialMappedType.md',
    );
  });

  test(`should compile readonly mapped type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ReadonlyMappedType.md',
    );
  });

  test(`should compile function type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/FunctionType.md');
  });

  test(`should compile external link symbol type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithExternalSymbolLinkMapping.md',
    );
  });

  test(`should compile external literal type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/LiteralType.md');
  });

  test(`should compile index access type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/IndexAccessType.md',
    );
  });

  test(`should compile query type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/QueryType.md');
  });

  test(`should compile union type with template strings`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/UnionTypeWithTemplateStrings.md',
    );
  });

  test(`should compile type with returns`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithReturns.md',
    );
  });
});
