/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module core
 */

import * as path from 'path';
import { DeclarationOption } from 'typedoc';
import { MarkdownApplication } from 'typedoc-plugin-markdown';
import { fileURLToPath, pathToFileURL } from 'url';
import { getDefaultPlugins } from './helpers/get-default-plugins.js';
import * as options from './options/declarations.js';
import { parse } from './parse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function load(app: MarkdownApplication) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.renderer.postRenderAsyncJobs.push(async (output) => {
    const remarkPlugins = app.options.getValue('remarkPlugins') as [];
    const defaultPlugins = getDefaultPlugins(
      app.options.getValue('defaultRemarkPlugins'),
    );
    const userPlugins = app.options.getValue('remarkPlugins') as string[];
    const remarkStringifyOptions = app.options.getValue(
      'remarkStringifyOptions',
    );
    const remarkPluginsNames = remarkPlugins.map((plugin) =>
      Array.isArray(plugin) ? plugin[0] : plugin,
    ) as string[];

    if (output.pages?.length) {
      await Promise.all(
        output.pages?.map(async (page) => {
          if (remarkPluginsNames.includes('remark-toc')) {
            const tocPluginIndex = remarkPluginsNames.findIndex(
              (name) => name === 'remark-toc',
            );
            const tocPlugin = remarkPlugins[tocPluginIndex];
            const remarkTocOptions = Array.isArray(tocPlugin)
              ? tocPlugin[1]
              : {};
            defaultPlugins.push([
              pathToFileURL(path.join(__dirname, 'plugins', 'add-toc.js')).href,
              {
                reflection: page.model,
                app: app,
                remarkTocOptions,
              },
            ]);
          }
          const filePath = `${output.outputDirectory}/${page.url}`;
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
