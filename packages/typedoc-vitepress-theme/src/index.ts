import * as fs from 'fs';
import * as path from 'path';
import {
  Application,
  DeclarationOption,
  Options,
  OptionsReader,
} from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from 'typedoc-plugin-markdown';
import { DEFAULT_SIDEBAR_OPTIONS } from './options';
import * as options from './options/declarations';
import presets from './options/presets';
import { getSidebar } from './sidebars/sidebars';

export function load(app: Application) {
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

  app.renderer.on(MarkdownPageEvent.END, (page: MarkdownPageEvent) => {
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

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const sidebarOptions = {
        ...DEFAULT_SIDEBAR_OPTIONS,
        ...app.options.getValue('sidebar'),
      };
      if (sidebarOptions.autoConfiguration && output.navigation) {
        const outDir = app.options.getValue('out');
        const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json');
        const basePath = path.relative(
          app.options.getValue('docsRoot'),
          outDir,
        );

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
    },
  );
}

function slugifyAnchor(anchor: string) {
  return anchor
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
