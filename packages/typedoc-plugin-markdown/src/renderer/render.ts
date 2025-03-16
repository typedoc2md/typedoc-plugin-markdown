import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from '@plugin/events/index.js';
import { constants } from '@plugin/options/index.js';
import {
  CategoryRouter,
  GroupRouter,
  KindDirRouter,
  KindRouter,
  MemberRouter,
  ModuleRouter,
  StructureDirRouter,
  StructureRouter,
} from '@plugin/router/index.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import { MarkdownRenderer } from '@plugin/types/index.js';
import * as fs from 'fs';
import * as path from 'path';
import {
  Application,
  i18n,
  normalizePath,
  PageDefinition,
  ProjectReflection,
  Renderer,
  Router,
} from 'typedoc';

/**
 * The render method for the Markdown plugin
 *
 * @remarks
 *
 * This is essentially a copy the default theme render method with some adjustments.
 *
 * - Removes unnecessary async calls to load highlighters only required for html theme.
 * - Removes hooks logic that are jsx specific.
 * - Adds any logic specific to markdown rendering.
 */
export async function render(
  renderer: MarkdownRenderer,
  project: ProjectReflection,
  outputDirectory: string,
) {
  const formatWithPrettier =
    renderer.application.options.getValue('formatWithPrettier');

  // Setup output directory
  if (
    !prepareRouter(renderer) ||
    !(await prepareOutputDirectory(renderer, outputDirectory))
  ) {
    return;
  }

  prepareTheme(renderer);

  const pages = renderer.router!.buildPages(project);

  const output = new MarkdownRendererEvent(outputDirectory, project, pages);

  output.navigation = (renderer.theme as MarkdownTheme).getNavigation(project);

  renderer.trigger(MarkdownRendererEvent.BEGIN, output);

  await executeJobs(renderer.preRenderAsyncJobs, output);

  renderer.application.logger.verbose(
    `There are ${pages.length} pages to write.`,
  );

  for (const page of pages) {
    await renderDocument(
      renderer,
      outputDirectory,
      page,
      project,
      formatWithPrettier,
    );
  }

  await executeJobs(renderer.postRenderAsyncJobs, output);

  renderer.trigger(MarkdownRendererEvent.END, output);

  copyMediaFiles(project, outputDirectory);

  renderer.router = void 0;
  renderer.theme = void 0;
}

/**
 * Output directory setup (this is essentially copied from TypeDoc)
 */
async function prepareOutputDirectory(
  renderer: Renderer,
  outputDirectory: string,
): Promise<boolean> {
  if (renderer.application.options.getValue('cleanOutputDir')) {
    try {
      fs.rmSync(outputDirectory, { recursive: true, force: true });
    } catch {
      renderer.application.logger.warn(
        i18n.could_not_empty_output_directory_0(outputDirectory),
      );
      return false;
    }
  }

  try {
    fs.mkdirSync(outputDirectory, { recursive: true });
  } catch {
    renderer.application.logger.error(
      i18n.could_not_create_output_directory_0(outputDirectory),
    );
    return false;
  }

  if (
    renderer.application.options.isSet('githubPages') &&
    renderer.application.options.getValue('githubPages')
  ) {
    try {
      writeFileSync(path.join(outputDirectory, '.nojekyll'), '');
    } catch {
      renderer.application.logger.warn(
        i18n.could_not_write_0(path.join(outputDirectory, '.nojekyll')),
      );
    }
  }
  return true;
}

/**
 * Prepare the Router for the renderer
 */
function prepareRouter(renderer: Renderer) {
  const routerName = getRouterName(renderer);
  const router = getRouter(renderer, routerName);
  if (!router) {
    renderer.application.logger.error(
      i18n.router_0_is_not_defined_available_are_1(
        routerName,
        constants.AVAILABLE_ROUTERS.join(', '),
      ),
    );
    return false;
  }
  renderer.router = new router(renderer.application);
  return true;
}

function getRouterName(renderer: Renderer) {
  const routerOption = renderer.application.options.getValue('router');
  if (!renderer.application.options.isSet('router')) {
    if (renderer.application.options.isSet('outputFileStrategy')) {
      const outputFileStrategy =
        renderer.application.options.getValue('outputFileStrategy');
      return outputFileStrategy === 'modules' ? 'module' : 'member';
    } else {
      return 'member';
    }
  }
  return routerOption;
}

