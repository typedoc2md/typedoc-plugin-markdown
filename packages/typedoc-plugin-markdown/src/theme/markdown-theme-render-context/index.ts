import { MarkdownPageEvent } from '@plugin/app/events';
import { TextContentMappings } from '@plugin/app/options';
import { MarkdownRenderer, MarkdownRendererHooks } from '@plugin/app/renderer';
import { MarkdownTheme } from 'theme';
import { Options, Reflection } from 'typedoc';
import { helpers, partials, templates } from './namespaces';

/**
 * The `MarkdownThemeRenderContext` class allows custom themes to adjust the output.
 *
 * This follows a similar implementation to TypeDoc's [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderthis.html).
 *
 * Custom context classes can be provided by:
 *
 * ```ts
 * class MyTheme extends DefaultTheme {
 *   getRenderContext(pageEvent: PageEvent<Reflection>) {
 *       return new MyThemeContext(this, pageEvent, this.application.options);
 *   }
 * }
 * ```
 *
 * @groupDescription Namespaces
 *
 * Components return strings and are used to display output.
 *
 * @privateRemarks
 *
 * In order to create cleaner code, internally individual templates located in the `resources/templates` directory are bound to the this.
 */
export class MarkdownThemeRenderContext {
  /**
   * @param theme The theme instance this context is created for.
   * @param page The current page this context is created for.
   * @param options The current options instance for the application.
   */
  constructor(
    private theme: MarkdownTheme,
    readonly page: MarkdownPageEvent<Reflection>,
    readonly options: Options,
  ) {
    this.textMappings = this.theme.textMappings;
  }

  /**
   * Holds the textmappings object of the theme.
   */
  readonly textMappings: TextContentMappings;

  /**
   * Then `templates` namespace holds the main templates for the theme that are mapped to single pages and configured in the MarkdownTheme.
   *
   * All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.
   *
   * To override specific templates while keeping others intact, you need to merge the template object:
   *
   * ```ts
   * class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
   *  templates = {
   *   ...this.templates,
   *   readme: () => {
   *     return `Custom readme for ${this.page.project.name}!`;
   *   },
   *  };
   * }
   * ```
   *
   *
   * @group Namespaces
   */
  templates = templates(this);

  /**
   * Partials are used by templates to map speficic models to page output.
   *
   * They all take a `model` param (that references a specific TypeDoc option) and an `options` param if required.
   *
   * All partials return a string and can call other partials and helpers.
   *
   * Custom theme contexts can override by doing:
   *
   * ```ts
   * class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
   *  partials = {
   *   ...this.partials,
   *   header: () => {
   *     return `Welcome to ${this.page.project.name} custom header!`;
   *   },
   *  };
   * }
   * ```
   * @group Namespaces
   */
  partials = partials(this);

  /**
   * Helpers are smaller functions that return snippets or text or other data transformations.
   *
   * They should can reference other helpers but should not reference other partials.
   *
   * Helpers can return any value types.
   *
   * @group Namespaces
   */
  helpers = helpers(this);

  /**
   * Hook into the TypeDoc rendering system.
   * @ignore
   */
  hook = (name: keyof MarkdownRendererHooks) =>
    (this.theme.owner as MarkdownRenderer).markdownHooks.emit(name, this);
}
