import { Application, EventHooks, Options, Renderer } from 'typedoc';
import { MarkdownThemeRenderContext } from '../theme';
import { MarkdownRendererEvent } from './events';

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
}

export const MarkdownHooks = {
  PAGE_BEGIN: 'page.begin',
  PAGE_END: 'page.end',
  CONTENT_BEGIN: 'content.begin',
  INDEX_PAGE_BEGIN: 'index.page.begin',
  INDEX_PAGE_END: 'index.page.end',
  INDEX_CONTENT_BEGIN: 'index.content.begin',
} as const;

/**
 * This is the custom render hooks method based on the equivalent TypeDoc class.
 */
export interface MarkdownRendererHooks {
  /**
   * Applied at the start of the markdown output.
   */
  [MarkdownHooks.PAGE_BEGIN]: [MarkdownThemeRenderContext];

  /**
   * Applied at the end of the markdown output.
   */
  [MarkdownHooks.PAGE_END]: [MarkdownThemeRenderContext];

  /**
   * Applied before the main markdown content is rendered.
   */
  [MarkdownHooks.CONTENT_BEGIN]: [MarkdownThemeRenderContext];

  /**
   * Applied at the start of the markdown output on the index page.
   */
  [MarkdownHooks.INDEX_PAGE_BEGIN]: [MarkdownThemeRenderContext];

  /**
   * Applied at the end of the markdown output on the index page.
   */
  [MarkdownHooks.INDEX_PAGE_END]: [MarkdownThemeRenderContext];

  /**
   * Applied before the main markdown content is rendered on the index page.
   */
  [MarkdownHooks.INDEX_CONTENT_BEGIN]: [MarkdownThemeRenderContext];
}
