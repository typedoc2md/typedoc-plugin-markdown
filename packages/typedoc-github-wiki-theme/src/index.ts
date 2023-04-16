import { Application } from 'typedoc';
import { GithubWikiThemeOptionsReader } from './options-reader';
import { GithubWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);
  app.options.addReader(new GithubWikiThemeOptionsReader());
}
