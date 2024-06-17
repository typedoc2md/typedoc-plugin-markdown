import { MarkdownRendererEvent } from '@plugin/events';
import { MarkdownTheme } from '@plugin/theme';
import { EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownRendererHooks } from './markdown-renderer-hooks';

/**
 * An extended typing of TypeDoc's {@linkcode typedoc!Renderer Renderer} class that includes updated typings for hooks and async jobs.
 *
 * @example
 *
 * ```ts
 * import { MarkdownApplication } from 'typedoc-plugin-markdown';
 *
 * export function load(app: MarkdownApplication) {
 *
 * app.renderer.markdownHooks.on(
 *  'page.begin', () => '> This is some markdown at the top of the page',
 * );
 *
 * app.renderer.preRenderAsyncJobs.push(async (output: MarkdownRendererEvent) => {
 *   await doSomethingAsync(output);
 * });

 * app.renderer.postRenderAsyncJobs.push(async (output: MarkdownRendererEvent)) => {
 *   await doSomethingAsync(output);
 * });
 *
 * }
 * ```
 *
 */
export interface MarkdownRenderer extends Renderer {
  /**
   * Replaces the event hooks typings the {@linkcode MarkdownRendererHooks} used by the plugin.
   */
  markdownHooks: EventHooks<MarkdownRendererHooks, string>;
  /** @internal */
  packagesMeta: Record<string, { description: string; options: Options }>;
  /** @internal */
  defineTheme: (
    name: string,
    theme: new (renderer: MarkdownRenderer) => MarkdownTheme,
  ) => void;
  /**
   * Re-types the returned argument argument to {@linkcode MarkdownRendererEvent}.
   */
  preRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
  /**
   * Re-types the returned argument argument to {@linkcode MarkdownRendererEvent}.
   */
  postRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
}
