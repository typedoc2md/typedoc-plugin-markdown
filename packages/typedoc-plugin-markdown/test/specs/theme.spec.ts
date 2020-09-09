import * as fs from 'fs-extra';
import { UrlMapping } from 'typedoc';

import { TestApp } from '../test-app';

describe(`Theme:`, () => {
  function getExpectedUrls(urlMappings: UrlMapping[]) {
    const expectedUrls = [];
    urlMappings.forEach((urlMapping) => {
      expectedUrls.push(urlMapping.url);
      if (urlMapping.model.children) {
        urlMapping.model.children.forEach((reflection) => {
          if (!reflection.hasOwnDocument) {
            expectedUrls.push(reflection.url);
          }
        });
      }
    });
    return expectedUrls;
  }

  let testApp: TestApp;

  beforeAll(() => {
    testApp = new TestApp(['theme.ts']);
  });

  describe(`(getUrls)`, () => {
    test(`should getUrls'`, () => {
      testApp.bootstrap();
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
    });

    test(`should getUrls with readme 'none'`, () => {
      testApp.bootstrap({ readme: 'none' });
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(getExpectedUrls(urlMappings)).toMatchSnapshot();
    });
  });

  describe(`(isOutputDirectory)`, () => {
    let directoryListingSpy;

    beforeAll(() => {
      testApp.bootstrap();
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
      expect(testApp.theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory true with some files directories`, () => {
      directoryListingSpy.mockReturnValue([
        'README.md',
        'classes',
        'media',
        'modules',
      ]);
      expect(testApp.theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory true with just index`, () => {
      directoryListingSpy.mockReturnValue(['README.md']);
      expect(testApp.theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory false with unkown index`, () => {
      directoryListingSpy.mockReturnValue([
        'Unrecognised.md',
        'classes',
        'enums',
        'interfaces',
        'media',
        'modules',
      ]);
      expect(testApp.theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with hidden files`, () => {
      directoryListingSpy.mockReturnValue([
        '.git',
        'classes',
        'enums',
        'interfaces',
        'media',
        'modules',
      ]);
      expect(testApp.theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with unknown folder`, () => {
      directoryListingSpy.mockReturnValue(['README.md', 'folder']);
      expect(testApp.theme.isOutputDirectory('/path')).toBeFalsy();
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
      expect(testApp.theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory true with some files directories`, () => {
      directoryListingSpy.mockReturnValue([
        'README.md',
        'classes',
        'media',
        'modules',
      ]);
      expect(testApp.theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory true with just index`, () => {
      directoryListingSpy.mockReturnValue(['README.md']);
      expect(testApp.theme.isOutputDirectory('/path')).toBeTruthy();
    });

    test(`should test output directory false with unkown index`, () => {
      directoryListingSpy.mockReturnValue([
        'Unrecognised.md',
        'classes',
        'enums',
        'interfaces',
        'media',
        'modules',
      ]);
      expect(testApp.theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with hidden files`, () => {
      directoryListingSpy.mockReturnValue([
        '.git',
        'classes',
        'enums',
        'interfaces',
        'media',
        'modules',
      ]);
      expect(testApp.theme.isOutputDirectory('/path')).toBeFalsy();
    });

    test(`should test output directory false with unknown folder`, () => {
      directoryListingSpy.mockReturnValue(['README.md', 'folder']);
      expect(testApp.theme.isOutputDirectory('/path')).toBeFalsy();
    });
  });
});
