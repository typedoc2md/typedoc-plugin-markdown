// @ts-check

import * as fs from 'fs';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (output) => {
    fs.writeFileSync(
      `${output.outputDirectory}/urls.json`,
      JSON.stringify(
        output.urls?.map((url) => ({
          url: url.url,
          model: {
            id: url.model?.id,
            name: url.model?.name,
            kind: url.model?.kind,
          },
        })),
        null,
        2,
      ),
    );
  });
}
