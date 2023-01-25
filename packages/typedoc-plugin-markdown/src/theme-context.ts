import * as path from 'path';
import { DeclarationReflection, Options, PageEvent, Reflection } from 'typedoc';
import { TypedocPluginMarkdownOptions } from './models';
import { partials, templates } from './resources';
import { URL_PREFIX } from './support/constants';
import { getReflectionTitle } from './support/helpers';
import { unEscapeChars } from './support/utils';
import { MarkdownTheme } from './theme';

export class MarkdownThemeRenderContext {
  public globalsFile = 'modules.md';

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
      if (this.getOption('baseUrl')) {
        return this.getOption('baseUrl') + url.replace(/\\/g, '/');
      }

      const relative = path.relative(
        path.dirname(this.activeLocation),
        path.dirname(url),
      );

      return path.join(relative, path.basename(url)).replace(/\\/g, '/');
    }
  }

  getBaseFrontmatterVars(page: PageEvent<Reflection>) {
    return {
      title: unEscapeChars(
        getReflectionTitle(page.model as DeclarationReflection),
      ),
    };
  }

  urlTo = (reflection: Reflection) => this.relativeURL(reflection.url);

  relativeURL = (url: string | undefined) => {
    return this.getRelativeUrl(url);
  };

  baseFrontmatterVars = (page: PageEvent<Reflection>) => {
    return this.getBaseFrontmatterVars(page);
  };

  templates = templates(this);
  partials = partials(this);
}
