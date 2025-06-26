// @ts-check

const baseOptions = require('../typedoc.cjs');

const commonOptions = {
  entryPoints: ['../src/text/*.ts'],
  plugin: ['../../../dist/index.js', '../custom-plugins/navigation-plugin.mjs'],
  disableSources: true,
  textContentMappings: {
    'breadcrumbs.home': 'Home',
  },
  pageTitleTemplates: {
    index: (args) => `:tada ${args.projectName} and version ${args.version}`,
    member: (args) => `${args.group}: ${args.kind} - ${args.name}`,
    module: (args) => `${args.kind} - ${args.name}`,
  },
  locales: {
    en: {
      kind_plural_interface: 'CoolInterfaces',
      kind_plural_variable: 'CoolVars',
    },
  },
  indexFormat: 'table',
  tableColumnSettings: { leftAlignHeaders: true },
  includeVersion: true,
  propertiesFormat: 'table',
  readme: 'none',
};

/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  ...baseOptions,
  ...commonOptions,
  outputs: [
    {
      name: 'markdown',
      path: '../out/md/text/members/opts-2',
    },
    {
      name: 'markdown',
      path: '../out/md/text/modules/opts-2',
      options: {
        router: 'module',
      },
    },
  ],
};
