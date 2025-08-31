// @ts-check

import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from '../../../dist/public-api.js';

/**
 * @param {import('../../../dist/index.js').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.markdownHooks.on(
    'page.begin',
    () => `**Generated using \`page.begin\` hook**`,
  );

  app.renderer.on(MarkdownPageEvent.BEGIN, (pageEvent) => {
    pageEvent.contents = pageEvent.contents.replace('foo', 'bar');
  });

  app.renderer.on(MarkdownRendererEvent.BEGIN, (rendererEvent) => {
    console.log(rendererEvent);
  });

  app.renderer.preRenderAsyncJobs.push(async (rendererEvent) => {
    console.log(rendererEvent);
  });

  app.renderer.postRenderAsyncJobs.push(async (rendererEvent) => {
    console.log(rendererEvent);
  });

  app.renderer.preMarkdownRenderAsyncJobs.push(async (rendererEvent) => {
    const navigation = rendererEvent.navigation?.map((navItem) => ({
      title: navItem.title,
    }));
    console.log(navigation);
  });
}
