import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Reflections:`, () => {
  let testApp: TestApp;

  let reflectionTemplate: Handlebars.TemplateDelegate;

  beforeAll(() => {
    testApp = new TestApp(['reflections.ts']);
    testApp.bootstrap();
    TestApp.stubPartials([
      'header',
      'index',
      'comment',
      'member.signature',
      'members',
    ]);
    TestApp.stubHelpers(['breadcrumbs', 'hierarchy']);

    reflectionTemplate = TestApp.getTemplate('reflection');
  });

  beforeEach(() => {
    Handlebars.registerHelper('ifShowBreadcrumbs', function (options) {
      return options.fn(this);
    });
  });

  test(`should compile module without breadcrumbs`, () => {
    Handlebars.registerHelper('ifShowBreadcrumbs', function (options) {
      return options.inverse(this);
    });
    expect(
      TestApp.compileTemplate(reflectionTemplate, {
        model: testApp.findModule('reflections'),
      }),
    ).toMatchSnapshot();
  });

  test(`should compile reflection with type params`, () => {
    expect(
      TestApp.compileTemplate(reflectionTemplate, {
        model: testApp.findReflection('ReflectionWithTypeParams'),
      }),
    ).toMatchSnapshot();
  });

  test(`should compile a callable reflection`, () => {
    expect(
      TestApp.compileTemplate(reflectionTemplate, {
        model: testApp.findReflection('CallableReflection'),
      }),
    ).toMatchSnapshot();
  });

  test(`should compile an indexable reflection`, () => {
    expect(
      TestApp.compileTemplate(reflectionTemplate, {
        model: testApp.findReflection('IndexableReflection'),
      }),
    ).toMatchSnapshot();
  });
});
