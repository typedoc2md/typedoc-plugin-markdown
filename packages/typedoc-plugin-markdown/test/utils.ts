import * as path from 'path';

import { Application, ProjectReflection } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

export interface TestSetup {
  app: Application;
  project: ProjectReflection;
}

export const setup = (files?: string[]): TestSetup => {
  const app = new Application();
  app.bootstrap({
    module: ModuleKind.CommonJS,
    target: ScriptTarget.ES5,
    readme: 'none',
    logger: 'none',
    disableOutputCheck: true,
    plugin: [path.join(__dirname, '../dist/index')],
  });
  const inputFiles = files
    ? files.map((file) => './test/stubs/src/' + file + '.ts')
    : ['./test/stubs/'];
  const project = app.convert(app.expandInputFiles(inputFiles));
  app.generateDocs(project, path.join(__dirname, 'tmp'));
  return { app, project };
};

export const handlebarsHelpersOptionsStub = {
  fn: () => 'true',
  inverse: () => 'false',
  hash: {},
};
