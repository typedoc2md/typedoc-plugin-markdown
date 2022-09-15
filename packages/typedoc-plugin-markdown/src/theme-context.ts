import * as path from 'path';
import { Options, ReferenceType, Reflection } from 'typedoc';
import { URL_PREFIX } from './constants';
import { partials, templates } from './resources';
import { MarkdownTheme } from './theme';
import { TypedocPluginMarkdownOptions } from './types';

export class MarkdownThemeRenderContext {
  public globalsFile = 'Modules.md';

  private _activeLocation: string;

  set activeLocation(activeLocation: string) {
    this._activeLocation = activeLocation;
  }

  get activeLocation() {
    return this._activeLocation;
  }

  constructor(private theme: MarkdownTheme, public options: Options) {}

  getOption<K extends keyof TypedocPluginMarkdownOptions>(name: K) {
    return this.options.getValue(name) as TypedocPluginMarkdownOptions[K];
  }

  urlTo = (reflection: Reflection) => this.relativeURL(reflection.url);

  relativeURL(url: string | undefined) {
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

  templates = templates(this);
  partials = partials(this);
}
