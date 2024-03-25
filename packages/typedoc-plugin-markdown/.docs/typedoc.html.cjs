// @ts-check

/**
 * @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('typedoc-plugin-markdown').PluginOptions>}
 */
const options = {
  ...require('./typedoc.base.cjs'),
  out: './html',
  navigation: {
    includeCategories: true,
    includeGroups: true,
  },
  plugin: ['./plugins/typedoc-ignore-typeparam.mjs'],
};
module.exports = options;
