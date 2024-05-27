[typedoc-plugin-markdown v4.0.3](../../../README.md) / [options](../../README.md) / declarations

# Namespace: declarations

Typedoc options declarations.
Each exported variable will be added to the TypeDoc options and also the public documentation.

## Table of Contents

* [Display Options](#display-options)
* [File Options](#file-options)
* [Utility Options](#utility-options)

## Display Options

### hidePageHeader

```ts
const hidePageHeader: Partial<DeclarationOption> = {
    help: 'Do not print page header.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:181](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L181)

***

### hidePageTitle

```ts
const hidePageTitle: Partial<DeclarationOption> = {
    help: 'Do not print page title.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:190](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L190)

***

### hideBreadcrumbs

```ts
const hideBreadcrumbs: Partial<DeclarationOption> = {
    help: 'Do not print breadcrumbs.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:199](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L199)

***

### hideGroupHeadings

```ts
const hideGroupHeadings: Partial<DeclarationOption> = {
    help: 'Excludes grouping by kind so all members are rendered and sorted at the same level.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default members are grouped by kind (eg Classes, Functions etc).

This creates a flat structure where all members are displayed at the same heading level.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:214](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L214)

***

### useCodeBlocks

```ts
const useCodeBlocks: Partial<DeclarationOption> = {
    help: 'Wraps signatures and declarations in code blocks.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

This option can be used to improve readability and aesthetics when defining signatures and declarations.

Please note that when this option is set to `true` it is not possible to link to other references.

As a work around the [`@link`](https://typedoc.org/tags/link/) tag can be be used to manually reference types.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:242](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L242)

***

### expandObjects

```ts
const expandObjects: Partial<DeclarationOption> = {
    help: 'Expand objects inside declarations.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default objects inside declarations are collapsed to preserve space and improve readability.

This option should be set when a full object representation is preferred.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:257](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L257)

***

### expandParameters

```ts
const expandParameters: Partial<DeclarationOption> = {
    help: 'Expand parameters in signature parentheses to display type information.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default parameters in signature definitions only display the parameter name so the output is more concise.

This option should be set when a full type representation is preferred.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:272](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L272)

***

### parametersFormat

```ts
const parametersFormat: Partial<DeclarationOption> = {
    help: 'Specify the render style of parameter and type parameter groups.',
    type: ParameterType.Map,
    map: ReflectionFormat,
    defaultValue: ReflectionFormat.List,
};
```

#### Remarks

This option specifies the output format for parameters and type parameters of functions and class methods:

* **"list"**: parameters are output as bullet points in a linear list, suitable for more detailed comments.
* **"table"**: parameters are output within a markdown table, condensed into a single paragraph.
* **"htmlTable"**: parameters are output in an HTML table, enabling block elements to render in tabular format

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:289](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L289)

***

### propertiesFormat

```ts
const propertiesFormat: Partial<DeclarationOption> = {
    help: 'Specify the render style of property groups for interfaces and classes.',
    type: ParameterType.Map,
    map: ReflectionFormat,
    defaultValue: ReflectionFormat.List,
};
```

#### Remarks

This option specifies the output format for class and interface properties:

* **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: properties are output within a markdown table, condensed into a single paragraph.
* **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:307](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L307)

***

### enumMembersFormat

```ts
const enumMembersFormat: Partial<DeclarationOption> = {
    help: 'Specify the render style of enumeration members.',
    type: ParameterType.Map,
    map: ReflectionFormat,
    defaultValue: ReflectionFormat.List,
};
```

#### Remarks

This option specifies the output format for enumeration members:

* **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: members are output within a markdown table, condensed into a single paragraph.
* **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:325](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L325)

***

### typeDeclarationFormat

```ts
const typeDeclarationFormat: Partial<DeclarationOption> = {
    help: 'Specify the render style for type declaration members.',
    type: ParameterType.Map,
    map: ReflectionFormat,
    defaultValue: ReflectionFormat.List,
};
```

#### Remarks

This option specifies the output format for type declaration:

* **"list"**: declarations are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: declarations are output within a markdown table, condensed into a single paragraph.
* **"htmlTable"**: declarations are output in an HTML table, enabling block elements to render in tabular format.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:343](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L343)

***

### indexFormat

```ts
const indexFormat: Partial<DeclarationOption> = {
    help: 'Specify the render format for index items.',
    type: ParameterType.Map,
    map: IndexFormat,
    defaultValue: IndexFormat.List,
};
```

#### Remarks

This option renders index items either as a simple unordered list or in a table.

When table style is selected the following will be the behaviour:

* For a **members index**, a description column will be added to the table with the first paragraph of the comment summary.
* For a **packages index**, (when `--entryPointStrategy` equals `packages`), the package.json description will be displayed with an additional "Version" column (when `--includeVersion` equals true).
* For a **documents index** a description column will be added to the table printing the `description` frontmatter if present.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:363](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L363)

***

### tableColumnSettings

```ts
const tableColumnSettings: Partial<DeclarationOption> = {
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
```

#### Remarks

By default, all available data for symbols are displayed in table columns. For some reflections this can result in several columns.

This option allows you to control the visibility of columns, prioritizing readability over displaying complete data.
In addition you can control the alignment of the header text.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:380](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L380)

## File Options

### outputFileStrategy

```ts
const outputFileStrategy: Partial<DeclarationOption> = {
    help: 'Determines how output files are generated.',
    type: ParameterType.Map,
    map: OutputFileStrategy,
    defaultValue: OutputFileStrategy.Members,
};
```

#### Remarks

TypeDoc creates documentation according to exports derived from the given [`entryPointsStrategy`](https://typedoc.org/options/input/#entrypointstrategy) configuration.

This option does not alter the way TypeDoc interprets the `entryPointsStrategy` but rather provides some flexibility as to how output files are generated.

It is also possible to further refine what members are exported to individual files with the [`membersWithOwnFile`](#memberswithownfile) option.

The following keys are available:

* **"members":** generates an individual file for each exported module member. This is the standard behavior of the HTML theme and the default setting of the plugin.
* **"modules"**: generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:27](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L27)

***

### membersWithOwnFile

```ts
const membersWithOwnFile: Partial<DeclarationOption> = {
    help: 'Determines which members are exported to their own file when outputFileStrategy equals members.',
    type: ParameterType.Array,
    validate(values) {
        const validValues = ALLOWED_OWN_FILE_MEMBERS;
        for (const kind of values) {
            if (!validValues.includes(kind)) {
                throw new Error('${kind}' is an invalid value for 'membersWithOwnFile'. Must be one of: ${validValues.join(', ')});
            }
        }
    },
    defaultValue: ALLOWED_OWN_FILE_MEMBERS,
};
```

#### Remarks

This option is useful when only specific types of members should be exported to a single file.

Ignored when [`outputFileStrategy`](#outputfilestrategy) is equal to `"modules"`

#### Example

```ts
["Class", "Enum", "Interface"]
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:45](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L45)

***

### flattenOutputFiles

```ts
const flattenOutputFiles: Partial<DeclarationOption> = {
    help: 'Flatten output files to a single directory.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default output files are generated in a directory structure that mirrors the project's module hierarchy including folders for member kinds eg `classes`, `enums`, `functions` etc.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:70](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L70)

***

### fileExtension

```ts
const fileExtension: Partial<DeclarationOption> = {
    help: 'Specify the file extension for generated output files.',
    type: ParameterType.String,
    defaultValue: '.md',
    validate(value) {
        if (!value.startsWith('.')) {
            throw new Error('[typedoc-plugin-markdown] "fileExtension" must start with a period.');
        }
    },
};
```

#### Remarks

Typically markdown files are recognised by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain markdown parsers.

#### Example

```ts
".mdx"
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:85](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L85)

***

### entryFileName

```ts
const entryFileName: Partial<DeclarationOption> = {
    help: 'The file name of the entry page.',
    type: ParameterType.String,
    defaultValue: 'README',
};
```

#### Remarks

The entry page is the root page of the documentation, equivalent to `index.html` for web pages.

`README` is recognised when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.

The content of this file will be resolved in the following order:

1. The value of the [`entryModule`](#entrymodule) option (if defined).
2. The resolved Readme file (skipped if the [`readme`](https://typedoc.org/options/input/#readme) option is set to `none`).
3. The documentation index page.

#### Example

```ts
"index"
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:116](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L116)

***

### entryModule

```ts
const entryModule: Partial<DeclarationOption> = {
    help: 'The name of a module that should act as the root page for the documentation.',
    type: ParameterType.String,
};
```

#### Remarks

This option can be used when the root page of the documentation should be a specific module (typically a module named `index`).

The module name should be specified (NOT the reference to the file name).

Please note a separate modules index page will not be generated, therefore would work better if navigation is present.

#### Example

```ts
"index"
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:135](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L135)

***

### excludeScopesInPaths

```ts
const excludeScopesInPaths: Partial<DeclarationOption> = {
    help: 'Exclude writing @ scope directories in paths.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default directories are split by scopes when generating file paths.

This option will remove reference to `@scope` in the path when generating files and directories. It does not affect the name of the package or module in the output.

The following will be the directory structure for packages named `@scope/package-1` and `@scope/package-2`:

Ignored if `flattenOutputFiles` is set to `true`.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:153](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L153)

***

### mergeReadme

```ts
const mergeReadme: Partial<DeclarationOption> = {
    help: 'Merges the resolved readme into the project index page.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default when a readme file is resolved, a separate readme page is created.
This option appends the index page to the readme so only a single root page is generated.

You can additionally configure the generated title with `"textContentMappings": { "title.indexPage" : "My API"}`.
See [`--textContentMappings`](/docs/options/utility-options#--textcontentmappings).

This option has no effect when [`readme`](https://typedoc.org/options/input/#readme) is set to `"none"`.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:172](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L172)

## Utility Options

### publicPath

```ts
const publicPath: Partial<DeclarationOption> = {
    help: 'Specify the base path for all urls.',
    type: ParameterType.String,
    defaultValue: undefined,
};
```

#### Remarks

If undefined all urls will be relative.

#### Example

```ts
"http://abc.com"
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:403](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L403)

***

### sanitizeComments

```ts
const sanitizeComments: Partial<DeclarationOption> = {
    help: 'Sanitize HTML and JSX inside JsDoc comments.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

*Please note this options does not affect the rendering of inline code or code blocks (using single/triple backticks).*

By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..

This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.

This option would typically be used when source code comes from an external library exposing the following potential issues:

* Comments contain raw tags that should be interpreted as code examples.
* Comments contain invalid syntax that (in the case of MDX) will cause breaking parsing errors.
* Although most parsers use XSS filters, this option provides an additional layer of XSS security.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:426](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L426)

***

### anchorPrefix

```ts
const anchorPrefix: Partial<DeclarationOption> = {
    help: 'Custom anchor prefix when anchoring to in-page symbols.',
    type: ParameterType.String,
    defaultValue: undefined,
};
```

#### Remarks

This option should be used when parsers require a custom anchor prefix.

#### Example

```ts
"markdown-header"
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:441](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L441)

***

### useHTMLAnchors

```ts
const useHTMLAnchors: Partial<DeclarationOption> = {
    help: 'Add HTML named anchors to headings and table rows.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

This option should be used if there are issues with anchoring to symbols within a page.

* For markdown parsers that do not automatically assign header ids.
* When cross referencing symbols that are referenced in a table row.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:457](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L457)

***

### preserveAnchorCasing

```ts
const preserveAnchorCasing: Partial<DeclarationOption> = {
    help: 'Preserve anchor casing when generating link to symbols.',
    type: ParameterType.Boolean,
    defaultValue: false,
};
```

#### Remarks

By default references to symbol anchor links are lowercased.

This option can be used for engines that require the preservation of anchor link casing.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:472](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L472)

***

### navigationModel

```ts
const navigationModel: Partial<DeclarationOption> = {
    help: 'Configures how the navigation model will be generated.',
    type: ParameterType.Flags,
    defaults: {
        excludeGroups: false,
        excludeCategories: false,
        excludeFolders: false,
    },
};
```

#### Remarks

By default navigation is not written to file but can be consumed programmatically.
This is useful if you want to provide a custom sidebar/navigation implementation (if relevant to your environment).

The navigation model can be accessed by utilizing the `postRenderAsyncJobs` on the renderer.

The navigation is returned as `JSON` and can be mapped to a custom structure and written to a file.

* `navigationModel.excludeGroups`: do not organise navigation by groups.
* `navigationModel.excludeCategories`: do not organise navigation by categories.
* `navigationModel.excludeFolders`: excludes unnecessary nesting with complex hierarchies.

```ts filename="custom-plugin.ts"

import { MarkdownApplication } from 'typedoc-plugin-markdown';

export function load(app: MarkdownApplication) {
 app.renderer.postRenderAsyncJobs.push(async (renderer) => {
   // The navigation JSON structure is available on the navigation object.
   const navigation = renderer.navigation;

   // This can be parsed to something else or written straight to a file:
   fs.writeFileSync('navigation.json', JSON.stringify(navigation));
 });
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:510](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L510)

***

### textContentMappings

```ts
const textContentMappings: Partial<DeclarationOption> = {
    help: 'Change specific text placeholders in the template.',
    type: ParameterType.Object,
    defaultValue: TEXT_CONTENT_MAPPINGS,
    validate(value) {
        if (!value || typeof value !== 'object') {
            throw new Error('[typedoc-plugin-markdown] textContentMappings must be an object.');
        }
        for (const val of Object.values(value)) {
            if (typeof val !== 'string') {
                throw new Error([typedoc-plugin-markdown] All values of textContentMappings must be strings.);
            }
        }
    },
};
```

#### Remarks

Defines placeholder text in main template that can be customized. Includes the main page header and breadcrumbs (if displayed),
page titles and page footer.

Default values within curly braces {} indicates a placeholder of dynamic text.

* The `{projectName}` placeholder writes project's name .
* The `{kind}` writes the reflection kind of the page.
* The `{version}` placeholder writes package version (if includeVersion is `true`).

If you are looking for general localization support please see [localization]().

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:535](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/declarations.ts#L535)
