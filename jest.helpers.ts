require('ts-node/register');
import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';

import {
  Application,
  ArgumentsReader,
  PackageJsonReader,
  ProjectReflection,
  RendererEvent,
  TSConfigReader,
  TypeDocReader,
  UrlMapping,
} from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import { formatContents } from 'typedoc-plugin-markdown/src/utils';

const STUBS_SRC_PATH = path.join(__dirname, 'stub-project', 'src');
const STUBS_TSCONFIG_PATH = path.join(
  __dirname,
  'stub-project',
  'tsconfig.json',
);

global.bootstrap = async (entryPoints: string[] = [], options: any = {}) => {
  //const app = new Application();

  //app.options.addReader(new TypeDocReader());
  //app.options.addReader(new TSConfigReader());
  const app = await Application.bootstrapWithPlugins(
    {
      logLevel: 'None',
      entryPoints:
        entryPoints.length > 0
          ? entryPoints.map((inputFile: string) =>
              path.join(STUBS_SRC_PATH, inputFile),
            )
          : [STUBS_SRC_PATH],
      tsconfig: STUBS_TSCONFIG_PATH,
    },
    [
      new ArgumentsReader(0),
      new TypeDocReader(),
      new PackageJsonReader(),
      new TSConfigReader(),
      new ArgumentsReader(300),
    ],
  );

  load(app);

  setOptions(app, options);

  app.renderer.render = render;

  const project = (await app.convert()) as ProjectReflection;

  await app.generateDocs(project, 'docs');
  return project;
};

global.stubPartials = (partials: string[]) => {
  partials.forEach((partial) => {
    Handlebars.registerPartial(partial, `[partial: ${partial}]`);
  });
};

global.stubHelpers = (helpers: string[]) => {
  helpers.forEach((helper) => {
    Handlebars.registerHelper(helper, () => `[helper: ${helper}]`);
  });
};

global.getTemplate = (name: string) => {
  const templateDir = path.resolve(
    __dirname,
    'packages',
    'typedoc-plugin-markdown',
    'dist',
    'resources',
    'templates',
  );
  const hbs = fs.readFileSync(templateDir + '/' + name + '.hbs');
  return Handlebars.compile(hbs.toString());
};

global.getPartial = (name: string) => {
  const partialDir = path.resolve(
    __dirname,
    'packages',
    'typedoc-plugin-markdown',
    'dist',
    'resources',
    'partials',
  );
  const hbs = fs.readFileSync(partialDir + '/' + name + '.hbs');
  return Handlebars.compile(hbs.toString());
};

global.compileTemplate = (
  template: Handlebars.TemplateDelegate,
  context: any,
) => {
  return formatContents(
    template(context, {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    }),
  );
};

global.compileHelper = (
  helper: Handlebars.HelperDelegate,
  context: any,
  args?: any,
) => {
  return formatContents(helper.call(context, args));
};

global.findModule = (project: ProjectReflection, name: string) => {
  return project.children?.find(
    (child) => child.name.replace(/\"/g, '') === name,
  );
};

global.handlebarsOptionsStub = {
  fn: () => true,
  inverse: () => false,
  hash: {},
};

export async function render(
  project: ProjectReflection,
  outputDirectory: string,
): Promise<void> {
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

  await Promise.all(this.preRenderAsyncJobs.map((job) => job(output)));
  this.preRenderAsyncJobs = [];

  if (!output.isDefaultPrevented) {
    output.urls?.forEach((mapping: UrlMapping) => {
      output.createPageEvent(mapping);
    });

    await Promise.all(this.postRenderAsyncJobs.map((job) => job(output)));
    this.postRenderAsyncJobs = [];

    this.trigger(RendererEvent.END, output);
  }
}

function setOptions(app: Application, options: any, reportErrors = true) {
  for (const [key, val] of Object.entries(options)) {
    app.options.setValue(key as never, val as never);
  }
}
