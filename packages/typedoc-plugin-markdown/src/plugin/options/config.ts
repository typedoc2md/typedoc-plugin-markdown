import { DeclarationOption, ParameterType } from 'typedoc';
import { FormatStyle, OutputFileStrategy } from './custom-maps';

/**
 *
 * TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.
 *
 * This options aims to provide some flexibility as to how files can be generated.
 *
 * **"members"**
 *
 * Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.
 *
 * ![outputFileStrategy members folders](../images/options/outputFileStrategy-members.png)
 *
 * **"modules"**
 *
 * Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.
 *
 * ![outputFileStrategy modules folders](../images/options/outputFileStrategy-modules.png)
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
 * This makes files and folders appear in the file system in the same order as they are sorted. This is useful where auto sidebar generation may be required.
 *
 * ![includeFileNumberPrefixes folders](../images/options/includeFileNumberPrefixes.png)
 *
 * @category fileOutput
 */
export const includeFileNumberPrefixes: DeclarationOption = {
  name: 'includeFileNumberPrefixes',
  help: 'Prefixes generated files and folders with number prefixes.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * This creates a flat folder structure without any folders - a required format for some Wikis.
 *
 * ![flattenOutputFiles folders](../images/options/flattenOutputFiles.png)
 *
 * @category fileOutput
 */
export const flattenOutputFiles: DeclarationOption = {
  name: 'flattenOutputFiles',
  help: 'Flatten output files without folders.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * `README.md` is recognised when browsing folders on repos and Wikis. `index.md` might be better if published as a web site.
 *
 * Note the content of this file is either the API entry / index page, or the project readme (dependant on if a readme file is resolved or not).
 *
 * a. If a readme file is resolved then two root files are generated:
 *
 * ├── {entryFileName} - (the project readme file)
 * ├── API.md - (API index page)
 *
 * b. If a readme file is NOT resolved, then the index page becomes the entryFileName page.
 *
 * ├── {entryFileName} - (API index page)
 *
 * @category fileOutput
 *
 */
export const entryFileName: DeclarationOption = {
  name: 'entryFileName',
  help: 'The file name of the entry page.',
  type: ParameterType.String,
  defaultValue: 'README.md',
};

/**
 * This page either contains the module index or exported symbols depending on the given `entryPoints`.
 *
 * This page may not be required (if navigation is present for example) and can be skipped. See `skipIndexPage`.
 *
 * This option is ignored if `readme=none` or `skipIndexPage=true`.
 *
 * @category fileOutput
 */
export const indexFileName: DeclarationOption = {
  name: 'indexFileName',
  help: 'The file name the seperate index page.',
  type: ParameterType.String,
  defaultValue: 'API.md',
};

/**
 * @category fileOutput
 */
export const indexPageTitle: DeclarationOption = {
  name: 'indexPageTitle',
  help: 'The title of API index page.',
  type: ParameterType.String,
  defaultValue: 'API',
};

/**
 * This option skips the generation of the index page if it is not required.
 *
 * Please note this option will be ignored if a single entryPoint is defined as it will contain exported symbols.
 *
 * @category fileOutput
 */
export const skipIndexPage: DeclarationOption = {
  name: 'skipIndexPage',
  help: 'Skips generation of a seperate API index page. ',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * By default members are grouped by kind (eg Classes, Functions etc).
 *
 * This creates a flat structure where all members are displayed at the same level.
 *
 * **With groups**
 *
 * ```markdown
 * # SomeModule
 *
 * ## Classes
 *
 * ### ClassA
 *
 * ## Functions
 *
 * ### FunctionA
 *```
 *
 * **Without groups**
 *
 * ```markdown
 * # SomeModule
 *
 * ## ClassA
 *
 * ## FunctionA
 * ```
 *
 * @category fileOutput
 */
export const excludeGroups: DeclarationOption = {
  name: 'excludeGroups',
  help: 'Excludes grouping by reflection kind so all members are rendered and sorted at the same level.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const hidePageHeader: DeclarationOption = {
  name: 'hidePageHeader',
  help: 'Do not print page header.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const hidePageTitle: DeclarationOption = {
  name: 'hidePageTitle',
  help: 'Do not print page title.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const hideBreadcrumbs: DeclarationOption = {
  name: 'hideBreadcrumbs',
  help: 'Do not print breadcrumbs.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const hideInPageTOC: DeclarationOption = {
  name: 'hideInPageTOC',
  help: 'Do not render in-page TOC/Index items.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const hideHierarchy: DeclarationOption = {
  name: 'hideHierarchy',
  help: 'Do not print reflection hierarchy.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * Note if `true` references will not be linked.
 *
 * @category fileOutput
 */
export const identifiersAsCodeBlocks: DeclarationOption = {
  name: 'identifiersAsCodeBlocks',
  help: 'Format signature and declaration identifiers in code blocks.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const propertiesFormat: DeclarationOption = {
  name: 'propertiesFormat',
  help: 'Specify the render style of properties groups for interfaces and classes.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category fileOutput
 */
export const enumMembersFormat: DeclarationOption = {
  name: 'enumMembersFormat',
  help: 'Specify the render style of Enum members.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category fileOutput
 */
export const typeDeclarationFormat: DeclarationOption = {
  name: 'typeDeclarationFormat',
  help: 'Specify the render style for type declaration members.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * @category fileOutput
 */
export const tocFormat: DeclarationOption = {
  name: 'tocFormat',
  help: 'Render TOC either as a simple list or a table with a description.',
  type: ParameterType.Map,
  map: FormatStyle,
  defaultValue: FormatStyle.List,
};

/**
 * Supports {kind} and {name} placeholders.
 *
 * ```
 * titleTemplate: "{kind}: {name}"
 * ```
 * @category fileOutput
 */
export const titleTemplate: DeclarationOption = {
  name: 'titleTemplate',
  help: 'Specify a template for displaying page titles.',
  type: ParameterType.String,
  defaultValue: '{kind}: {name}',
};

/**
 * @category fileOutput
 */
export const preserveAnchorCasing: DeclarationOption = {
  name: 'preserveAnchorCasing',
  help: 'Preserve anchor casing when generating links.',
  type: ParameterType.Boolean,
  defaultValue: false,
};

/**
 * @category fileOutput
 */
export const anchorPrefix: DeclarationOption = {
  name: 'anchorPrefix',
  help: 'Custom anchor prefix',
  type: ParameterType.String,
  defaultValue: undefined,
};
