import { MarkdownPageEvent, MarkdownRendererEvent } from '@plugin/events';
import * as fs from 'fs';
import * as path from 'path';
import {
  Application,
  DeclarationReflection,
  DocumentReflection,
  ProjectReflection,
  Reflection,
  Renderer,
} from 'typedoc';

/**
 * Replacement of TypeDoc's {@link Application.generateDocs} method to decouple HTML logic.
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
 * Replacement of TypeDoc's {@link Renderer.render} method to decouple HTML logic.
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
    } catch (error) {
      this.application.logger.warn('Could not empty the output directory.');
      return;
    }
  }

  try {
    fs.mkdirSync(outputDirectory, { recursive: true });
  } catch (error) {
    this.application.logger.error(
      `Could not create output directory ${outputDirectory}.`,
    );
    return;
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

  this.application.logger.verbose(
    `There are ${output.urls?.length} pages to write.`,
  );

  output.urls
    ?.filter(
      (urlMapping) =>
        urlMapping.model instanceof ProjectReflection ||
        urlMapping.model instanceof DeclarationReflection ||
        urlMapping.model instanceof DocumentReflection,
    )
    .forEach(async (urlMapping) => {
      const [template, page] = output.createPageEvent(urlMapping);

      this.trigger(MarkdownPageEvent.BEGIN, page);

      if (page.model instanceof Reflection) {
        page.contents = this.theme!.render(page, template);
      } else {
        throw new Error('Should be unreachable');
      }

      this.trigger(MarkdownPageEvent.END, page);

      try {
        writeFileSync(page.filename, page.contents as string);
      } catch (error) {
        this.application.logger.error(`Could not write ${page.filename}`);
      }
    });

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
