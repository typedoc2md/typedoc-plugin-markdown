import * as fs from 'fs';
import * as path from 'path';

import * as tmp from 'tmp';

import { TestApp } from '../../../typedoc-plugin-markdown/test/test-app';
import { writeSidebar } from '../../dist/sidebar';
import { SidebarOptions } from '../../dist/types';

tmp.setGracefulCleanup();

describe(`Sidebar:`, () => {
  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['theme.ts']);
    testApp.bootstrap({
      theme: path.resolve(__dirname, '..', '..', 'dist', 'theme'),
    });
  });

  test(`should merge existing sidebar with a parent category`, () => {
    const tmpobj = tmp.dirSync();
    const navigation = testApp.theme.getNavigation(testApp.project);
    const sidebarFile = 'sidebars.js';
    const sidebarOptions: SidebarOptions = {
      fullNames: false,
      parentCategory: 'API',
      sidebarFile,
    };
    const sidebarsContent = `module.exports = {
      "someSidebar": {
        "Docusaurus": [
          "doc1",
        ],
        "Features": [
          "mdx"
        ]
      }
    };`;
    fs.writeFileSync(path.resolve(tmpobj.name, sidebarFile), sidebarsContent);
    writeSidebar(tmpobj.name, 'api', sidebarOptions, navigation);
    const sidebar = fs.readFileSync(path.resolve(tmpobj.name, sidebarFile));
    expect(sidebar.toString()).toMatchSnapshot();
  });

  test(`should write to a new sidebar with custom id and root docs`, () => {
    const tmpobj = tmp.dirSync();
    const navigation = testApp.theme.getNavigation(testApp.project);
    const sidebarFile = 'sidebars/newSidebar.js';
    const sidebarOptions: SidebarOptions = {
      fullNames: false,
      parentCategory: 'none',
      sidebarFile,
    };
    writeSidebar(tmpobj.name, '', sidebarOptions, navigation);
    const sidebar = fs.readFileSync(path.resolve(tmpobj.name, sidebarFile));
    expect(sidebar.toString()).toMatchSnapshot();
  });
});
