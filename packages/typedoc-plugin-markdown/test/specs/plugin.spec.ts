import * as path from 'path';

import MarkdownTheme from 'typedoc-plugin-markdown/dist/theme';

import { TestApp } from '../test-app';

describe(`Plugin:`, () => {
  const defaultMarkdownThemePath = path.resolve(__dirname, '..', '..', 'dist');

  describe(`(load theme)`, () => {
    let testApp: TestApp;
    beforeEach(() => {
      testApp = new TestApp(['theme.ts']);
    });
    afterEach(() => {
      testApp.app.renderer.theme = undefined;
      testApp.app.renderer.removeComponent('theme');
    });

    test(`should load markdown theme by default`, async () => {
      await testApp.bootstrap();
      expect(testApp.theme instanceof MarkdownTheme).toBeTruthy();
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
    });

    test(`should not load markdown theme with unrecognised theme'`, async () => {
      await testApp.bootstrap({ theme: 'minimal' });
      expect(testApp.theme instanceof MarkdownTheme).toBeFalsy();
    });
  });
});
