import * as fs from 'fs';
import * as path from 'path';

import * as Handlebars from 'handlebars';
import * as tmp from 'tmp';
import {
  Application,
  DeclarationReflection,
  ProjectReflection,
  Renderer,
} from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';

import MarkdownTheme from '../src/theme';

tmp.setGracefulCleanup();

export class TestApp {
  app: Application;
  project: ProjectReflection;
  renderer: Renderer;
  theme: MarkdownTheme;
  outDir: string;
  tmpobj: tmp.DirResult;
  inputFiles: string[];

  static handlebarsOptionsStub = {
    fn: () => true,
    inverse: () => false,
    hash: {},
  };

  static compileTemplate(template: Handlebars.TemplateDelegate, context: any) {
    return MarkdownTheme.formatContents(
      template(context, {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
      }),
    );
  }

  static compileHelper(
    helper: Handlebars.HelperDelegate,
    context: any,
    args?: any,
  ) {
    return MarkdownTheme.formatContents(helper.call(context, args));
  }

  static getTemplate(name: string) {
    const templateDir = path.resolve(
      __dirname,
      '..',
      'dist',
      'resources',
      'templates',
    );
    const hbs = fs.readFileSync(templateDir + '/' + name + '.hbs');
    return Handlebars.compile(hbs.toString());
  }

  static getPartial(name: string) {
    const partialDir = path.resolve(
      __dirname,
      '..',
      'dist',
      'resources',
      'partials',
    );
    const hbs = fs.readFileSync(partialDir + '/' + name + '.hbs');
    return Handlebars.compile(hbs.toString());
  }

  static stubPartials(partials: string[]) {
    partials.forEach((partial) => {
      Handlebars.registerPartial(partial, `[partial: ${partial}]`);
    });
  }

  static stubHelpers(helpers: string[]) {
    helpers.forEach((helper) => {
      Handlebars.registerHelper(helper, () => `[helper: ${helper}]`);
    });
  }

  constructor(inputFiles?: string[]) {
    this.app = new Application();
    this.inputFiles = inputFiles
      ? inputFiles.map((inputFile: string) => './test/stubs/src/' + inputFile)
      : ['./test/stubs/src'];
  }

  bootstrap(options = {}, generate = true) {
    this.app.bootstrap({
      module: ModuleKind.CommonJS,
      target: ScriptTarget.ES5,
      logger: 'none',
      disableOutputCheck: true,
      plugin: [path.join(__dirname, '../dist/index')],
      ...options,
    });

    this.project = this.app.convert(this.app.expandInputFiles(this.inputFiles));
    this.renderer = this.app.renderer;
    if (generate) {
      this.tmpobj = tmp.dirSync();
      this.app.generateDocs(this.project, this.tmpobj.name);
      this.theme = this.app.renderer.theme as MarkdownTheme;
    }
  }

  findModule(name: string) {
    return this.theme
      .getEntryPoint(this.project)
      .groups[0].children.find(
        (child) => child.name.replace(/\"/g, '') === name,
      );
  }

  findReflection(name: string) {
    return this.project.findReflectionByName(name) as DeclarationReflection;
  }
}
