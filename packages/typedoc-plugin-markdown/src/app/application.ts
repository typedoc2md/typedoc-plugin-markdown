import { MarkdownRendererEvent } from '@app/events/markdown-renderer-event';
import { MarkdownTheme } from '@theme/base';
import { Application, EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownRendererHooks } from './hooks/markdown-renderer-hooks';

/**
 * An extended typing of TypeDoc's Application instance.
 *
 * This is essentially a copy of the main class with the `renderer` property overridden to the custom {@link MarkdownRenderer}.
 *
 * @usage
 *
 * ```ts
 * import {MarkdownApplication} from 'typedoc-plugin-markdown';
 *
 * export function load(app: MarkdownApplication) {
 *   ...
 * }
 * ```
 *
 * @category Application
 */
export interface MarkdownApplication extends Application {
  renderer: MarkdownRenderer;
}

/**
 * An extended typing of TypeDoc's Renderer class.
 *
 * Incoudes updated typings for hooks and async jobs.
 *
 * @usage
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
 * app.renderer.preRenderAsyncJobs.push(async (event) => {
 *   await doSomethingAsync(event);
 * });

 * app.renderer.postRenderAsyncJobs.push(async (event) => {
 *   await doSomethingAsync(event);
 * });
 *
 * }
 * ```
 *
 * @category Application
 */
export interface MarkdownRenderer extends Renderer {
  markdownHooks: EventHooks<MarkdownRendererHooks, string>;
  /** @internal */
  packagesMeta: Record<string, { description: string; options: Options }>;
  /** @internal */
  defineTheme: (
    name: string,
    theme: new (renderer: MarkdownRenderer) => MarkdownTheme,
  ) => void;
  preRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
  postRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
}
