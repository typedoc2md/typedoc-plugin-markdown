import * as fs from 'fs';

// @ts-check

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (output) => {
    fs.writeFileSync(
      `${output.outputDirectory}/urls.json`,
      JSON.stringify(
        output.pages.map((page) => page.url),
        null,
        2,
      ),
    );
  });
}
