import { MarkdownRenderer } from '@plugin/app/application';
import { MarkdownPageEvent } from '@plugin/app/events';
import { MarkdownRendererHooks } from '@plugin/app/renderer';
import { MarkdownTheme, PackageMetaData } from '@plugin/theme';
import { helpers, partials, templates } from '@plugin/theme/resources';
import * as path from 'path';
import { Internationalization, Options, Reflection } from 'typedoc';

/**
 * The theme context class that is provided as context on the rendering of every page.
 *
 * It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.
 *
 * This class can be used to customize the theme output by extending the class and overriding the [templates](#templates), [partials](#partials) and [helpers](#helpers).
 *
 * ## Usage
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
 * @category Theme
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
   * Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.
   *
   * All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.
   *
   * @group Resources
   */
  templates = templates(this);

  /**
   * The `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.
   *
   * Please note that partials::
   *
   * - Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
   * - Can call other partials and helpers.
   * - Must return a string.
   *
   * Partials are categorised by their use:
   *
   * - [Page Partials](#page-partials): Partials that render core page elements such as header and breadcrumbs.
   * - [Container Partials](#container-partials): Partials that are used to render reflection groups and categories.
   * - [Member Partials](#member-partials): Partials that render specific parts of reflections.
   * - [Comment Partials](#comment-partials): Partials that render comments.
   * - [Type Partials](#type-partials): Partials that render specific TypeDoc model types.
   *
   * @group Resources
   */
  partials = partials(this);

  /**
   * The `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.
   *
   * Please note that partials:
   *
   * - Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
   * - Can reference other helpers but should not reference partials.
   * - Can return strings or other models.
   *
   * @group Resources
   */
  helpers = helpers(this);

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
