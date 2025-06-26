// @ts-check
import { MarkdownPageEvent } from '../../../dist/index.js';

/**
 * @param {import('../../../dist/index.js').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.END, (page) => {
    page.contents = page.contents?.replace(
      /\[(?:.*\/)?([a-zA-Z0-9_]+\.ts):\d+\]\(http:\/\/source-url\)/g,
      '[$1:1](http://source-url)',
    );
  });
}
