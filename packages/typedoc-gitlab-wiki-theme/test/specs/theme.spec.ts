import * as fs from 'fs';

import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

beforeAll(async () => {
  testApp = new TestApp(['theme.ts']);
  await testApp.bootstrap({ theme: './dist', entryDocument: 'home.md' });
});
describe(`Theme:`, () => {
  test(`should write sidebar'`, async () => {
    const sidebarFile = fs.readFileSync(testApp.tmpobj.name + '/_sidebar.md');
    expect(sidebarFile.toString()).toMatchSnapshot();
  });
});
