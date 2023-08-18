import * as fs from 'fs';
import * as path from 'path';
import { Application, Options, OptionsReader, ParameterType } from 'typedoc';
import { MarkdownRendererEvent } from 'typedoc-plugin-markdown';
import { SidebarOptions } from './model';
import { DEFAULT_SIDEBAR_OPTIONS } from './options';
import { getSidebar } from './sidebars/sidebars';
import { VitepressTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('vitepress', VitepressTheme);

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
    new (class implements OptionsReader {
      name = 'vitepress-options';
      readonly order = 0;
      readonly supportsPackages = false;
      read(container: Options) {
        Object.entries({
          entryFileName: 'index.md',
          hidePageHeader: true,
          out: './docs/api',
          theme: 'vitepress',
        }).forEach(([key, value]) => {
          container.setValue(key, value);
        });
      }
    })(),
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
        fs.writeFileSync(sidebarPath, JSON.stringify(sidebarJson, null, 2));
      }
    },
  );
}
