import * as fs from 'fs';
import { Application, Options, OptionsReader } from 'typedoc';
import { MarkdownRendererEvent, MarkdownTheme } from 'typedoc-plugin-markdown';
import { GitlabWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('gitlab-wiki', GitlabWikiTheme);

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'gitlab-wiki-options';
      readonly order = 0;
      readonly supportsPackages = false;
      read(container: Options) {
        Object.entries({
          theme: 'gitlab-wiki',
          entryFileName: 'home.md',
          flattenOutputFiles: true,
          skipIndexPage: true,
          hideBreadcrumbs: true,
          hideInPageTOC: true,
          hidePageHeader: true,
          hidePageTitle: true,
        }).forEach(([key, value]) => {
          container.setValue(key, value);
        });
      }
    })(),
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const navigation = (app.renderer.theme as MarkdownTheme)
        .getRenderContext(null)
        .navigation(output.navigation);
      fs.writeFileSync(`${output.outputDirectory}/_sidebar.md`, navigation);
    },
  );
}
