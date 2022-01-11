import * as fs from 'fs';

import { load } from '../../src/index';
import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

describe(`Theme:`, () => {
  describe(`sidebar`, () => {
    test(`should write sidebar for exports'`, async () => {
      testApp = new TestApp(['theme.ts']);
      await testApp.bootstrap({
        theme: 'github-wiki',
        plugin: ['typedoc-github-wiki-theme'],
      });
      const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_Sidebar.md');
      expect(sidebarFile.toString()).toMatchSnapshot();
    });
    test(`should write sidebar for modules'`, async () => {
      testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({
        theme: 'github-wiki',
        readme: 'none',
        plugin: ['typedoc-github-wiki-theme'],
      });
      const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_Sidebar.md');
      expect(sidebarFile.toString()).toMatchSnapshot();
    });
  });
});
