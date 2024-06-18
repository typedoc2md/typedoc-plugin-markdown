import { MarkdownRendererEvent } from '@plugin/events';
import { MarkdownTheme } from '@plugin/theme';
import { EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownRendererHooks } from './markdown-renderer-hooks';

/**
 * An extended typing of TypeDoc's {@linkcode typedoc!Renderer Renderer} class that includes updated typings for hooks and async jobs.
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
