import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  TSConfigReader,
  TypeDocOptions,
  TypeDocReader,
} from 'typedoc';

import { PluginOptions, SidebarOptions } from './types';

const DEFAULT_TYPEDOC_OPTIONS: Partial<PluginOptions> = {
  out: 'api',
  plugin: ['none'],
  hideBreadcrumbs: true,
  theme: 'vuepress',
};

const DEFAULT_SIDEBAR_OPTIONS = {
  parentCategory: 'API',
  fullNames: false,
  autoConfiguration: true,
};

export const getTypedocOptions = (
  opts: Partial<PluginOptions>,
): Partial<TypeDocOptions> => {
  const options = {
    ...DEFAULT_TYPEDOC_OPTIONS,
    ...opts,
  };
  return options;
};

export const getSidebarOptions = (
  opts: Partial<PluginOptions>,
): SidebarOptions => {
  const options = {
    ...DEFAULT_SIDEBAR_OPTIONS,
    ...opts.sidebar,
  };
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
