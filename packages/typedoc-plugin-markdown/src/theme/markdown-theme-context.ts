import { MarkdownPageEvent } from '@plugin/events/index.js';
import { MarkdownRouter } from '@plugin/router/markdown-router.js';
import {
  resourceHelpers,
  resourcePartials,
  resourceTemplates,
} from '@plugin/theme/context/resources.js';
import { MarkdownTheme } from '@plugin/theme/index.js';
import { MarkdownRenderer, PackageMetaData } from '@plugin/types/index.js';
import { Options, Reflection } from 'typedoc';

/**
 * The theme context class that is provided as context on the rendering of every page.
 *
 * It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.
 *
 * This class can be used to customize the theme output by extending the class and overriding the templates, partials and helpers.
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
 */
export class MarkdownThemeContext {
  /**
   * The markdown router instance.
   */
  public router: MarkdownRouter;

  /**
   * Holds meta data for individual packages (if entryPointStrategy equals `packages`).
   *
   * This is required for generating package specific documentation.
   */
  private packagesMetaData: Record<string, PackageMetaData>;

  /**
   *
   */
  constructor(
    /**
     * The theme instance.
     */
    readonly theme: MarkdownTheme,
    /**
     * The current page event.
     */
    readonly page: MarkdownPageEvent<Reflection>,
    /**
     * The options provided to the application.
     */
    readonly options: Options,
  ) {
    this.router = theme.router as MarkdownRouter;
    this.packagesMetaData = (this.theme.owner as MarkdownRenderer).packagesMeta;
  }

  /**
   *  Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.
   *
   * All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.
   *
   * @group Resources
   */
  templates = resourceTemplates(this);

  /** The `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.
   *
   * Please note that partials::
   *
   * - Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
   * - Can call other partials and helpers.
   * - Must return a string.
   *
   * Partials are categorised by their use:
   *
   * - Page Partials: Partials that render core page elements such as header and breadcrumbs.
   * - Container Partials: Partials that are used to render reflection groups and categories.
   * - Member Partials: Partials that render specific parts of reflections.
   * - Comment Partials: Partials that render comments.
   * - Type Partials: Partials that render specific TypeDoc model types.
   *
   * @group Resources
   **/
  partials = resourcePartials(this);

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
  helpers = resourceHelpers(this);

  /**
   * Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.
   *
   * @param packageName - The package name as per `name` field from `package.json`.
   */
  getPackageMetaData(packageName: string): PackageMetaData | undefined {
    return this.packagesMetaData[packageName];
  }

  /**
   * Return the number of packages in the project.
   */
  getPackagesCount() {
    return this.packagesMetaData
      ? Object.keys(this.packagesMetaData).length
      : 0;
  }

  /**
   * Returns a url relative to the current page.
   */
  relativeURL(url: string) {
    return this.router.baseRelativeUrl(this.page.model, url);
  }

  /**
   * Returns the relative url of a given reflection.
   */
  urlTo(reflection: Reflection) {
    const publicPath = this.options.getValue('publicPath');

    if (publicPath) {
      return encodeURI(
        `${publicPath.replace(/\/$/, '')}/${this.router.getFullUrl(reflection)}`,
      ).replace(/\\/g, '/');
    }

    if (this.router.hasUrl(reflection)) {
      return this.router.relativeUrl(this.page.model, reflection);
    }
    return '';
  }

  /**
   * Hook into the TypeDoc rendering system.
   */
  hook: MarkdownRenderer['markdownHooks']['emit'] = (...params) => {
    return (this.theme.owner as unknown as MarkdownRenderer).markdownHooks.emit(
      ...params,
    );
  };
}
