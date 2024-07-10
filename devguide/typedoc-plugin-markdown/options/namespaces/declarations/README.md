[Home](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [options](../../README.md) / declarations

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
  * [entryModule](#entrymodule)
  * [excludeScopesInPaths](#excludescopesinpaths)
  * [mergeReadme](#mergereadme)
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
  * [typeDeclarationFormat](#typedeclarationformat)
  * [propertyMembersFormat](#propertymembersformat)
  * [tableColumnSettings](#tablecolumnsettings)
* [Utility](#utility)
  * [publicPath](#publicpath)
  * [sanitizeComments](#sanitizecomments)
  * [anchorPrefix](#anchorprefix)
  * [useHTMLAnchors](#usehtmlanchors)
  * [useHTMLEncodedBrackets](#usehtmlencodedbrackets)
  * [preserveAnchorCasing](#preserveanchorcasing)
  * [textContentMappings](#textcontentmappings)
  * [navigationModel](#navigationmodel)

## File

Options that are used to configure how files are output.

### outputFileStrategy

> `const` **outputFileStrategy**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

TypeDoc creates documentation according to exports derived from the given [`entryPointsStrategy`](https://typedoc.org/options/input/#entrypointstrategy) configuration.

This option does not alter the way TypeDoc interprets the `entryPointsStrategy` but rather provides some flexibility as to how output files are generated.

It is also possible to further refine what members are exported to individual files with the [`membersWithOwnFile`](#memberswithownfile) option.

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:66](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L66)

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
    help: 'Determines which members are exported to their own file when `outputFileStrategy` equals `members`.',
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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:82](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L82)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:136](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L136)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:149](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L149)

***

### entryFileName

> `const` **entryFileName**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

The `entryFileName` in this context is the root page of the documentation and each module directory.
This is essentially the equivalent to `index.html` for web pages.

`README` is recognised when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.

The content of root documentation file will be resolved in the following order:

1. The value of the [`entryModule`](#entrymodule) option (if defined).
2. The resolved Readme file (skipped if the [`readme`](https://typedoc.org/options/input/#readme) option is set to `none`).
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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:179](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L179)

***

### modulesFileName

> `const` **modulesFileName**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Please note this option is not applicable when `--readme` is set to "none" or `--mergeReadme` is set to "true".

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:195](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L195)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:211](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L211)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:242](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L242)

***

### mergeReadme

> `const` **mergeReadme**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default when a readme file is resolved, a separate readme page is created.
This option appends the index page to the readme so only a single root page is generated.

This option has no effect when [`--readme`](https://typedoc.org/options/input/#readme) is set to `"none"`.

#### Default Value

```ts
{
    help: 'Merges the resolved readme into the project index page.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:256](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L256)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:265](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L265)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:274](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L274)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:283](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L283)

***

### hideGroupHeadings

> `const` **hideGroupHeadings**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default members are grouped by kind (eg Classes, Functions etc).

This creates a flat structure where all members are displayed at the same heading level.

#### Default Value

```ts
{
    help: 'Excludes grouping by kind so all members are rendered and sorted at the same level.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:296](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L296)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:322](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L322)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:335](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L335)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:348](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L348)

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
    help: 'Specifies comment block tags that should preserve their position in relation to the comment summary.',
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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:365](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L365)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:391](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L391)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:407](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L407)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:423](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L423)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:439](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L439)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:455](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L455)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:471](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L471)

***

### propertyMembersFormat

> `const` **propertyMembersFormat**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option will handle the formatting of object literals assigned as properties in classes or interfaces.

Note this options will only take effect when `propertiesFormat` is set to `list`.

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:489](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L489)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:518](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L518)

## Utility

Options that are used for general configuration and utility purposes.

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:539](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L539)

***

### sanitizeComments

> `const` **sanitizeComments**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

*Please note this options does not affect the rendering of inline code or code blocks (using single/triple backticks).*

By default all comments written inside JsDoc comments will be passed to the output as written, and parsers will interpret un-escaped angle brackets as HTML/JSX tags..

This option will escape angle brackets `<` `>` and curly braces `{` `}` written inside JsDoc comments.

This option would typically be used when source code comes from an external library exposing the following potential issues:

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:560](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L560)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:573](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L573)

***

### useHTMLAnchors

> `const` **useHTMLAnchors**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

This option should be used if there are issues with anchoring to symbols within a page.

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:587](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L587)

***

### useHTMLEncodedBrackets

> `const` **useHTMLEncodedBrackets**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

By default, opening and closing angle brackets (`<` and `>`) are escaped using backslashes, and most modern Markdown processors handle them consistently.
However, using HTML entities (`&lt;` and `&gt;`) might be preferable to avoid any inconsistencies across different Markdown processors.

#### Default Value

```ts
{
    help: 'Use HTML encoded entities for angle brackets.',
    type: ParameterType.Boolean,
    defaultValue: false,
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:599](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L599)

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

[packages/typedoc-plugin-markdown/src/options/declarations.ts:612](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L612)

***

### textContentMappings

> `const` **textContentMappings**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

Defines placeholder text in main template that can be customized. Includes the main page header and breadcrumbs (if displayed),
page titles and page footer.

Default values within curly braces \{} indicates a placeholder of dynamic text.

* The `{projectName}` placeholder writes project's name .
* The `{kind}` writes the reflection kind of the page.
* The `{version}` placeholder writes package version (if includeVersion is `true`).

If you are looking for general localization support please see [localization]().

#### Default Value

```ts
{
    help: 'Change specific text placeholders in the template.',
    type: ParameterType.Object,
    defaultValue: TEXT_CONTENT_MAPPINGS,
    validate(value) {
        if (!value || typeof value !== 'object') {
            throw new Error('[typedoc-plugin-markdown] textContentMappings must be an object.');
        }
        for (const val of Object.values(value)) {
            if (typeof val !== 'string') {
                throw new Error(`[typedoc-plugin-markdown] All values of textContentMappings must be strings.`);
            }
        }
    },
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:632](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L632)

***

### navigationModel

> `const` **navigationModel**: `Partial`\<[`DeclarationOption`](https://typedoc.org/api/types/Configuration.DeclarationOption.html)>

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

#### Default Value

```ts
{
    help: 'Configures how the navigation model will be generated.',
    type: ParameterType.Flags,
    defaults: {
        excludeGroups: false,
        excludeCategories: false,
        excludeFolders: false,
    },
}
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/declarations.ts:682](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/options/declarations.ts#L682)
