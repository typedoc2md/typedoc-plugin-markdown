import { Application, DeclarationOption, RendererEvent } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import * as options from './options/declarations';
import { addTableOfContents } from './options/helpers';

export function load(app: Application) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.renderer.on(MarkdownPageEvent.END, (event: MarkdownPageEvent) => {
    const remarkPlugins = app.options.getValue('remarkPlugins') as [];
    const remarkPluginsNames = remarkPlugins.map((plugin) =>
      Array.isArray(plugin) ? plugin[0] : plugin,
    ) as string[];

    if (remarkPluginsNames.includes('remark-toc')) {
      addTableOfContents(event, remarkPlugins, remarkPluginsNames, app);
    }
  });

  app.renderer.postRenderAsyncJobs.push(async (output: RendererEvent) => {
    const remarkPlugins = app.options.getValue('remarkPlugins') as any;
    if (output.urls?.length) {
      await Promise.all(
        output.urls?.map(async (urlMapping) => {
          const { parseContents } = await require('./remark.cjs');
          const filePath = `${output.outputDirectory}/${urlMapping.url}`;
          const remarkStringifyOptions = app.options.getValue(
            'remarkStringifyOptions',
          );
          return await parseContents(
            filePath,
            remarkStringifyOptions,
            remarkPlugins,
          );
        }),
      );
      if (remarkPlugins.length) {
        app.logger.info(
          `Output parsed using remark plugin(s) [${remarkPlugins
            .map((plugin) => `"${Array.isArray(plugin) ? plugin[0] : plugin}"`)
            .join(', ')}]`,
        );
      }
    }
  });
}
