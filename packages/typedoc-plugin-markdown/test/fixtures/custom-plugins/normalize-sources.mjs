// @ts-check
import { Converter } from 'typedoc';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(
    Converter.EVENT_CREATE_DECLARATION,
    (context, reflection) => {
      if (reflection.sources) {
        reflection.sources = reflection.sources?.map((source) => ({
          ...source,
          line: '1',
        }));
      }
    },
  );
  app.converter.on(Converter.EVENT_CREATE_SIGNATURE, (context, reflection) => {
    if (reflection.sources) {
      reflection.sources = reflection.sources?.map((source) => ({
        ...source,
        line: '1',
      }));
    }
  });
}
