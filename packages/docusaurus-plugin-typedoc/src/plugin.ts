import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';
import MarkdownPlugin from 'typedoc-plugin-markdown';

import { getOutputDirectory } from './options';
import { bootstrap } from './render';
import { shouldWriteSidebar, writeSidebar } from './sidebar';
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

    MarkdownPlugin(app);

    const options = bootstrap(app, opts);

    // Try not break legacy manual sidebar generation implementations
    if (shouldWriteSidebar(siteDir, options)) {
      app.logger.warn(
        'As of docusaurus-plugin-markdown@0.14.0 manual sidebar generation is deprecated. Please see package Readme for details.',
      );
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
