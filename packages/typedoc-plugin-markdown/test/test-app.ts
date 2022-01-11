import * as fs from 'fs';
import * as path from 'path';

import * as Handlebars from 'handlebars';
import * as tmp from 'tmp';
import {
  Application,
  DeclarationReflection,
  ProjectReflection,
  Renderer,
  RendererEvent,
  TSConfigReader,
  TypeDocReader,
  UrlMapping,
} from 'typedoc';

import { load } from '../src/index';
import { MarkdownTheme } from '../src/theme';
import { formatContents } from '../src/utils';

tmp.setGracefulCleanup();

export class TestApp {
  app: Application;
  project: ProjectReflection;
  renderer: Renderer;
  theme: MarkdownTheme;
  outDir: string;
  tmpobj: tmp.DirResult;
  entryPoints: string[];

  static handlebarsOptionsStub = {
    fn: () => true,
    inverse: () => false,
    hash: {},
  };

  static compileTemplate(template: Handlebars.TemplateDelegate, context: any) {
    return formatContents(
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
    return formatContents(helper.call(context, args));
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

  static getExpectedUrls(urlMappings: UrlMapping[]) {
    const expectedUrls = [];
    urlMappings.forEach((urlMapping) => {
      expectedUrls.push(urlMapping.url);
      if (urlMapping.model.children) {
        urlMapping.model.children.forEach((reflection) => {
          if (!reflection.hasOwnDocument) {
            expectedUrls.push(reflection.url);
          }
        });
      }
    });
    return expectedUrls;
  }

  constructor(entryPoints?: string[]) {
    this.app = new Application();
    this.entryPoints = entryPoints
      ? entryPoints.map((inputFile: string) =>
          path.join(__dirname, './stubs/src/' + inputFile),
        )
      : ['./test/stubs/src'];
    this.app.options.addReader(new TypeDocReader());
    this.app.options.addReader(new TSConfigReader());
  }

  async bootstrap(options: any = {}) {
    load(this.app);
    this.app.bootstrap({
      logger: 'none',
      plugin: 'typedoc-plugin-mdn-links',
      entryPoints: this.entryPoints,
      tsconfig: path.join(__dirname, 'stubs', 'tsconfig.json'),
      ...options,
    });

    this.tmpobj = tmp.dirSync();

    this.project = this.app.convert();
    this.renderer = this.app.renderer;

    this.app.renderer.render = render;
    await this.app.generateDocs(this.project, this.tmpobj.name);
    this.theme = this.app.renderer.theme as MarkdownTheme;
  }

  findModule(name: string) {
    return this.project.children.find(
      (child) => child.name.replace(/\"/g, '') === name,
    );
  }

  findEntryPoint() {
    return this.project;
  }

  findReflection(name: string) {
    return this.project.findReflectionByName(name) as DeclarationReflection;
  }
}

export async function render(
  project: ProjectReflection,
  outputDirectory: string,
) {
  if (!this.prepareTheme()) {
    return;
  }
  const output = new RendererEvent(
    RendererEvent.BEGIN,
    outputDirectory,
    project,
  );
  output.urls = this.theme!.getUrls(project);
  this.trigger(output);
  if (!output.isDefaultPrevented) {
    output?.urls?.forEach((mapping: UrlMapping) => {
      this.renderDocument(output.createPageEvent(mapping));
    });

    this.trigger(RendererEvent.END, output);
  }
}
