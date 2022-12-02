import { LoadContext } from '@docusaurus/types';
import * as path from 'path';
import { Application } from 'typedoc';
import { load } from 'typedoc-plugin-markdown';
import { getPluginOptions } from './options';
import { bootstrap, removeDir } from './render';
import { DocusaurusTheme } from './theme';
import { PluginOptions } from './types';

// store list of plugin ids when running multiple instances
const apps: string[] = [];

export default function pluginDocusaurus(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  return {
    name: 'docusaurus-plugin-typedoc',
    async loadContent() {
      if (opts.id && !apps.includes(opts.id)) {
        apps.push(opts.id);
        generateTypedoc(context, opts);
      }
    },
    extendCli(cli) {
      cli
        .command('generate-typedoc')
        .description(
          '(docusaurus-plugin-typedoc) Generate TypeDoc docs independently of the Docusaurus build process.',
        )
        .action(async () => {
          context.siteConfig?.plugins.forEach((pluginConfig) => {
            // Check PluginConfig is typed to [string, PluginOptions]
            if (pluginConfig && typeof pluginConfig[1] === 'object') {
              generateTypedoc(context, pluginConfig[1]);
            }
          });
        });
    },
  };
}

/**
 * Initiates a new typedoc Application bootstraped with plugin options
 */
async function generateTypedoc(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  const { siteDir } = context;

  const options = getPluginOptions(opts);

  const outputDir = path.resolve(siteDir, options.docsRoot, options.out);

  if (opts.cleanOutputDir) {
    removeDir(outputDir);
  }

  const app = new Application();

  app.renderer.defineTheme('docusaurus', DocusaurusTheme);

  load(app);

  bootstrap(app, options);

  const project = app.convert();

  // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
  if (!project) {
    return;
  }

  if (options.watch) {
    app.convertAndWatch(async (project) => {
      await app.generateDocs(project, outputDir);
    });
  } else {
    await app.generateDocs(project, outputDir);
  }
}
