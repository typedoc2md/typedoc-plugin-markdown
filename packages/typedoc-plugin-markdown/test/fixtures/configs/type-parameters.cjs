// @ts-check

const baseOptions = require('../typedoc.cjs');

// Declaration references cannot target type parameters, so unlike the links
// fixture this resolves `{@link}` through TypeScript.
const commonOptions = {
  entryPoints: ['../src/links/type-parameters.ts'],
  plugin: ['../../../dist/index.js'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
  readme: 'none',
  useTsLinkResolution: true,
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/type-parameters/modules/opts-1',
      options: {
        router: 'module',
      },
    },
    {
      name: 'markdown',
      path: '../out/md/type-parameters/modules/opts-2',
      options: {
        router: 'module',
        interfacePropertiesFormat: 'table',
        parametersFormat: 'table',
      },
    },
    {
      name: 'markdown',
      path: '../out/md/type-parameters/modules/opts-3',
      options: {
        router: 'module',
        useHTMLAnchors: true,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/type-parameters/modules/opts-4',
      options: {
        router: 'module',
        parametersFormat: 'none',
      },
    },
  ],
};
