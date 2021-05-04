import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Reflections:`, () => {
  let testApp: TestApp;
  let reflectionTemplate: Handlebars.TemplateDelegate;

  beforeAll(() => {
    testApp = new TestApp(['reflections.ts']);
  });

  describe(`(header)`, () => {
    beforeEach(async () => {
      await testApp.bootstrap({
        hideBreadcrumbs: false,
        hidePageTitle: true,
      });
      TestApp.stubPartials(['comment', 'member.signature', 'members']);
      TestApp.stubHelpers(['toc', 'breadcrumbs', 'hierarchy']);
      reflectionTemplate = TestApp.getTemplate('reflection');
    });
    test(`should compile template with breadcrumbs and without title`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.project.children[0],
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });
  });

  describe(`(template)`, () => {
    beforeEach(async () => {
      await testApp.bootstrap({
        hideBreadcrumbs: true,
        hidePageTitle: false,
      });
      TestApp.stubPartials(['index', 'comment', 'member.signature', 'members']);
      TestApp.stubHelpers(['breadcrumbs', 'hierarchy']);
      reflectionTemplate = TestApp.getTemplate('reflection');
    });

    test(`should compile module with breadcrumbs and project title`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.project.children[0],
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile reflection with type params`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findReflection('ReflectionWithTypeParams'),
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile a callable reflection`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findReflection('CallableReflection'),
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile an indexable reflection`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findReflection('IndexableReflection'),
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile implemented class`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findReflection('ImplementedClass'),
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });
  });
});
