[Developer Guide](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [options](../../README.md) / declarations

# declarations

Typedoc options declarations.

This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.

The JSDoc comments will also be used in the public facing documentation.

## Contents

* [File](#file)
  * [outputFileStrategy](#outputfilestrategy)
  * [membersWithOwnFile](#memberswithownfile)
  * [flattenOutputFiles](#flattenoutputfiles)
  * [fileExtension](#fileextension)
  * [entryFileName](#entryfilename)
  * [modulesFileName](#modulesfilename)
  * [mergeReadme](#mergereadme)
  * [entryModule](#entrymodule)
  * [excludeScopesInPaths](#excludescopesinpaths)
* [Display](#display)
  * [hidePageHeader](#hidepageheader)
  * [hideBreadcrumbs](#hidebreadcrumbs)
  * [hidePageTitle](#hidepagetitle)
  * [hideGroupHeadings](#hidegroupheadings)
  * [useCodeBlocks](#usecodeblocks)
  * [expandObjects](#expandobjects)
  * [expandParameters](#expandparameters)
  * [blockTagsPreserveOrder](#blocktagspreserveorder)
  * [indexFormat](#indexformat)
  * [parametersFormat](#parametersformat)
  * [interfacePropertiesFormat](#interfacepropertiesformat)
  * [classPropertiesFormat](#classpropertiesformat)
  * [enumMembersFormat](#enummembersformat)
  * [propertyMembersFormat](#propertymembersformat)
  * [typeDeclarationFormat](#typedeclarationformat)
  * [typeDeclarationVisibility](#typedeclarationvisibility)
  * [tableColumnSettings](#tablecolumnsettings)
* [Utility](#utility)
  * [formatWithPrettier](#formatwithprettier)
  * [prettierConfigFile](#prettierconfigfile)
  * [sanitizeComments](#sanitizecomments)
  * [publicPath](#publicpath)
  * [anchorPrefix](#anchorprefix)
  * [useHTMLEncodedBrackets](#usehtmlencodedbrackets)
  * [useHTMLAnchors](#usehtmlanchors)
  * [preserveAnchorCasing](#preserveanchorcasing)
  * [pageTitleTemplates](#pagetitletemplates)

## File

Options that are used to configure how files are output.

### outputFileStrategy

> `const` **outputFileStrategy**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

TypeDoc creates documentation according to exports derived from the given [`--entryPointsStrategy`](https://typedoc.org/options/input/#entrypointstrategy) TypeDoc configuration.

This option provides some flexibility as to how output files are generated.

It is also possible to further refine what members are exported to individual files with the `membersWithOwnFile` option.

The following keys are available:

**"members"**

Generates an individual file for each exported module member. This is the standard behavior of the HTML theme and the default setting of the plugin.

```
  ├── README.md
  ├── module-a/
  │   ├── classes/
  │   │   ├── ClassA.md
  │   │   └── ClassB.md
  │   └── functions/
  │   │   ├── FunctionA.md
  │   │   └── FunctionB.md
  └── module-b/
      └── classes/
          ├── ClassA.md
          └── ClassB.md
```

**"modules"**

Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

```
  ├── README.md
  ├── module-a.md
  └── module-b.md
```

#### Default Value

```ts
{
    help: 'Determines how output files are generated.',
    type: ParameterType.Map,
    map: OutputFileStrategy,
    defaultValue: OutputFileStrategy.Members,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:74](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L74)

***

### membersWithOwnFile

> `const` **membersWithOwnFile**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option is useful when only specific types of members should be exported to a single file.

Ignored when `--outputFileStrategy` is equal to `"modules"`

#### Example

```ts
["Class", "Enum", "Interface"]
```

#### Default Value

```ts
{
    help: 'Determines which members are exported to their own file.',
    type: ParameterType.Array,
    validate(values) {
        const validValues = ALLOWED_OWN_FILE_MEMBERS;
        for (const kind of values) {
            if (!validValues.includes(kind)) {
                throw new Error(`'${kind}' is an invalid value for 'membersWithOwnFile'. Must be one of: ${validValues.join(', ')}`);
            }
        }
    },
    defaultValue: ALLOWED_OWN_FILE_MEMBERS,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:90](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L90)

***

### flattenOutputFiles

> `const` **flattenOutputFiles**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default output files are generated in a directory structure that mirrors the project's module hierarchy including folders for member kinds eg `classes`, `enums`, `functions` etc.

This option will flatten the output files to a single directory as follows:

Default output:

```
  ├── README.md
  ├── module-a/
  │   ├── classes/
  │   │   ├── ClassA.md
  │   │   └── ClassB.md
  │   └── functions/
  │   │   ├── FunctionA.md
  │   │   └── FunctionB.md
  └── module-b/
      └── classes/
          ├── ClassA.md
          └── ClassB.md
```

Flattened output:

```
  ├── README.md
  ├── module-a.Class.ClassA.md
  ├── module-a.Class.ClassB.md
  ├── module-a.Function.functionA.md
  ├── module-a.Function.functionB.md
  ├── module-b.Class.ClassA.md
  └── module-b.Class.ClassB.md
```

#### Default Value

```ts
{
    help: 'Flatten output files to a single directory.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:144](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L144)

***

### fileExtension

> `const` **fileExtension**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Typically Markdown files are recognised by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain Markdown parsers.

#### Example

```ts
".mdx"
```

#### Default Value

```ts
{
    help: 'Specify the file extension for generated output files.',
    type: ParameterType.String,
    defaultValue: '.md',
    validate(value) {
        if (!value.startsWith('.')) {
            throw new Error('[typedoc-plugin-markdown] "fileExtension" must start with a period.');
        }
    },
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:157](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L157)

***

### entryFileName

> `const` **entryFileName**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

The `entryFileName` in this context is the root page of the documentation and each module directory.
This is essentially the equivalent to `index.html` for web pages.

`README` is recognised when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.

The content of root documentation file will be resolved in the following order:

1. The value of the `--entryModule` option (if defined).
2. The resolved Readme file (skipped if the [`--readme`](https://typedoc.org/options/input/#readme) option is set to `none`).
3. The documentation index page.

#### Example

```ts
"index"
```

#### Default Value

```ts
{
    help: 'The file name of the entry page.',
    type: ParameterType.String,
    defaultValue: 'README',
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:187](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L187)

***

### modulesFileName

> `const` **modulesFileName**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Please note this option is not applicable when [`--readme`](https://typedoc.org/options/input/#readme) is set to "none" or `--mergeReadme` is set to "true".

#### Example

```ts
"documentation"
```

#### Default Value

```ts
"modules | packages | globals"
```

#### Default Value

```ts
{
    help: 'The file name of the separate modules / index page.',
    type: ParameterType.String,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:203](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L203)

***

### mergeReadme

> `const` **mergeReadme**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default when a readme file is resolved, a separate readme page is created.

This option appends the documentation main/index page to the readme page so only a single root page is generated.

This option has no effect when [`--readme`](https://typedoc.org/options/input/#readme) is set to `"none"`.

#### Default Value

```ts
{
    help: 'Appends the documentation index page to the readme page.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:217](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L217)

***

### entryModule

> `const` **entryModule**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option can be used when the root page of the documentation should be a specific module (typically a module named `index`).

The module name should be specified (NOT the reference to the file name).

Please note a separate modules index page will not be generated, therefore would work better if navigation is present.

#### Example

```ts
"index"
```

#### Default Value

```ts
{
    help: 'The name of a module that should act as the root page for the documentation.',
    type: ParameterType.String,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:234](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L234)

***

### excludeScopesInPaths

> `const` **excludeScopesInPaths**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default directories are split by scopes when generating file paths.

This option will remove reference to `@scope` in the path when generating files and directories. It does not affect the name of the package or module in the output.

The following will be the directory structure for packages named `@scope/package-1` and `@scope/package-2`:

Output when set to `false` (default):

```
  └──@scope/
      ├── package-1/
      └── package-2/
```

Output when set to `true`:

```
  ├── package-1/
  └── package-2/
```

Ignored if `flattenOutputFiles` is set to `true`.

#### Default Value

```ts
{
    help: 'Exclude writing @ scope directories in paths.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:265](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L265)

## Display

Options that are used to configure how the output is structured and displayed.

### hidePageHeader

> `const` **hidePageHeader**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

#### Default Value

```ts
{
    help: 'Do not print page header.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:274](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L274)

***

### hideBreadcrumbs

> `const` **hideBreadcrumbs**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

#### Default Value

```ts
{
    help: 'Do not print breadcrumbs.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:283](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L283)

***

### hidePageTitle

> `const` **hidePageTitle**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

#### Default Value

```ts
{
    help: 'Do not print page title.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:292](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L292)

***

### hideGroupHeadings

> `const` **hideGroupHeadings**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default members are grouped by kind (eg Classes, Functions etc).

This creates a flat structure where all members are displayed at the same heading level.

#### Default Value

```ts
{
    help: 'Excludes grouping by kind so all members are rendered at the same level.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:305](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L305)

***

### useCodeBlocks

> `const` **useCodeBlocks**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option can be used to improve readability and aesthetics when defining signatures and declarations.

Please note that when this option is set to `true` it is not possible to link to other references.

As a work around the [`@link`](https://typedoc.org/tags/link/) tag can be be used to manually reference types.

#### Default Value

```ts
{
    help: 'Wraps signatures and declarations in code blocks.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:331](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L331)

***

### expandObjects

> `const` **expandObjects**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default objects inside declarations are collapsed to preserve space and improve readability.

This option should be set when a full object representation is preferred.

#### Default Value

```ts
{
    help: 'Expand objects inside declarations.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:344](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L344)

***

### expandParameters

> `const` **expandParameters**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default parameters in signature definitions only display the parameter name so the output is more concise.

This option should be set when a full type representation is preferred.

#### Default Value

```ts
{
    help: 'Expand parameters in signature parentheses to display type information.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:357](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L357)

***

### blockTagsPreserveOrder

> `const` **blockTagsPreserveOrder**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default block tags (such as `@example`, `@remarks`, `@deprecated`) are rendered after "Parameters", "Returns" and "Type declaration" sections for signatures and declarations.

The rationale is that comment block tags often contain more detailed, supplementary information and are typically secondary to understanding the primary use of the symbol,

Use this option to preserve the position of the tag content with the comment summary.

#### Example

```ts
["@example", "@deprecated"]
```

#### Default Value

```ts
{
    help: 'Specifies comment block tags that should preserve their position.',
    type: ParameterType.Array,
    defaultValue: [],
    validate(value, i18n) {
        if (!value.every((tag) => typeof tag === 'string' && /^@[a-zA-Z][a-zA-Z0-9]*$/.test(tag))) {
            throw new Error(i18n.option_0_values_must_be_array_of_tags('blockTags'));
        }
    },
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:374](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L374)

***

### indexFormat

> `const` **indexFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option renders index items either as a simple unordered list or in a table.

When table style is selected the following will be the behaviour:

* For a **members index**, a description column will be added with key `table` - the first paragraph of the comment summary, or key `htmlTable` - the entire comment contents.
* For a **packages index**, (when `--entryPointStrategy` equals `packages`), the package.json description will be displayed with an additional "Version" column (when `--includeVersion` equals true).
* For a **documents index** a description column will be added to the table printing the `"description"` frontmatter variable.

#### Default Value

```ts
{
    help: 'Sets the format of index items.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:400](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L400)

***

### parametersFormat

> `const` **parametersFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option specifies the output format for parameters and type parameters of functions and class methods:

* **"list"**: parameters are output as bullet points in a linear list, suitable for more detailed comments.
* **"table"**: parameters are output within a Markdown table, condensed into a single paragraph.
* **"htmlTable"**: parameters are output in an HTML table, enabling block elements to render in table cells.

#### Default Value

```ts
{
    help: 'Sets the format of parameter and type parameter groups.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:416](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L416)

***

### interfacePropertiesFormat

> `const` **interfacePropertiesFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option specifies the output format for interface properties:

* **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
* **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.

#### Default Value

```ts
{
    help: 'Sets the format of property groups for interfaces.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:432](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L432)

***

### classPropertiesFormat

> `const` **classPropertiesFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option specifies the output format for class properties:

* **"list"**: properties are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: properties are output within a Markdown table, condensed into a single paragraph.
* **"htmlTable"**: properties are output in an HTML table, enabling block elements to render in tabular format.

#### Default Value

```ts
{
    help: 'Sets the format of property groups for classes.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:448](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L448)

***

### enumMembersFormat

> `const` **enumMembersFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option specifies the output format for enumeration members:

* **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: members are output within a Markdown table, condensed into a single paragraph.
* **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.

#### Default Value

```ts
{
    help: 'Sets the format of enumeration members.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:464](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L464)

***

### propertyMembersFormat

> `const` **propertyMembersFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option will handle the formatting of object literals assigned as properties in classes or interfaces.

Note this options will only take effect when the property declaration is rendered in a `list` format.

* **"list"**: members are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: members are output within a Markdown table, condensed into a single paragraph.
* **"htmlTable"**: members are output in an HTML table, enabling block elements to render in tabular format.

#### Default Value

```ts
{
    help: 'Sets the format of style for property members for interfaces and classes.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:482](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L482)

***

### typeDeclarationFormat

> `const` **typeDeclarationFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option specifies the output format for type declaration of variables and type aliases.

* **"list"**: declarations are output in linear blocks with headings, suitable for more detailed comments.
* **"table"**: declarations are output within a Markdown table, condensed into a single paragraph.
* **"htmlTable"**: declarations are output in an HTML table, enabling block elements to render in tabular format.

#### Default Value

```ts
{
    help: 'Sets the format of style for type declaration members.',
    type: ParameterType.Map,
    map: DisplayFormat,
    defaultValue: DisplayFormat.List,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:498](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L498)

***

### typeDeclarationVisibility

> `const` **typeDeclarationVisibility**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Configures the visibility level for type declaration documentation. Applies to both list and table formats.

* **"verbose"**: Provides full documentation details for all type declarations, including nested types.
* **"compact"**: Summarizes nested types as JSON, reducing verbosity while retaining key information.

#### Default Value

```ts
{
    help: 'Set the visibility level for type declaration documentation.',
    type: ParameterType.Map,
    map: TypeDeclarationVisibility,
    defaultValue: TypeDeclarationVisibility.Verbose,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:513](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L513)

***

### tableColumnSettings

> `const` **tableColumnSettings**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default, all available data for symbols are displayed in table columns which can result in several columns in certain use-cases.

This option allows you to control the visibility of columns, prioritizing readability over displaying complete data.
In addition you can control the alignment of the header text.

#### Default Value

```ts
{
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
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:542](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L542)

## Utility

Options that are used for general configuration and utility purposes.

### formatWithPrettier

> `const` **formatWithPrettier**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This plugin generates well-formatted Markdown, however, integrating the popular formatting package [Prettier](https://prettier.io/) can provide additional enhancements, such as:

* Formats code inside fenced blocks using the respective Prettier configuration for that language.
* Aligns markdown table cells.
* Removes unnecessary escape characters.
* Wraps long lines of text to fit within a configurable line width.

Please note that Prettier is not a dependency of this plugin and must be installed in your project for this option to work.

`npm i prettier --save-dev` to use this option.

#### Default Value

```ts
{
    help: 'Apply additional output formatting with Prettier.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:570](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L570)

***

### prettierConfigFile

> `const` **prettierConfigFile**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default Prettier uses the options resolved from a discovered Prettier [configuration file](https://prettier.io/docs/en/configuration.html).

Use this option to specify a separate Prettier configuration file in a custom location.

Please note this option is only applicable when `formatWithPrettier` is set to `"true"`.

#### Example

```ts
"./path/to/.prettierrc.json"
```

#### Default Value

```ts
{
    help: 'Specify a custom Prettier configuration file location.',
    type: ParameterType.Path,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:587](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L587)

***

### sanitizeComments

> `const` **sanitizeComments**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

*Please note this options does not affect the rendering of inline code or code blocks (using single/triple backticks).*

By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..

This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.

This option would typically be used when source code comes from an external source exposing the following potential issues:

* Comments contain raw tags that should be interpreted as code examples.
* Comments contain invalid syntax that (in the case of MDX) will cause breaking parsing errors.
* Although most parsers use XSS filters, this option provides an additional layer of XSS security.

#### Default Value

```ts
{
    help: 'Sanitize HTML and JSX inside JsDoc comments.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:607](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L607)

***

### publicPath

> `const` **publicPath**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

If undefined all urls will be relative.

#### Example

```ts
"http://abc.com"
```

#### Default Value

```ts
{
    help: 'Specify the base path for all urls.',
    type: ParameterType.String,
    defaultValue: undefined,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:620](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L620)

***

### anchorPrefix

> `const` **anchorPrefix**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option should be used when parsers require a custom anchor prefix.

#### Example

```ts
"markdown-header"
```

#### Default Value

```ts
{
    help: 'Custom anchor prefix when anchoring to in-page symbols.',
    type: ParameterType.String,
    defaultValue: undefined,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:633](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L633)

***

### useHTMLEncodedBrackets

> `const` **useHTMLEncodedBrackets**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default, opening and closing angle brackets (`<` and `>`) are escaped using backslashes, and most modern Markdown processors handle them consistently.
However, using HTML entities (`&lt;` and `&gt;`) might be preferable to avoid any inconsistencies with some Markdown processors.

#### Default Value

```ts
{
    help: 'Use HTML encoded entities for angle brackets.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:645](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L645)

***

### useHTMLAnchors

> `const` **useHTMLAnchors**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option should be used if there are issues when anchoring to symbols within a page.

* For Markdown parsers that do not automatically assign header ids.
* When cross referencing symbols that are referenced in a table row.

#### Default Value

```ts
{
    help: 'Add HTML named anchors to headings and table rows.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:659](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L659)

***

### preserveAnchorCasing

> `const` **preserveAnchorCasing**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default references to symbol anchor links are lowercased.

This option can be used for engines that require the preservation of anchor link casing.

#### Default Value

```ts
{
    help: 'Preserve anchor casing when generating link to symbols.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:672](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L672)

***

### pageTitleTemplates

> `const` **pageTitleTemplates**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Customizes the page titles for index, module, and member pages in the documentation.

The option is provided as an object with keys corresponding to the page type.

The Values of each key can be either:

* A function accepting input arguments.
* A strings supporting placeholders.

Available placeholders / arguments:

* `{projectName}` - the project's name resolved by TypeDoc.
* `{version}` - the project version  resolved by TypeDoc (when includeVersion is `true`).
* `{kind}` - the reflection kind of the item.
* `{group}` - the group title that the item belongs to.

Available keys:

* The `index` key (main documentation index page) accepts the `projectName` and `version` placeholder/args.
* The `module` key (module and namespace pages) accepts the `kind` and `name` placeholder/args.
* The `member` key (individual module member pages) accepts the `kind`, `name`, and `group` placeholder/args.

```js filename="typedoc.cjs"
pageTitleTemplates: {
 index: (args) => `${args.projectName}: ${args.version}`,
 module: (args) => args.name,
 member: (args) => `${args.kind}: ${args.name}`,
}
```

#### Default Value

```ts
{
    help: 'Change specific text placeholders in the template.',
    type: ParameterType.Object,
    defaultValue: DEFAULT_PAGE_TITLES,
    configFileOnly: true,
    validate(value) {
        if (!value || typeof value !== 'object') {
            throw new Error('[typedoc-plugin-markdown] textContentMappings must be an object.');
        }
        for (const val of Object.values(value)) {
            if (typeof val !== 'string' && typeof val !== 'function') {
                throw new Error(`[typedoc-plugin-markdown] All values of textContentMappings must be strings or functions.`);
            }
        }
    },
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:739](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L739)
