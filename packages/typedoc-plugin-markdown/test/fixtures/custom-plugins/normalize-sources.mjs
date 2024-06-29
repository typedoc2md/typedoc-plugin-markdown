// @ts-check
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.END, (page) => {
    page.contents = page.contents?.replace(
      /\[([a-zA-Z0-9_]+\.ts):\d+\]/g,
      '[$1:1]',
    );
  });
}
