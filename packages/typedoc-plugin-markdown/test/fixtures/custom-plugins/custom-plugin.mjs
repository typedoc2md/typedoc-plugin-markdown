// @ts-check

import { MarkdownHooks, MarkdownPageEvent } from '../../../dist/index.js';

/**
 * @param {import('../../../dist/index.js').MarkdownApplication} app
 */
export function load(app) {
  // do something with app instance
  console.log(app.renderer);

  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    page.contents = 'PAGE_BEGIN\n';
  });

  app.renderer.hooks.on(
    MarkdownHooks.PageBegin,
    () => `**Generated using \`page.begin\` hook**`,
  );
}
