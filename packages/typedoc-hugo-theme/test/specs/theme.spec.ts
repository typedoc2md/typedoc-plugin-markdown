import * as fs from 'fs';
import * as path from 'path';
import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

describe(`Theme:`, () => {
  beforeAll(async () => {
    testApp = new TestApp(['theme.ts']);
    await testApp.bootstrap({
      plugin: [path.join(__dirname, '..', '..', 'dist')],
      theme: 'hugo',
      entryDocument: '_index.md',
      indexTitle: 'Test API',
    });
  });

  describe(`(branch bundles)`, () => {
    test(`should write interfaces _index.md`, async () => {
      const interfacesFile = fs.readFileSync(
        testApp.tmpobj.name + '/interfaces/_index.md',
      );
      expect(interfacesFile.toString()).toMatchSnapshot();
    });
    test(`should write classes _index.md`, async () => {
      const interfacesFile = fs.readFileSync(
        testApp.tmpobj.name + '/classes/_index.md',
      );
      expect(interfacesFile.toString()).toMatchSnapshot();
    });
  });
});
