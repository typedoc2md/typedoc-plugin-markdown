import { MarkdownRendererEvent } from '@plugin/app/events';
import { MarkdownTheme, MarkdownThemeRenderContext } from '@plugin/theme';
import { Application, EventHooks, Options, Renderer } from 'typedoc';

/**
 * The plugin amends the renderer with additional hooks and options.
 *
 * This interface augments the TypeDoc {@link Application} with the updated renderer.
 */
export interface MarkdownApplication extends Application {
  /**
   * The renderer instance mapped to {@link MarkdownRenderer}.
   */
  renderer: MarkdownRenderer;
}

/**
 * The plugin amends the renderer with additional hooks and options.
 */
export interface MarkdownRenderer extends Renderer {
  markdownHooks: EventHooks<MarkdownRendererHooks, string>;
  packageOptions: Record<string, Options>;
  preRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
  postRenderAsyncJobs: Array<(output: MarkdownRendererEvent) => Promise<void>>;
  defineTheme: (
    name: string,
    theme: new (renderer: MarkdownRenderer) => MarkdownTheme,
  ) => void;
}

/**
 * This is the custom render hooks method based on the equivalent TypeDoc class.
 *
 * @usage
 *
 *  ```ts
 *  app.renderer.markdownHooks.on(
 *    'page.end',
 *    () => `**Generated using \`page.end\` hook**`,
 * );
 * ```
 */
export interface MarkdownRendererHooks {
  /**
   * Applied at the start of the markdown output.
   *
   * @group Hooks
   */
  ['page.begin']: [MarkdownThemeRenderContext];

  /**
   * Applied at the end of the markdown output.
   *
   * @group Hooks
   */
  ['page.end']: [MarkdownThemeRenderContext];

  /**
   * Applied before the main markdown content is rendered.
   *
   * @group Hooks
   */
  ['content.begin']: [MarkdownThemeRenderContext];

  /**
   * Applied at the start of the markdown output on the index page.
   *
   * @group Hooks
   */
  ['index.page.begin']: [MarkdownThemeRenderContext];

  /**
   * Applied at the end of the markdown output on the index page.
   *
   * @group Hooks
   */
  ['index.page.end']: [MarkdownThemeRenderContext];

  /**
   * Applied before the main markdown content is rendered on the index page.
   *
   * @group Hooks
   */
  ['index.content.begin']: [MarkdownThemeRenderContext];
}
