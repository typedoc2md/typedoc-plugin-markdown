import * as fs from 'fs-extra';
import { ProjectReflection } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { bootstrapTheme, getNavigationMock } from '../../test/test.utils';
import { MarkdownPlugin } from '../plugin';
import { DocusaurusTheme } from './theme.docusaurus';

describe(`docusaurus theme`, () => {
  let theme: DocusaurusTheme;

  beforeAll(() => {
    theme = bootstrapTheme([{ name: 'platform', value: 'docusaurus' }]).theme as DocusaurusTheme;
    theme.navigation = getNavigationMock();
  });

  describe(`summary`, () => {
    test(`should display warning if can't find docs directory`, () => {
      jest.spyOn(fs, 'existsSync').mockImplementation(path => path === '/out/docusaurus/docs');
      jest.spyOn(theme.application.logger, 'warn').mockImplementation();
      jest.spyOn(theme, 'writeSideBar').mockImplementation();
      theme.onRendererEnd({ outputDirectory: '/outPath/myapi' } as RendererEvent);
      expect(theme.application.logger.warn).toHaveBeenCalled();
      expect(theme.writeSideBar).toHaveBeenCalledTimes(0);
    });

    test(`should writesidebar if docusaurs root is returned`, () => {
      jest.spyOn(fs, 'existsSync').mockImplementation(path => path === '/out/docusaurus/docs');
      jest.spyOn(theme.application.logger, 'warn').mockImplementation();
      jest.spyOn(theme, 'writeSideBar').mockImplementation();
      theme.onRendererEnd({ outputDirectory: '/out/docusaurus/docs/myapi' } as RendererEvent);
      expect(theme.writeSideBar).toHaveBeenCalledWith(`/out/docusaurus/docs/myapi`, '/out/docusaurus/');
    });
  });

  describe(`find docusaurus root`, () => {
    beforeAll(() => {
      jest.spyOn(fs, 'existsSync').mockImplementation(path => path === '/out/docusaurus/docs');
    });

    test(`should return null if path does not contain a docs directory`, () => {
      expect(theme.findDocusaurusRoot('/out')).toBeNull();
    });

    test(`should return docusaurus root if path is docs`, () => {
      expect(theme.findDocusaurusRoot(`/out/docusaurus/docs`)).toEqual('/out/docusaurus/');
    });

    test(`should return docusaurus root if path is a child of docs`, () => {
      expect(theme.findDocusaurusRoot(`/out/docusaurus/docs/myapi`)).toEqual('/out/docusaurus/');
    });
  });

  describe(`sidebar`, () => {
    beforeAll(() => {
      theme.navigation = getNavigationMock();
      jest.spyOn(fs, 'writeFileSync').mockImplementation();
      jest.spyOn(fs, 'mkdirSync').mockImplementation();
    });

    test(`should write a new sidebar on a child directory`, () => {
      jest.spyOn(fs, 'existsSync').mockReturnValue(false);
      jest.spyOn(theme, 'writeSideBar').mockRestore();
      MarkdownPlugin.project = { url: 'globals.md', packageInfo: { name: 'my-project' } } as ProjectReflection;
      const expected = {
        ['my-project']: {
          Introduction: ['myapi/index', 'myapi/globals'],
          Section: ['myapi/sub-section-1', 'myapi/sub-section-2'],
        },
      };
      theme.writeSideBar('/out/docusaurus/docs/myapi', '/out/docusaurus/');
      expect(fs.writeFileSync).toHaveBeenCalledWith('/out/docusaurus/website/sidebars.json', JSON.stringify(expected, null, 2));
    });

    test(`should update existing sidebar on a the root directory`, () => {
      jest.spyOn(fs, 'existsSync').mockReturnValue(true);
      MarkdownPlugin.project = { url: 'index.md', packageInfo: { name: 'my-project' } } as ProjectReflection;
      jest.spyOn(theme, 'writeSideBar').mockRestore();
      jest.spyOn(fs, 'readFileSync').mockReturnValue(
        new Buffer(`{
          "docs": {
            "Docusaurus": ["doc1"]
          }
        }
        `),
      );
      const expected = {
        docs: { Docusaurus: ['doc1'] },
        ['my-project']: {
          Introduction: ['index'],
          Section: ['sub-section-1', 'sub-section-2'],
        },
      };
      theme.writeSideBar('/out/docusaurus/docs', '/out/docusaurus/');
      expect(fs.writeFileSync).toHaveBeenCalledWith('/out/docusaurus/website/sidebars.json', JSON.stringify(expected, null, 2));
    });
  });
});
