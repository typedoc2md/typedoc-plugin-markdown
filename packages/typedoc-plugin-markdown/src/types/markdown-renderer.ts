import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from '@plugin/events/index.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import { EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownRendererHooks } from './markdown-renderer-hooks.js';

/**
 * The MarkdownRenderer extends TypeDoc's {@link typedoc!Renderer Renderer} instance with custom hooks and async jobs.
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
   * Dedicated markdown hooks to add to the renderer
   */
  markdownHooks: EventHooks<MarkdownRendererHooks, string>;
  preRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
  postRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;

  /**
   * Store meta data about packages
   */
  packagesMeta: Record<string, { description: string; options: Options }>;
}
