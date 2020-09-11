import { TestApp } from 'typedoc-plugin-markdown/test/test-app';

let testApp: TestApp;

beforeAll(() => {
  testApp = new TestApp(['theme.ts']);
});
describe(`Theme:`, () => {
  test(`should getUrls by path'`, () => {
    testApp.bootstrap({ theme: './dist' });
    const urlMappings = testApp.theme.getUrls(testApp.project);
    expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
  });
  test(`should getUrls by name'`, () => {
    testApp.bootstrap({ theme: 'bitbucket' });
    const urlMappings = testApp.theme.getUrls(testApp.project);
    expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
  });
});
