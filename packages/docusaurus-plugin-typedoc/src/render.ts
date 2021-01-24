import { ProjectReflection, UrlMapping } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import * as ts from 'typescript';

export async function render(
  project: ProjectReflection,
  outputDirectory: string,
) {
  if (!this.prepareTheme() || !this.prepareOutputDirectory(outputDirectory)) {
    return;
  }

  const output = new RendererEvent(
    RendererEvent.BEGIN,
    outputDirectory,
    project,
  );

  output.settings = this.application.options.getRawValues();
  output.urls = this.theme!.getUrls(project);

  this.trigger(output);

  if (!output.isDefaultPrevented) {
    output.urls?.forEach((mapping: UrlMapping, i) => {
      this.renderDocument(output.createPageEvent(mapping));
      ts.sys.write(
        `\rGenerated ${i + 1} of ${output.urls?.length} TypeDoc docs`,
      );
    });
    ts.sys.write(`\n`);
    this.trigger(RendererEvent.END, output);
  }
}
