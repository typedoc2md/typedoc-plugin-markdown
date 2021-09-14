import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  StringDeclarationOption,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';

import { getPluginOptions } from './options';

import { PluginOptions } from './types';

export const bootstrap = (app: Application, opts: Partial<PluginOptions>) => {
  addTypedocReaders(app);
  addTypedocDeclarations(app);
  app.bootstrap({ ...getPluginOptions(opts) });
  return app.options.getRawValues() as PluginOptions;
};

const addTypedocReaders = (app: Application) => {
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());
};

const addTypedocDeclarations = (app: Application) => {
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
