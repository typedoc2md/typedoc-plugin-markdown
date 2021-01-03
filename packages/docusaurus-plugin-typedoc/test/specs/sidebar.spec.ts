import * as fs from 'fs';
import * as path from 'path';

import * as tmp from 'tmp';

import { TestApp } from '../../../typedoc-plugin-markdown/test/test-app';
import { writeSidebar } from '../../dist/sidebar';
import { SidebarOptions } from '../../dist/types';

tmp.setGracefulCleanup();

describe(`Sidebar:`, () => {
  let testApp: TestApp;

  beforeAll(async () => {
    testApp = new TestApp(['theme.ts']);
    await testApp.bootstrap({
      entryFile: 'index.md',
      theme: path.resolve(__dirname, '..', '..', 'dist', 'theme'),
    });
  });

  test(`should write sidebar with default ('api') out`, () => {
    const tmpobj = tmp.dirSync();
    const navigation = testApp.theme.getNavigation(testApp.project);
    const sidebarFile = 'sidebars.js';
    const sidebarOptions: SidebarOptions = {
      fullNames: false,
      sidebarFile,
      globalsLabel: 'Globals',
      readmeLabel: 'README',
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
    writeSidebar(true, tmpobj.name, 'api', sidebarOptions, navigation);
    const sidebar = fs.readFileSync(path.resolve(tmpobj.name, sidebarFile));
    expect(sidebar.toString()).toMatchSnapshot();
  });

  test(`should write sidebar with root ('') out`, () => {
    const tmpobj = tmp.dirSync();
    const navigation = testApp.theme.getNavigation(testApp.project);
    const sidebarFile = 'sidebars/newSidebar.js';
    const sidebarOptions: SidebarOptions = {
      fullNames: false,
      sidebarFile,
      globalsLabel: 'Globals',
      readmeLabel: 'README',
    };
    writeSidebar(true, tmpobj.name, '', sidebarOptions, navigation);
    const sidebar = fs.readFileSync(path.resolve(tmpobj.name, sidebarFile));
    expect(sidebar.toString()).toMatchSnapshot();
  });

  test(`should write empty sidebar if output check fails`, () => {
    const tmpobj = tmp.dirSync();
    const navigation = testApp.theme.getNavigation(testApp.project);
    const sidebarFile = 'sidebars/newSidebar.js';
    const sidebarOptions: SidebarOptions = {
      fullNames: false,
      sidebarFile,
      globalsLabel: 'Globals',
      readmeLabel: 'README',
    };
    writeSidebar(false, tmpobj.name, '', sidebarOptions, navigation);
    const sidebar = fs.readFileSync(path.resolve(tmpobj.name, sidebarFile));
    expect(sidebar.toString()).toMatchSnapshot();
  });
});
