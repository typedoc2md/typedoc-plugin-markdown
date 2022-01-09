import { Application } from 'typedoc';
import { HugoTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('hugo', HugoTheme);
}
