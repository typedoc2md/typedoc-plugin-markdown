import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';
import MarkdownPlugin from 'typedoc-plugin-markdown';

import { FrontMatterComponent } from './front-matter';
import { getOutputDirectory } from './options';
import { bootstrap } from './render';
import { SidebarComponent, writeSidebar } from './sidebar';
import { PluginOptions } from './types';
import { convertAndWatch } from './watch';

// store list of plugin ids when running multiple instances
const apps: string[] = [];

export default async function pluginDocusaurus(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  if (opts.id && !apps.includes(opts.id)) {
    apps.push(opts.id);

    const { siteDir } = context;

    const app = new Application();

    MarkdownPlugin(app);

    const options = bootstrap(app, siteDir, opts);

    if (options.sidebar) {
      // generate an empty sidebar up-front so it can be resolved from sidebars.js
      writeSidebar(options, 'module.exports=[];');
      app.renderer.addComponent('sidebar', new SidebarComponent(app.renderer));
    }

    app.renderer.addComponent('fm', new FrontMatterComponent(app.renderer));

    const project = app.convert();

    // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
    if (!project) {
      return;
    }

    if (options.watch) {
      convertAndWatch(app, options);
    } else {
      await app.generateDocs(project, getOutputDirectory(options));
    }
  }

  return {
    name: 'docusaurus-plugin-typedoc',
  };
}
