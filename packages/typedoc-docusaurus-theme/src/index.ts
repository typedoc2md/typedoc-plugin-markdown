/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module core
 */
import { DeclarationOption } from 'typedoc';
import { MarkdownApplication } from 'typedoc-plugin-markdown';
import * as options from './options/declarations.js';
import { presets } from './options/presets.js';
import { addReaders } from './options/readers.js';
import { writeSidebar } from './sidebar.js';

export function load(app: MarkdownApplication) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  addReaders(app, presets);

  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    writeSidebar(app, renderer);
  });
}

export { PluginOptions } from './types/index.js';
