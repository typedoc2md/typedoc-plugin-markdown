// @ts-check
import * as fs from 'fs';
import {
  MarkdownHooks,
  MarkdownTheme,
  MarkdownThemeRenderContext,
} from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme('custom-theme', MyMarkdownTheme);

  app.renderer.markdownHooks.on(
    MarkdownHooks.PAGE_BEGIN,
    () => '> `page.begin` hook',
  );

  app.renderer.markdownHooks.on(
    MarkdownHooks.PAGE_END,
    () => `**Generated using \`page.end\` hook**`,
  );

  app.renderer.markdownHooks.on(
    MarkdownHooks.CONTENT_BEGIN,
    () => '> `content.begin` hook',
  );

  app.renderer.markdownHooks.on(
    MarkdownHooks.INDEX_PAGE_BEGIN,
    () => '> `page.index.begin` hook',
  );

  app.renderer.markdownHooks.on(
    MarkdownHooks.INDEX_PAGE_END,
    () => '> **Generated using `page.index.end` hook**',
  );

  app.renderer.markdownHooks.on(
    MarkdownHooks.INDEX_CONTENT_BEGIN,
    () => '> `content.index.begin` hook',
  );

  app.renderer.preRenderAsyncJobs.push(async (output) => {
    await new Promise((r) => setTimeout(r, 5));
    fs.writeFileSync(
      `${output.outputDirectory}/pre-render.txt`,
      'pre render success',
    );
  });

  app.renderer.postRenderAsyncJobs.push(async (output) => {
    await new Promise((r) => setTimeout(r, 5));
    fs.writeFileSync(
      `${output.outputDirectory}/post-render.txt`,
      'post render success',
    );
  });
}

class MyMarkdownTheme extends MarkdownTheme {
  /**
   * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page
   */
  getRenderContext(page) {
    return new MyMarkdownThemeRenderContext(
      this,
      page,
      this.application.options,
    );
  }
}

class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
  helpers = {
    ...this.helpers,
    /**
     * @param {string} comment
     */
    parseComments: (comment) => {
      const regex = /:::([^\n\s]*)([^\n]*)([\s\S]*?):::/g;
      const parsedComments = comment.replace(
        regex,
        (match, p1, p2, p3) =>
          `<Tag type="${p1.trim()}">**${p2.trim()}** ${p3.trim()}</Tag>`,
      );
      return parsedComments;
    },
  };
  partials = {
    ...this.partials,
    /**
     * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page
     */
    header: (page) => {
      return `
<div style="display:flex; align-items:center;">
  <img alt="My logo" src="https://placehold.co/100x50" style="margin-right: .5em;" />
  <em>Welcome to ${page.project.name} with a customised header partial!!</em>
</div>
`;
    },
  };
}
