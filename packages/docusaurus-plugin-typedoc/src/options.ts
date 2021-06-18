import * as path from 'path';

import { PluginOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    categoryLabel: 'API',
    indexLabel: undefined,
    readmeLabel: 'Readme',
    position: null,
  },
  plugin: ['none'],
  watch: false,
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

export const getOutputDirectory = (siteDir: string, options: PluginOptions) => {
  return path.resolve(
    siteDir,
    options.docsRoot,
    path.relative(process.cwd(), options.out),
  );
};
