import { Application } from 'typedoc';
import { MarkdownPluginOptionsReader } from 'typedoc-plugin-markdown';
import { GithubWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);

  app.options.addReader(
    new MarkdownPluginOptionsReader({
      theme: 'github-wiki',
      entryDocument: 'Home.md',
      kindsWithOwnFile: 'none',
      flattenOutputFiles: true,
      hideInPageTOC: true,
      hidePageTitle: true,
    }),
  );
}
