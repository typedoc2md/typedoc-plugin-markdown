import { Application } from 'typedoc';
import { BitbucketTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('bitbucket', BitbucketTheme);
}
