import { DeclarationOption, ParameterType } from 'typedoc';
import {
  FormatStyle,
  MembersWithOwnFile,
  OutputFileStrategy,
} from './option-maps';
import { TEXT_MAPPING_DEFAULTS } from './text-mappings/text-mapping-defaults';

/**
 *
 * TypeDoc creates documentation according to exports derived from the given [`entryPointsStrategy`](https://typedoc.org/options/input/#entrypointstrategy) configuration.
 *
 * This option does not alter the way TypeDoc interprets the `entryPointsStrategy` but rather provides some flexibility as to how output files are generated.
 *
 * It is also possible to further refine what members are exported to individual files with the [`membersWithOwnFile`](#memberswithownfile) option.
 *
 * The following keys are available:
 *
 * @members
 *
 * Generates an individual file for each exported module member. This is the standard behaviour of the HTML theme and the plugin default.
 *
 * <FileTree>
 *  <FileTree.File name="README.md" />
 *  <FileTree.Folder name="module-a" defaultOpen>
 *   <FileTree.Folder name="classes" defaultOpen>
 *   <FileTree.File name="ClassA.md" />
 *   <FileTree.File name="ClassB.md" />
 *  </FileTree.Folder>
 *  <FileTree.Folder name="functions" defaultOpen>
 *    <FileTree.File name="FunctionA.md" />
 *    <FileTree.File name="FunctionB.md" />
 *  </FileTree.Folder>
 * </FileTree.Folder>
 * <FileTree.Folder name="module-b" defaultOpen>
 *  <FileTree.Folder name="classes" defaultOpen>
 *   <FileTree.File name="ClassA.md" />
 *   <FileTree.File name="ClassB.md" />
 *  </FileTree.Folder>
 *  </FileTree.Folder>
 * </FileTree>
 *
 * @modules
 *
 * Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.
 *
 * <FileTree>
 *  <FileTree.File name="README.md" />
 *  <FileTree.File name="module-a.md" />
 *  <FileTree.File name="module-b.md" />
 * </FileTree>
 *
 * @category Output
 */
export const outputFileStrategy: Partial<DeclarationOption> = {
  help: 'Determines how output files are generated.',
  type: ParameterType.Map,
  map: OutputFileStrategy,
  defaultValue: OutputFileStrategy.Members,
};

/**
 * This option is useful when only specific types of members should be exported to a single file.
 *
 * Ignored when [`outputFileStrategy`](#outputfilestrategy) is equal to `"modules"`
 *
 * @example ["Class", "Enum", "Interface"]
 *
 * @category Output
 */