function getRouter(renderer: Renderer, routerName: string) {
  const routers = (renderer as any).routers;
  const pluginRouters = new Map<string, new (app: Application) => Router>([
    // custom routers
    ['member', MemberRouter],
    ['module', ModuleRouter],

    // core routers (decorated)
    ['kind', KindRouter],
    ['kind-dir', KindDirRouter],
    ['structure', StructureRouter],
    ['structure-dir', StructureDirRouter],
    ['group', GroupRouter],
    ['category', CategoryRouter],
  ]);
  if (constants.AVAILABLE_ROUTERS.includes(routerName)) {
    return pluginRouters.get(routerName);
  }
  return routers.get(routerName);
}

/**
 * Prepare the Theme for the renderer
 */
function prepareTheme(renderer: Renderer) {
  const themes = (renderer as any).themes;
  const themeName = getThemeName(renderer);
  const theme = themes.get(themeName);
  const ctor = new theme(renderer);
  if (ctor instanceof MarkdownTheme) {
    renderer.theme = ctor;
    return;
  }
  renderer.application.logger.warn(
    `[typedoc-plugin-markdown]: Skipping theme "${themeName}" as it is not an instance of the Markdown theme.`,
  );
  renderer.theme = new (themes.get('markdown'))(renderer);
}

function getThemeName(renderer: Renderer) {
  const themeOption = renderer.application.options.getValue('theme');
  return themeOption === 'default' ? 'markdown' : themeOption;
}

/**
 * The main rendering method for a document.
 */
async function renderDocument(
  renderer: MarkdownRenderer,
  outputDirectory: string,
  page: PageDefinition,
  project: ProjectReflection,
  formatWithPrettier: boolean,
) {
  const event = new MarkdownPageEvent(page.model);
  event.url = page.url;
  event.filename = path.join(outputDirectory, page.url);
  event.pageKind = page.kind;
  event.project = project;

  renderer.trigger(MarkdownPageEvent.BEGIN, event);

  const markdownFromTheme = renderer.theme!.render(event);

  event.contents = event.contents || '';

  if (formatWithPrettier) {
    event.contents =
      event.contents +
      (await formatWithPrettierIfAvailable(renderer, markdownFromTheme));
  } else {
    event.contents = event.contents + markdownFromTheme;
  }

  renderer.trigger(MarkdownPageEvent.END, event);

  try {
    writeFileSync(event.filename, event?.contents || '');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    renderer.application.logger.error(
      'renderer.application.i18n.could_not_write_0(event.filename)',
    );
  }
}

/**
 * Prettier helpers.
 */
export async function formatWithPrettierIfAvailable(
  renderer: Renderer,
  code: string,
) {
  const prettier = await getPrettier();
  if (!prettier) {
    renderer.application.logger.warn(
      '[typedoc-plugin-markdown] Prettier formatting skipped as Prettier must be installed for the `formatWithPrettier` option to work. Please npm i prettier --save-dev.',
    );
    return code;
  }

  // Check Prettier version
  const version = prettier.version;

  // Ensure compatibility with a specific version (if needed)
  const [major] = version.split('.');
  if (Number(major) < 3) {
    renderer.application.logger.warn(
      '[typedoc-plugin-markdown] Prettier formatting skipped as Prettier must be above version 3 for the `formatWithPrettier` option to work.',
    );
    return code;
  }

  const prettierConfigPath =
    renderer.application.options.getValue('prettierConfigFile') ||
    process.cwd();

  // Resolve Prettier configuration
  const config = await prettier.resolveConfig(prettierConfigPath);

  // Format code using Prettier
  const formattedCode = prettier.format(code, {
    ...config,
    parser: 'markdown',
  });

  renderer.application.logger.verbose(
    '[typedoc-plugin-markdown] Markdown formatted with Prettier.',
  );

  return formattedCode;
}

async function getPrettier() {
  try {
    //@ts-error - prettier is optional and doesn't have to be installed
    return await import('prettier');
  } catch {
    return null;
  }
}

/**
 * Other helpers
 */

// Helper to copy media files
function copyMediaFiles(project: ProjectReflection, outputDirectory: string) {
  const media = path.join(outputDirectory, '_media');
  const toCopy = project.files.getNameToAbsoluteMap();

  for (const [fileName, absolute] of toCopy.entries()) {
    copySync(absolute, path.join(media, fileName));
  }
}

// Helper to execute async jobs
export async function executeJobs(
  jobs: Array<(output: MarkdownRendererEvent) => Promise<void>>,
  output: MarkdownRendererEvent,
) {
  await Promise.all(jobs.map((job) => job(output)));
  jobs = []; // Clear job queue
}

/**
 *  Writes a file to disc.
 */
function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}

/**
 * Recursively copy files
 */
function copySync(src: string, dest: string): void {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    const contained = fs.readdirSync(src);
    contained.forEach((file) =>
      copySync(path.join(src, file), path.join(dest, file)),
    );
  } else if (stat.isFile()) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}
