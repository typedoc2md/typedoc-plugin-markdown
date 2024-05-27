/**
 * Typedoc options declarations.
 * Each exported variable will be added to the TypeDoc options and also the public documentation.
 *
 * @module
 */
import { DeclarationOption, ParameterType } from 'typedoc';
import { ALLOWED_OWN_FILE_MEMBERS, TEXT_CONTENT_MAPPINGS } from './constants';
import { IndexFormat, OutputFileStrategy, ReflectionFormat } from './maps';

/**
 * @remarks
 *
 * TypeDoc creates documentation according to exports derived from the given [`entryPointsStrategy`](https://typedoc.org/options/input/#entrypointstrategy) configuration.
 *
 * This option does not alter the way TypeDoc interprets the `entryPointsStrategy` but rather provides some flexibility as to how output files are generated.
 *
 * It is also possible to further refine what members are exported to individual files with the [`membersWithOwnFile`](#memberswithownfile) option.
 *
 * The following keys are available:
 *
 * - **"members":** generates an individual file for each exported module member. This is the standard behavior of the HTML theme and the default setting of the plugin.
 * - **"modules"**: generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.
 *
 * @category File Options
 */
export const outputFileStrategy: Partial<DeclarationOption> = {
  help: 'Determines how output files are generated.',
  type: ParameterType.Map,
  map: OutputFileStrategy,
  defaultValue: OutputFileStrategy.Members,
};

/**
 * @remarks
 *
 * This option is useful when only specific types of members should be exported to a single file.
 *
 * Ignored when [`outputFileStrategy`](#outputfilestrategy) is equal to `"modules"`
 *
 * @example ["Class", "Enum", "Interface"]
 *
 * @category File Options
 */
export const membersWithOwnFile: Partial<DeclarationOption> = {
  help: 'Determines which members are exported to their own file when `outputFileStrategy` equals `members`.',
  type: ParameterType.Array,
  validate(values) {
    const validValues = ALLOWED_OWN_FILE_MEMBERS;
    for (const kind of values) {
      if (!validValues.includes(kind)) {
        throw new Error(
          `'${kind}' is an invalid value for 'membersWithOwnFile'. Must be one of: ${validValues.join(
            ', ',
          )}`,
        );
      }
    }
  },
  defaultValue: ALLOWED_OWN_FILE_MEMBERS,
};

/**
 * @remarks
 *
 * By default output files are generated in a directory structure that mirrors the project's module hierarchy including folders for member kinds eg `classes`, `enums`, `functions` etc.
 *
 * @category File Options
 */
