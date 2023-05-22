/**
 * Exposes the {@link load} function that is called by TypeDoc to bootstrap the plugin.
 * @module
 */

import { Application, Options, OptionsReader, ParameterType } from 'typedoc';
import {
  AnchorFormat,
  FormatStyle,
  OutputFileStrategy,
} from '../plugin/models';
import { MarkdownTheme } from '../theme/definition';
import { generateMarkdown, renderMarkdown } from './renderer';

/**
 *
 * The main plugin entrypoint containing all bootstrapping logic.
 *
 *
 * On a high level:
 *
 * 1. The in-built {@link MarkdownTheme} is added to the application renderer and then replaces the default theme.
 *
 * ```ts
 * app.renderer.defineTheme('markdown', MarkdownTheme);
 *```
 *
 * 2. Additional options are declared using the following pattern.
 *
 * ```ts
 * app.options.addDeclaration({
 *   name: 'newOption`,
 *   help: '[Markdown Plugin] Expose a new option to do something.',
 *   type: ParameterType.String,
 *   defaultValue: 'someDefaultValue',
 * });
 *```
 * 3. Initiates some custom functions on the renderer to decouple HTML logic. See {@link plugin/renderer}.
 *
 * @param app An instance of TypeDoc's Application that serves as the plugin host.
 *
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
   * file output options
   */

  app.options.addDeclaration({
    name: 'outputFileStrategy',
    help: '[Markdown Plugin] Determines how files are rendered.',
    type: ParameterType.Map,
    map: OutputFileStrategy,
    defaultValue: OutputFileStrategy.Members,
  });

  app.options.addDeclaration({
    name: 'flattenOutputFiles',
    help: '[Markdown Plugin] Flatten output files without folders.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'includeFileNumberPrefixes',
    help: '[Markdown Plugin] Prefixes docs and folders by number prefixes if applicable.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'excludeGroups',
    help: '[Markdown Plugin] Groups reflection kinds by headings if applicable e.g Classes, Functions. If set to false all symbols will render on the same level. Defaults to `true`',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'entryFileName',
    help: '[Markdown Plugin] The file name of the entry document.',
    type: ParameterType.String,
    defaultValue: 'README.md',
  });

  app.options.addDeclaration({
    name: 'indexFileName',
    help: '[Markdown Plugin] The file name of the seperate index page. ',
    type: ParameterType.String,
    defaultValue: 'API.md',
  });

  app.options.addDeclaration({
    name: 'indexPageTitle',
    help: '[Markdown Plugin] The title of the main index / modules page.',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    name: 'skipIndexPage',
    help: '[Markdown Plugin] How the globals page should be written.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  /**
   * ui options
   */

  app.options.addDeclaration({
    name: 'hidePageHeader',
    help: '[Markdown Plugin] Do not print page header.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hidePageTitle',
    help: '[Markdown Plugin] Do not print page title.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hideKindPrefix',
    help: '[Markdown Plugin] Do not print the kind label as a title prefix',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hideBreadcrumbs',
    help: '[Markdown Plugin] Do not print breadcrumbs.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hideInPageTOC',
    help: '[Markdown Plugin] Do not render in-page table of contents items.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hideHierarchy',
    help: '[Markdown Plugin] Do not print reflection hierarchy.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'identifiersAsCodeBlocks',
    help: '[Markdown Plugin] Format signature and declaration identifiers in code blocks.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'propertiesFormat',
    help: '[Markdown Plugin] Specify the render style of properties.',
    type: ParameterType.Map,
    map: FormatStyle,
    defaultValue: FormatStyle.List,
  });

  app.options.addDeclaration({
    name: 'enumMembersFormat',
    help: '[Markdown Plugin] Specify the render style of enum members.',
    type: ParameterType.Map,
    map: FormatStyle,
    defaultValue: FormatStyle.List,
  });

  app.options.addDeclaration({
    name: 'typeDeclarationFormat',
    help: '[Markdown Plugin] Specify the render style of type declration members.',
    type: ParameterType.Map,
    map: FormatStyle,
    defaultValue: FormatStyle.List,
  });

  app.options.addDeclaration({
    name: 'tocFormat',
    help: '[Markdown Plugin] Render TOC with first line of member descriptions.',
    type: ParameterType.Map,
    map: FormatStyle,
    defaultValue: FormatStyle.List,
  });

  /**
   * Utility options
   */
  app.options.addDeclaration({
    help: '[Markdown Plugin] Specifies the base url for internal link. If omitted all urls will be relative.',
    name: 'baseUrl',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    name: 'anchorFormat',
    help: '[Markdown Plugin] The anchor format to use when linking to internal symbols.',
    type: ParameterType.Map,
    map: AnchorFormat,
    defaultValue: AnchorFormat.Lowercase,
  });

  app.options.addDeclaration({
    name: 'anchorPattern',
    help: '[Markdown Plugin] The anchor pattern to use when linking to internal symbols. e.g customprefix-{{anchor}}.',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    name: 'namedAnchors',
    help: '[Markdown Plugin] Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids. Should be set for Bitbucket Server docs.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'preserveAnchorCasing',
    help: '[Markdown Plugin] Preserve anchor casing when generating links.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  /**
   * Apply custom renderer methods (there should probably be a better solution to this)
   */
  Object.defineProperty(app, 'generateDocs', { value: generateMarkdown });
  Object.defineProperty(app.renderer, 'render', {
    value: renderMarkdown,
    configurable: true,
  });
}
