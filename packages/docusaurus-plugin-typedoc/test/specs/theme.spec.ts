import * as Handlebars from 'handlebars';
import { TestApp } from '../../../typedoc-plugin-markdown/test/test-app';

describe(`Theme:`, () => {
  let testApp: TestApp;
  let reflectionTemplate: Handlebars.TemplateDelegate;

  beforeAll(async () => {
    testApp = new TestApp(['theme.ts']);
    await testApp.bootstrap();
    TestApp.stubPartials(['index', 'comment', 'member.signature', 'members']);
    TestApp.stubHelpers(['breadcrumbs', 'hierarchy']);
    reflectionTemplate = TestApp.getTemplate('reflection');
  });

  describe(`(header)`, () => {
    test(`should compile with module without subtitle`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.project.children[0],
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile with module with subtitle`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findReflection('InterfaceItemA').children[0],
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });
  });
});
