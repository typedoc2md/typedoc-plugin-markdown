/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module
 */
import * as fs from 'fs';
import * as path from 'path';
import { DeclarationOption, Options, OptionsReader } from 'typedoc';
import {
  MarkdownApplication,
  MarkdownPageEvent,
} from 'typedoc-plugin-markdown';
import { DEFAULT_SIDEBAR_OPTIONS } from './options.js';
import * as options from './options/declarations.js';
import { presets } from './options/presets.js';
import { getSidebar } from './sidebars/sidebars.js';
import { slugifyAnchor } from './utils/utils.js';

export function load(app: MarkdownApplication) {
  Object.entries(options).forEach(([name, option]) => {
    app.options.addDeclaration({
      name,
      ...option,
    } as DeclarationOption);
  });

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'vitepress-options';
      readonly order = 0;
      readonly supportsPackages = false;
      read(container: Options) {
        Object.entries(presets).forEach(([key, value]) => {
          container.setValue(key, value);
        });
      }
    })(),
  );

  app.renderer.on(MarkdownPageEvent.END, (page) => {
    page.contents = page.contents?.replace(
      /\[([^\]]+)\]\((?!https?:|\/|\.)([^)]*#?[^)]*)\)/g,
      (match: string, text: string, url: string) => {
        const urlWithAnchor = url.split('#');
        if (urlWithAnchor.length > 1) {
          const anchorPart = slugifyAnchor(urlWithAnchor[1]);
          return `[${text}](${encodeURI(`${urlWithAnchor[0]}#${anchorPart}`)})`;
        }
        return `[${text}](${encodeURI(url)})`;
      },
    );
  });

  app.renderer.postRenderAsyncJobs.push(async (output) => {
    const sidebarOptions = {
      ...DEFAULT_SIDEBAR_OPTIONS,
      ...app.options.getValue('sidebar'),
    };
    if (sidebarOptions.autoConfiguration && output.navigation) {
      const outDir = app.options.getValue('out');
      const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json');
      const basePath = path.relative(app.options.getValue('docsRoot'), outDir);

      const sidebarJson = getSidebar(
        output.navigation,
        basePath,
        sidebarOptions,
      );
      fs.writeFileSync(
        sidebarPath,
        sidebarOptions.pretty
          ? JSON.stringify(sidebarJson, null, 2)
          : JSON.stringify(sidebarJson),
      );
    }
  });
}
