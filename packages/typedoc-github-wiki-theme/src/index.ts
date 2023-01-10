import { Application } from 'typedoc';
import { MarkdownPluginOptionsReader } from 'typedoc-plugin-markdown';
import { GithubWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);
  app.options.addReader(
    new MarkdownPluginOptionsReader({
      fileStructure: 'modules',
      flattenOutput: true,
      symbolsWithOwnFile: 'none',
    }),
  );
}
