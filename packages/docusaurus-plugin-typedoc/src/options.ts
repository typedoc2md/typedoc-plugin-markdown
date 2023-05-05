import { PluginOptions } from './models';

const DEFAULT_PLUGIN_OPTIONS: Partial<PluginOptions> = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    categoryLabel: 'API',
    position: null,
    autoConfiguration: true,
    indexLabel: 'Index',
  },
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  entryDocument: 'index.md',
  watch: false,
  numberPrefixOutput: true,
  plugin: [],
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
    plugin: opts.plugin?.filter(
      (plugin) =>
        !['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter'].includes(
          plugin,
        ),
    ),
  };
  return options as PluginOptions;
};
