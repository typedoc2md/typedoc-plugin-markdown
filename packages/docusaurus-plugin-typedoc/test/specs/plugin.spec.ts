import * as path from 'path';

import { LoadContext } from '@docusaurus/types';

const mockAppBootstrap = jest.fn();
const mockAppConvert = jest.fn().mockImplementation(() => true);
const mockExpandInputFiles = jest.fn();
const mockGenerateDocs = jest.fn();
const mockWriteSidebar = jest.fn();

jest.mock('typedoc', () => {
  return {
    Application: jest.fn().mockImplementation(() => {
      return {
        bootstrap: mockAppBootstrap,
        convert: mockAppConvert,
        generateDocs: mockGenerateDocs,
        expandInputFiles: mockExpandInputFiles,
        renderer: {
          addComponent: jest.fn(),
          getComponent: jest.fn().mockImplementation(() => {
            return {
              getNavigation: jest.fn().mockImplementation(() => []),
            };
          }),
        },
      };
    }),
  };
});

jest.mock('../../dist/components/front-matter-component');

jest.mock('../../dist/sidebar', () => {
  return {
    writeSidebar: mockWriteSidebar,
  };
});

describe(`Plugin:`, () => {
  let plugin;
  const context = { siteDir: '/siteDir' } as LoadContext;
  const defaultOptions = {
    plugin: ['typedoc-plugin-markdown'],
    theme: path.resolve(__dirname, '..', '..', 'dist', 'theme'),
  };
  beforeEach(() => {
    mockAppBootstrap.mockClear();
    mockGenerateDocs.mockClear();
    mockExpandInputFiles.mockClear();
    mockWriteSidebar.mockClear();
    jest.isolateModules(() => {
      plugin = require('../../dist/plugin').default;
    });
  });

  describe(`(typedoc options):`, () => {
    test('should bootstrap with default options', async () => {
      await plugin(context, {}).loadContent();
      expect(mockAppBootstrap).toHaveBeenCalledWith(defaultOptions);
    });

    test('should bootstrap with default options', async () => {
      await plugin(context, {}).loadContent();
      expect(mockAppBootstrap).toHaveBeenCalledWith(defaultOptions);
    });

    test('should bootstrap with additional options', async () => {
      await plugin(context, { mode: 'file' }).loadContent();
      expect(mockAppBootstrap).toHaveBeenCalledWith({
        ...defaultOptions,
        mode: 'file',
      });
    });

    test('should bootstrap with additional typedoc plugin', async () => {
      await plugin(context, { plugin: ['typedoc-plugin-xyz'] }).loadContent();
      expect(mockAppBootstrap).toHaveBeenCalledWith({
        ...defaultOptions,
        plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-xyz'],
      });
    });

    test('should not duplicate markdown plugin', async () => {
      await plugin(context, {
        plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-xyz'],
      }).loadContent();
      expect(mockAppBootstrap).toHaveBeenCalledWith({
        ...defaultOptions,
        plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-xyz'],
      });
    });
  });
  describe(`(plugin options):`, () => {
    test('should set default input files', async () => {
      await plugin(context, {}).loadContent();
      expect(mockExpandInputFiles).toHaveBeenCalledWith(['../src/']);
    });
    test('should set custom input files', async () => {
      await plugin(context, { inputFiles: ['../../lib'] }).loadContent();
      expect(mockExpandInputFiles).toHaveBeenCalledWith(['../../lib']);
    });
    test('should set default output directory', async () => {
      await plugin(context, {}).loadContent();
      expect(mockGenerateDocs).toHaveBeenCalledWith(
        true,
        context.siteDir + '/docs/api',
      );
    });
    test('should set custom output directory', async () => {
      await plugin(context, { out: 'myapi' }).loadContent();
      expect(mockGenerateDocs).toHaveBeenCalledWith(
        true,
        context.siteDir + '/docs/myapi',
      );
    });
    test('should set in root dir', async () => {
      await plugin(context, { out: '' }).loadContent();
      const outputDirectory = context.siteDir + '/docs';
      expect(mockGenerateDocs).toHaveBeenLastCalledWith(true, outputDirectory);
    });
  });

  describe(`(sidebar options):`, () => {
    test('should write sidebar with default options', async () => {
      await plugin(context, {}).loadContent();
      expect(mockWriteSidebar).toHaveBeenLastCalledWith(
        context.siteDir,
        'api',
        {
          parentCategory: 'none',
          fullNames: false,
          sidebarFile: 'sidebars.js',
        },
        [],
      );
    });
    test('should write sidebar with merge sidebar options', async () => {
      await plugin(context, {
        sidebar: { sidebarFile: 'customSidebar.js' },
      }).loadContent();
      expect(mockWriteSidebar).toHaveBeenLastCalledWith(
        context.siteDir,
        'api',
        {
          parentCategory: 'none',
          fullNames: false,
          sidebarFile: 'customSidebar.js',
        },
        [],
      );
    });

    test('should not write sidebar if null', async () => {
      await plugin(context, { sidebar: null }).loadContent();
      expect(mockWriteSidebar).toHaveBeenCalledTimes(0);
    });
  });
});
