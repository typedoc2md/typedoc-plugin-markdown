import * as path from 'path';

import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';

import { PluginOptions, SidebarOptions } from './types';

/**
 * Default plugin options
 */
const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  out: 'api',
  hideBreadcrumbs: true,
  plugin: ['typedoc-plugin-markdown'],
  sidebar: {
    parentCategory: 'none',
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    sidebarPath: '',
  },
  watch: false,
};

/**
 * Merge default with user options
 * @param opts
 */
export const getOptions = (opts: Partial<PluginOptions>): PluginOptions => {
  // base options
  let options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
  };
  // sidebar
  if (opts.sidebar === null) {
    options = { ...options, sidebar: null };
  } else {
    const sidebar = {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    } as SidebarOptions;
    options = {
      ...options,
      sidebar: {
        ...sidebar,
        sidebarPath: path.resolve(sidebar.sidebarFile),
      },
    };
  }
  // plugin
  if (opts.plugin) {
    options = {
      ...options,
      plugin: [...DEFAULT_PLUGIN_OPTIONS.plugin, ...opts.plugin],
    };
  }
  // additional
  options = {
    ...options,
    // siteDir,
    // outputDirectory: path.resolve(siteDir, options.docsRoot, options.out),
  };
  return options;
};

export const addOptions = (app: Application) => {
  // configure deault typedoc options
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());

  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);
};
