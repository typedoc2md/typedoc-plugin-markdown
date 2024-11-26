// @ts-check

const baseOptions = require('./typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
module.exports = {
  ...baseOptions,
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
      theme_index: 'TOC',
      kind_plural_interface: 'CoolInterfaces',
      kind_plural_variable: 'CoolVars',
    },
  },
};
