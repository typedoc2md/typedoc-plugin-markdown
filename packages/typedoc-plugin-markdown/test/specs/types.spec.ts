import * as Handlebars from 'handlebars';
import { TestApp } from '../test-app';

describe(`Types:`, () => {
  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['types.ts']);
    testApp.bootstrap();
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

  test(`should compile intrinsic type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('stringType').type),
    ).toMatchSnapshot();
  });

  test(`should compile 'literal' type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('literalType').type),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'literal' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('literalType').type,
        true,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'objectLiteralType' type'`, () => {
    expect(
      Handlebars.helpers.type.call(testApp.findReflection('objectLiteralType')),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'objectLiteralType' type'`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('objectLiteralType'),
        true,
      ),
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

  test(`should compile reflection 'function' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('functionReflectionType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile expanded 'function' type '`, () => {
    expect(
      Handlebars.helpers.type.call(
        testApp.findReflection('functionReflectionType').type,
        true,
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
});
