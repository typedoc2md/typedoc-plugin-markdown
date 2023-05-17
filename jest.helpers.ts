require('ts-node/register');
import * as path from 'path';

import {
  Application,
  ProjectReflection,
  RendererEvent,
  TSConfigReader,
  TypeDocReader,
  UrlMapping,
} from 'typedoc';

const STUBS_SRC_PATH = path.join(__dirname, 'stubs', 'src');
const STUBS_TSCONFIG_PATH = path.join(__dirname, 'stubs', 'tsconfig.json');

global.bootstrap = async (
  entryPoints: string[] = [],
  params: { options: any; stubPartials: string[] },
) => {
  const app = new Application();
  const options = params?.options || {};
  const stubPartials = params?.stubPartials || [];
  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());
  await app.bootstrapWithPlugins({
    logLevel: 'None',
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
  Object.defineProperty(app.renderer, 'render', {
    value: render,
  });
  await app.generateDocs(project, 'docs');
  const context = (app.renderer.theme as any).getRenderContext();
  stubPartials.forEach((stubPartial) => {
    context[stubPartial] = () => `[partial: ${stubPartial}]`;
  });
  const theme = app.renderer.theme;

  return { project, context, theme };
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
  if (!output.isDefaultPrevented) {
    output.urls?.forEach((mapping: UrlMapping) => {
      output.createPageEvent(mapping);
    });
    this.trigger(RendererEvent.END, output);
  }
}
