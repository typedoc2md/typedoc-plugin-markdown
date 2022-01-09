import { Application } from 'typedoc';

import { GitlabWikiTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('gitlab-wiki', GitlabWikiTheme);
}
