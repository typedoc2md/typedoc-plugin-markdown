import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme-context';

describe(`Types:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['types.ts']));
  });

  test(`should compile 'array' type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('arrayType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'stringLiteral' type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('stringLiteralType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of string literals types'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('unionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of literal declarations`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('unionTypeWithSymbolsDeclarations') as any)
          .type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile intrinsic type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('stringType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'literal' type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('literalType') as any).type,
        'all',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'literal' type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('literalType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'objectLiteralType' type'`, () => {
    expect(
      context.partials.declarationType(
        project.getChildByName('objectLiteralType') as any,
        'object',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'objectLiteralType' type'`, () => {
    expect(
      context.partials.declarationType(
        project.getChildByName('objectLiteralType') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'tuple' type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('tupleType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'intersection' type'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('intersectionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'function' type '`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('functionReflectionType') as any).type,
        'function',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'function' type '`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('functionReflectionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'typeOperator' type '`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('typeOperatorType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile unionType with object literal type '`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('objectLiteralUnionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile conditional type '`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('ConditionalType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('externalReference') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs with type params'`, () => {
    expect(
      context.partials.someType(
        (project.getChildByName('externalReferenceInsideTypeParams') as any)
          .type,
      ),
    ).toMatchSnapshot();
  });
});
