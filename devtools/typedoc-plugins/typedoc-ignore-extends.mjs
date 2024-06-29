// @ts-check
import { Converter } from 'typedoc';
/**
 * @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(Converter.EVENT_CREATE_DECLARATION, (_ctx, declaration) => {
    if (declaration.name === 'MarkdownRenderer') {
      declaration.extendedTypes = null;
      declaration.typeHierarchy = null;
    }
  });
}
