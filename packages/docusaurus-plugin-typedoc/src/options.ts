import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  StringDeclarationOption,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';

import { PluginOptions } from './types';

/**
 * Default plugin options
 */
const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  out: 'api',
  entryDocument: 'index.md',
  hideInPageTOC: true,
  hideBreadcrumbs: true,
  id: 'default',
  docsRoot: 'docs',
  sidebar: {
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    indexLabel: 'Table of contents',
    readmeLabel: 'Readme',
  },
  readmeTitle: undefined,
};

/**
 * Merge default with user options
 * @param opts
 */
export const getOptions = (
  siteDir: string,
  opts: Partial<PluginOptions>,
): PluginOptions => ({
  ...DEFAULT_PLUGIN_OPTIONS,
  ...opts,
  ...(opts.sidebar && {
    sidebar: {
      ...DEFAULT_PLUGIN_OPTIONS.sidebar,
      ...opts.sidebar,
    },
  }),
  plugin: [
    ...['typedoc-plugin-markdown'],
    ...(opts.plugin
      ? opts.plugin.filter((name) => name !== 'typedoc-plugin-markdown')
      : []),
  ],
  siteDir,
});

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
