import { DeclarationOption, ParameterType } from 'typedoc';
import {
  FormatStyle,
  MembersWithOwnFile,
  OutputFileStrategy,
} from './custom-maps';

/**
 *
 * TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.
 *
 * This options aims to provide some flexibility as to how files can be generated.
 *
 * **`members`**
 *
 * Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.
 *
 * It is also possible to further refine what members are exported to individual files with the [`--membersWithOwnFile`](#membersWithOwnFile) option.
 *
 * **`modules`**
 *
 * Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.
 *
 * @category fileOutput
 */
export const outputFileStrategy: DeclarationOption = {
  name: 'outputFileStrategy',
  help: 'Determines how output files are generated.',
  type: ParameterType.Map,
  map: OutputFileStrategy,
  defaultValue: OutputFileStrategy.Members,
};

/**
 * To export only Interfaces, classes and enums to their own file, the option should be configured in an options file as follows:
 *
 * ```js
 * {
 *   membersWithOwnFile: ['Interface', 'Class', 'Enum']
 * }
 * ```
 *
 * @category fileOutput
 */
export const membersWithOwnFile: DeclarationOption = {
  name: 'membersWithOwnFile',
  help: 'Determines which members are exported to their own file. Ignored when `outputFileStrategy` = `modules`.',
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
 * The entry page in this context is the reference to the file that acts as a root page for the documentation, equivalent to `index.html` for web pages.
 *
 * `index.md` is the default, however `README.md` is recognised when browsing folders on repos and Wikis.
 *
 * The content of this file is one of the following:
 *
 * a) The [`--entryModule`](#--entrymodule) (if set).
 * b) The resolved Readme file.
 * c) The documentation index page (if readme = none).
 *
 * @category fileOutput
 *
 */
export const entryFileName: DeclarationOption = {
  name: 'entryFileName',
  help: 'The file name of the entry page.',
  type: ParameterType.String,
  defaultValue: 'index.md',
};

/**
 * If set the name of the file will be determined by the value of [`--entryFileName`](#--entryfilename).
 *
 * This is only applicable when multiple modules are resolved.
 *
 * @category fileOutput
 */
export const entryModule: DeclarationOption = {
  name: 'entryModule',
  help: 'The name of a module that should act as the root page for documentation.',
  type: ParameterType.String,
};

/**
 * @category ui
 */
export const hidePageHeader: DeclarationOption = {
  name: 'hidePageHeader',
  help: 'Do not print page header.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category ui
 */
export const hidePageTitle: DeclarationOption = {
  name: 'hidePageTitle',
  help: 'Do not print page title.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category ui
 */
export const hideBreadcrumbs: DeclarationOption = {
  name: 'hideBreadcrumbs',
  help: 'Do not print breadcrumbs.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category ui
 */
export const hideInPageTOC: DeclarationOption = {
  name: 'hideInPageTOC',
  help: 'Do not render in-page TOC items.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * Provides a mechanism to change the main project index page title.
 *
 * Defaults to `{projectName}` - a placeholder that renders the project name and version (when `--includeVersion` is set).
 *
 * @category ui
 */
export const indexPageTitle: DeclarationOption = {
  name: 'indexPageTitle',
  help: 'The title of project index page.',
  type: ParameterType.String,
  defaultValue: '{projectName}',
};

/**
 * Provides a mechanism to change the page title of members.
 *
 * Supports `{name}` and `{kind}` placeholders.
 *
 * e.g "Class: MyClassName"
 *
 * For example to display member name only:
 *
 * ```json
 * memberPageTitle: "{name}"
 * ```
 *
 * @category ui
 */
export const memberPageTitle: DeclarationOption = {
  name: 'memberPageTitle',
  help: 'The page title of members.',
  type: ParameterType.String,
  defaultValue: '{kind}: {name}',
};

/**
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same heading level.
 *
 * @category ui
 */
export const excludeGroups: DeclarationOption = {
  name: 'excludeGroups',
  help: 'Excludes grouping by reflection kind so all members are rendered and sorted at the same level.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * This option can be used to improve readability and aesthetics when defining signatures and declarations.
 *
 * Please note that when this option is set to `true` it is not possible to link to other references.
 *
 * As a work around the `{\@link}` tag can be be used to manually reference types.
 *
 * @category ui
 */
export const useCodeBlocks: DeclarationOption = {
  name: 'useCodeBlocks',
  help: 'Wraps signatures and declarations in code blocks.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default objects inside declaration are collapsed to preserve space and improve readability.
 *
 * *Default example:*
 *
 * `object`
 *
 * *Expanded example:*
 *
 * { `x`: `string` }
 *
 * @category ui
 */
export const expandObjects: DeclarationOption = {
  name: 'expandObjects',
  help: 'Expand objects inside declarations.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category ui
 */
export const parametersFormat: DeclarationOption = {
  name: 'parametersFormat',
  help: 'Specify the render style of parameter and type parameter groups.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category ui
 */
export const propertiesFormat: DeclarationOption = {
  name: 'propertiesFormat',
  help: 'Specify the render style of property groups for interfaces and classes.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category ui
 */
export const enumMembersFormat: DeclarationOption = {
  name: 'enumMembersFormat',
  help: 'Specify the render style of enumuration members.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category ui
 */
export const typeDeclarationFormat: DeclarationOption = {
  name: 'typeDeclarationFormat',
  help: 'Specify the render style for type declaration members.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * This determines wheter to display index items either as a simple lists or in a table with a description column exposing the comment summary.
 *
 * @category ui
 */
export const indexFormat: DeclarationOption = {
  name: 'indexFormat',
  help: 'Specify the render format for index items.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category other
 */
export const preserveAnchorCasing: DeclarationOption = {
  name: 'preserveAnchorCasing',
  help: 'Preserve anchor casing when generating links.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category other
 */
export const anchorPrefix: DeclarationOption = {
  name: 'anchorPrefix',
  help: 'Custom anchor prefix',
  type: ParameterType.String,
  defaultValue: undefined,
};

/**
 *
 * Internal anchor links are used when referencing symbols with in-page table of contents or when referenced with  by {\@link} tags.
 *
 * There are two flags exposed by this option:
 *
 * - `headings` - Add HTML named anchors to heading for implementations that do not assign header ids.
 * - `tableRows` - Add anchors to table rows when table formats are selected and no heading elements are present.
 *
 * @category other
 */
export const namedAnchors: DeclarationOption = {
  name: 'namedAnchors',
  help: 'Use HTML named anchor tags for internal anchor links.',
  type: ParameterType.Flags,
  defaults: {
    headings: false,
    tableRows: false,
  },
};

/**
 * @category other
 */
export const publicPath: DeclarationOption = {
  name: 'publicPath',
  help: 'Specify the base path for all urls. If undefined urls will be relative.',
  type: ParameterType.String,
  defaultValue: undefined,
};
