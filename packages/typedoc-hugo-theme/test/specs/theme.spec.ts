import * as fs from 'fs';

import { TestApp } from 'typedoc-plugin-markdown/test/test-app';
import { PageEvent } from 'typedoc/dist/lib/output/events';

let testApp: TestApp;

describe(`Theme:`, () => {
  beforeAll(async () => {
    testApp = new TestApp(['theme.ts']);
    await testApp.bootstrap({
      theme: './dist',
      entryDocument: '_index.md',
      indexTitle: 'Test API',
    });
  });
  test(`should getUrls'`, async () => {
    const urlMappings = testApp.theme.getUrls(testApp.project);
    expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
  });
  describe(`(YAML)`, () => {
    test(`should prepend YAML block to start of page`, async () => {
      const page = {
        project: { url: 'modules.md' },
        model: { name: 'SomeClass', kindString: 'Class' },
        url: 'classes/someclass.md',
        contents: 'CONTENTS',
      } as PageEvent;
      (testApp.theme as any).onHugoPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set entry page without a readme`, async () => {
      const page = {
        project: { url: '_index.md' },
        url: '_index.md',
        contents: 'CONTENTS',
      } as PageEvent;
      (testApp.theme as any).onHugoPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set entry page with a readme`, async () => {
      const page = {
        project: { url: 'modules.md' },
        url: '_index.md',
        contents: 'CONTENTS',
      } as PageEvent;
      (testApp.theme as any).onHugoPageEnd(page);
      expect(page.contents).toMatchSnapshot();
    });

    test(`should set modules page`, async () => {
      const page = {
        project: { url: 'modules.md' },
        url: 'modules.md',
        contents: 'CONTENTS',
      } as PageEvent;
      (testApp.theme as any).onHugoPageEnd(page);
      expect(page.contents).toMatchSnapshot();
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