export const flattenOutputFiles: Partial<DeclarationOption> = {
  help: 'Flatten output files to a single directory.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * Typically markdown files are recognised by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain markdown parsers.
 *
 * @example ".mdx"
 *
 * @category File Options
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
 * @remarks
 *
 * The entry page is the root page of the documentation, equivalent to `index.html` for web pages.
 *
 * `README` is recognised when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.
 *
 * The content of this file will be resolved in the following order:
 *
 * 1. The value of the [`entryModule`](#entrymodule) option (if defined).
 * 2. The resolved Readme file (skipped if the [`readme`](https://typedoc.org/options/input/#readme) option is set to `none`).
 * 3. The documentation index page.
 *
 * @example "index"
 *
 * @category File Options
 *
 */
export const entryFileName: Partial<DeclarationOption> = {
  help: 'The file name of the entry page.',
  type: ParameterType.String,
  defaultValue: 'README',
};

/**
 * @remarks
 *
 * This option can be used when the root page of the documentation should be a specific module (typically a module named `index`).
 *
 * The module name should be specified (NOT the reference to the file name).
 *
 * Please note a separate modules index page will not be generated, therefore would work better if navigation is present.
 *
 * @example "index"
 *
 * @category File Options
 */
export const entryModule: Partial<DeclarationOption> = {
  help: 'The name of a module that should act as the root page for the documentation.',
  type: ParameterType.String,
};

/**
 * @remarks
 *
 * By default directories are split by scopes when generating file paths.
 *
 * This option will remove reference to `@scope` in the path when generating files and directories. It does not affect the name of the package or module in the output.
 *
 * The following will be the directory structure for packages named `@scope/package-1` and `@scope/package-2`:
 *
 * Ignored if `flattenOutputFiles` is set to `true`.
 *
 * @category File Options
 */
export const excludeScopesInPaths: Partial<DeclarationOption> = {
  help: 'Exclude writing @ scope directories in paths.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * By default when a readme file is resolved, a separate readme page is created.
 * This option appends the index page to the readme so only a single root page is generated.
 *
 * You can additionally configure the generated title with `"textContentMappings": { "title.indexPage" : "My API"}`.
 * See [`--textContentMappings`](/docs/options/utility-options#--textcontentmappings).
 *
 * This option has no effect when [`readme`](https://typedoc.org/options/input/#readme) is set to `"none"`.
 *
 * @category File Options
 */
export const mergeReadme: Partial<DeclarationOption> = {
  help: 'Merges the resolved readme into the project index page.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category Display Options
 */
export const hidePageHeader: Partial<DeclarationOption> = {
  help: 'Do not print page header.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category Display Options
 */
export const hidePageTitle: Partial<DeclarationOption> = {
  help: 'Do not print page title.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category Display Options
 */
export const hideBreadcrumbs: Partial<DeclarationOption> = {
  help: 'Do not print breadcrumbs.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same heading level.
 *
 * @category Display Options
 */
export const hideGroupHeadings: Partial<DeclarationOption> = {
  help: 'Excludes grouping by kind so all members are rendered and sorted at the same level.',
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
 * @remarks
 *
 * This option can be used to improve readability and aesthetics when defining signatures and declarations.
 *
 * Please note that when this option is set to `true` it is not possible to link to other references.
 *
 * As a work around the [`@link`](https://typedoc.org/tags/link/) tag can be be used to manually reference types.
 *
 * @category Display Options
 */
export const useCodeBlocks: Partial<DeclarationOption> = {
  help: 'Wraps signatures and declarations in code blocks.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * By default objects inside declarations are collapsed to preserve space and improve readability.
 *
 * This option should be set when a full object representation is preferred.
 *
 * @category Display Options
 */
export const expandObjects: Partial<DeclarationOption> = {
  help: 'Expand objects inside declarations.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * By default parameters in signature definitions only display the parameter name so the output is more concise.
 *
 * This option should be set when a full type representation is preferred.
 *
 * @category Display Options
 */
export const expandParameters: Partial<DeclarationOption> = {
  help: 'Expand parameters in signature parentheses to display type information.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * This option specifies the output format for parameters and type parameters of functions and class methods:
 *
 * - **"list"**: parameters are output as bullet points in a linear list, suitable for more detailed comments.
 * - **"table"**: parameters are output within a markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: parameters are output in an HTML table, enabling block elements to render in tabular format
 *
 * @category Display Options
 */
export const parametersFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style of parameter and type parameter groups.',
  type: ParameterType.Map,
  map: ReflectionFormat,
  defaultValue: ReflectionFormat.List,
};

/**
 * @remarks
 *
 * This option specifies the output format for class and interface properties:
 *
 * - **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: properties are output within a markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display Options
 */
export const propertiesFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style of property groups for interfaces and classes.',
  type: ParameterType.Map,
  map: ReflectionFormat,
  defaultValue: ReflectionFormat.List,
};

/**
 * @remarks
 *
 * This option specifies the output format for enumeration members:
 *
 * - **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: members are output within a markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display Options
 */
export const enumMembersFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style of enumeration members.',
  type: ParameterType.Map,
  map: ReflectionFormat,
  defaultValue: ReflectionFormat.List,
};

/**
 * @remarks
 *
 * This option specifies the output format for type declaration:
 *
 * - **"list"**: declarations are output in linear blocks with headings, suitable for more detailed comments.
 * - **"table"**: declarations are output within a markdown table, condensed into a single paragraph.
 * - **"htmlTable"**: declarations are output in an HTML table, enabling block elements to render in tabular format.
 *
 * @category Display Options
 */
export const typeDeclarationFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style for type declaration members.',
  type: ParameterType.Map,
  map: ReflectionFormat,
  defaultValue: ReflectionFormat.List,
};

/**
 * @remarks
 *
 * This option renders index items either as a simple unordered list or in a table.
 *
 * When table style is selected the following will be the behaviour:
 *
 * - For a **members index**, a description column will be added to the table with the first paragraph of the comment summary.
 * - For a **packages index**, (when `--entryPointStrategy` equals `packages`), the package.json description will be displayed with an additional "Version" column (when `--includeVersion` equals true).
 * - For a **documents index** a description column will be added to the table printing the `description` frontmatter if present.
 *
 * @category Display Options
 */
export const indexFormat: Partial<DeclarationOption> = {
  help: 'Specify the render format for index items.',
  type: ParameterType.Map,
  map: IndexFormat,
  defaultValue: IndexFormat.List,
};

/**
 * @remarks
 *
 * By default, all available data for symbols are displayed in table columns. For some reflections this can result in several columns.
 *
 * This option allows you to control the visibility of columns, prioritizing readability over displaying complete data.
 * In addition you can control the alignment of the header text.
 *
 * @category Display Options
 */
export const tableColumnSettings: Partial<DeclarationOption> = {
  help: 'Control header alignment and column visibility in tables.',
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
 * @remarks
 *
 * If undefined all urls will be relative.
 *
 * @example "http://abc.com"
 *
 * @category Utility Options
 */
export const publicPath: Partial<DeclarationOption> = {
  help: 'Specify the base path for all urls.',
  type: ParameterType.String,
  defaultValue: undefined,
};

/**
 * @remarks
 *
 * *Please note this options does not affect the rendering of inline code or code blocks (using single/triple backticks).*
 *
 * By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..
 *
 * This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.
 *
 * This option would typically be used when source code comes from an external library exposing the following potential issues:
 *
 * - Comments contain raw tags that should be interpreted as code examples.
 * - Comments contain invalid syntax that (in the case of MDX) will cause breaking parsing errors.
 * - Although most parsers use XSS filters, this option provides an additional layer of XSS security.
 *
 * @category Utility Options
 */
export const sanitizeComments: Partial<DeclarationOption> = {
  help: 'Sanitize HTML and JSX inside JsDoc comments.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * This option should be used when parsers require a custom anchor prefix.
 *
 * @example "markdown-header"
 *
 * @category Utility Options
 */
export const anchorPrefix: Partial<DeclarationOption> = {
  help: 'Custom anchor prefix when anchoring to in-page symbols.',
  type: ParameterType.String,
  defaultValue: undefined,
};

/**
 * @remarks
 *
 * This option should be used if there are issues with anchoring to symbols within a page.
 *
 * - For markdown parsers that do not automatically assign header ids.
 * - When cross referencing symbols that are referenced in a table row.
 *
 * @category Utility Options
 */
export const useHTMLAnchors: Partial<DeclarationOption> = {
  help: 'Add HTML named anchors to headings and table rows.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * By default references to symbol anchor links are lowercased.
 *
 * This option can be used for engines that require the preservation of anchor link casing.
 *
 * @category Utility Options
 */
export const preserveAnchorCasing: Partial<DeclarationOption> = {
  help: 'Preserve anchor casing when generating link to symbols.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @remarks
 *
 * By default navigation is not written to file but can be consumed programmatically.
 * This is useful if you want to provide a custom sidebar/navigation implementation (if relevant to your environment).
 *
 * The navigation model can be accessed by utilizing the `postRenderAsyncJobs` on the renderer.
 *
 * The navigation is returned as `JSON` and can be mapped to a custom structure and written to a file.
 *
 * - `navigationModel.excludeGroups`: do not organise navigation by groups.
 * - `navigationModel.excludeCategories`: do not organise navigation by categories.
 * - `navigationModel.excludeFolders`: excludes unnecessary nesting with complex hierarchies.
 *
 * ```ts filename="custom-plugin.ts"
 *
 * import { MarkdownApplication } from 'typedoc-plugin-markdown';
 *
 * export function load(app: MarkdownApplication) {
 *  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
 *    // The navigation JSON structure is available on the navigation object.
 *    const navigation = renderer.navigation;
 *
 *    // This can be parsed to something else or written straight to a file:
 *    fs.writeFileSync('navigation.json', JSON.stringify(navigation));
 *  });
 * }
 * ```
 *
 * @category Utility Options
 *
 */
export const navigationModel: Partial<DeclarationOption> = {
  help: 'Configures how the navigation model will be generated.',
  type: ParameterType.Flags,
  defaults: {
    excludeGroups: false,
    excludeCategories: false,
    excludeFolders: false,
  },
};

/**
 * @remarks
 * Defines placeholder text in main template that can be customized. Includes the main page header and breadcrumbs (if displayed),
 * page titles and page footer.
 *
 * Default values within curly braces {} indicates a placeholder of dynamic text.
 *
 * - The `{projectName}` placeholder writes project's name .
 * - The `{kind}` writes the reflection kind of the page.
 * - The `{version}` placeholder writes package version (if includeVersion is `true`).
 *
 * If you are looking for general localization support please see [localization]().
 *
 * @category Utility Options
 */
export const textContentMappings: Partial<DeclarationOption> = {
  help: 'Change specific text placeholders in the template.',
  type: ParameterType.Object,
  defaultValue: TEXT_CONTENT_MAPPINGS,
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
