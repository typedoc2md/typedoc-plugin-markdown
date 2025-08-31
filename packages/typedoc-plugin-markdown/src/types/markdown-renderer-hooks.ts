import { MarkdownThemeContext } from '@plugin/theme/index.js';

/**
 * Describes the hooks available to inject output in the markdown theme.
 */
export interface MarkdownRendererHooks {
  /**
   * Applied at the start of the markdown output.
   */
  ['page.begin']: [MarkdownThemeContext];

  /**
   * Applied at the end of the markdown output.
   */
  ['page.end']: [MarkdownThemeContext];

  /**
   * Applied at the start of the markdown output on the index page.
   */
  ['index.page.begin']: [MarkdownThemeContext];

  /**
   * Applied at the end of the markdown output on the index page.
   */
  ['index.page.end']: [MarkdownThemeContext];

  /**
   * Applied before the main markdown content is rendered.
   */
  ['content.begin']: [MarkdownThemeContext];

  /**
   * Applied after the main markdown content is rendered.
   */
  ['content.end']: [MarkdownThemeContext];
}
