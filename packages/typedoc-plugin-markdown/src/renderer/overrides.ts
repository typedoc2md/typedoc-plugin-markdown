import { MarkdownPageEvent, MarkdownRendererEvent } from '@plugin/events';
import * as fs from 'fs';
import * as path from 'path';
import { ProjectReflection, Reflection } from 'typedoc';

/**
 * Replacement of TypeDoc's Application.generateDocs method to decouple HTML logic.
 */
export async function generateDocs(project: ProjectReflection, out: string) {
  const start = Date.now();
  await this.renderer.render(project, out);
  if (this.logger.hasErrors()) {
    this.logger.error(this.i18n.docs_could_not_be_generated());
  } else {
    this.logger.info(this.i18n.docs_generated_at_0(nicePath(out)));
    this.logger.verbose(`Markdown rendering took ${Date.now() - start}ms`);
  }
}

/**
 * Replacement of TypeDoc's Renderer.render method to decouple HTML logic.
 *
 * This is essentially a copy of the base method with a few tweaks.
 *
 * - Removes unnecessary async calls to load highlighters only required for html theme.
 * - Removes hooks logic that are jsx specific.
 * - Adds any logic specific to markdown rendering.
 */
export async function render(
  project: ProjectReflection,
  outputDirectory: string,
) {
  this.renderStartTime = Date.now();

  if (this.cleanOutputDir) {
    try {
      fs.rmSync(outputDirectory, { recursive: true, force: true });
    } catch {
      this.application.logger.warn('Could not empty the output directory.');
      return;
    }
  }

  try {
    fs.mkdirSync(outputDirectory, { recursive: true });
  } catch {
    this.application.logger.error(
      `Could not create output directory ${outputDirectory}.`,
    );
    return;
  }

  if (
    this.application.options.isSet('githubPages') &&
    this.application.options.getValue('githubPages') === true
  ) {
    try {
      fs.writeFileSync(path.join(outputDirectory, '.nojekyll'), '');
    } catch {
      this.application.logger.warn(
        this.application.i18n.could_not_write_0(
          path.join(outputDirectory, '.nojekyll'),
        ),
      );
    }
  }

  this.prepareTheme();

  const output = new MarkdownRendererEvent(
    MarkdownRendererEvent.BEGIN,
    outputDirectory,
    project,
  );

  output.urls = this.theme!.getUrls(project);
  output.navigation = this.theme!.getNavigation(project);

  this.trigger(output);

  await Promise.all(this.preRenderAsyncJobs.map((job) => job(output)));

  this.preRenderAsyncJobs = [];

  this.trigger(MarkdownRendererEvent.BEGIN, output);

  this.application.logger.verbose(
    `There are ${output.urls?.length} pages to write.`,
  );

  output.urls
    ?.filter((urlMapping) => urlMapping.model instanceof Reflection)
    .forEach(async (urlMapping) => {
      const [template, page] = output.createPageEvent(urlMapping);

      page.contents = '';

      this.trigger(MarkdownPageEvent.BEGIN, page);

      if (page.model instanceof Reflection) {
        page.contents = page.contents + this.theme!.render(page, template);
      } else {
        throw new Error('Should be unreachable');
      }

      this.trigger(MarkdownPageEvent.END, page);

      try {
        writeFileSync(page.filename, page.contents as string);
      } catch {
        this.application.logger.error(
          this.application.i18n.could_not_write_0(page.filename),
        );
      }
    });

  // copy resolved files to media directory
  const media = path.join(outputDirectory, '_media');
  const toCopy = project.files.getNameToAbsoluteMap();
  for (const [fileName, absolute] of toCopy.entries()) {
    copySync(absolute, path.join(media, fileName));
  }

  // process postRenderAsyncJobs
  await Promise.all(this.postRenderAsyncJobs.map((job) => job(output)));

  this.postRenderAsyncJobs = [];

  this.trigger(MarkdownRendererEvent.END, output);

  this.theme = void 0;
}

/**
 * Some useful utility functions - essentially cherry picked from:
 *
 * - https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/fs.ts
 * - https://github.com/TypeStrong/typedoc/blob/master/src/lib/utils/path.ts
 */

/**
 *  Writes a file to disc.
 */
function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}

/**
 * Returns a readable path from an absolute path.
 */
function nicePath(absPath: string) {
  if (!path.isAbsolute(absPath)) return absPath;
  const relativePath = path.relative(process.cwd(), absPath);
  if (relativePath.startsWith('..')) {
    return normalizePath(absPath);
  }
  return `./${normalizePath(relativePath)}`;
}

/**
 * Normalizes directory separators from a given path.
 */
function normalizePath(path: string) {
  return path.replace(/\\/g, '/');
}

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
