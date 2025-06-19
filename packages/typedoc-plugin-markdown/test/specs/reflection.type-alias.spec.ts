import { expectFileToEqual } from '../helpers.js';

describe(`typedoc-plugin-markdown (Integration /Type Alias Reflection)`, () => {
  it(`should compile primitive type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/PrimitiveType.md',
    );
  });

  it(`should compile array type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/ArrayType.md');
  });

  it(`should compile array of objects type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ArrayOfObjectsType.md',
    );
  });

  it(`should compile union type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/UnionType.md');
  });

  it(`should compile useful union type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/UsefulUnionType.md',
    );
  });

  it(`should compile string literal type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/StringLiteralType.md',
    );
  });

  it(`should compile string tuple type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/TupleType.md');
  });

  it(`should compile intersection type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/IntersectionType.md',
    );
  });

  it(`should compile conditional type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ConditionalType.md',
    );
  });

  it(`should compile type parameter type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithTypeParams.md',
    );
  });

  it(`should compile external reference type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ExternalReferenceType.md',
    );
  });

  it(`should compile partial mapped type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/PartialMappedType.md',
    );
  });

  it(`should compile readonly mapped type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/ReadonlyMappedType.md',
    );
  });

  it(`should compile function type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/FunctionType.md');
  });

  it(`should compile external link symbol type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithExternalSymbolLinkMapping.md',
    );
  });

  it(`should compile external literal type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/LiteralType.md');
  });

  it(`should compile index access type`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/IndexAccessType.md',
    );
  });

  it(`should compile query type`, () => {
    expectFileToEqual('reflections', 'members', 'type-aliases/QueryType.md');
  });

  it(`should compile union type with template strings`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/UnionTypeWithTemplateStrings.md',
    );
  });

  it(`should compile type with returns`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithReturns.md',
    );
  });

  it(`should compile type with index signature`, () => {
    expectFileToEqual(
      'reflections',
      'members',
      'type-aliases/TypeWithIndexSignature.md',
    );
  });
});
