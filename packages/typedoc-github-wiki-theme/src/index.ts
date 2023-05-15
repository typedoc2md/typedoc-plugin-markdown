import * as fs from 'fs';
import { Application } from 'typedoc';
import {
  MarkdownPluginOptionsReader,
  MarkdownRendererEvent,
  MarkdownTheme,
} from 'typedoc-plugin-markdown';
import { GithubWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);

  app.options.addReader(
    new MarkdownPluginOptionsReader({
      theme: 'github-wiki',
      entryFileName: 'Home.md',
      flattenOutputFiles: true,
      skipIndexPage: true,
      hideInPageTOC: true,
      hidePageHeader: true,
      hideBreadcrumbs: true,
      hidePageTitle: true,
    }),
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const navigation = (app.renderer.theme as MarkdownTheme)
        .getRenderContext()
        .partials.navigation(output.navigation);
      fs.writeFileSync(`${output.outputDirectory}/_Sidebar.md`, navigation);
    },
  );
}
