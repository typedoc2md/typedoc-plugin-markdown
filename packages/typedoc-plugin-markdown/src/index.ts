/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module
 */
import { MarkdownTheme } from '@plugin/theme';
import { getTranslatable } from 'internationalization/translatable';
import { declarations } from 'options';
import { MarkdownRendererHooks } from 'public-api';
import { generateDocs, render } from 'renderer/overrides';
import { resolvePackages } from 'renderer/packages';
import {
  Application,
  Context,
  Converter,
  DeclarationOption,
  EventHooks,
  Renderer,
} from 'typedoc';
/**
 * The function that is called by TypeDoc to bootstrap the plugin.
 *
 * Here we expose additional TypeDoc options and make some adjustments.
 *
 * This method is not intended to be consumed in any other context that via the `plugin` option.
 *
 * @see https://typedoc.org/guides/development/#plugins.
 */
export function load(app: Application) {
  /**
   * ====================
   * 1. Bootstrap Options
   *
   * Iterate over declaration definitions and to the container.
   * ====================
   */
  Object.entries(declarations).forEach(([name, declaration]) => {
    app.options.addDeclaration({
      name,
      ...declaration,
    } as DeclarationOption);
  });

  /**
   * =================================================
   * 2. Intercept and modify some TypeDoc core methods
   * =================================================
   *
   * Currently the TypeDoc Renderer class is quite coupled to the HTML theme so we override a couple of core methods.
   *
   * Ideally there would be proper decoupling in the TypeDoc core between the Application and Renderer which requires further investigation.
   *
   */

  /**
   * Replace the default HTML theme the with the MarkdownTheme
   */
  Object.defineProperty(app.renderer, 'themes', {
    value: new Map<string, new (renderer: Renderer) => MarkdownTheme>([
      ['default', MarkdownTheme],
    ]),
  });

  /**
   * Replace TypeDoc's app.generateDocs method with our own generateDocs method.
   */
  Object.defineProperty(app, 'generateDocs', { value: generateDocs });

  /**
   * Replace TypeDoc's app.renderer.render method with our own render method.
   */
  Object.defineProperty(app.renderer, 'render', {
    value: render,
  });

  /**
   * This is used to hook into the TypeDoc rendering system.
   */
  Object.defineProperty(app.renderer, 'markdownHooks', {
    value: new EventHooks<MarkdownRendererHooks, string>(),
  });

  /**
   * =========================
   * 3. Configure localization
   *
   * Load the additional translations used by the theme for the selected language.
   * =========================
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
   *
   * Currently options set for packages are only stored on the converter and are destroyed before being passed to the {@link Renderer}.
   *
   * By intercepting the package options set in the converter and storing them on the renderer we can use them later in the theme.
   *
   * @todo Ideally this functionality would be available in TypeDoc core - to investigate.
   */
  app.converter.on(Converter.EVENT_RESOLVE_END, (context: Context) => {
    if (app.options.packageDir) {
      resolvePackages(app, context, app.options.packageDir);
    }
  });
}

/**
 * Export anything that is available publicly
 */
export * from 'public-api';
