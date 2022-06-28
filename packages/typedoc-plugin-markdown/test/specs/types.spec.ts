import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Types:`, () => {
  let project: ProjectReflection;

  beforeAll(async () => {
    project = await global.bootstrap(['types.ts']);
  });

  test(`should compile 'array' type'`, () => {
    expect(
      global.compileHelper(
        Handlebars.helpers.type,
        (project.getChildByName('arrayType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'stringLiteral' type'`, () => {
    expect(
      global.compileHelper(
        Handlebars.helpers.type,
        (project.getChildByName('stringLiteralType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of string literals types'`, () => {
    expect(
      global.compileHelper(
        Handlebars.helpers.type,
        (project.getChildByName('unionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of literal declarations`, () => {
    expect(
      global.compileHelper(
        Handlebars.helpers.type,
        (project.getChildByName('unionTypeWithSymbolsDeclarations') as any)
          .type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile intrinsic type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('stringType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'literal' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('literalType') as any).type,
        'all',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'literal' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('literalType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'objectLiteralType' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        project.getChildByName('objectLiteralType'),
        'object',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'objectLiteralType' type'`, () => {
    expect(
      Handlebars.helpers.type.call(project.getChildByName('objectLiteralType')),
    ).toMatchSnapshot();
  });

  test(`should compile 'tuple' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('tupleType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'intersection' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('intersectionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'function' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('functionReflectionType') as any).type,
        'function',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'function' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('functionReflectionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'typeOperator' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('typeOperatorType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile unionType with object literal type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('objectLiteralUnionType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile conditional type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('ConditionalType') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('externalReference') as any).type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs with type params'`, () => {
    expect(
      Handlebars.helpers.type.call(
        (project.getChildByName('externalReferenceInsideTypeParams') as any)
          .type,
      ),
    ).toMatchSnapshot();
  });
});
