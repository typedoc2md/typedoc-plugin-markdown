import * as fs from 'fs';
import { Application } from 'typedoc';
import {
  MarkdownPluginOptionsReader,
  MarkdownRendererEvent,
  MarkdownTheme,
} from 'typedoc-plugin-markdown';
import { GitlabWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('gitlab-wiki', GitlabWikiTheme);

  app.options.addReader(
    new MarkdownPluginOptionsReader({
      theme: 'gitlab-wiki',
      entryDocument: 'home.md',
      flattenOutputFiles: true,
      hideBreadcrumbs: true,
      hideInPageTOC: true,
      hidePageHeader: true,
      hidePageTitle: true,
    }),
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const navigation = (app.renderer.theme as MarkdownTheme)
        .getRenderContext()
        .partials.navigation(output.navigation);
      fs.writeFileSync(`${output.outputDirectory}/_sidebar.md`, navigation);
    },
  );
}
