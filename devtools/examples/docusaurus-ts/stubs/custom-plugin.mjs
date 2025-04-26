// @ts-check
import * as fs from 'fs';
import { MarkdownRendererEvent } from 'typedoc-plugin-markdown';

export function load(app) {
  app.renderer.on(MarkdownRendererEvent.END, (renderer) => {
    fs.writeFileSync(
      `${renderer.outputDirectory}/custom-plugin.txt`,
      'custom-plugin',
    );
  });
}
