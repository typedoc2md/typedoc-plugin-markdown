import * as fs from 'fs';
import { Application } from 'typedoc';
import { MarkdownRendererEvent } from '../../dist';

export function load(app: Application) {
  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      fs.writeFileSync(
        `${output.outputDirectory}/sidebar.json`,
        JSON.stringify(output.navigation, null, 2),
      );
    },
  );
}
