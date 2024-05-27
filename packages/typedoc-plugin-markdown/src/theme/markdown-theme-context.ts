import { MarkdownPageEvent } from 'app/events';
import { MarkdownRenderer, MarkdownRendererHooks } from 'app/types';
import * as path from 'path';
import { MarkdownTheme } from 'theme';
import {
  resourceHelpers,
  resourcePartials,
  resourceTemplates,
} from 'theme/context/resources';
import { PackageMetaData } from 'theme/types';
import { Internationalization, Options, Reflection } from 'typedoc';

/**
 * The theme context class that is provided as context on the rendering of every page.
 *
 * @remarks
 *
 * It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.
 *
 * This class can be used to customize the theme output by extending the class and overriding the templates, partials and helpers.
 *
 * @example
 *
 * ```ts
 * class MyMarkdownTheme extends MarkdownTheme {
 *   getRenderContext(page) {
 *     return new MyMarkdownThemeContext(this, page, this.application.options);
 *   }
 * }
 * ```
 *
 * @groupDescription Properties
 *
 * Properties are passed into the constructor and are used to provide context to the theme.
 *
 * @groupDescription Methods
 *
 * General context aware helper methods not bound to any specific models that can be used by the theme resources.
 *
 * @groupDescription Resources
 *
 * Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.
 *
 * @privateRemarks
 *
 * In order to create cleaner code, internally individual templates located in the `resources/templates` directory are bound to the this.
 *
 */
export class MarkdownThemeContext {
  internationalization: Internationalization.Internationalization;
  i18n: Internationalization.TranslationProxy;

  /**
   *
   */
  constructor(
    /**
     * The theme instance.
     */
    private theme: MarkdownTheme,
    /**
     * The current page event.
     */
    readonly page: MarkdownPageEvent<Reflection>,
    /**
     * The options provided to the application.
     */
    readonly options: Options,
  ) {
    this.packagesMetaData = (this.theme.owner as MarkdownRenderer).packagesMeta;
    this.internationalization = theme.application.internationalization;
    this.i18n = this.internationalization.proxy;
  }

  /**
   * Holds meta data for individual packages (if entryPointStrategy equals `packages`).
   *
   * This is required for generating package specific documentation.
   */
  private packagesMetaData: Record<string, PackageMetaData>;

  /**
   * @see {@link theme.context.templates templates }
   *
   * @group Resources
   */
  templates = resourceTemplates(this);

  /**
   * @see {@link theme.context.partials partials }
   *
   * @group Resources
   */
  partials = resourcePartials(this);

  /**
   * @see {@link theme.context.helpers helpers }
   *
   * @group Resources
   */
  helpers = resourceHelpers(this);

  /**
   * Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.
   *
   * @param packageName - The package name as per `name` field from `package.json`.
   */
  getPackageMetaData(packageName: string): PackageMetaData {
    return this.packagesMetaData[packageName];
  }

  /**
   * Returns the relative URL (from the current page context url).
   *
   * If public path is set, it will be used as the base URL.
   *
   * @param url - The URL to make relative.
   * @param ignorePublicPath - Whether to ignore the public path.
   */
  getRelativeUrl(url: string, ignorePublicPath = false) {
    const URL_PREFIX = /^(http|ftp)s?:\/\//;

    if (URL_PREFIX.test(url)) {
      return url;
    } else {
      const publicPath = this.options.getValue('publicPath');

      if (publicPath && !ignorePublicPath) {
        return encodeURI(path.join(publicPath, url));
      }

      const baseUrl = path.relative(
        path.dirname(this.page?.url || '.'),
        path.dirname(url),
      );

      const relativeUrl = path
        .join(baseUrl, path.basename(url))
        .replace(/\\/g, '/');

      return encodeURI(relativeUrl);
    }
  }

  /**
   * Hook into the TypeDoc rendering system.
   *
   * @internal
   */
  hook = (name: keyof MarkdownRendererHooks) =>
    (this.theme.owner as MarkdownRenderer).markdownHooks.emit(name, this);
}
