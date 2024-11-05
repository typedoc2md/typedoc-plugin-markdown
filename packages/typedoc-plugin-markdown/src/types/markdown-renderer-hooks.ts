import { MarkdownThemeContext } from '@plugin/theme/index.js';

/**
 * Describes the hooks available to inject output in the markdown theme.
 */
export interface MarkdownRendererHooks {
  /**
   * Applied at the start of the markdown output.
   *
   * @group Hooks
   */
  ['page.begin']: [MarkdownThemeContext];

  /**
   * Applied at the end of the markdown output.
   *
   * @group Hooks
   */
  ['page.end']: [MarkdownThemeContext];

  /**
   * Applied before the main markdown content is rendered.
   *
   * @group Hooks
   */
  ['content.begin']: [MarkdownThemeContext];

  /**
   * Applied at the start of the markdown output on the index page.
   *
   * @group Hooks
   */
  ['index.page.begin']: [MarkdownThemeContext];

  /**
   * Applied at the end of the markdown output on the index page.
   *
   * @group Hooks
   */
  ['index.page.end']: [MarkdownThemeContext];
}
