import { MarkdownThemeContext } from '@plugin/theme/index.js';

/**
 * Defines hook names used during the markdown output process.
 *
 * Each hook corresponds to a specific point in the rendering lifecycle.
 */
export const MarkdownHooks = {
  /**
   * Applied at the start of the markdown output.
   */
  PageBegin: 'page.begin',
  /**
   * Applied at the end of the markdown output.
   */
  PageEnd: 'page.end',
  /**
   * Applied before the main markdown content is rendered.
   */
  ContentBegin: 'content.begin',
  /**
   * Applied after the main markdown content is rendered.
   */
  ContentEnd: 'content.end',
  /**
   * Applied at the start of the markdown output on the index page.
   */
  IndexPageBegin: 'index.page.begin',
  /**
   * Applied at the end of the markdown output on the index page.
   */
  IndexPageEnd: 'index.page.end',
} as const;

export type MarkdownHookName =
  (typeof MarkdownHooks)[keyof typeof MarkdownHooks];

export type MarkdownRendererHooks = {
  [K in MarkdownHookName]: [MarkdownThemeContext];
};
