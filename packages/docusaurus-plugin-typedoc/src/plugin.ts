import * as path from 'path';

import { LoadContext } from '@docusaurus/types';
import { Application } from 'typedoc';

import { DocsaurusFrontMatterComponent } from './components/front-matter-component';
import { writeSidebar } from './sidebar';
import DocusaurusTheme from './theme/theme';
import { PluginOptions } from './types';

const DEFAULT_PLUGIN_OPTIONS: PluginOptions = {
  inputFiles: ['../src/'],
  docsRoot: 'docs',
  out: 'api',
  sidebar: {
    parentCategory: 'none',
    fullNames: false,
    sidebarFile: 'sidebars.js',
  },
  plugin: ['typedoc-plugin-markdown'],
};

let app: Application;

export default function pluginDocusaurus(
  context: LoadContext,
  pluginOptions: Partial<PluginOptions>,
) {
  const { siteDir } = context;

  // configure options
  const options = {
    ...DEFAULT_PLUGIN_OPTIONS,
    ...pluginOptions,
    // deep merge plugin options
    ...(pluginOptions.plugin && {
      plugin: [
        ...['typedoc-plugin-markdown'],
        ...pluginOptions.plugin.filter(
          (name) => name !== 'typedoc-plugin-markdown',
        ),
      ],
    }),
    // deep merge sidebar
    ...(pluginOptions.sidebar && {
      sidebar: {
        ...DEFAULT_PLUGIN_OPTIONS.sidebar,
        ...pluginOptions.sidebar,
      },
    }),
  };

  return {
    name: 'docusaurus-plugin-typedoc',

    async loadContent() {
      if (!app) {
        app = new Application();
        // configure typedoc options (remove docusaurus props and pass everything else to renderer)
        const typedocOptions = Object.keys(options).reduce((option, key) => {
          if (
            !['id', 'inputFiles', 'sidebar', 'out', 'docsRoot'].includes(key)
          ) {
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
          new DocsaurusFrontMatterComponent(app.renderer, options.sidebar),
        );

        // return the generated reflections
        const project = app.convert(app.expandInputFiles(options.inputFiles));

        // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
        if (!project) {
          return;
        }

        // generate the static docs
        const outputDirectory = path.resolve(
          siteDir,
          options.docsRoot,
          options.out,
        );
        app.generateDocs(project, outputDirectory);

        // write the sidebar (if applicable)
        if (options.sidebar) {
          const theme = app.renderer.getComponent('theme') as DocusaurusTheme;
          writeSidebar(
            siteDir,
            options.out,
            options.sidebar,
            theme.getNavigation(project),
          );
        }
      }
    },
  };
}
