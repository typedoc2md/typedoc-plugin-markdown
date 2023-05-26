/**
 * Exposes the {@link load} function that is called by TypeDoc to bootstrap the plugin.
 * @module
 */

import { Application, Options, OptionsReader } from 'typedoc';
import { MarkdownTheme } from '../theme';
import * as options from './options/config';
import { generateMarkdown, renderMarkdown } from './renderer';

/**
 *
 * The main plugin entrypoint containing all bootstrapping logic.
 */

export function load(app: Application) {
  /**
   * Adds the in-built MarkdownTheme to the renderer.
   */
  app.renderer.defineTheme('markdown', MarkdownTheme);

  /**
   * Options reader that sets the Markdown theme as the defaut and initializes other relevant options.
   */
  app.options.addReader(
    new (class implements OptionsReader {
      name = 'markdown-theme';
      readonly order = 900;
      readonly supportsPackages = false;
      read(container: Options) {
        // Sets the theme name to 'markdown' as default
        if (container.getValue('theme') === 'default') {
          container.setValue('theme', 'markdown');
        }
        // If the custom option `excludeGroups` is set then categorizeByGroup should also be false
        if (container.getValue('excludeGroups')) {
          container.setValue('categorizeByGroup', false);
        }
      }
    })(),
  );

  /**
   * add options
   */
  Object.values(options).forEach((option) => {
    app.options.addDeclaration({
      ...option,
      help: `[typedoc-plugin-markdown] ${option.help}`,
    });
  });

  /**
   * Apply custom renderer methods (there should probably be a better solution to this)
   * See {@link plugin/renderer}.
   */
  Object.defineProperty(app, 'generateDocs', { value: generateMarkdown });
  Object.defineProperty(app.renderer, 'render', {
    value: renderMarkdown,
    configurable: true,
  });
}
