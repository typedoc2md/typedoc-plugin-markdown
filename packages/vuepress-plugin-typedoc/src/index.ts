import * as fs from 'fs';
import * as path from 'path';
import { Application, ParameterType, RendererEvent } from 'typedoc';
import { MarkdownPluginOptionsReader } from 'typedoc-plugin-markdown';
import { getV1Sidebar } from './v1/sidebar';
import { getV2Sidebar } from './v2/sidebar';

export function load(app: Application) {
  app.options.addReader(
    new MarkdownPluginOptionsReader({
      out: './docs/api',
    }),
  );

  app.options.addDeclaration({
    name: 'sourceDir',
    help: '',
    type: ParameterType.Path,
    defaultValue: './docs',
  });

  app.options.addDeclaration({
    name: 'sidebarPath',
    help: '',
    type: ParameterType.String,
    defaultValue: '/.vuepress/typedoc-sidebar.json',
  });

  app.options.addDeclaration({
    name: 'vuepressVersion',
    help: '',
    type: ParameterType.String,
    defaultValue: 'v1',
  });

  app.renderer.postRenderAsyncJobs.push(async (renderer: RendererEvent) => {
    const sidebarPath = `${app.options.getValue('sourceDir')}/${
      app.options.getValue('sidebarPath') as string
    }`;

    const vuePressVersion = app.options.getValue('vuepressVersion');

    const basePath = path.relative(
      app.options.getValue('sourceDir') as string,
      app.options.getValue('out') as string,
    );

    const sidebarJson =
      vuePressVersion === 'v1'
        ? getV1Sidebar(renderer.project, basePath)
        : getV2Sidebar(renderer.project, basePath);

    if (!fs.existsSync(path.dirname(sidebarPath))) {
      fs.mkdirSync(path.dirname(sidebarPath));
    }
    fs.writeFileSync(sidebarPath, JSON.stringify(sidebarJson, null, 2));

    app.logger.verbose(
      '[typedoc-plugin-vuepress] typedoc-sidebar.json file written' +
        renderer.outputDirectory,
    );
  });
}
