import * as fs from 'fs';

import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

describe(`Theme:`, () => {
  describe(`sidebar`, () => {
    test(`should write sidebar for exports'`, async () => {
      testApp = new TestApp(['theme.ts']);
      await testApp.bootstrap({
        theme: 'github-wiki',
      });
      const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_Sidebar.md');
      expect(sidebarFile.toString()).toMatchSnapshot();
    });
    test(`should write sidebar for modules'`, async () => {
      testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({
        theme: 'github-wiki',
        readme: 'none',
      });
      const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_Sidebar.md');
      expect(sidebarFile.toString()).toMatchSnapshot();
    });
  });
});
