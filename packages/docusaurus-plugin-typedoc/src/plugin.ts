import * as path from 'path';

import { LoadContext } from '@docusaurus/types';
import { Application, TSConfigReader, TypeDocReader } from 'typedoc';

import { DocusaurusFrontMatterComponent } from './front-matter';
import { writeSidebar } from './sidebar';
import DocusaurusTheme from './theme/theme';
import { PluginOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    globalsLabel: 'Index',
    readmeLabel: 'Readme',
  },
  globalsTitle: undefined,
  readmeTitle: undefined,
};

let app: Application;

export default async function pluginDocusaurus(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  const { siteDir } = context;

  /**
   * Configure options
   */
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...opts,
    ...(opts.sidebar && {
      sidebar: {
        ...DEFAULT_PLUGIN_OPTIONS.sidebar,
        ...opts.sidebar,
      },
    }),
  };

  /**
   * Initialize and build app
   * - currently we can't re-compile with devServer due to infinate render loop
   * - @TODO look if configureWebpack lifecycle can be updated to handle more gracefully
   */
  if (!app) {
    app = new Application();

    // TypeDoc options
    const typedocOptions = Object.keys(options).reduce((option, key) => {
      if (![...['id'], ...Object.keys(DEFAULT_PLUGIN_OPTIONS)].includes(key)) {
        option[key] = options[key];
      }
      return option;
    }, {});

    app.options.addReader(new TypeDocReader());
    app.options.addReader(new TSConfigReader());

    // bootstrap TypeDoc app
    app.bootstrap({
      // filtered TypeDoc options
      ...typedocOptions,
      // TypeDoc plugins
      plugin: [
        ...['typedoc-plugin-markdown'],
        ...(opts.plugin
          ? opts.plugin.filter((name) => name !== 'typedoc-plugin-markdown')
          : []),
      ],
      // add docusaurus theme
      theme: path.resolve(__dirname, 'theme'),
    });

    // add frontmatter component
    app.renderer.addComponent(
      'docusaurus-frontmatter',
      new DocusaurusFrontMatterComponent(app.renderer, options),
    );

    // return the generated reflections
    const project = app.convert();

    // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
    if (!project) {
      return;
    }

    // construct outputDirectory path
    const outputDirectory = path.resolve(
      siteDir,
      options.docsRoot,
      options.out,
    );

    // generate the static docs
    await app.generateDocs(project, outputDirectory);

    // write the sidebar (if applicable)
    if (options.sidebar) {
      const theme = app.renderer.getComponent('theme') as DocusaurusTheme;
      writeSidebar(
        options.disableOutputCheck || theme.isOutputDirectory(outputDirectory),
        siteDir,
        options.out,
        options.sidebar,
        theme.getNavigation(project),
      );
    }
  }

  // we need to generate the sidebar before any available lifecycle apis
  return {
    name: 'docusaurus-plugin-typedoc',
  };
}
