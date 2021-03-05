import * as path from 'path';

import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  StringDeclarationOption,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';

import { PluginOptions, SidebarOptions } from './types';

/**
 * Default plugin options
 */
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
    sidebarPath: '',
  },
  plugin: ['none'],
  outputDirectory: '',
  siteDir: '',
  watch: false,
};

/**
 * Merge default with user options
 * @param opts
 */
export const getOptions = (
  siteDir: string,
  opts: Partial<PluginOptions>,
): PluginOptions => {
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
        sidebarPath: path.resolve(siteDir, sidebar.sidebarFile),
      },
    };
  }
  // additional
  options = {
    ...options,
    siteDir,
    outputDirectory: path.resolve(siteDir, options.docsRoot, options.out),
  };
  return options;
};

/**
 * Add docusaurus options to converter
 * @param app
 */
export const addOptions = (app: Application) => {
  // configure deault typedoc options
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());

  // expose plugin options to typedoc so we can access if required
  app.options.addDeclaration({
    name: 'id',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'docsRoot',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'siteDir',
  } as MixedDeclarationOption);

  app.options.addDeclaration({
    name: 'outputDirectory',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'globalsTitle',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'readmeTitle',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);
};
