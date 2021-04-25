import * as fs from 'fs';
import * as path from 'path';

import cuid from 'cuid';
import * as tmp from 'tmp';
import { Application } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

import { getOutputDirectory } from '../../dist/options';
import { bootstrap } from '../../dist/render';
import { SidebarComponent } from '../../dist/sidebar';
import { PluginOptions } from '../../src/types';

tmp.setGracefulCleanup();
async function generate(opts = {}) {
  const app = new Application();

  const tmpobj = tmp.dirSync();

  const options = bootstrap(app, tmpobj.name, {
    ...opts,
    logger: 'none',
    plugin: [
      path.join(__dirname, '../../../typedoc-plugin-markdown/dist/index'),
    ],
    entryPoints: [
      '../typedoc-plugin-markdown/test/stubs/src/theme.ts',
      '../typedoc-plugin-markdown/test/stubs/src/frontmatter.ts',
    ],
    tsconfig: '../typedoc-plugin-markdown/test/stubs/tsconfig.json',
  } as Partial<PluginOptions>);

  const project = app.convert();

  // generate the static docs
  await app.generateDocs(project, getOutputDirectory(options));
  const componentNamename = cuid();
  app.renderer.addComponent(
    componentNamename,
    new SidebarComponent(app.renderer),
  );
  const sidebarComponent = app.renderer.getComponent(
    componentNamename,
  ) as SidebarComponent;
  return { project, sidebarComponent, tmpobj };
}

describe(`Sidebar:`, () => {
  test(`should write sidebar with defaults out`, async () => {
    const { project, sidebarComponent, tmpobj } = await generate();
    const renderer = {
      project,
    } as RendererEvent;
    sidebarComponent.onRendererBegin(renderer);
    const sidebar = fs.readFileSync(tmpobj.name + '/typedoc-sidebar.js');
    expect(sidebar.toString()).toMatchSnapshot();
  });
  test(`should write sidebar without readme and with custom out dir/sidebar path`, async () => {
    const { project, sidebarComponent, tmpobj } = await generate({
      out: 'custom-out',
      readme: 'none',
      sidebar: {
        sidebarFile: './custom-sidebar.js',
      },
    });
    const renderer = {
      project,
    } as RendererEvent;
    sidebarComponent.onRendererBegin(renderer);
    const sidebar = fs.readFileSync(tmpobj.name + '/custom-sidebar.js');
    expect(sidebar.toString()).toMatchSnapshot();
  });
});
