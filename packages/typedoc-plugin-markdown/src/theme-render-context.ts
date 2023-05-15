import * as path from 'path';
import { Options, Reflection } from 'typedoc';
import { TypedocPluginMarkdownOptions } from './models';
import { partials, templates } from './resources/resources';
import { URL_PREFIX } from './support/constants';
import { MarkdownTheme } from './theme';

export class MarkdownThemeRenderContext {
  public indexFileName = 'API.md';
  private _activeLocation = '.';

  options: Partial<TypedocPluginMarkdownOptions>;

  set activeLocation(activeLocation: string) {
    this._activeLocation = activeLocation;
  }

  get activeLocation() {
    return this._activeLocation;
  }

  constructor(public theme: MarkdownTheme, opts: Options) {
    this.options = opts.getRawValues() as Partial<TypedocPluginMarkdownOptions>;
  }

  getOption<K extends keyof TypedocPluginMarkdownOptions>(name: K) {
    return this.options[name] as TypedocPluginMarkdownOptions[K];
  }

  getRelativeUrl(url: string | undefined) {
    if (!url) {
      return null;
    }
    if (URL_PREFIX.test(url)) {
      return url;
    } else {
      if (this.getOption('baseUrl')) {
        return this.getOption('baseUrl') + url.replace(/\\/g, '/');
      }

      const relative = path.relative(
        path.dirname(this.activeLocation),
        path.dirname(url),
      );

      return this.parseUrl(
        path.join(relative, path.basename(url)).replace(/\\/g, '/'),
      );
    }
  }

  urlTo(reflection: Reflection) {
    return this.relativeURL(reflection.url);
  }

  parseUrl(url: string) {
    return encodeURI(url);
  }

  relativeURL(url: string | undefined) {
    return this.getRelativeUrl(url);
  }

  templates = templates(this);
  partials = partials(this);
}
