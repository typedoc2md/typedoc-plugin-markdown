/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module
 */

import { Application, DeclarationOption, RendererEvent } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import { addTableOfContents } from './helpers/add-toc.js';
import { getDefaultPlugins } from './helpers/get-default-plugins.js';
import * as options from './options/declarations.js';
import { parse } from './parse.js';

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
    const defaultPlugins = getDefaultPlugins(
      app.options.getValue('defaultRemarkPlugins'),
    );
    const userPlugins = app.options.getValue('remarkPlugins') as string[];
    const remarkStringifyOptions = app.options.getValue(
      'remarkStringifyOptions',
    );
    if (output.urls?.length) {
      await Promise.all(
        output.urls?.map(async (urlMapping) => {
          const filePath = `${output.outputDirectory}/${urlMapping.url}`;
          return await parse(
            filePath,
            [...defaultPlugins, ...userPlugins],
            remarkStringifyOptions,
          );
        }),
      );
      if (userPlugins.length) {
        app.logger.info(
          `Output parsed using remark plugin(s) [${userPlugins
            .map((plugin) => `"${Array.isArray(plugin) ? plugin[0] : plugin}"`)
            .join(', ')}]`,
        );
      }
    }
  });
}

export { PluginOptions } from './types/options.js';
