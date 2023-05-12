import * as fs from 'fs';
import { Application } from 'typedoc';
import {
  MarkdownPluginOptionsReader,
  MarkdownRendererEvent,
} from 'typedoc-plugin-markdown';
import { parseUrl } from './helpers';
import { GithubWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);

  app.options.addReader(
    new MarkdownPluginOptionsReader({
      theme: 'github-wiki',
      entryDocument: 'Home.md',
      flattenOutputFiles: true,
      hideInPageTOC: true,
      hidePageHeader: true,
      hideBreadcrumbs: true,
      hidePageTitle: true,
    }),
  );

  app.renderer.postRenderAsyncJobs.push(
    async (output: MarkdownRendererEvent) => {
      const navigation = output.navigation;
      const sidebarTitle =
        app.options.getValue('entryPoints')?.length > 1 ? 'Modules' : 'Exports';
      const sidebarMd: string[] = [`## ${sidebarTitle}\n`];
      navigation.forEach((navigationItem) => {
        if (navigationItem.url) {
          sidebarMd.push(
            `- [${navigationItem.title}](${parseUrl(navigationItem.url)})`,
          );
        }
      });
      fs.writeFileSync(
        `${output.outputDirectory}/_Sidebar.md`,
        sidebarMd.join('\n'),
      );
    },
  );
}
