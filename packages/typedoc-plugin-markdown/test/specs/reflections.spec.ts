import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Reflections:`, () => {
  let testApp: TestApp;
  let layoutTemplate: Handlebars.TemplateDelegate;
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

    layoutTemplate = testApp.theme.resources.layouts
      .getResource('default')
      .getTemplate();
    reflectionTemplate = TestApp.getTemplate('reflection');
  });

  beforeEach(() => {
    Handlebars.registerHelper('ifShowBreadcrumbs', function (options) {
      return options.fn(this);
    });
  });

  test(`should compile default layout with breadcrumbs`, () => {
    const reflection = testApp.findReflection('ReflectionClass');
    expect(
      TestApp.compileTemplate(layoutTemplate, {
        project: testApp.project,
        model: reflection,
        contents: 'CONTENTS',
      }),
    ).toMatchSnapshot();
  });

  test(`should compile default layout without breadcrumbs`, () => {
    Handlebars.registerHelper('ifShowBreadcrumbs', function (options) {
      return options.inverse(this);
    });
    const reflection = testApp.findReflection('ReflectionClass');
    expect(
      TestApp.compileTemplate(layoutTemplate, {
        project: testApp.project,
        model: reflection,
        contents: 'CONTENTS',
      }),
    ).toMatchSnapshot();
  });

  test(`should compile default layout with type params in title`, () => {
    const reflection = testApp.findReflection('ReflectionWithTypeParams');
    expect(
      TestApp.compileTemplate(layoutTemplate, {
        project: testApp.project,
        model: reflection,
        contents: 'CONTENTS',
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
