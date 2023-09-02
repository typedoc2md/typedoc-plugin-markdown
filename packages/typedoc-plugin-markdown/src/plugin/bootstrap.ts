/**
 * Exposes the {@link load} function that is called by TypeDoc to bootstrap the plugin.
 * @module
 */

import { Application, Renderer, Theme } from 'typedoc';
import { MarkdownTheme } from '../theme';
import * as options from './options/config';
import { generateMarkdown, renderMarkdown } from './renderer';

/**
 *
 * The main plugin entrypoint containing all bootstrapping logic.
 */

export function load(app: Application) {
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
  });

  Object.defineProperty(app.renderer, 'themes', {
    value: new Map<string, new (renderer: Renderer) => Theme>([
      ['default', MarkdownTheme],
    ]),
  });

  /* app.converter.on(
    Converter.EVENT_RESOLVE_END,
    (context: Context, reflection: Reflection) => {
      const project = context.project;
      const removeGroups = (children) => {
        return children?.map((child) =>
          Object.assign(child, {
            children: removeGroups(child.children),
            groups: !child.kindOf(
              ReflectionKind.Project,
              ReflectionKind.Module,
            ),
          }),
        );
      };
      project.children = removeGroups(project.children);
    },
  );*/

  /**
   * Options reader that sets the Markdown theme as the defaut and initializes other relevant options.
   */
  /*app.options.addReader(
    new (class implements OptionsReader {
      name = 'markdown-theme';
      readonly order = 900;
      readonly supportsPackages = false;
      read(container: Options) {
        container.setValue('modifierTags', [
          ...(container.getValue('modifierTags') || []),
          ...['@membersToFile', '@moduleToFile'],
        ]);
      }
    })(),
  );*/
}
