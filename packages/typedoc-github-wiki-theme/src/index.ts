import { Application } from 'typedoc';
import { GithubWikiTheme } from './theme';
import { GithubWikiThemeOptionsReader } from './options-reader';

export function load(app: Application) {
  app.renderer.defineTheme('github-wiki', GithubWikiTheme);
  app.options.addReader(new GithubWikiThemeOptionsReader());
}
