/**
 * Contains functionality to decouple HTML logic from the TypeDoc [Renderer](https://typedoc.org/api/classes/Renderer.html).
 * @module
 */

import * as fs from 'fs';
import * as path from 'path';
import { DeclarationReflection, ProjectReflection, Reflection } from 'typedoc';
import { formatContents } from '../support/utils';
import { MarkdownPageEvent, MarkdownRendererEvent } from './events';

/**
 * Replacement of TypeDoc's [Application.generateDocs](https://typedoc.org/api/classes/Application.html#generateDocs) to decouple HTML logic.
 *
 */
export async function generateMarkdown(
  project: ProjectReflection,
  out: string,
) {
  const start = Date.now();

  await this.renderer.render(project, out);

  if (this.logger.hasErrors()) {
    this.logger.error(
      'Documentation could not be generated due to the errors above.',
    );
  } else {
    this.logger.info(`Documentation generated at ${nicePath(out)}`);

    this.logger.verbose(`Markdown rendering took ${Date.now() - start}ms`);
  }
}

/**
 * Replacement of TypeDoc's [Renderer.render](https://typedoc.org/api/classes/Renderer.html#render) to decouple HTML logic.
 * - Removes uneccessary async calls to load highlighters
 * - Removes hooks logic
 */
export async function renderMarkdown(
  project: ProjectReflection,
  outputDirectory: string,
): Promise<void> {
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

  if (this.githubPages) {
    try {
      const text =
        'TypeDoc added this file to prevent GitHub Pages from ' +
        'using Jekyll. You can turn off this behavior by setting ' +
        'the `githubPages` option to false.';

      fs.writeFileSync(path.join(outputDirectory, '.nojekyll'), text);
    } catch (error) {
      this.application.warn('Could not create .nojekyll file.');
      return;
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

  await Promise.all(this.preRenderAsyncJobs.map((job) => job(output)));

  this.preRenderAsyncJobs = [];

  this.application.logger.verbose(
    `There are ${output.urls?.length} pages to write.`,
  );

  output.urls
    ?.filter(
      (urlMapping) =>
        urlMapping.model instanceof ProjectReflection ||
        urlMapping.model instanceof DeclarationReflection,
    )
    .forEach(async (urlMapping) => {
      const [template, page] = output.createPageEvent(urlMapping);

      this.trigger(MarkdownPageEvent.BEGIN, page);
      if (page.isDefaultPrevented) {
        return false;
      }

      if (page.model instanceof Reflection) {
        page.contents = this.theme!.render(page, template);
      } else {
        throw new Error('Should be unreachable');
      }

      this.trigger(MarkdownPageEvent.END, page);

      if (page.isDefaultPrevented) {
        return false;
      }

      try {
        writeFileSync(page.filename, formatContents(page.contents as string));
      } catch (error) {
        this.application.logger.error(`Could not write ${page.filename}`);
      }
    });

  await Promise.all(this.postRenderAsyncJobs.map((job) => job(output)));

  this.postRenderAsyncJobs = [];

  this.trigger(MarkdownRendererEvent.END, output);

  this.theme = void 0;
}

function writeFileSync(fileName: string, data: string) {
  fs.mkdirSync(path.dirname(normalizePath(fileName)), { recursive: true });
  fs.writeFileSync(normalizePath(fileName), data);
}

function normalizePath(path: string) {
  return path.replace(/\\/g, '/');
}

function nicePath(absPath: string) {
  if (!path.isAbsolute(absPath)) return absPath;

  const relativePath = path.relative(process.cwd(), absPath);
  if (relativePath.startsWith('..')) {
    return normalizePath(absPath);
  }
  return `./${normalizePath(relativePath)}`;
}
