import * as path from 'path';

import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';

import { PluginOptions, SidebarOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  out: 'api',
  hideBreadcrumbs: true,
  sidebar: {
    parentCategory: 'none',
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    sidebarPath: '',
  },
  plugin: ['none'],
  watch: false,
};

export const getOptions = (opts: Partial<PluginOptions>): PluginOptions => {
  let options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
  };

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

  return options;
};

export const addOptions = (app: Application) => {
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());

  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);
};
