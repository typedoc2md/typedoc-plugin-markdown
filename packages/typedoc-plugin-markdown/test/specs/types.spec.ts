import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme/definition';

describe(`Types:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['types.ts']));
  });

  test(`should compile 'array' type'`, () => {
    expect(
      context.someType((project.getChildByName('arrayType') as any).type),
    ).toMatchSnapshot();
  });

  test(`should compile 'stringLiteral' type'`, () => {
    expect(
      context.someType(
        (project.getChildByName('stringLiteralType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of string literals types'`, () => {
    expect(
      context.someType((project.getChildByName('unionType') as any).type),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of literal declarations`, () => {
    expect(
      context.someType(
        (project.getChildByName('unionTypeWithSymbolsDeclarations') as any)
          .type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile intrinsic type'`, () => {
    expect(
      context.someType((project.getChildByName('stringType') as any).type),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'literal' type'`, () => {
    expect(
      context.someType(
        (project.getChildByName('literalType') as any).type,
        true,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'literal' type'`, () => {
    expect(
      context.someType((project.getChildByName('literalType') as any).type),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'objectLiteralType' type'`, () => {
    expect(
      context.declarationType(
        project.getChildByName('objectLiteralType') as any,
        true,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'objectLiteralType' type'`, () => {
    expect(
      context.declarationType(
        project.getChildByName('objectLiteralType') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'tuple' type'`, () => {
    expect(
      context.someType((project.getChildByName('tupleType') as any).type),
    ).toMatchSnapshot();
  });

  test(`should compile 'intersection' type'`, () => {
    expect(
      context.someType(
        (project.getChildByName('intersectionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'function' type '`, () => {
    expect(
      context.someType(
        (project.getChildByName('functionReflectionType') as any).type,
        true,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'function' type '`, () => {
    expect(
      context.someType(
        (project.getChildByName('functionReflectionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'typeOperator' type '`, () => {
    expect(
      context.someType(
        (project.getChildByName('typeOperatorType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile unionType with object literal type '`, () => {
    expect(
      context.someType(
        (project.getChildByName('objectLiteralUnionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile conditional type '`, () => {
    expect(
      context.someType((project.getChildByName('ConditionalType') as any).type),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs'`, () => {
    expect(
      context.someType(
        (project.getChildByName('externalReference') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs with type params'`, () => {
    expect(
      context.someType(
        (project.getChildByName('externalReferenceInsideTypeParams') as any)
          .type,
      ),
    ).toMatchSnapshot();
  });
});
