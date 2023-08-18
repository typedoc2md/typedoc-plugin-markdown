import * as fs from 'fs';
import * as path from 'path';
import { Application, TypeDocOptions } from 'typedoc';
import { load as loadTypedocPluginFrontmatter } from 'typedoc-plugin-frontmatter';
import { load as loadTypedocPluginMarkdown } from 'typedoc-plugin-markdown';
import { PluginOptions } from '.';
import { getPluginOptions, loadOptions } from './options';
import { loadRenderer } from './renderer';

// store list of plugin ids when running multiple instances
const apps: string[] = [];

export default function pluginDocusaurus(
  context: any,
  opts: Partial<PluginOptions>,
) {
  return {
    name: 'docusaurus-plugin-typedoc',
    async loadContent() {
      if (opts.id && !apps.includes(opts.id)) {
        apps.push(opts.id);
        await generateTypedoc(context, opts);
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
async function generateTypedoc(context: any, opts: Partial<PluginOptions>) {
  const { siteDir } = context;

  const options = getPluginOptions(opts);

  const { id, docsRoot, ...optionsPassedToTypeDoc } = options;

  const outputDir = path.resolve(siteDir, options.docsRoot, options.out);

  const app = new Application();

  loadOptions(app);
  loadRenderer(app);
  loadTypedocPluginMarkdown(app);
  loadTypedocPluginFrontmatter(app);

  await app.bootstrapWithPlugins(
    optionsPassedToTypeDoc as unknown as Partial<TypeDocOptions>,
  );

  const project = app.convert();

  // if project is undefined typedoc has a problem - error logging will be supplied by typedoc.
  if (!project) {
    if (app.options.getValue('skipErrorChecking')) {
      return;
    }
    console.error(
      '[docusaurus-plugin-typedoc] TypeDoc exited with an error. Use the "skipErrorChecking" option to disable TypeDoc error checking.',
    );
    process.exit();
  }

  if (app.options.getValue('watch')) {
    app.convertAndWatch(async (project) => {
      await app.generateDocs(project, outputDir);
    });
  } else {
    await app.generateDocs(project, outputDir);
  }
}

export function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}

export function normalizePath(path: string) {
  return path.replace(/\\/g, '/');
}
