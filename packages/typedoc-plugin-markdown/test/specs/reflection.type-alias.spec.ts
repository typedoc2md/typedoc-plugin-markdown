import {
  FixtureOutputDir,
  FixtureOutputFileStrategy,
} from '../__utils__/config';
import { expectFileToEqual } from '../__utils__/helpers';

describe(`Type Alias Reflection`, () => {
  test(`should compile primitive type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/PrimitiveType.md',
    );
  });

  test(`should compile array type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/ArrayType.md',
    );
  });

  test(`should compile union type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/UnionType.md',
    );
  });

  test(`should compile string literal type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/StringLiteralType.md',
    );
  });

  test(`should compile string tuple type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/TupleType.md',
    );
  });

  test(`should compile intersection type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/IntersectionType.md',
    );
  });

  test(`should compile conditional type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/ConditionalType.md',
    );
  });

  test(`should compile type parameter type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/TypeWithTypeParams.md',
    );
  });

  test(`should compile external reference type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/ExternalReferenceType.md',
    );
  });

  test(`should compile partial mapped type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/PartialMappedType.md',
    );
  });

  test(`should compile readonly mapped type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/ReadonlyMappedType.md',
    );
  });

  test(`should compile function type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/FunctionType.md',
    );
  });

  test(`should compile external link symbol type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/TypeWithExternalSymbolLinkMapping.md',
    );
  });

  test(`should compile external literal type`, () => {
    expectFileToEqual(
      FixtureOutputDir.Reflections,
      FixtureOutputFileStrategy.Members,
      'type-aliases/LiteralType.md',
    );
  });
});
