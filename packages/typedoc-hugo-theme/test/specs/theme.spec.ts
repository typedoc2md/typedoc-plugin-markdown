import { TestApp } from 'typedoc-plugin-markdown/test/test-app';
import { PageEvent } from 'typedoc/dist/lib/output/events';

let testApp: TestApp;

describe(`Theme:`, () => {
  beforeAll(async () => {
    testApp = new TestApp(['theme.ts']);
    await testApp.bootstrap({ theme: './dist' });
  });
  test(`should getUrls'`, async () => {
    const urlMappings = testApp.theme.getUrls(testApp.project);
    expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
  });

  test(`should prepend YAML block to start of page`, async () => {
    const page = {
      project: { url: 'index.md' },
      model: { name: 'SomeClass' },
      url: 'classes/someclass.md',
      contents: 'CONTENTS',
    } as PageEvent;
    (testApp.theme as any).onHugoPageEnd(page);
    expect(page.contents).toMatchSnapshot();
  });
});
