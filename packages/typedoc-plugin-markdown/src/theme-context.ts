import * as path from 'path';
import { Options, Reflection } from 'typedoc';
import { TypedocPluginMarkdownOptions } from './models';
import { partials, templates } from './resources';
import { URL_PREFIX } from './support/constants';
import { MarkdownTheme } from './theme';

export class MarkdownThemeRenderContext {
  public globalsFile = 'Modules.md';

  private _activeLocation: string;

  set activeLocation(activeLocation: string) {
    this._activeLocation = activeLocation;
  }

  get activeLocation() {
    return this._activeLocation;
  }

  constructor(public theme: MarkdownTheme, public options: Options) {}

  getOption<K extends keyof TypedocPluginMarkdownOptions>(name: K) {
    return this.options.getValue(name) as TypedocPluginMarkdownOptions[K];
  }

  getRelativeUrl(url: string | undefined) {
    if (!url) {
      return null;
    }
    if (URL_PREFIX.test(url)) {
      return url;
    } else {
      const relative = path.relative(
        path.dirname(this.activeLocation),
        path.dirname(url),
      );
      return path.join(relative, path.basename(url)).replace(/\\/g, '/');
    }
  }

  urlTo = (reflection: Reflection) => this.getRelativeUrl(reflection.url);

  relativeURL = (url: string | undefined) => this.getRelativeUrl(url);

  templates = templates(this);
  partials = partials(this);
}
