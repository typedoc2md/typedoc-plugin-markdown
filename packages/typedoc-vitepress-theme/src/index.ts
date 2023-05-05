import * as fs from 'fs';
import * as path from 'path';
import { Application, ParameterType } from 'typedoc';
import {
  MarkdownPluginOptionsReader,
  MarkdownRendererEvent,
} from 'typedoc-plugin-markdown';
import { SidebarOptions } from './model';
import { DEFAULT_SIDEBAR_OPTIONS } from './options';
import { getSidebar } from './sidebars/sidebars';

export function load(app: Application) {
  app.options.addDeclaration({
    name: 'docsRoot',
    help: '',
    type: ParameterType.Path,
    defaultValue: './docs',
  });

  app.options.addDeclaration({
    name: 'sidebar',
    help: '',
    type: ParameterType.Mixed,
    defaultValue: DEFAULT_SIDEBAR_OPTIONS,
  });

  app.options.addReader(
    new MarkdownPluginOptionsReader({
      entryDocument: 'index.md',
      anchorFormat: 'slug',
      //hidePageHeader: true,
      out: './docs/api',
    }),
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const sidebarOptions = {
        ...DEFAULT_SIDEBAR_OPTIONS,
        ...(app.options.getValue('sidebar') as SidebarOptions),
      };
      if (sidebarOptions.autoConfiguration) {
        const outDir = app.options.getValue('out') as string;
        const sourceDir = app.options.getValue('docsRoot') as string;
        const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json');
        const basePath = path.relative(sourceDir, outDir);
        const sidebarJson = getSidebar(
          output.navigation,
          basePath,
          sidebarOptions,
        );
        fs.writeFileSync(sidebarPath, JSON.stringify(sidebarJson));
      }
    },
  );
}
