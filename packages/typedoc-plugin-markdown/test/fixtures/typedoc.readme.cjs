// @ts-check

const baseOptions = require('./typedoc.cjs');

/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
module.exports = {
  ...baseOptions,
  pageTitleTemplates: {
    index: 'My API - {version}',
  },
};
