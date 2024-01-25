import { Options, Reflection } from 'typedoc';
import { MarkdownPageEvent, MarkdownTheme, TextContentMappings } from '..';
import { MarkdownRenderer, MarkdownRendererHooks } from '../plugin/types';
import { helpers, partials, templates } from './resources';

/* start_imports */
/* end_imports */

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

  getText(key: keyof TextContentMappings) {
    return this.theme.getText(key);
  }

  getTextFromKindString(kindString: string, isPlural = false) {
    return this.theme.getTextFromKindString(kindString, isPlural);
  }

  parseUrl = (url: string) => {
    return encodeURI(url);
  };

  /**
   * Hook into the TypeDoc rendering system.
   */
  hook = (name: keyof MarkdownRendererHooks) =>
    (this.theme.owner as MarkdownRenderer).markdownHooks.emit(name, this);
}
