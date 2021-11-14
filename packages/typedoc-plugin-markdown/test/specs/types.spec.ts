import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Types:`, () => {
  let testApp: TestApp;

  beforeAll(async () => {
    testApp = new TestApp(['types.ts']);
    await testApp.bootstrap();
  });

  test(`should compile 'array' type'`, () => {
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('arrayType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'stringLiteral' type'`, () => {
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('stringLiteralType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of string literals types'`, () => {
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('unionType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of literal declarations`, () => {
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('unionTypeWithSymbolsDeclarations').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile intrinsic type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('stringType').type),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'literal' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('literalType').type,
        'all',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'literal' type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('literalType').type),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'objectLiteralType' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('objectLiteralType'),
        'object',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'objectLiteralType' type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('objectLiteralType')),
    ).toMatchSnapshot();
  });

  test(`should compile 'tuple' type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('tupleType').type),
    ).toMatchSnapshot();
  });

  test(`should compile 'intersection' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('intersectionType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile collapsed 'function' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('functionReflectionType').type,
        'function',
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'function' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('functionReflectionType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'typeOperator' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('typeOperatorType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile unionType with object literal type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('objectLiteralUnionType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile conditional type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('ConditionalType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('externalReference').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should resolve external refs with type params'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('externalReferenceInsideTypeParams').type,
      ),
    ).toMatchSnapshot();
  });
});
