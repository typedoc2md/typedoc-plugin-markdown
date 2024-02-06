import { Options, Reflection } from 'typedoc';
import { MarkdownPageEvent, MarkdownTheme } from '..';
import { MarkdownRenderer, MarkdownRendererHooks } from '../plugin/types';
import { text } from './core/text';
import { helpers, partials, templates } from './resources';
/**
 * The render context of the {@link MarkdownTheme}.
 * This follows the implementation of TypeDocs [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html)
 */

export class MarkdownThemeRenderContext {
  /**
   * @param page The page this context is created for.
   * @param options The options used by TypeDoc. See TypeDoc's {@link typedoc!Options | Options} Class.
   */
  constructor(
    private theme: MarkdownTheme,
    readonly page: MarkdownPageEvent<Reflection> | null,
    readonly options: Options,
  ) {}

  /**
   * A set of methods to return strings from specific TypeDoc models.
   *
   * These can be consumed by theme templates and partials using the syntax `context.models.method()`.
   */
  helpers = helpers();

  /**
   * The theme's global templates context.
   */
  templates = templates(this);

  /**
   * The theme's global partials context.
   */
  partials = partials(this);

  /**
   * Themes text content
   */
  text = text(this.theme);

  /**
   * Hook into the TypeDoc rendering system.
   */
  hook = (name: keyof MarkdownRendererHooks) =>
    (this.theme.owner as MarkdownRenderer).markdownHooks.emit(name, this);
}
