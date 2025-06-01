/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module core
 */
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter';
import { DeclarationOption } from 'typedoc';
import {
  MarkdownApplication,
  MarkdownPageEvent,
} from 'typedoc-plugin-markdown';
import { VFile } from 'vfile';
import { getFullPath, getPlugins } from './helpers.js';
import { FRONTMATTER_REGEX } from './options/constants.js';
import * as options from './options/declarations.js';

export function load(app: MarkdownApplication) {
  /**
   * Add the plugin options to the application.
   */
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  /**
   * Parse markdown strings with at preWriteAsyncJobs.
   */
  app.renderer.on(MarkdownPageEvent.BEGIN, (page: MarkdownPageEvent) => {
    page.preWriteAsyncJobs?.push(async (page) => {
      const plugins = app.options.getValue('remarkPlugins');

      // Create a new VFile with the page contents and filename.
      const file = new VFile({ value: page.contents, path: page.filename });

      // Create a new remark processor with the stringify options.
      const processor = remark().data(
        'settings',
        app.options.getValue('remarkStringifyOptions'),
      );

      // If frontmatter is detected, additionally use the remark-frontmatter plugin.
      if (FRONTMATTER_REGEX.test(page.contents)) {
        processor.use(remarkFrontmatter);
      }

      // Create a collection of promises of assigned remark plugin imports.
      const promises = getPlugins(page, plugins).map(
        async (plugin) =>
          new Promise((resolve) => {
            const name = Array.isArray(plugin) ? plugin[0] : plugin;
            const pluginOptions = Array.isArray(plugin) ? plugin[1] : {};
            import(getFullPath(name as string)).then(
              ({ default: pluginFn }) => {
                resolve({
                  pluginFn,
                  pluginOptions,
                });
              },
            );
          }),
      );

      // Assign each of the plugins to the processor in order.
      (await Promise.all(promises)).forEach((pluginRef: any) => {
        processor.use(pluginRef.pluginFn, pluginRef.pluginOptions);
      });

      // Process the file and assign the contents back to the page.
      page.contents = String(await processor.process(file));
    });
  });
}

export { PluginOptions } from './types/index.js';
