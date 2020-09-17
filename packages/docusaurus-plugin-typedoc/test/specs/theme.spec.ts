import * as path from 'path';

import * as Handlebars from 'handlebars';

import { TestApp } from '../../../typedoc-plugin-markdown/test/test-app';
import DocusaurusTheme from '../../src/theme/theme';

describe(`Theme:`, () => {
  let testApp: TestApp;
  let reflectionTemplate: Handlebars.TemplateDelegate;

  beforeAll(() => {
    testApp = new TestApp(['theme.ts']);
    testApp.bootstrap({
      theme: path.resolve(__dirname, '..', '..', 'dist', 'theme'),
    });
    TestApp.stubPartials(['index', 'comment', 'member.signature', 'members']);
    TestApp.stubHelpers(['breadcrumbs', 'hierarchy']);
    reflectionTemplate = TestApp.getTemplate('reflection');
  });

  describe(`(mdx)`, () => {
    test(`should escape angle brackets and quotes for full mdx support`, () => {
      const content = 'Escape \\<angle-brackets> and \\"quotes\\"';
      expect(DocusaurusTheme.formatContents(content)).toMatchSnapshot();
    });
  });

  describe(`(header)`, () => {
    test(`should compile with module without subtitle`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findModule('theme'),
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });

    test(`should compile with module with subtitle`, () => {
      expect(
        TestApp.compileTemplate(reflectionTemplate, {
          model: testApp.findReflection('InterfaceItemA'),
          project: testApp.project,
        }),
      ).toMatchSnapshot();
    });
  });
});
