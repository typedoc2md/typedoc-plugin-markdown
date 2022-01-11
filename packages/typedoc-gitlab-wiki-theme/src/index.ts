import { Application } from 'typedoc';
import { GitlabWikiThemeOptionsReader } from './options-reader';

import { GitlabWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('gitlab-wiki', GitlabWikiTheme);
  app.options.addReader(new GitlabWikiThemeOptionsReader());
}
