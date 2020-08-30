import * as fs from 'fs-extra';
import { UrlMapping } from 'typedoc';
import { setup } from '../test/utils';

describe(`theme`, () => {
  function getExpectedUrls(urlMappings: UrlMapping[]) {
    const expectedUrls = [];
    urlMappings.forEach((urlMapping) => {
      expectedUrls.push(urlMapping.url);
      if (urlMapping.model.children) {
        urlMapping.model.children.forEach((reflection) => {
          expectedUrls.push(reflection.url);
        });
      }
    });
    return expectedUrls;
  }

  let app: any;
  let project: any;
  let theme: any;
  beforeAll(() => {
    ({ app, project } = setup());
    theme = app.renderer.theme;
  });

  describe(`getUrls`, () => {
    test(`should getUrls'`, () => {
      const urlMappings = app.renderer.theme.getUrls(project);
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
    });
  });

  describe(`output directory`, () => {
    let directoryListingSpy;

    beforeAll(() => {
      directoryListingSpy = jest.spyOn(fs, 'readdirSync');
    });

    test(`should test output directory true with all allowed files and directories`, () => {
      directoryListingSpy.mockReturnValue([
        '.DS_Store',
        'README.md',
        'globals.md',
        'classes',
        'enums',
        'interfaces',
        'media',
        'modules',
      ]);
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

    test(`should test output directory false with hidden files`, () => {
      directoryListingSpy.mockReturnValue(['.git', 'classes', 'enums', 'interfaces', 'media', 'modules']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with unknown folder`, () => {
      directoryListingSpy.mockReturnValue(['README.md', 'folder']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });
  });

  describe(`output directory`, () => {
    let directoryListingSpy;
    beforeAll(() => {
      directoryListingSpy = jest.spyOn(fs, 'readdirSync');
    });

    test(`should test output directory true with all allowed files and directories`, () => {
      directoryListingSpy.mockReturnValue([
        '.DS_Store',
        'README.md',
        'globals.md',
        'classes',
        'enums',
        'interfaces',
        'media',
        'modules',
      ]);
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

    test(`should test output directory false with hidden files`, () => {
      directoryListingSpy.mockReturnValue(['.git', 'classes', 'enums', 'interfaces', 'media', 'modules']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with unknown folder`, () => {
      directoryListingSpy.mockReturnValue(['README.md', 'folder']);
      expect(theme.isOutputDirectory('/path')).toBeFalsy();
    });
  });
});
