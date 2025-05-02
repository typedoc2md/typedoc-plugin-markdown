// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: [
    '../src/modules/module-2',
    '../src/modules/module-1',
    '../src/modules/module-3',
  ],
  plugin: [
    'typedoc-plugin-markdown',
    '../custom-plugins/navigation-plugin.mjs',
  ],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
  excludeScopesInPaths: true,
  entryPointStrategy: 'expand',
};

const opts1 = {};

const opts2 = {
  flattenOutputFiles: true,
  navigationModel: {
    excludeFolders: true,
  },
  modulesFileName: 'documentation.md',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/modules/members/opts-1',
      options: {
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/modules/members/opts-2',
      options: {
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/modules/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/modules/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
