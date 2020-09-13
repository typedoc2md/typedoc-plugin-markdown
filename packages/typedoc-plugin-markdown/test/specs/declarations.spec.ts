import * as Handlebars from 'handlebars';
import { TestApp } from '../test-app';

describe(`Reflections:`, () => {
  let testApp: TestApp;

  let template: Handlebars.TemplateDelegate;

  beforeAll(() => {
    testApp = new TestApp(['declarations.ts']);
    testApp.bootstrap();
    TestApp.stubPartials(['member.sources']);
    TestApp.stubHelpers([]);

    template = TestApp.getPartial('member.declaration');
  });

  test(`should compile a variable with default value`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('stringWithDefaultValueDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a an udefined`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('undefinedNumberDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal declaration`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('objectLiteralDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal cast as a const`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('objectLiteralAsConstDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type literal declaration`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('typeLiteralDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should declaration with double underscores in name and value`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('__DOUBLE_UNDERSCORES_DECLARATION__'),
      ),
    ).toMatchSnapshot();
  });
});
