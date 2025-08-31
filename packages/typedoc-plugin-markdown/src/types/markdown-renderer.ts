import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from '@plugin/events/index.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import { EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownRendererHooks } from './markdown-renderer-hooks.js';

/**
 * The MarkdownRenderer extends TypeDoc's {@link Renderer} instance with custom hooks and async jobs.
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
   * Define a new theme that can be used to render output.
   *
   * @param name - The name of the theme.
   * @param theme - The theme class to use.
   */
  defineTheme: (
    name: string,
    theme: new (renderer: Renderer) => MarkdownTheme,
  ) => void;
  /**
   * Dedicated markdown hooks to add to the renderer. For available hooks.
   *
   * See {@link MarkdownRendererHooks} for a description of each available hook, and when it will be called.
   */
  markdownHooks: EventHooks<MarkdownRendererHooks, string>;

  /**
   * A list of async jobs which must be completed before rendering output.
   */
  preMarkdownRenderAsyncJobs: Array<
    (output: MarkdownRendererEvent) => Promise<void>
  >;

  /**
   * A list of async jobs which must be completed after rendering output files but before generation is considered successful.
   */
  postMarkdownRenderAsyncJobs: Array<
    (output: MarkdownRendererEvent) => Promise<void>
  >;

  // for backward compatibility
  preRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
  postRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;

  /**
   * Stores meta data about packages
   *
   * @internal
   */
  packagesMeta: Record<string, { description: string; options: Options }>;
}
