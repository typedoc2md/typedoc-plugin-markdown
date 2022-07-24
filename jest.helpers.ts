require('ts-node/register');
import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';

import {
  Application,
  PageEvent,
  ProjectReflection,
  RendererEvent,
  TSConfigReader,
  TypeDocReader,
  UrlMapping,
} from 'typedoc';
import { formatContents } from 'typedoc-plugin-markdown/src/utils';

const STUBS_SRC_PATH = path.join(__dirname, 'stub-project', 'src');
const STUBS_TSCONFIG_PATH = path.join(
  __dirname,
  'stub-project',
  'tsconfig.json',
);

global.bootstrap = async (entryPoints: string[] = [], options: any = {}) => {
  const app = new Application();
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());
  app.bootstrap({
    logger: 'none',
    entryPoints:
      entryPoints.length > 0
        ? entryPoints.map((inputFile: string) =>
            path.join(STUBS_SRC_PATH, inputFile),
          )
        : [STUBS_SRC_PATH],
    tsconfig: STUBS_TSCONFIG_PATH,
    ...options,
    plugin: [
      ...['typedoc-plugin-markdown', 'typedoc-plugin-mdn-links'],
      ...(options.plugin ? options.plugin : []),
    ],
  });

  const project = app.convert() as ProjectReflection;
  app.renderer.render = render;
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

async function render(project: ProjectReflection, outputDirectory: string) {
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
      const page = output.createPageEvent(mapping);
      this.trigger(PageEvent.BEGIN, page);

      this.trigger(PageEvent.END, page);
    });
    this.trigger(RendererEvent.END, output);
  }
}
