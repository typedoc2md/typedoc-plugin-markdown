import * as fs from 'fs';

import { TestApp } from '../test-app';

describe(`Theme:`, () => {
  describe(`(getNavigation)`, () => {
    test(`should getNavigation'`, async () => {
      const testApp = new TestApp(['theme.ts']);
      await testApp.bootstrap();
      const navigation = testApp.theme.getNavigation(testApp.project);
      expect(JSON.stringify(navigation, null, 1)).toMatchSnapshot();
    });

    test(`should getNavigation for exports'`, async () => {
      const testApp = new TestApp(['theme.ts']);
      await testApp.bootstrap();
      const navigation = testApp.theme
        .getNavigation(testApp.project)
        .children.map((child) => ({ title: child.title, url: child.url }));
      expect(navigation).toMatchSnapshot();
    });

    test(`should getNavigation for exports with readme=none'`, async () => {
      const testApp = new TestApp(['theme.ts']);
      await testApp.bootstrap({ readme: 'none' });
      const navigation = testApp.theme
        .getNavigation(testApp.project)
        .children.map((child) => ({ title: child.title, url: child.url }));
      expect(navigation).toMatchSnapshot();
    });

    test(`should getNavigation for modules'`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap();
      const navigation = testApp.theme
        .getNavigation(testApp.project)
        .children.map((child) => ({ title: child.title, url: child.url }));
      expect(navigation).toMatchSnapshot();
    });

    test(`should getNavigation for modules with readme=none'`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({ readme: 'none' });
      const navigation = testApp.theme
        .getNavigation(testApp.project)
        .children.map((child) => ({ title: child.title, url: child.url }));
      expect(navigation).toMatchSnapshot();
    });
  });

  describe(`(getUrls)`, () => {
    beforeAll(() => {});
    test(`should getUrls'`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap();
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
    });

    test(`should getUrls with 'allReflectionsHaveOwnDocument' set`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({ allReflectionsHaveOwnDocument: true });
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
    });

    test(`should getUrls with readme 'none'`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({ readme: 'none' });
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
    });
  });

  describe(`(filenameSeparator)`, () => {
    test(`should getUrls with custom separator'`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({ filenameSeparator: '-' });
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
    });
  });

  describe(`(entryDocument)`, () => {
    test(`should getUrls with custom entryDocument'`, async () => {
      const testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
      await testApp.bootstrap({ entryDocument: 'index.md' });
      const urlMappings = testApp.theme.getUrls(testApp.project);
      expect(TestApp.getExpectedUrls(urlMappings)).toMatchSnapshot();
    });
  });

  describe(`(isOutputDirectory)`, () => {
    let testApp: TestApp;
    beforeAll(() => {
      testApp = new TestApp(['breadcrumbs.ts', 'theme.ts']);
    });
    let directoryListingSpy: jest.SpyInstance;

    beforeAll(async () => {
      await testApp.bootstrap();
      directoryListingSpy = jest.spyOn(fs, 'readdirSync');
    });

    afterAll(() => {
      directoryListingSpy.mockRestore();
    });

    test(`should test output directory true with all allowed files and directories`, () => {
      directoryListingSpy.mockReturnValue([
        '.DS_Store',
        'README.md',
        'modules.md',
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