export const membersWithOwnFile: Partial<DeclarationOption> = {
  help: 'Determines which members are exported to their own file when `outputFileStrategy` equals `members`.',
  type: ParameterType.Array,
  validate(values) {
    const validValues = MembersWithOwnFile;
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
  defaultValue: MembersWithOwnFile,
};

/**
 * By default output files are generated in a directory structure that mirrors the project's module hierarchy including folders for member kinds eg `classes`, `enums`, `functions` etc.
 *
 * This option will flatten the output files to a single directory as follows:
 *
 * Default output:
 *
 * <FileTree>
 *  <FileTree.File name="README.md" />
 *  <FileTree.Folder name="module-a" defaultOpen>
 *   <FileTree.Folder name="classes" defaultOpen>
 *   <FileTree.File name="ClassA.md" />
 *   <FileTree.File name="ClassB.md" />
 *  </FileTree.Folder>
 *  <FileTree.Folder name="functions" defaultOpen>
 *    <FileTree.File name="FunctionA.md" />
 *    <FileTree.File name="FunctionB.md" />
 *  </FileTree.Folder>
 * </FileTree.Folder>
 * </FileTree>
 *
 * Flattened output:
 *
 * <FileTree>
 *  <FileTree.File name="README.md" />
 *  <FileTree.File name="module-a.Class.ClassA.md" />
 *  <FileTree.File name="module-a.Class.ClassB.md" />
 *  <FileTree.File name="module-a.Function.functionA.md" />
 *  <FileTree.File name="module-a.Function.function.md" />
 * </FileTree>
 *
 *
 * @category Output
 */
export const flattenOutputFiles: Partial<DeclarationOption> = {
  help: 'Flatten output files to a single directory.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * Typically markdown files are recognised by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain markdown parsers.
 *
 * @example ".mdx"
 *
 * @category Output
 */
export const fileExtension: Partial<DeclarationOption> = {
  help: 'Specify the file extension for generated output files.',
  type: ParameterType.String,
  defaultValue: '.md',
};

/**
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
 * @category Output
 *
 */
export const entryFileName: Partial<DeclarationOption> = {
  help: 'The file name of the entry page.',
  type: ParameterType.String,
  defaultValue: 'README',
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
 * @category Output
 */
export const entryModule: Partial<DeclarationOption> = {
  help: 'The name of a module that should act as the root page for the documentation.',
  type: ParameterType.String,
};

/**
 * By default when a readme file is resolved, a separate readme page is created. This option appends the index page to the readme so only a single root page is generated.
 *
 * This option has no effect when [`readme`](https://typedoc.org/options/input/#readme) is set to `"none"`.
 *
 * @category Output
 *
 */
export const mergeReadme: Partial<DeclarationOption> = {
  help: 'Merges the resolved readme into the project index page.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default directories are split by scopes when generating file paths.
 *
 * This option will remove reference to `@scope` in the path when generating files and directories. It does not effect the name of the package or module in the output.
 *
 * The following will be the directory structure for packages named `@scope/package-1` and `@scope/package-2`:
 *
 * `false` (default):
 *
 *  <FileTree>
 *    <FileTree.Folder name="@scope" defaultOpen>
 *       <FileTree.Folder name="package-1" />
 *       <FileTree.Folder name="package-2" />
 *    </FileTree.Folder>
 * </FileTree>
 *
 * `true`:
 *
 * <FileTree>
 *   <FileTree.Folder name="package-1" />
 *   <FileTree.Folder name="package-2" />
 * </FileTree>
 *
 * Ignored if `flattenOutputFiles` is set to `true`.
 *
 * @category Output
 */
export const excludeScopesInPaths: Partial<DeclarationOption> = {
  help: 'Exclude writing @ scope directories in paths.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category UX
 */
export const hidePageHeader: Partial<DeclarationOption> = {
  help: 'Do not print page header.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category UX
 */
export const hidePageTitle: Partial<DeclarationOption> = {
  help: 'Do not print page title.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category UX
 */
export const hideBreadcrumbs: Partial<DeclarationOption> = {
  help: 'Do not print breadcrumbs.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same heading level.
 *
 * @category UX
 */
export const excludeGroups: Partial<DeclarationOption> = {
  help: 'Excludes grouping by kind so all members are rendered and sorted at the same level.',
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
 * @category UX
 */
export const useCodeBlocks: Partial<DeclarationOption> = {
  help: 'Wraps signatures and declarations in code blocks.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default objects inside declarations are collapsed to preserve space and improve readability.
 *
 * This option should be set when a full object representation is preferred.
 *
 * @Default
 *
 * `object`
 *
 * @Expanded
 *
 * \{ `"x"`: `string` }
 *
 * @category UX
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
 * @Default
 *
 * `someFunction(param1, param2)`
 *
 * @Expanded
 *
 * `someFunction(param1: string, param2: boolean)`
 *
 * @category UX
 */
export const expandParameters: Partial<DeclarationOption> = {
  help: 'Expand parameters in signature parentheses to display type information.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * This option either renders parameters for functions and class methods as a list or in tabular format.
 *
 * @category UX
 */
export const parametersFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style of parameter and type parameter groups.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 *  This option either renders properties for classes and interfaces as a list or in tabular format.
 *
 * @category UX
 *
 */
export const propertiesFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style of property groups for interfaces and classes.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * This option either renders members of enums as a list or in tabular format.
 *
 * @category UX
 */
export const enumMembersFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style of enumuration members.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * This option either renders type declrations as a list or in tabular format.
 *
 * @category UX
 */
export const typeDeclarationFormat: Partial<DeclarationOption> = {
  help: 'Specify the render style for type declaration members.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * This option renders index items either as a simple list or in a table with a description column exposing the comment summary.
 *
 * For a packages index page (when `--entryPointStrategy` equals `packages`), the package.json description will be displayed with an additional "Version" column (when `--includeVersion` equals true).
 *
 * @category UX
 */
export const indexFormat: Partial<DeclarationOption> = {
  help: 'Specify the render format for index items.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * This option enables changing static text rendered to the documentation.
 * Useful if an alternative English phrase is preferred or to translate English text to another language.
 * This option does not attempt to address translating text within code comments.
 *
 * **Placeholders**
 *
 * Default values within curly braces `{}` indicates a placeholder of dynamic text.
 * The `{version}` placeholder requires the TypeDoc option [`includeVersion`](https://typedoc.org/options/input/#includeversion) to be true.
 *
 * **Keys**
 *
 * Keys are categorised with the following namespace conventions:
 *
 * - `header.*` defines text in the page header (if displayed).
 * - `breadcrumbs.*` defines breadcrumbs in page header (if displayed).
 * - `title.*` defines text in main page titles.
 * - `label.*` other text in page content, including content headings and table headers.
 * - `kind.*` defines text mappings to TypeDoc's `ReflectionKind` definitions.
 *
 * Only keys that require translation need to be added to the object.
 *
 * @category UX
 */
export const textContentMappings: Partial<DeclarationOption> = {
  help: 'Provides a mechanism to change the content of text used in documentation.',
  type: ParameterType.Mixed,
  defaultValue: TEXT_MAPPING_DEFAULTS,
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

    for (const key of Object.keys(value)) {
      if (!Object.keys(TEXT_MAPPING_DEFAULTS).includes(key)) {
        throw new Error(
          `[typedoc-plugin-markdown] "${key}" is not a valid "textContentMappings" key. Valid keys are ${Object.keys(
            TEXT_MAPPING_DEFAULTS,
          )
            .map((key) => `"${key}"`)
            .join(', ')}.`,
        );
      }
    }
  },
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
 * *Please note this options does not effect the rendering of inline code or code blocks (using single/triple backticks).*
 *
 * By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..
 *
 * This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.
 *
 * This option would typically be used when source code comes from an external library exposing the following poential issues:
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
 * This option should be used when parsers requiren a custom anchor prefix.
 *
 * @example "markdown-header"
 *
 * @category Utility
 */
export const anchorPrefix: Partial<DeclarationOption> = {
  help: 'Custom anchor prefix',
  type: ParameterType.String,
  defaultValue: undefined,
};

/**
 * This option should be used if there are issues with anchoring to symbols within a page.
 *
 * - For markdown parsers that do not automatically assign header ids.
 * - When cross referencing symbols that are referenced in a table row.
 *
 * @category Utility
 */
export const useHTMLAnchors: Partial<DeclarationOption> = {
  help: 'Add HTML named anchors to headings and table rows.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default references to symbol anchor links are lowercased.
 *
 * This option can be used for engines that require the preservation of anchor link casing.
 *
 * @category Utility
 */
export const preserveAnchorCasing: Partial<DeclarationOption> = {
  help: 'Preserve anchor casing when generating link to symbols.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default navigation is not written to file but can be consumed programmatically. Please see [Navigation Guide](/docs/navigation) for more information.
 *
 * `navigationModel.excludeGroups`
 *
 * Do not organise navigation by groups.
 *
 * `navigationModel.excludeCategories`
 *
 * Do not organise navigation by categories.
 *
 * `navigationModel.excludeFolders`
 *
 *  Excludes unnecessary nesting with complex modules/namespace hierarchies.
 *
 * @category Utility
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
