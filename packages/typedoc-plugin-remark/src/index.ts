import { Application, ParameterType, RendererEvent } from 'typedoc';

export function load(app: Application) {
  app.options.addDeclaration({
    name: 'remarkPlugins',
    help: 'An array of remark plugins.',
    type: ParameterType.Array,
    defaultValue: [],
  });

  app.renderer.postRenderAsyncJobs.push(async (output: RendererEvent) => {
    const remarkPlugins = app.options.getValue('remarkPlugins') as any;
    if (output.urls?.length) {
      await Promise.all(
        output.urls?.map(async (urlMapping) => {
          const { parseContents } = await require('./remark.cjs');
          const filePath = `${output.outputDirectory}/${urlMapping.url}`;
          return await parseContents(filePath, remarkPlugins);
        }),
      );
      if (remarkPlugins.length) {
        app.logger.info(
          `[typedoc-plugin-remark] Output parsed using remark plugin(s) [${remarkPlugins
            .map((plugin) => `"${plugin}"`)
            .join(', ')}]`,
        );
      }
    }
  });
}
