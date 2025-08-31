import { Application } from 'typedoc';
import { MarkdownRenderer } from './markdown-renderer.js';

/**
 * Type definition for a TypeDoc {@link Application} instance patched by `typedoc-plugin-markdown`
 * to use a {@link MarkdownRenderer}.
 *
 * This interface has no runtime implementation. It exists to align TypeScript typings
 * with the runtime modifications made by the Markdown plugin (overriding the default renderer).
 *
 * To create an unmodified application instance, use the TypeDoc {@link Application} class directly.
 *
 * @see https://typedoc.org/documents/Overview.html#node-module
 *
 */
export interface MarkdownApplication extends Application {
  /**
   * The renderer used to generate the documentation output.
   */
  renderer: MarkdownRenderer;
}
