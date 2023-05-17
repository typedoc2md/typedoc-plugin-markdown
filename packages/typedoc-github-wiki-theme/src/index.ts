import * as fs from 'fs';
import { Application, Options, OptionsReader } from 'typedoc';
import { MarkdownRendererEvent, MarkdownTheme } from 'typedoc-plugin-markdown';
import { GithubWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'github-wiki-options';
      readonly order = 900;
      readonly supportsPackages = false;
      read(container: Options) {
        Object.entries({
          theme: 'github-wiki',
          entryFileName: 'Home.md',
          flattenOutputFiles: true,
          skipIndexPage: true,
          hideInPageTOC: true,
          hidePageHeader: true,
          hideBreadcrumbs: true,
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
      fs.writeFileSync(`${output.outputDirectory}/_Sidebar.md`, navigation);
    },
  );
}
