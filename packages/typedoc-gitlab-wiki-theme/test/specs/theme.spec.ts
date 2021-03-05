import * as fs from 'fs';

import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';
import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

beforeAll(async () => {
  testApp = new TestApp(['theme.ts']);
  await testApp.bootstrap({ theme: './dist', entryDocument: 'home.md' });
});
describe(`Theme:`, () => {
  test(`should getUrls'`, async () => {
    const urlMappings = testApp.theme.getUrls(testApp.project);
    expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
  });
  test(`should write sidebar'`, async () => {
    const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_sidebar.md');
    expect(sidebarFile.toString()).toMatchSnapshot();
  });
  describe(`(relativeUrls)`, () => {
    test(`should convert a url'`, async () => {
      expect(
        MarkdownTheme.HANDLEBARS.helpers.relativeURL('SomeClass.md'),
      ).toEqual('../SomeClass');
    });
    test(`should convert a url with ancor'`, async () => {
      expect(
        MarkdownTheme.HANDLEBARS.helpers.relativeURL('SomeClass.md#anchor'),
      ).toEqual('../SomeClass#anchor');
    });
  });
});
