import { MarkdownThemeContext } from 'public-api';

/**
 * Describes the hooks available to inject output in the markdown theme.
 *
 * @usage
 *
 *  ```ts
 *  app.renderer.markdownHooks.on(
 *    'page.end',
 *    () => `**Generated using \`page.end\` hook**`,
 * );
 * ```
 *
 * @category Application
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
