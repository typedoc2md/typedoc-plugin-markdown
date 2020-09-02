import * as path from 'path';

import * as fs from 'fs-extra';
import * as Handlebars from 'handlebars';
import * as tmp from 'tmp';
import { Application, ProjectReflection, Renderer } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

import MarkdownTheme from '../src/theme';

tmp.setGracefulCleanup();

export class TestApp {
  app: Application;
  inputFiles: string[];
  project: ProjectReflection;
  renderer: Renderer;
  theme: MarkdownTheme;
  outDir: string;
  tmpobj: tmp.DirResult;

  constructor(files?: string[]) {
    this.app = new Application();
    this.inputFiles = files
      ? files.map((file) => './test/stubs/src/')
      : ['./test/stubs/'];
  }

  bootstrap(options = {}, generate = true) {
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
    if (generate) {
      this.tmpobj = tmp.dirSync();
      this.app.generateDocs(this.project, this.tmpobj.name);
      this.theme = this.app.renderer.theme as MarkdownTheme;
      this.renderer = this.app.renderer;
    }
  }

  convert() {
    this.project = this.app.convert(this.app.expandInputFiles(this.inputFiles));
  }

  getComponent(component: string) {
    return this.app.renderer.getComponent(component);
  }

  getDoc(file: string) {
    const result = fs.readFileSync(this.tmpobj.name + file);
    return result.toString();
  }
}

export const handlebarsOptionsStub = {
  fn: () => true,
  inverse: () => false,
  hash: {},
};

export const stubPartials = () => {
  [
    'index',
    'comment',
    'hierarchy',
    'members',
    'implements',
    'member.signature',
    'member.indexSignatures',
    'typeParameters',
  ].forEach((partial) => {
    Handlebars.registerPartial(partial, `[partial: ${partial}]`);
  });
};

export const stubHelpers = () => {
  Handlebars.registerHelper('type', () => '[helper: type]');
};

export const compileHandlabrs = (template, model) =>
  MarkdownTheme.formatContents(
    template(
      { model },
      {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
      },
    ),
  );
