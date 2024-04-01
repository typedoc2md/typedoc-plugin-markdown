// @ts-check

/**
 * @type {Partial<import('typedoc').TypeDocOptions> & Partial<import('typedoc-plugin-markdown').PluginOptions>}
 */
const options = {
  ...require('./typedoc.base.cjs'),
  plugin: [
    'typedoc-plugin-markdown',
    './plugins/typedoc-nextra.mjs',
    './plugins/typedoc-ignore-typeparam.mjs',
  ],
  out: '../../../docs/pages/api-docs',
  publicPath: '/api-docs',
  indexFormat: 'table',
  mergeReadme: true,
  fileExtension: '.mdx',
  entryFileName: 'index.mdx',
  hideBreadcrumbs: true,
  hidePageHeader: true,
  excludeGroups: true,
  parametersFormat: 'table',
  outputFileStrategy: 'members',
  useCodeBlocks: false,
  textContentMappings: {
    'title.memberPage': '{name}',
  },
  expandParameters: true,
  flattenOutputFiles: true,
};
module.exports = options;
