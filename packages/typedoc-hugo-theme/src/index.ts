import { Application } from 'typedoc';
import { HugoThemeOptionsReader } from './options-reader';
import { HugoTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('hugo', HugoTheme);
  app.options.addReader(new HugoThemeOptionsReader());
}
