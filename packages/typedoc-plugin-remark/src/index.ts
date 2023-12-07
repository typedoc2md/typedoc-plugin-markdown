import { Application, DeclarationOption, RendererEvent } from 'typedoc';
import * as options from './options/declarations';

export function load(app: Application) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
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
          `Output parsed using remark plugin(s) [${remarkPlugins
            .map((plugin) => `"${plugin}"`)
            .join(', ')}]`,
        );
      }
    }
  });
}
