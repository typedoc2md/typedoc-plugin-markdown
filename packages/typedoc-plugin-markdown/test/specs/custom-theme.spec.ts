import * as path from 'path';
import { TestApp } from '../test-app';

describe(`CustomTheme:`, () => {
  let testApp: TestApp;

  beforeAll(async () => {
    testApp = new TestApp(['breadcrumbs.ts']);
    const customThemePath = path.resolve(
      __dirname,
      '..',
      'stubs',
      'custom-theme',
    );
    await testApp.bootstrap({
      theme: customThemePath,
    });
  });

  test(`should load custom theme`, () => {
    expect(testApp.theme.basePath).toMatchSnapshot();
  });
});
