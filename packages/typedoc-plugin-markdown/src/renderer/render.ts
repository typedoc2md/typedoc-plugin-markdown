import {
  MarkdownPageEvent,
  MarkdownRendererEvent,
} from '@plugin/events/index.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import { MarkdownRenderer } from '@plugin/types/markdown-renderer.js';
import * as fs from 'fs';
import * as path from 'path';
import {
  i18n,
  normalizePath,
  PageDefinition,
  ProjectReflection,
  Renderer,
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

async function prepareOutputDirectory(
  renderer: Renderer,
  outputDirectory: string,
): Promise<boolean> {
  if (renderer.application.options.getValue('cleanOutputDir')) {
    try {
      fs.rmSync(outputDirectory, { recursive: true, force: true });
    } catch {
      renderer.application.logger.warn('Could not empty the output directory.');
      return false;
    }
  }

  try {
    fs.mkdirSync(outputDirectory, { recursive: true });
  } catch {
    renderer.application.logger.error(
      `Could not create output directory ${outputDirectory}.`,
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
        `Could not write .nojekyll file in ${outputDirectory}.`,
      );
    }
  }
  return true;
}

function prepareRouter(renderer: Renderer) {
  let routerOption = renderer.application.options.getValue('router');
  if (!renderer.application.options.isSet('router')) {
    if (renderer.application.options.isSet('outputFileStrategy')) {
      const outputFileStrategy =
        renderer.application.options.getValue('outputFileStrategy');
      routerOption = outputFileStrategy === 'modules' ? 'module' : 'member';
    } else {
      routerOption = 'member';
    }
  }

  const routers = (renderer as any).routers;
  const ctor = routers.get(routerOption);

  if (!ctor) {
    renderer.application.logger.error(
      i18n.router_0_is_not_defined_available_are_1(
        routerOption,
        ['member', 'module'].join(', '),
      ),
    );
    return false;
  }

  renderer.router = new ctor(renderer.application);

  return true;
}

function prepareTheme(renderer: Renderer) {
  const themeOption = renderer.application.options.getValue('theme');
  const themes = (renderer as any).themes;
  const ThemeConstructor = themes.get(
    themeOption === 'default' ? 'markdown' : themeOption,
  );
  const ctor = new ThemeConstructor(renderer);
  if (ctor instanceof MarkdownTheme) {
    renderer.theme = ctor;
    return;
  }
  renderer.application.logger.warn(
    `[typedoc-plugin-markdown]: Skipping theme "${themeOption}" as it is not an instance of the Markdown theme.`,
  );
  renderer.theme = new (themes.get('markdown'))(renderer);
}

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
