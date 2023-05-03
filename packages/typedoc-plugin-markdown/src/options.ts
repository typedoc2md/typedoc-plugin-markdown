import { Application, Options, OptionsReader, ParameterType } from 'typedoc';

export function defineOptions(app: Application) {
  app.options.addReader(
    new (class implements OptionsReader {
      name = 'markdown-theme-options-reader';
      readonly order = 900;
      readonly supportsPackages = false;
      read(container: Options) {
        if (container.getValue('theme') === 'default') {
          container.setValue('theme', 'markdown');
        }
      }
    })(),
  );

  /**
   * file output options
   */
  app.options.addDeclaration({
    name: 'entryDocument',
    help: '[Markdown Plugin] The file name of the entry document.',
    type: ParameterType.String,
    defaultValue: 'README.md',
  });

  app.options.addDeclaration({
    name: 'flattenOutputFiles',
    help: '[Markdown Plugin] Flatten output files without directories.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'numberPrefixOutput',
    help: '[Markdown Plugin] Prefixes docs and folders by number prefixes if applicable.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'kindsWithOwnFile',
    help: "[Markdown Plugin] Specifies which reflection kinds are contained in their own file. Values 'none', 'all' OR Array of ['class', 'interface', 'enum', 'function', 'variable', 'type']",
    type: ParameterType.String | ParameterType.Array,
    defaultValue: 'all',
  });

  app.options.addDeclaration({
    name: 'groupByKinds',
    help: '[Markdown Plugin] Groups reflection kinds by headings if applicable e.g Classes, Functions. If set to false all symbols will render on the same level. Defaults to `true`',
    type: ParameterType.Boolean,
    defaultValue: true,
  });

  /**
   * ui options
   */

  app.options.addDeclaration({
    name: 'hidePageTitle',
    help: '[Markdown Plugin] Do not print page title.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'longPageTitles',
    help: '[Markdown Plugin] Include full module paths in page title.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'hideKindTag',
    help: '[Markdown Plugin] Do not print the kind tag beneath the page title.',
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
    name: 'indexPageTitle',
    help: '[Markdown Plugin] The title of the main index / modules page.',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    name: 'indentifiersAsCodeBlocks',
    help: '[Markdown Plugin] Format signature and declaration identifiers in code blocks.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'TOCFormat',
    help: '[Markdown Plugin] Specifiy render style of table of content items.',
    type: ParameterType.String,
    defaultValue: 'list',
  });

  app.options.addDeclaration({
    name: 'propertiesFormat',
    help: '[Markdown Plugin] Specify the render style of properties.',
    type: ParameterType.String,
    defaultValue: 'list',
  });

  app.options.addDeclaration({
    name: 'enumMembersFormat',
    help: '[Markdown Plugin] Specify the render style of properties.',
    type: ParameterType.String,
    defaultValue: 'list',
  });

  /**
   * Frontmatter options (TO BE DELETED)
   */
  app.options.addDeclaration({
    name: 'enableFrontmatter',
    help: '[Markdown Plugin] Removed (please use typedoc-plugin-fronmatter)',
    type: ParameterType.Boolean,
    defaultValue: false,
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
    help: '[Markdown Plugin] The anchor pattern to use when linking to internal symbols.',
    type: ParameterType.String,
    defaultValue: 'lowercase',
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
}
