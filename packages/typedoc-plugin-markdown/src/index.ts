import { Application, Options, OptionsReader, ParameterType } from 'typedoc';
import { MarkdownTheme } from './theme';
import { MarkdownThemeRenderContext } from './theme-context';

export function load(app: Application) {
  app.renderer.defineTheme('markdown', MarkdownTheme);

  app.options.addReader(
    new (class implements OptionsReader {
      name = 'markdown-theme-reader';
      readonly order = 1000;
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
    name: 'flattenOutput',
    help: '[Markdown Plugin] Flatten output files.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'symbolsWithOwnFile',
    help: "[Markdown Plugin] Specifies which symbols are contained in their own file. Values 'none', 'all' OR Array of ['class', 'interface', 'enum', 'function', 'variable', 'type']",
    type: ParameterType.String | ParameterType.Array,
    defaultValue: 'all',
  });

  app.options.addDeclaration({
    name: 'groupBySymbols',
    help: '[Markdown Plugin] Groups symbols by headings if applicable e.g Classes, Functions. If set to false all symbols will render on the same level. Defaults to `true`',
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
    name: 'longTitles',
    help: '[Markdown Plugin] Display full name including module paths in page titles.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'typeDeclarationStyle',
    help: '[Markdown Plugin] Specify the render style of type declarations.',
    type: ParameterType.String,
    defaultValue: 'table',
    validate: (option) => {
      const availableValues = ['table', 'list'];
      if (!availableValues.includes(option)) {
        throw new Error(
          `Unexpected value for typeDeclarationStyle, the expected value is one of 'table', 'list'`,
        );
      }
    },
  });

  /**
   * Frontmatter options
   */
  app.options.addDeclaration({
    name: 'enableFrontmatter',
    help: '[Markdown Plugin] Prepend frontmatter to output.',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    name: 'frontmatterTags',
    help: '[Markdown Plugin] Specify which file comment tags should be added to frontmatter.',
    type: ParameterType.Array,
    defaultValue: [],
  });

  app.options.addDeclaration({
    name: 'frontmatterGlobals',
    help: '[Markdown Plugin] Specify static variables to be added to all frontmatter.',
    type: ParameterType.Mixed,
    defaultValue: {},
  });

  app.options.addDeclaration({
    name: 'frontmatterNamingConvention',
    help: '[Markdown Plugin] Specify the naming convention of front matter variables.',
    type: ParameterType.String,
    defaultValue: 'camelCase',
    validate: (option) => {
      const availableValues = [
        'camelCase',
        'snakeCase',
        'kebabCase',
        'pascalCase',
      ];
      if (!availableValues.includes(option)) {
        throw new Error(
          `Unexpected value for frontmatterNamingConvention, the expected value is one of 'camelCase', 'snakeCase','kebabCase','pascalCase'`,
        );
      }
    },
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

export * from './models';
export * from './options-reader';
export { partials } from './resources';
export { MarkdownTheme, MarkdownThemeRenderContext };
