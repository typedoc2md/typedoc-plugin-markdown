import * as fs from 'fs';
import * as path from 'path';
import { Application, PageEvent } from 'typedoc';
import { MarkdownRendererEvent } from 'typedoc-plugin-markdown';
import { PluginOptions } from '.';
import { getPluginOptions } from './options';
import { getSidebar } from './sidebar';
import { DocusuaurusTheme } from './theme';

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

  const { id, sidebar, ...optionsPassedToTypeDoc } =
    options as Partial<PluginOptions>;

  const app = await Application.bootstrapWithPlugins(optionsPassedToTypeDoc);

  app.renderer.defineTheme('docusaurus', DocusuaurusTheme);

  const outputDir = app.options.getValue('out');

  if (options.cleanOutputDir) {
    removeDir(outputDir);
  }

  if (context.siteConfig?.markdown?.format !== 'mdx') {
    app.renderer.on(PageEvent.END, (event: PageEvent) => {
      event.contents = event.contents?.replace(/\\</g, '<');
    });
  }

  if (sidebar?.autoConfiguration) {
    const docsPreset = context.siteConfig?.presets.find((preset: any) =>
      Boolean(preset[1]?.docs),
    );

    app.renderer.postRenderAsyncJobs.push(
      async (output: MarkdownRendererEvent) => {
        const sidebarPath = path.resolve(outputDir, 'typedoc-sidebar.cjs');
        const baseDir = path
          .relative(siteDir, outputDir)
          .split(path.sep)
          .slice(1)
          .join(path.sep);
        const sidebarJson = getSidebar(
          output.navigation,
          baseDir,
          sidebar.filteredIds,
          docsPreset[1]?.docs?.numberPrefixParser,
        );
        fs.writeFileSync(
          sidebarPath,
          `// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: ${JSON.stringify(
            sidebarJson,
            null,
            sidebar.pretty ? 2 : 0,
          )}};
module.exports = typedocSidebar.items;`,
        );
      },
    );
  }

  const project = await app.convert();

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

export function removeDir(path: string) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);
    if (files.length > 0) {
      files.forEach(function (filename) {
        if (fs.statSync(path + '/' + filename).isDirectory()) {
          removeDir(path + '/' + filename);
        } else {
          fs.unlinkSync(path + '/' + filename);
        }
      });
      fs.rmdirSync(path);
    } else {
      fs.rmdirSync(path);
    }
  }
}
