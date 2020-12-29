import * as path from 'path';

import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';

import { TestApp } from '../test-app';

describe(`Plugin:`, () => {
  let testApp: TestApp;
  const defaultMarkdownThemePath = path.resolve(__dirname, '..', '..', 'dist');

  beforeAll(() => {
    testApp = new TestApp(['theme.ts']);
  });

  describe(`(load theme)`, () => {
    afterEach(() => {
      testApp.app.renderer.theme = undefined;
      testApp.app.renderer.removeComponent('theme');
    });

    test(`should load markdown theme by default`, async () => {
      await testApp.bootstrap();
      expect(testApp.theme instanceof MarkdownTheme).toBeTruthy();
      expect(testApp.theme.basePath).toEqual(defaultMarkdownThemePath);
    });

    test(`should load custom markdown theme by path'`, async () => {
      const customThemePath = path.resolve(
        __dirname,
        '..',
        'stubs',
        'custom-theme',
      );
      await testApp.bootstrap({
        theme: customThemePath,
      });
      expect(testApp.theme instanceof MarkdownTheme).toBeTruthy();
      expect(testApp.theme.basePath).toEqual(customThemePath);
    });

    test(`should load markdown theme with unrecognised theme'`, async () => {
      await testApp.bootstrap({ theme: 'minimal' });
      expect(testApp.theme instanceof MarkdownTheme).toBeTruthy();
      expect(testApp.theme.basePath).toEqual(defaultMarkdownThemePath);
    });
  });
});
