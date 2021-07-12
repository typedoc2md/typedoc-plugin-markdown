import * as path from 'path';

import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';

import { getOutputDirectory } from './options';
import { bootstrap } from './render';
import { writeSidebar } from './sidebar';
import { PluginOptions } from './types';

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

    app.options.setValue('theme', path.resolve(__dirname));

    load(app);

    const options = bootstrap(app, opts);

    // Do not break legacy manual sidebar generation implementations
    if (options.sidebar.sidebarFile) {
      writeSidebar(siteDir, options);
    }

    const project = app.convert();

    // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
    if (!project) {
      return;
    }

    if (options.watch) {
      app.convertAndWatch(async (project) => {
        await app.generateDocs(project, getOutputDirectory(siteDir, options));
      });
    } else {
      await app.generateDocs(project, getOutputDirectory(siteDir, options));
    }
  }

  return {
    name: 'docusaurus-plugin-typedoc',
  };
}
