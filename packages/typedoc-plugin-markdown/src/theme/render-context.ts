import { MarkdownRenderer } from '@app/application';
import { MarkdownPageEvent } from '@app/events/markdown-page-event';
import { MarkdownRendererHooks } from '@app/hooks/markdown-renderer-hooks';
import { TextContentMappings } from '@options/option-types';
import { MarkdownTheme } from '@theme/base';
import { Options, Reflection } from 'typedoc';
import { helpers, partials, templates } from './resources';

/**
 * The theme context class that is provided as context to every template.
 *
 * This class can be used to customize the theme output by extending the class and overriding the [templates](#templates), [partials](#partials) and [helpers](#helpers).
 *
 * @usage
 *
 * ```ts
 * class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
 *
 *  // customise templates
 *  templates = {
 *   ...this.templates,
 *   reflection: (model) => {
 *     return `New template for ${model.name}!`;
 *   },
 *  };
 *
 *  // customise partials
 *  partials = {
 *   ...this.partials,
 *   header: (model) => {
 *     return `
 * # Welcome to custom header for ${this.page.project.name} project and ${model.name} model!
 * Use my new helper - ${this.helpers.newHelper()}
 *    `;
 *   },
 *  };
 *
 *  // customise helpers
 *  helpers = {
 *   ...this.helpers,
 *   newHelper: () => {
 *     return 'New helper!';
 *   },
 *  };
 * }
 * ```
 *
 * @groupDescription Resources
 *
 * Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.
 *
 * @privateRemarks
 *
 * In order to create cleaner code, internally individual templates located in the `resources/templates` directory are bound to the this.
 *
 * @category Custom Theme
 */
export class MarkdownThemeRenderContext {
  /**
   * @ignore
   */
  constructor(
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
    this.textContentMappings = this.theme.textContentMappings;
    this.packagesMetaData = (this.theme.owner as MarkdownRenderer).packagesMeta;
  }

  /**
   * Holds the textmappings object of the theme.
   */
  readonly textContentMappings: Partial<TextContentMappings>;

  /**
   * Holds meta data for individual packages (if entryPointStrategy equals `packages`).
   *
   * This is required for generating package specific documentation.
   */
  readonly packagesMetaData: Record<
    string,
    { description: string; options: Options }
  >;

  /**
   * Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.
   *
   * All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.
   *
   * @group Resources
   */
  templates = templates(this);

  /**
   * Then `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.
   *
   * Partials take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
   *
   * All partials return a string and can call other partials and helpers.
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
   * Then `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.
   *
   * They should can reference other helpers but should not reference other partials.
   *
   * Helpers can return any value types.
   *
   * @group Resources
   */
  helpers = helpers(this);

  /**
   * Hook into the TypeDoc rendering system.
   * @ignore
   */
  hook = (name: keyof MarkdownRendererHooks) =>
    (this.theme.owner as MarkdownRenderer).markdownHooks.emit(name, this);
}
