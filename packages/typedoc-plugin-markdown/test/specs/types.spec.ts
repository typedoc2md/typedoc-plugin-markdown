import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Types:`, () => {
  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['types.ts']);
  });

  test(`should compile 'array' type'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('arrayType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'stringLiteral' type'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('stringLiteralType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'union' of string literals types'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('unionType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile intrinsic type'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('stringType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'literal' type'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('literalType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'tuple' type'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('tupleType').type,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile 'intersection' type'`, () => {
    testApp.bootstrap();
    expect(
      TestApp.compileHelper(
        Handlebars.helpers.type,
        testApp.findReflection('intersectionType').type,
      ),
    ).toMatchSnapshot();
  });
});
