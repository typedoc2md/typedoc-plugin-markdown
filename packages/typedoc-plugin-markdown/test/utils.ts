import * as path from 'path';

import { Application, ProjectReflection, Renderer } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

import MarkdownTheme from '../src/theme';

export class TestApp {
  app: Application;
  inputFiles: string[];
  project: ProjectReflection;
  renderer: Renderer;
  theme: MarkdownTheme;

  constructor(files?: string[]) {
    this.app = new Application();
    this.inputFiles = files
      ? files.map((file) => './test/stubs/src/' + file + '.ts')
      : ['./test/stubs/'];
  }

  bootstrap(options = {}) {
    this.app.bootstrap({
      module: ModuleKind.CommonJS,
      target: ScriptTarget.ES5,
      readme: 'none',
      logger: 'none',
      disableOutputCheck: true,
      plugin: [path.join(__dirname, '../dist/index')],
      ...options,
    });
    this.project = this.app.convert(this.app.expandInputFiles(this.inputFiles));
    //if (generate) {
    this.app.generateDocs(this.project, path.join(__dirname, 'tmp'));
    //}
    this.theme = this.app.renderer.theme as MarkdownTheme;
    this.renderer = this.app.renderer;
  }

  convert() {
    this.project = this.app.convert(this.app.expandInputFiles(this.inputFiles));
  }

  getComponent(component: string) {
    return this.app.renderer.getComponent(component);
  }
}

export const handlebarsOptionsStub = {
  fn: () => true,
  inverse: () => false,
  hash: {},
};
