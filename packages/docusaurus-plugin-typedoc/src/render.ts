import ProgressBar from 'progress';
import {
  Application,
  MixedDeclarationOption,
  ParameterType,
  ProjectReflection,
  StringDeclarationOption,
  TSConfigReader,
  TypeDocReader,
  UrlMapping,
} from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

import { getPluginOptions } from './options';
import { PluginOptions } from './types';

export const bootstrap = (
  app: Application,
  siteDir: string,
  opts: Partial<PluginOptions>,
) => {
  addTypedocReaders(app);
  addTypedocDeclarations(app);
  app.renderer.render = render;
  app.bootstrap(getPluginOptions(siteDir, opts));
  return app.options.getRawValues() as PluginOptions;
};

async function render(project: ProjectReflection, outputDirectory: string) {
  if (!this.prepareTheme() || !this.prepareOutputDirectory(outputDirectory)) {
    return;
  }

  const output = new RendererEvent(
    RendererEvent.BEGIN,
    outputDirectory,
    project,
  );

  output.settings = this.application.options.getRawValues();
  output.urls = this.theme!.getUrls(project);

  if (output.urls) {
    const bar = new ProgressBar('Rendering [:bar] :percent', {
      total: output.urls.length,
      width: 40,
    });
    this.trigger(output);
    if (!output.isDefaultPrevented) {
      output.urls?.forEach((mapping: UrlMapping, i) => {
        this.renderDocument(output.createPageEvent(mapping));
        bar.tick();
      });
      this.trigger(RendererEvent.END, output);
    }
  }
}

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
