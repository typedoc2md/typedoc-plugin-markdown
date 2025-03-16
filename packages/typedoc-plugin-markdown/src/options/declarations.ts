/**
 * Typedoc options declarations.
 *
 * This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.
 *
 * The JSDoc comments will also be used in the public facing documentation.
 *
 * @categoryDescription File
 *
 * Options that are used by the plugin's [routers](/docs/output-file-structure) to configure how files are output.
 *
 * @categoryDescription Display
 *
 * Options that are used to configure how the output is structured and displayed.
 *
 * @categoryDescription Utility
 *
 * Options that are used for general configuration and utility purposes.
 *
 * @module
 */
import { DeclarationOption, ParameterType } from 'typedoc';
import {
  ALLOWED_OWN_FILE_MEMBERS,
  DEFAULT_PAGE_TITLES,
  TEXT_CONTENT_MAPPINGS,
} from './constants.js';
import {
  DisplayFormat,
  OutputFileStrategy,
  TypeDeclarationVisibility,
} from './maps.js';

/**
 *
 * @category File
 *
 * @hidden
 *
 */
export const outputFileStrategy: Partial<DeclarationOption> = {
  help: '@deprecated Deprecated in favour of `--router`.',
  type: ParameterType.Map,
  map: OutputFileStrategy,
  defaultValue: OutputFileStrategy.Members,
};

/**
 * This option is useful when only specific types of members should be exported to a single file.
 *
 * This option only takes effect when [`outputFileStrategy`](#outputfilestrategy) is equal to `"members"`
 *
 * @example ["Class", "Enum", "Interface"]
 *
 * @category File
 *
 * @hidden
 */
export const membersWithOwnFile: Partial<DeclarationOption> = {
  help: 'Determines which members are exported to their own file.',
  type: ParameterType.Array,
  validate(values) {
    const validValues = ALLOWED_OWN_FILE_MEMBERS;
    for (const kind of values) {
      if (!validValues.includes(kind)) {
        throw new Error(
          `'${kind}' is an invalid value for 'membersWithOwnFile'. Allowed values are: ${validValues.join(
            ', ',
          )}`,
        );
      }
    }
  },
  defaultValue: ALLOWED_OWN_FILE_MEMBERS,
};

/**
 * Typically Markdown files are recognised by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain Markdown parsers.
 *
 * @example ".mdx"
 *
 * @category File
 */
export const fileExtension: Partial<DeclarationOption> = {
  help: 'Specify the file extension for generated output files.',
  type: ParameterType.String,
  defaultValue: '.md',
  validate(value) {
    if (!value.startsWith('.')) {
      throw new Error(
        '[typedoc-plugin-markdown] "fileExtension" must start with a period.',
      );
    }
  },
};

/**
 * The `entryFileName` in this context is the root page of the documentation and each module directory.
 * This is essentially the equivalent to `index.html` for web pages.
 *
 * `README` is recognised when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.
 *
 * The content of root documentation file will be resolved in the following order:
 *
 * - The resolved Readme file (skipped if the "readme" option is set to `none`).
 * - The documentation index page.
 *
 * @example "index"
 *
 * @category File
 *
 */
export const entryFileName: Partial<DeclarationOption> = {
  help: 'The file name of the entry page.',
  type: ParameterType.String,
  defaultValue: 'README',
};

/**
 *
 * By default the page is named either  "modules", "packages" or "globals" depending on the context.
 *
 * *Note: this option is NOT applicable when `"readme"` is set to `"none"` or `"mergeReadme"` is set to `true`.*
 *
 * @example "documentation"
 *
 * @category File
 *
 */
export const modulesFileName: Partial<DeclarationOption> = {
  help: 'The file name of the separate modules / index page.',
  type: ParameterType.String,
};

/**
 * By default when a readme file is resolved, a separate readme page is created.
 * This option appends the documentation main/index page to the readme page so only a single root page is generated.
 *
 * *Note:*
 * - *This option has no affect when `"readme"` is set to `"none"`.*
 * - *For packages readmes (when `"outputFileStrategy"` is set to `"packages"`) this is the default behaviour.*
 *
 * @category File
 */
