import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  StringDeclarationOption,
  TSConfigReader,
  TypeDocReader,
} from 'typedoc';

export function addTypedocReaders(app: Application) {
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());
}

export function addTypedocDeclarations(app: Application) {
  app.options.addDeclaration({
    name: 'id',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'docsRoot',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'globalsTitle',
  } as StringDeclarationOption);

  app.options.addDeclaration({
    name: 'sidebar',
    type: ParameterType.Mixed,
  } as MixedDeclarationOption);
}
