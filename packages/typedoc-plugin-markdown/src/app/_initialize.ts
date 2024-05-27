/**
 * Initialization and bootstrapping of the plugin.
 *
 * @module
 */

import { MarkdownRendererHooks } from 'app/types';
import { getTranslatable } from 'internationalization/translatable';
import { declarations } from 'options';
import { MarkdownTheme } from 'theme';
import {
  Application,
  Context,
  Converter,
  DeclarationOption,
  EventHooks,
  Renderer,
  Theme,
} from 'typedoc';
import { generateDocs, render, resolvePackages } from './renderer';

/**
 * This method is exposed to the `"plugin"` configuration option and contains all initialization functionality.
 *
 * @remarks
 *
 * The following initialization steps are taken in this method:
 *
 * **1. Declare options:**
 *
 * - Iterate over declaration definitions and to the container.
 *
 * **2. Replace default theme:**
 *
 * - Replace the default HTML theme the with the {@link MarkdownTheme}
 *
 * **3. Override TypeDoc methods:**
 *
 * - Intercept and modify some TypeDoc core methods that are coupled to the HTML theme.
 * **4. Configure localization:**
 *
 * - Load the additional translations used by the theme for the selected language.
 *
 * @param app - When loaded TypeDoc provides an instance of the {@link Application} referred to as the `"pluginHost"`.
 *
 * @see https://typedoc.org/guides/development/#plugins.
 *
 */
export function load(app: Application) {
  /**
   * ==================
   * 1. Declare Options
   * ==================
   */
  Object.entries(declarations).forEach(([name, declaration]) => {
    app.options.addDeclaration({
      name,
      ...declaration,
    } as DeclarationOption);
  });

  /**
   * =================================================
   * 2. Replace default theme with the Markdown themes
   * =================================================
   */

  Object.defineProperty(app.renderer, 'themes', {
    value: new Map<string, new (renderer: Renderer) => Theme>([
      ['default', MarkdownTheme],
    ]),
  });

  /**
   * =================================================
   * 3. Intercept and modify some TypeDoc core methods
   * =================================================
   */

  Object.defineProperty(app, 'generateDocs', {
    value: generateDocs,
  });

  Object.defineProperty(app.renderer, 'render', {
    value: render,
  });

  Object.defineProperty(app.renderer, 'markdownHooks', {
    value: new EventHooks<MarkdownRendererHooks, string>(),
  });

  /**
   * ============================
   * 3. Configure localization
   * ============================
   */
  app.converter.on(Converter.EVENT_BEGIN, () => {
    app.internationalization.addTranslations(
      app.options.getValue('lang'),
      { ...getTranslatable(app) },
      true,
    );
  });

  /**
   * ============================
   * 4. Apply any other behaviour
   * ============================
   */

  app.converter.on(Converter.EVENT_RESOLVE_END, (context: Context) => {
    if (app.options.packageDir) {
      resolvePackages(app, context, app.options.packageDir);
    }
  });
}
