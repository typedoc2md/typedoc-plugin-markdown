import * as fs from 'fs';
import { MarkdownRendererEvent, NavigationItem } from 'typedoc-plugin-markdown';
import { PluginOptions } from '../models.js';
import { getPluginOptions } from '../options/options.js';
import { writeSidebar } from './sidebar.js';

export default async function pluginDocusaurus(
  context: any,
  opts: Partial<PluginOptions>,
) {
  await generateTypedoc(context, opts);

  return {
    name: 'docusaurus-plugin-typedoc',
    extendCli(cli: any) {
      cli
        .command('generate-typedoc')
        .description(
          `[docusaurus-plugin-typedoc] Generate TypeDoc docs independently of the Docusaurus build process.`,
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
 * Initiates a new typedoc Application bootstrapped with plugin options
 */
async function generateTypedoc(context: any, opts: Partial<any>) {
  // get plugin options
  const options = getPluginOptions(context, opts);

  // create outDir if it doesn't exist
  if (!fs.existsSync(options.out)) {
    fs.mkdirSync(options.out, { recursive: true });
  }

  // configure options for typedoc
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    id,
    siteDir,
    numberPrefixParser,
    docsPresetPath,
    sidebar,
    ...optionsPassedToTypeDoc
  } = options;

  const typeDocApp = await import('./typedoc.cjs');

  // bootstrap typedoc with options
  await typeDocApp.bootstrap(
    optionsPassedToTypeDoc,
    async (renderer: MarkdownRendererEvent) => {
      writeSidebar(
        renderer.navigation as NavigationItem[],
        renderer.outputDirectory,
        sidebar,
        siteDir,
        docsPresetPath,
        numberPrefixParser,
      );
    },
  );
}
