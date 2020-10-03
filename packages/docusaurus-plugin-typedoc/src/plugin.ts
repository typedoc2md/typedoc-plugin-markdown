import * as path from 'path';

import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';

import { DocsaurusFrontMatterComponent } from './components/front-matter.component';
import { writeSidebar } from './sidebar';
import DocusaurusTheme from './theme/theme';
import { PluginOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  inputFiles: ['../src/'],
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    fullNames: false,
    sidebarFile: 'typedoc-sidebar.js',
    globalsLabel: 'Globals',
    readmeLabel: 'README',
  },
  plugin: ['typedoc-plugin-markdown'],
};

let app: Application;

export default function pluginDocusaurus(
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
    // deep merge plugin options
    ...(opts.plugin && {
      plugin: [
        ...['typedoc-plugin-markdown'],
        ...opts.plugin.filter((name) => name !== 'typedoc-plugin-markdown'),
      ],
    }),
    // deep merge sidebar
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

    // configure typedoc options (remove docusaurus props and pass everything else to renderer)
    const typedocOptions = Object.keys(options).reduce((option, key) => {
      if (!['id', 'inputFiles', 'sidebar', 'out', 'docsRoot'].includes(key)) {
        option[key] = options[key];
      }
      return option;
    }, {});

    // bootstrap typedoc app (pass in docusaurus theme file)
    app.bootstrap({
      ...typedocOptions,
      theme: path.resolve(__dirname, 'theme'),
    });

    // add frontmatter component
    app.renderer.addComponent(
      'docusaurus-frontmatter',
      new DocsaurusFrontMatterComponent(
        app.renderer,
        options.out,
        options.sidebar,
      ),
    );

    // return the generated reflections
    const project = app.convert(app.expandInputFiles(options.inputFiles));

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
    app.generateDocs(project, outputDirectory);

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
