import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from '@plugin/events/index.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import { EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownRendererHooks } from './markdown-renderer-hooks.js';

/**
 * A plugin-specific interface for `typedoc-plugin-markdown` providing typings for the TypeDoc {@link Renderer} type.
 */
export interface MarkdownRenderer extends Renderer {
  /**
   * @param event - Triggered before or after a document will be rendered.
   * @param callback - Receives the {@link MarkdownPageEvent} object as an argument.
   *
   * @example
   *
   * ```ts
   * app.renderer.on(MarkdownPageEvent.BEGIN, (renderer) => {});
   * ```
   */
  on(
    event: typeof MarkdownPageEvent.BEGIN | typeof MarkdownPageEvent.END,
    callback: (page: MarkdownPageEvent) => void,
  ): void;

  /**
   * @param event - Triggered before or after rendering the project.
   * @param callback - Receives the {@link MarkdownRendererEvent} object as an argument.
   *
   * @example
   *
   * ```ts
   * app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {});
   * ```
   */
  on(
    event:
      | typeof MarkdownRendererEvent.BEGIN
      | typeof MarkdownRendererEvent.END,
    callback: (page: MarkdownRendererEvent) => void,
  ): void;

  /**
   * Define a new markdown theme that can be used to render output.
   *
   * @param name - The name of the theme.
   * @param theme - The theme class to use.
   */
  defineTheme: (
    name: string,
    theme: new (renderer: Renderer) => MarkdownTheme,
  ) => void;

  /**
   * A list of async jobs which must be completed *before* rendering output.
   * They will be called after {@link MarkdownRendererEvent.BEGIN} has fired, but before any files have been written.
   *
   * This may be used by plugins to register work that must be done to prepare output files. For example: asynchronously
   * parse navigation.
   *
   * Note: This array is cleared after calling the contained functions on each rendering call.
   */
  preRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;

  /**
   * A list of async jobs which must be completed after rendering output files but before generation is considered successful.
   * These functions will be called after all documents have been written to the filesystem.
   *
   * This may be used by plugins to register work that must be done to finalize output files. For example: asynchronously
   * generating an image referenced in a render hook.
   *
   * Note: This array is cleared after calling the contained functions on each rendering call.
   */
  postRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;

  /**
   * @deprecated Use `hooks` property.
   */
  markdownHooks: EventHooks<MarkdownRendererHooks, string>;

  /**
   * Drop-in replacement for the core {@link Renderer.hooks} property.
   *
   * Provides dedicated `typedoc-plugin-markdown` hooks that can be used in
   * the same way as the standard renderer hooks.
   *
   * Available hooks
   *
   * - `"page.begin"` — Triggered before a document is rendered to Markdown.
   * - `"page.end"` — Triggered after a document is rendered to Markdown, before writing to disk.
   * - `"content.begin"` — Triggered before the main Markdown content is rendered.
   * - `"index.page.begin"` — Triggered before the index page is rendered to Markdown.
   * - `"index.page.end"` — Triggered after the index page is rendered to Markdown.
   */
  hooks: EventHooks<MarkdownRendererHooks, any>;

  /**
   * Store meta data about packages
   *
   * @internal
   */
  packagesMeta: Record<string, { description: string; options: Options }>;
}
