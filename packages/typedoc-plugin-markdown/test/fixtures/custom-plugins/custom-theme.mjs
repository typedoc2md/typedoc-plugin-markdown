// @ts-check
import * as fs from 'fs';
import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
  MarkdownTheme,
  MarkdownThemeContext,
} from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.defineTheme('custom-theme', MyMarkdownTheme);

  app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {
    fs.writeFileSync(
      `${renderer.outputDirectory}/renderer-event-begin.txt`,
      'renderer-event-begin success',
    );
  });

  app.renderer.on(MarkdownRendererEvent.END, (renderer) => {
    fs.writeFileSync(
      `${renderer.outputDirectory}/renderer-event-end.txt`,
      'renderer-event-end success',
    );
  });

  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    page.contents = 'PAGE_BEGIN\n';
  });

  app.renderer.on(MarkdownPageEvent.END, (page) => {
    page.contents = page.contents + '\nPAGE_END\n';
  });

  app.renderer.markdownHooks.on('page.begin', () => '> `page.begin` hook');

  app.renderer.markdownHooks.on(
    'page.end',
    () => `**Generated using \`page.end\` hook**`,
  );

  app.renderer.markdownHooks.on(
    'content.begin',
    () => '> `content.begin` hook',
  );

  app.renderer.markdownHooks.on(
    'index.page.begin',
    () => '> `page.index.begin` hook',
  );

  app.renderer.markdownHooks.on(
    'index.page.end',
    () => '> **Generated using `page.index.end` hook**',
  );

  app.renderer.preRenderAsyncJobs.push(async (renderer) => {
    await new Promise((r) => setTimeout(r, 5));
    fs.writeFileSync(
      `${renderer.outputDirectory}/pre-render-async-job.txt`,
      'pre-render-async-job success',
    );
  });

  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    await new Promise((r) => setTimeout(r, 5));
    fs.writeFileSync(
      `${renderer.outputDirectory}/post-render-async-job.txt`,
      'post-render-async-job success',
    );
  });
}

class MyMarkdownTheme extends MarkdownTheme {
  /**
   * @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page
   */
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}

class MyMarkdownThemeContext extends MarkdownThemeContext {
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
    header: () => {
      return `
<div style="display:flex; align-items:center;">
  <img alt="My logo" src="https://placehold.co/100x50" style="margin-right: .5em;" />
  <em>Welcome to ${this.page.project.name} with a customised header partial!!</em>
</div>
`;
    },
  };
}