export const mergeReadme: Partial<DeclarationOption> = {
  help: 'Appends the documentation index page to the readme page.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default output files are generated in a directory structure.
 *
 * This option will flatten the output files to a single directory as follows:
 *
 * <FileTree>
 *   <FileTree.File name="README.md" />
 *   <FileTree.File name="module-a.Class.ClassA.md" />
 *   <FileTree.File name="module-a.Class.ClassB.md" />
 *   <FileTree.File name="module-a.Function.FunctionA.md" />
 *   <FileTree.File name="module-a.Function.FunctionB.md" />
 *   <FileTree.File name="module-b.Class.ClassA.md" />
 *   <FileTree.File name="module-b.Class.ClassB.md" />
 * </FileTree>
 *
 * *Note: This option only affects custom routers.*
 *
 *  @category File
 */
export const flattenOutputFiles: Partial<DeclarationOption> = {
  help: 'Flatten output files to a single directory.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default, directories are split by scopes when generating file paths.
 *
 * This option removes the `@scope` reference from the path when generating files and directories.
 * It does not affect the name of the package or module in the output.
 *
 * *Note: This option only affects custom routers.*
 *
 * @category File
 */
export const excludeScopesInPaths: Partial<DeclarationOption> = {
  help: 'Exclude writing @ scope directories in paths.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * This option can be used when the root page of the documentation should be a specific module (typically a module named `index`).
 *
 * The module name should be specified (NOT the reference to the file name).
 *
 * Please note a separate modules index page will not be generated, therefore would work better if navigation is present.
 *
 * @example "index"
 *
 * @hidden
 *
 * @category File
 */
export const entryModule: Partial<DeclarationOption> = {
  help: 'The name of a module that should act as the root page for the documentation.',
  type: ParameterType.String,
};

/**
 * @category Display
 */
export const hidePageHeader: Partial<DeclarationOption> = {
  help: 'Do not print page header.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category Display
 */
export const hideBreadcrumbs: Partial<DeclarationOption> = {
  help: 'Do not print breadcrumbs.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category Display
 */
export const hidePageTitle: Partial<DeclarationOption> = {
  help: 'Do not print page title.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same heading level.
 *
 * @category Display
 */
export const hideGroupHeadings: Partial<DeclarationOption> = {
  help: 'Excludes grouping by kind so all members are rendered at the same level.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @deprecated
 *
 * @hidden
 */
export const excludeGroups: Partial<DeclarationOption> = {
  help: '@deprecated This option has been renamed hideGroupHeadings to better reflect its purpose.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * This option can be used to improve readability and aesthetics when defining signatures and declarations.
 *
 * Please note that when this option is set to `true` it is not possible to link to other references.
 *
 * As a work around the [`@link`](https://typedoc.org/tags/link/) tag can be be used to manually reference types.
 *
 * @category Display
 */
export const useCodeBlocks: Partial<DeclarationOption> = {
  help: 'Wraps signatures and declarations in code blocks.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default when objects have associated documentation, object declarations are collapsed to preserve space and improve readability.
 *
 * This option should be set when a full object representation is preferred.
 *
 * @category Display
 */
export const expandObjects: Partial<DeclarationOption> = {
  help: 'Expand objects inside declarations.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default parameters in signature definitions only display the parameter name so the output is more concise.
 *
 * This option should be set when a full type representation is preferred.
 *
 * @category Display
 */
export const expandParameters: Partial<DeclarationOption> = {
  help: 'Expand parameters in signature parentheses to display type information.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default block tags (such as `@example`, `@remarks`, `@deprecated`) are rendered after "Parameters", "Returns" and "Type declaration" sections for signatures and declarations.
 *
 * The rationale is that comment block tags often contain more detailed, supplementary information and are typically secondary to understanding the primary use of the symbol,
 *
 * Use this option to preserve the position of the tag content with the comment summary.
 *
 * @example ["@example", "@deprecated"]
 *
 * @category Display
 */
export const blockTagsPreserveOrder: Partial<DeclarationOption> = {
  help: 'Specifies comment block tags that should preserve their position.',
  type: ParameterType.Array,
  defaultValue: [],
  validate(value) {
    if (
      !value.every(
        (tag) => typeof tag === 'string' && /^@[a-zA-Z][a-zA-Z0-9]*$/.test(tag),
      )
    ) {
      throw new Error('[typedoc-plugin-markdown] Hello');
    }
  },
};

/**
 * This option renders index items either as a simple unordered list or in a table.
 *
 * When table style is selected the following will be the behaviour:
 *
 * - For a **members index**, a description column will be added with key `table` - the first paragraph of the comment summary, or key `htmlTable` - the entire comment contents.
 * - For a **packages index**, (when `entryPointStrategy` equals `packages`), the package.json description will be displayed with an additional "Version" column (when `--includeVersion` equals true).
 * - For a **documents index** a description column will be added to the table printing the `"description"` frontmatter variable.
 *
 * @category Display
 */
export const indexFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of index items.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option specifies the output format for parameters and type parameters of functions and class methods:
 *
 * - **"list"**: parameters are output as bullet points in a linear list, suitable for more detailed comments.
 * - **"table"**: parameters are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: parameters are output in an HTML table, enabling block elements to render in table cells.
 *
 * @category Display
 */
export const parametersFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of parameter and type parameter groups.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option specifies the output format for interface properties:
 *
 * - **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export const interfacePropertiesFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of property groups for interfaces.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option specifies the output format for class properties:
 *
 * - **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export const classPropertiesFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of property groups for classes.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option specifies the output format for type alias properties:
 *
 * - **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export const typeAliasPropertiesFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of style for type alias properties.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option specifies the output format for enumeration members:
 *
 * - **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: members are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export const enumMembersFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of enumeration members.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option will handle the formatting of object literals assigned as properties in classes or interfaces.
 *
 * Note this options will only take effect when the property declaration is rendered in a `list` format.
 *
 * - **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: members are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export const propertyMembersFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of style for property members for interfaces and classes.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * This option specifies the output format for type declaration of variables and type aliases.
 *
 * - **"list"**: declarations are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: declarations are output within a Markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: declarations are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display
 */
export const typeDeclarationFormat: Partial<DeclarationOption> = {
  help: 'Sets the format of style for type declaration members.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * Configures the visibility level for type declaration documentation. Applies to both list and table formats.
 *
 * - **"verbose"**: Provides full documentation details for all type declarations, including nested types.
 * - **"compact"**: Summarizes nested types as JSON, reducing verbosity while retaining key information.
 *
 * @category Display
 */
export const typeDeclarationVisibility: Partial<DeclarationOption> = {
  help: 'Set the visibility level for type declaration documentation.',
  type: ParameterType.Map,
  map: TypeDeclarationVisibility,
  defaultValue: TypeDeclarationVisibility.Verbose,
};

/**
 * @deprecated
 *
 * @hidden
 */
export const propertiesFormat: Partial<DeclarationOption> = {
  help: '@deprecated  This option has been deprecated in favour of `--interfacePropertiesFormat` and `--classPropertiesFormat`.',
  type: ParameterType.Map,
  map: DisplayFormat,
  defaultValue: DisplayFormat.List,
};

/**
 * By default, all available data for symbols are displayed in table columns which can result in several columns in certain use-cases.
 *
 * This option allows you to control the visibility of columns, prioritizing readability over displaying complete data.
 * In addition you can control the alignment of the header text.
 *
 * @category Display
 */
export const tableColumnSettings: Partial<DeclarationOption> = {
  help: 'Control how table columns are configured and displayed.',
  type: ParameterType.Flags,
  defaults: {
    hideDefaults: false,
    hideInherited: false,
    hideModifiers: false,
    hideOverrides: false,
    hideSources: false,
    hideValues: false,
    leftAlignHeaders: false,
  },
};

/**
 * Customizes the page titles for index, module, and member pages in the documentation.
 *
 * This option is provided as an object, with keys corresponding to the page types.
 *
 * Each value can be either:
 * - A string supporting placeholders.
 * - A function that receives input arguments.
 *
 * Available placeholders / arguments:
 *
 * - `{projectName}` – The project's name, resolved by TypeDoc.
 * - `{version}` – The project version, resolved by TypeDoc (when `includeVersion` is `true`).
 * - `{kind}` – The reflection kind of the item.
 * - `{name}` – The name of the module or member.
 *
 * Available keys:
 *
 * - `index` – For the main documentation index page. Supports `projectName` and `version`.
 * - `module` – For module and namespace pages. Supports `kind` and `name`.
 * - `member` – For individual member pages. Supports `kind` and `name`.
 *
 * Examples showing usage of both string (JS config) and function (JS/JSON config) values:
 *
 * ```js filename="typedoc.cjs"
 * pageTitleTemplates: {
 *   index: (args) => `${args.projectName}: ${args.version}`,
 *   module: (args) => `${args.kind}: ${args.name}`,
 *   member: (args) => `${args.kind}: ${args.name}`,
 * }
 * ```
 *
 * @category Display
 */
export const pageTitleTemplates: Partial<DeclarationOption> = {
  help: 'Change specific text placeholders in the template.',
  type: ParameterType.Object,
  defaultValue: DEFAULT_PAGE_TITLES,
  configFileOnly: true,
  validate(value) {
    if (!value || typeof value !== 'object') {
      throw new Error(
        '[typedoc-plugin-markdown] pageTitleTemplates must be an object.',
      );
    }
    for (const val of Object.values(value)) {
      if (typeof val !== 'string' && typeof val !== 'function') {
        throw new Error(
          `[typedoc-plugin-markdown] All values of pageTitleTemplates must be strings or functions.`,
        );
      }
    }
  },
};

/**
 * This plugin generates well-formatted Markdown, however, integrating the popular formatting package [Prettier](https://prettier.io/) can provide additional enhancements, such as:
 *
 * - Formats code inside fenced blocks within comments blocks, using the respective Prettier configuration for that language.
 * - Aligns markdown table cells.
 * - Removes unnecessary escape characters.
 * - Wraps long lines of text to fit within a configurable line width.
 *
 * Please note that Prettier is not a dependency of this plugin and must be installed in your project for this option to work.
 *
 * ```bash
 * npm install prettier -D
 * ```
 *
 * @category Utility
 */
export const formatWithPrettier: Partial<DeclarationOption> = {
  help: 'Apply additional output formatting with Prettier.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default Prettier uses the options resolved from a discovered Prettier [configuration file](https://prettier.io/docs/en/configuration.html).
 *
 * Use this option to specify a separate Prettier configuration file in a custom location.
 *
 * Please note this option is only applicable when `formatWithPrettier` is set to `"true"`.
 *
 * @example "./path/to/.prettierrc.json"
 *
 * @category Utility
 */
export const prettierConfigFile: Partial<DeclarationOption> = {
  help: 'Specify a custom Prettier configuration file location.',
  type: ParameterType.Path,
};

/**
 * If undefined all urls will be relative.
 *
 * @example "http://abc.com"
 *
 * @category Utility
 */
export const publicPath: Partial<DeclarationOption> = {
  help: 'Specify the base path for all urls.',
  type: ParameterType.String,
  defaultValue: undefined,
};

/**
 * By default, opening and closing angle brackets (`<` and `>`) are escaped using backslashes, and most modern Markdown processors handle them consistently.
 * However, using HTML entities (`&lt;` and `&gt;`) might be preferable to avoid any inconsistencies with some Markdown processors.
 *
 * @category Utility
 */
export const useHTMLEncodedBrackets: Partial<DeclarationOption> = {
  help: 'Use HTML encoded entities for angle brackets.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * Controls whether HTML anchors (`<a id="...">`) are added to headings.
 *
 * Markdown processors usually auto-generate anchor IDs for headings found in a document.
 * This plugin attempts to generate cross-links to symbols based on these IDs.
 *
 * Enable this option if:
 *
 * - Your Markdown parser does not generate heading IDs, making it impossible to link to headings in the document.
 * - The plugin cannot reliably resolve auto-generated IDs — for example, if additional headings are added dynamically.
 *   In this case, use this option together with `anchorPrefix` to ensure unique and predictable anchors.
 *
 * *Note: HTML anchors will always be added to linkable symbols listed in table rows,
 * as there is no alternative way to link to these items.*
 *
 * @category Utility
 */
export const useHTMLAnchors: Partial<DeclarationOption> = {
  help: 'Add HTML anchors to page headings.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * Prefix to prepend to all generated anchor links.
 *
 * Use this option when:
 *
 * - Your Markdown parser automatically assigns a custom anchor prefix.
 * - You are using `useHTMLAnchors` and want to avoid ID conflicts with other elements in the document.
 *
 * @example "api-"
 *
 * @category Utility
 */
export const anchorPrefix: Partial<DeclarationOption> = {
  help: 'Custom anchor prefix to add to anchor links.',
  type: ParameterType.String,
  defaultValue: undefined,
};

/**
 * @hidden
 *
 * @deprecated
 */
export const preserveAnchorCasing: Partial<DeclarationOption> = {
  help: 'Preserve anchor casing when generating link to symbols.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @hidden
 */
export const textContentMappings: Partial<DeclarationOption> = {
  help: '@deprecated This option has been deprecated in favour of `--pageTitleTemplates`.',
  type: ParameterType.Object,
  defaultValue: TEXT_CONTENT_MAPPINGS,
  configFileOnly: true,
  validate(value) {
    if (!value || typeof value !== 'object') {
      throw new Error(
        '[typedoc-plugin-markdown] textContentMappings must be an object.',
      );
    }
    for (const val of Object.values(value)) {
      if (typeof val !== 'string') {
        throw new Error(
          `[typedoc-plugin-markdown] All values of textContentMappings must be strings.`,
        );
      }
    }
  },
};

/**
 * *Please note this options does not affect the rendering of inline code or code blocks (using single/triple backticks).*
 *
 * By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..
 *
 * This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.
 *
 * This option would typically be used when source code comes from an external source exposing the following potential issues:
 *
 * - Comments contain raw tags that should be interpreted as code examples.
 * - Comments contain invalid syntax that (in the case of MDX) will cause breaking parsing errors.
 * - Although most parsers use XSS filters, this option provides an additional layer of XSS security.
 *
 * @category Utility
 */
export const sanitizeComments: Partial<DeclarationOption> = {
  help: 'Sanitize HTML and JSX inside JsDoc comments.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @deprecated
 *
 * @hidden
 */
export const navigationModel: Partial<DeclarationOption> = {
  help: '@deprecated This option has been deprecated in favour of TypeDoc `navigation` option.',
  type: ParameterType.Flags,
  defaults: {
    excludeGroups: false,
    excludeCategories: false,
    excludeFolders: false,
  },
};
