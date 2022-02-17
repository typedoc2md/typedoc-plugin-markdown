import { PluginOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    fullNames: false,
    categoryLabel: 'API',
    indexLabel: undefined,
    readmeLabel: 'Readme',
    position: null,
  },
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hidePageTitle: true,
  entryDocument: 'index.md',
  plugin: ['none'],
  watch: false,
  includeExtension: false,
  indexSlug: undefined,
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
  return options;
};
