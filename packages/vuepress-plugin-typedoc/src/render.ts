import ProgressBar from 'progress';
import { ProjectReflection, UrlMapping } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

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

  if (output.urls) {
    const bar = new ProgressBar('Rendering [:bar] :percent', {
      total: output.urls.length,
      width: 40,
    });

    this.trigger(output);

    if (!output.isDefaultPrevented) {
      output.urls.forEach((mapping: UrlMapping, i) => {
        this.renderDocument(output.createPageEvent(mapping));
        bar.tick();
      });
      this.trigger(RendererEvent.END, output);
    }
  }
}
