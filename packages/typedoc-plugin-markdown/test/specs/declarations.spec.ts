import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Reflections:`, () => {
  let testApp: TestApp;

  let template: Handlebars.TemplateDelegate;

  beforeAll(() => {
    testApp = new TestApp(['declarations.ts']);
    testApp.bootstrap();
    TestApp.stubPartials([]);
    TestApp.stubHelpers([]);

    template = TestApp.getPartial('member.declaration');
  });

  test(`should compile a variable with default value`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('stringWithDefaultValue'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a an udefined`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('undefinedNumber'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal declaration`, () => {
    expect(
      TestApp.compileTemplate(
        template,
        testApp.findReflection('objectLiteral'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type literal declaration`, () => {
    expect(
      TestApp.compileTemplate(template, testApp.findReflection('typeLiteral')),
    ).toMatchSnapshot();
  });
});
