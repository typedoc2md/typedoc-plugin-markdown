import * as fs from 'fs';
import { TypeDocOptions } from 'typedoc';
import { getPluginOptions } from './options.js';
import { Cli, LoadContext } from './types/index.js';
import { PluginOptions } from './types/plugin.js';

export default async function pluginDocusaurus(
  context: LoadContext,
  opts: Partial<PluginOptions & TypeDocOptions>,
) {
  await generateTypedoc(context, opts);

  return {
    name: 'docusaurus-plugin-typedoc',
    extendCli(cli: Cli) {
      cli
        .command('generate-typedoc')
        .description(
          `[docusaurus-plugin-typedoc] Generate TypeDoc docs independently of the Docusaurus build process.`,
        )
        .action(async () => {
          context.siteConfig?.plugins?.forEach((pluginConfig) => {
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
async function generateTypedoc(
  context: LoadContext,
  opts: Partial<PluginOptions>,
) {
  // get plugin options
  const options = getPluginOptions(context, opts);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...typedocOptions } = options;

  // create outDir if it doesn't exist
  if (!fs.existsSync(typedocOptions.out)) {
    fs.mkdirSync(typedocOptions.out, { recursive: true });
  }

  // Bootstrap typedoc with options (this mimics the TypeDoc CLI)
  const typedoc = await import('./typedoc.cjs');
  await typedoc.bootstrap(typedocOptions);
}
