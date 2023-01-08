import { PluginOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  cleanOutputDir: true,
  sidebar: {
    fullNames: false,
    categoryLabel: 'API',
    indexLabel: undefined,
    readmeLabel: 'Readme',
    position: null,
    autoConfiguration: true,
  },
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  hidePageTitle: false,
  entryDocument: 'README.md',
  plugin: ['none'],
  watch: false,
  includeExtension: true,
  indexSlug: undefined,
  theme: 'docusaurus',
  frontmatter: undefined,
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
