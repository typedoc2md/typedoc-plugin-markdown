import * as fs from 'fs-extra';
import { UrlMapping } from 'typedoc';
import { bootstrapTheme, getExpectedUrls } from '../../test/test.utils';
import { MarkdownTheme } from './theme';

describe(`markdown theme`, () => {
  describe(`build urls`, () => {
    test(`should getUrls and navigation for mode='modules'`, () => {
      const app = bootstrapTheme([{ name: 'mode', value: 'modules' }, { name: 'readme', value: 'none' }]);
      const theme = app.theme as MarkdownTheme;
      const urlMappings = theme.getUrls(app.project) as UrlMapping[];
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
      expect(theme.getNavigation(app.project)).toMatchSnapshot();
    });

    test(`should getUrls and navigation for mode='file' and readme='none'`, () => {
      const app = bootstrapTheme([{ name: 'mode', value: 'file' }]);
      const theme = app.theme as MarkdownTheme;
      const urlMappings = theme.getUrls(app.project) as UrlMapping[];
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
      expect(theme.getNavigation(app.project)).toMatchSnapshot();
    });
  });

  describe(`output directory`, () => {
    let directoryListingSpy: jest.SpyInstance;
    let theme: MarkdownTheme;
    beforeAll(() => {
      theme = bootstrapTheme().theme as MarkdownTheme;
      directoryListingSpy = jest.spyOn(fs, 'readdirSync');
    });

    test(`should test output directory true with all allowed files and directories`, () => {
      directoryListingSpy.mockReturnValue(['.DS_Store', 'README.md', 'globals.md', 'classes', 'enums', 'interfaces', 'media', 'modules']);
      expect(theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory true with some files directories`, () => {
      directoryListingSpy.mockReturnValue(['README.md', 'classes', 'media', 'modules']);
      expect(theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory true with just index`, () => {
      directoryListingSpy.mockReturnValue(['README.md']);
      expect(theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory false with unkown index`, () => {
      directoryListingSpy.mockReturnValue(['Unrecognised.md', 'classes', 'enums', 'interfaces', 'media', 'modules']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false without an index`, () => {
      directoryListingSpy.mockReturnValue(['globals.md', 'classes', 'enums', 'interfaces', 'media', 'modules']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with unknown folder`, () => {
      directoryListingSpy.mockReturnValue(['README.md', 'folder']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });
  });
});
