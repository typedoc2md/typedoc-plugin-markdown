import * as fs from 'fs';
import * as path from 'path';
import { Application, ParameterType } from 'typedoc';
import {
  MarkdownPluginOptionsReader,
  MarkdownRendererEvent,
} from 'typedoc-plugin-markdown';
import { SidebarOptions } from './models';
import sidebarV1 from './sidebar.v1';
import sidebarV2 from './sidebar.v2';

/**
 * Default export is a typedoc plugin
 */

export function load(app: Application) {
  app.options.addDeclaration({
    name: 'sourceDir',
    help: '',
    type: ParameterType.Path,
    defaultValue: './docs',
  });

  app.options.addDeclaration({
    name: 'sidebar',
    help: '',
    type: ParameterType.Mixed,
    defaultValue: {
      autoConfiguration: true,
      version: 'v2',
    },
  });

  app.options.addReader(
    new MarkdownPluginOptionsReader({
      anchorFormat: 'slug',
      out: './docs/api',
    }),
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const outDir = app.options.getValue('out') as string;
      const sidebarOptions = app.options.getValue('sidebar') as SidebarOptions;
      const sourceDir = app.options.getValue('sourceDir') as string;
      const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json');
      const basePath = path.relative(sourceDir, outDir);
      const sidebarJson =
        sidebarOptions.version === 'v1'
          ? sidebarV1(output.navigation, basePath)
          : sidebarV2(output.navigation, basePath);
      fs.writeFileSync(sidebarPath, JSON.stringify(sidebarJson));
    },
  );
}
