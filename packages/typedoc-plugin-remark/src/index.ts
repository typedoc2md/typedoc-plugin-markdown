import { Application, ParameterType } from 'typedoc';
import { MarkdownRendererEvent } from 'typedoc-plugin-markdown';

export function load(app: Application) {
  app.options.addDeclaration({
    name: 'remarkPlugins',
    help: 'A list of plugins with optional options.',
    type: ParameterType.Mixed,
    defaultValue: [],
  });

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const remarkPlugins = app.options.getValue('remarkPlugins') as any;

      output.urls?.forEach(async (urlMapping) => {
        const { parseContents } = require('./remark.cjs');
        const filePath = `${output.outputDirectory}/${urlMapping.url}`;
        await parseContents(filePath, remarkPlugins);
      });
      app.logger.info(
        `TypeDoc output parsed with Remark using plugins [${remarkPlugins
          .map((plugin) => `"${plugin}"`)
          .join(', ')}]`,
      );
    },
  );
}
