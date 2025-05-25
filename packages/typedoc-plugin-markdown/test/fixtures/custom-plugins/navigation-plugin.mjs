import * as fs from 'fs';

// @ts-check

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (output) => {
    if (output.navigation) {
      fs.writeFileSync(
        `${output.outputDirectory}/sidebar.json`,
        JSON.stringify(output.navigation, null, 2),
      );
    }
  });
}
