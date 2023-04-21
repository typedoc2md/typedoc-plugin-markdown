import { PluginOptions } from './models';

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
  hidePageTitle: false,
  entryDocument: 'index.md',
  watch: false,
  enableFrontmatter: true,
  numberPrefixOutput: true,
  theme: 'docusaurus',
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
  };
  return options as PluginOptions;
};
