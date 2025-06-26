// @ts-check
import { MarkdownTheme, MarkdownThemeContext } from '../../../dist/index.js';

/**
 * @param {import('../../../dist/index.js').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme('stub-groups', StubTheme);
}

class StubTheme extends MarkdownTheme {
  /**
   * @param {import('../../../dist/index.js').MarkdownPageEvent} page
   */
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
  partials = {
    ...this.partials,
    signature: () => {
      return `_SIGNATURE_MEMBER_PARTIAL_`;
    },
  };
}
