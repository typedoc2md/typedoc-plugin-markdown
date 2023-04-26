import * as fs from 'fs';
import * as path from 'path';
import {
  DeclarationReflection,
  ProjectReflection,
  RendererEvent,
  UrlMapping,
} from 'typedoc';
import { NavigationItem } from './models';

export class MarkdownRendererEvent extends RendererEvent {
  navigation: NavigationItem[];
}

export async function generateMarkdown(
  project: ProjectReflection,
  out: string,
) {
  const start = Date.now();

  out = path.resolve(out);

  await this.renderer.render(project, out);

  if (this.logger.hasErrors()) {
    this.logger.error(
      'Documentation could not be generated due to the errors above.',
    );
  } else {
    this.logger.info(`Documentation generated at ${out}`);

    this.logger.verbose(`Markdown rendering took ${Date.now() - start}ms`);
  }
}

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
    this.application.l.error(
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
    RendererEvent.BEGIN,
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
        urlMapping.model instanceof DeclarationReflection,
    )
    .forEach((urlMapping: UrlMapping) => {
      this.renderDocument(...output.createPageEvent(urlMapping));
    });

  await Promise.all(this.postRenderAsyncJobs.map((job) => job(output)));
  this.postRenderAsyncJobs = [];

  this.trigger(RendererEvent.END, output);

  this.theme = void 0;
}
