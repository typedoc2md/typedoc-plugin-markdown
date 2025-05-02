// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/utils/*.ts'],
  plugin: ['typedoc-plugin-markdown'],
  hidePageHeader: true,
  hideBreadcrumbs: true,
  disableSources: true,
  readme: 'none',
  expandObjects: true,
  useHTMLEncodedBrackets: true,
  parametersFormat: 'table',
};

const opts1 = {};

const opts2 = {
  useCodeBlocks: true,
  formatWithPrettier: true,
  prettierConfigFile: './test/fixtures/prettier-config/.prettierrc.json',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/utils/members/opts-1',
      options: {
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/utils/members/opts-2',
      options: {
        ...opts2,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/utils/modules/opts-1',
      options: {
        router: 'module',
        ...opts1,
      },
    },
    {
      name: 'markdown',
      path: '../out/md/utils/modules/opts-2',
      options: {
        router: 'module',
        ...opts2,
      },
    },
  ],
};
