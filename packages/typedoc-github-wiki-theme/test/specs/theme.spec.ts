import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

beforeAll(() => {
  testApp = new TestApp(['theme.ts']);
});
describe(`Theme:`, () => {
  test(`should getUrls'`, async () => {
    await testApp.bootstrap({ entryFile: 'Home.md', theme: './dist' });
    const urlMappings = testApp.theme.getUrls(testApp.project);
    expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
  });
});
