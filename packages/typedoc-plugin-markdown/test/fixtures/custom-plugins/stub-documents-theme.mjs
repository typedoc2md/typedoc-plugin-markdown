// @ts-check
import { MarkdownTheme, MarkdownThemeContext } from '../../../dist/index.js';

/**
 * @param {import('../../../dist/index.js').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme('stub-documents', StubTheme);
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
    constructor: () => {
      return `_CONSTRUCTOR_MEMBER_PARTIAL_`;
    },
    declarationTitle: () => {
      return `_DECLARATION_TITLE_PARTIAL_`;
    },
    parametersList: () => {
      return `_PARAMETERS_LIST_PARTIAL_`;
    },
    signatureReturns: () => {
      return `_SIGNATURE_RETURNS_PARTIAL_`;
    },
    signatureTitle: () => {
      return `_SIGNATURE_TITLE_PARTIAL_`;
    },
    typeDeclaration: () => {
      return `_TYPE_DECLARATION_PARTIAL_`;
    },
  };
}
