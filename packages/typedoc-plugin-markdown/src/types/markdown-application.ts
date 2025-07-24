import { Application as TypedocApplication } from 'typedoc';
import { MarkdownRenderer } from './markdown-renderer.js';

/**
 * A typed interface based on the {@link typedoc!Application | TypeDoc Application} class,
 * with the `renderer` property retyped as a {@link MarkdownRenderer}.
 *
 * This does not replace the underlying renderer, but provides more specific typings
 * for use within the plugin.
 *
 * ```ts
 * import type { Application } from 'typedoc-plugin-markdown';
 * ```
 *
 * @ignore
 */
export interface Application extends TypedocApplication {
  renderer: MarkdownRenderer;
}

/**
 * @ignore
 */
export interface MarkdownApplication extends TypedocApplication {
  renderer: MarkdownRenderer;
}
