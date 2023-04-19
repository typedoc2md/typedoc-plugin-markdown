import { Application } from 'typedoc';
import { defineOptions } from './options';
import { generateMarkdown, renderMarkdown } from './renderer';
import { MarkdownTheme } from './theme';
import { MarkdownThemeRenderContext } from './theme-context';

export function load(app: Application) {
  /**
   * Exposes markdown theme to the renderer
   */
  app.renderer.defineTheme('markdown', MarkdownTheme);

  /**
   * Defines all plugin options
   */
  defineOptions(app);

  /**
   * Decouple HTML logic from the renderer (there should probably be a better solution to this)
   */
  Object.defineProperty(app, 'generateDocs', { value: generateMarkdown });
  Object.defineProperty(app.renderer, 'render', {
    value: renderMarkdown,
    configurable: true,
  });
}

/**
 * Expose global entrypoints
 */
export * from './models';
export * from './options-reader';
export { partials } from './resources';
export { MarkdownTheme, MarkdownThemeRenderContext };
