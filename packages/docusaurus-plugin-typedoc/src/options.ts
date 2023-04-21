import { PluginOptions } from './models';
const plugin = require.resolve('docusaurus-plugin-typedoc');

const DEFAULT_PLUGIN_OPTIONS: Partial<PluginOptions> = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    categoryLabel: 'API',
    collapsed: true,
    position: null,
    autoConfiguration: true,
  },
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  entryDocument: 'index.md',
  watch: false,
  enableFrontmatter: true,
  numberPrefixOutput: true,
  plugin: [plugin],
};

export const getPluginOptions = (
  opts: Partial<PluginOptions>,
): PluginOptions => {
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
    sidebar: {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    },
    plugin: [DEFAULT_PLUGIN_OPTIONS.plugin, ...(opts.plugin || [])],
  };
  return options as PluginOptions;
};
