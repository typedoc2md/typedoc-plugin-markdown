import * as path from 'path';

import { PluginOptions, SidebarOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  id: 'default',
  docsRoot: 'docs',
  out: 'api',
  entryDocument: 'index.md',
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  sidebar: {
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    indexLabel: 'Table of contents',
    readmeLabel: 'Readme',
  },
  plugin: ['none'],
  siteDir: '',
  watch: false,
};

export const getPluginOptions = (
  siteDir: string,
  opts: Partial<PluginOptions>,
): PluginOptions => {
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
    sidebar:
      opts.sidebar === null
        ? null
        : ({
            ...DEFAULT_PLUGIN_OPTIONS.sidebar,
            ...opts.sidebar,
          } as SidebarOptions),
    siteDir,
  };
  return options;
};

export const getOutputDirectory = (options: PluginOptions) =>
  path.resolve(options.siteDir, options.docsRoot, options.out);
