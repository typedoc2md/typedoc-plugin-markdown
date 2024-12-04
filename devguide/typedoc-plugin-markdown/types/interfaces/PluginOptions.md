[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

Describes the options declared by the plugin.

## Contents

* [Extended by](#extended-by)
* [Properties](#properties)
  * [anchorPrefix](#anchorprefix)
  * [blockTagsPreserveOrder](#blocktagspreserveorder)
  * [classPropertiesFormat](#classpropertiesformat)
  * [entryFileName](#entryfilename)
  * [entryModule](#entrymodule)
  * [enumMembersFormat](#enummembersformat)
  * [~~excludeGroups~~](#excludegroups)
  * [excludeScopesInPaths](#excludescopesinpaths)
  * [expandObjects](#expandobjects)
  * [expandParameters](#expandparameters)
  * [fileExtension](#fileextension)
  * [flattenOutputFiles](#flattenoutputfiles)
  * [formatWithPrettier](#formatwithprettier)
  * [hideBreadcrumbs](#hidebreadcrumbs)
  * [hideGroupHeadings](#hidegroupheadings)
  * [hidePageHeader](#hidepageheader)
  * [hidePageTitle](#hidepagetitle)
  * [indexFormat](#indexformat)
  * [interfacePropertiesFormat](#interfacepropertiesformat)
  * [membersWithOwnFile](#memberswithownfile)
  * [mergeReadme](#mergereadme)
  * [modulesFileName](#modulesfilename)
  * [~~navigationModel~~](#navigationmodel)
    * [~~excludeGroups~~](#excludegroups-1)
    * [~~excludeCategories~~](#excludecategories)
    * [~~excludeFolders~~](#excludefolders)
  * [outputFileStrategy](#outputfilestrategy)
  * [pageTitleTemplates](#pagetitletemplates)
    * [index](#index)
    * [member](#member)
    * [module](#module)
  * [parametersFormat](#parametersformat)
  * [preserveAnchorCasing](#preserveanchorcasing)
  * [prettierConfigFile](#prettierconfigfile)
  * [propertiesFormat](#propertiesformat)
  * [propertyMembersFormat](#propertymembersformat)
  * [publicPath](#publicpath)
  * [sanitizeComments](#sanitizecomments)
  * [tableColumnSettings](#tablecolumnsettings)
    * [hideDefaults](#hidedefaults)
    * [hideInherited](#hideinherited)
    * [hideModifiers](#hidemodifiers)
    * [hideOverrides](#hideoverrides)
    * [hideSources](#hidesources)
    * [hideValues](#hidevalues)
    * [leftAlignHeaders](#leftalignheaders)
  * [textContentMappings](#textcontentmappings)
  * [typeDeclarationFormat](#typedeclarationformat)
  * [typeDeclarationVisibility](#typedeclarationvisibility)
  * [useCodeBlocks](#usecodeblocks)
  * [useHTMLAnchors](#usehtmlanchors)
  * [useHTMLEncodedBrackets](#usehtmlencodedbrackets)

## Extended by

* [`PluginOptions`](../../../docusaurus-plugin-typedoc/index/interfaces/PluginOptions.md)

## Properties

### anchorPrefix

> **anchorPrefix**: `string`

Custom anchor prefix when anchoring to in-page symbols.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L11)

***

### blockTagsPreserveOrder

> **blockTagsPreserveOrder**: `string`\[]

Specifies comment block tags that should preserve their position.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L16)

***

### classPropertiesFormat

> **classPropertiesFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of property groups for classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L21)

***

### entryFileName

> **entryFileName**: `string`

The file name of the entry page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L26)

***

### entryModule

> **entryModule**: `string`

The name of a module that should act as the root page for the documentation.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L31)

***

### enumMembersFormat

> **enumMembersFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of enumeration members.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L36)

***

### ~~excludeGroups~~

> **excludeGroups**: `boolean`

#### Deprecated

This option has been renamed hideGroupHeadings to better reflect its purpose.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L41)

***

### excludeScopesInPaths

> **excludeScopesInPaths**: `boolean`

Exclude writing @ scope directories in paths.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L46)

***

### expandObjects

> **expandObjects**: `boolean`

Expand objects inside declarations.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L51)

***

### expandParameters

> **expandParameters**: `boolean`

Expand parameters in signature parentheses to display type information.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:56](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L56)

***

### fileExtension

> **fileExtension**: `string`

Specify the file extension for generated output files.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:61](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L61)

***

### flattenOutputFiles

> **flattenOutputFiles**: `boolean`

Flatten output files to a single directory.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:66](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L66)

***

### formatWithPrettier

> **formatWithPrettier**: `boolean`

Apply additional output formatting with Prettier.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:71](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L71)

***

### hideBreadcrumbs

> **hideBreadcrumbs**: `boolean`

Do not print breadcrumbs.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:76](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L76)

***

### hideGroupHeadings

> **hideGroupHeadings**: `boolean`

Excludes grouping by kind so all members are rendered at the same level.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:81](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L81)

***

### hidePageHeader

> **hidePageHeader**: `boolean`

Do not print page header.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:86](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L86)

***

### hidePageTitle

> **hidePageTitle**: `boolean`

Do not print page title.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:91](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L91)

***

### indexFormat

> **indexFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of index items.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:96](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L96)

***

### interfacePropertiesFormat

> **interfacePropertiesFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of property groups for interfaces.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:101](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L101)

***

### membersWithOwnFile

> **membersWithOwnFile**: (`"Enum"` | `"Variable"` | `"Function"` | `"Class"` | `"Interface"` | `"TypeAlias"`)\[]

Determines which members are exported to their own file.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:106](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L106)

***

### mergeReadme

> **mergeReadme**: `boolean`

Appends the documentation index page to the readme page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:118](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L118)

***

### modulesFileName

> **modulesFileName**: `string`

The file name of the separate modules / index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:123](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L123)

***

### ~~navigationModel~~

> **navigationModel**: `object`

#### ~~excludeGroups~~

> **excludeGroups**: `boolean`

#### ~~excludeCategories~~

> **excludeCategories**: `boolean`

#### ~~excludeFolders~~

> **excludeFolders**: `boolean`

#### Deprecated

This option has been deprecated in favour of TypeDoc `navigation` option.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:128](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L128)

***

### outputFileStrategy

> **outputFileStrategy**: `"members"` | `"modules"`

Determines how output files are generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:137](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L137)

***

### pageTitleTemplates

> **pageTitleTemplates**: `object`

Change specific text placeholders in the template.

#### index

> **index**: `string` | (`name`) => `string`

#### member

> **member**: `string` | (`name`) => `string`

#### module

> **module**: `string` | (`name`) => `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:142](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L142)

***

### parametersFormat

> **parametersFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of parameter and type parameter groups.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:155](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L155)

***

### preserveAnchorCasing

> **preserveAnchorCasing**: `boolean`

Preserve anchor casing when generating link to symbols.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:160](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L160)

***

### prettierConfigFile

> **prettierConfigFile**: `string`

Specify a custom Prettier configuration file location.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:165](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L165)

***

### propertiesFormat

> **propertiesFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of property groups for interfaces and classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:170](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L170)

***

### propertyMembersFormat

> **propertyMembersFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of style for property members for interfaces and classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:175](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L175)

***

### publicPath

> **publicPath**: `string`

Specify the base path for all urls.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:180](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L180)

***

### sanitizeComments

> **sanitizeComments**: `boolean`

Sanitize HTML and JSX inside JsDoc comments.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:185](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L185)

***

### tableColumnSettings

> **tableColumnSettings**: `object`

Control how table columns are configured and displayed.

#### hideDefaults

> **hideDefaults**: `boolean`

#### hideInherited

> **hideInherited**: `boolean`

#### hideModifiers

> **hideModifiers**: `boolean`

#### hideOverrides

> **hideOverrides**: `boolean`

#### hideSources

> **hideSources**: `boolean`

#### hideValues

> **hideValues**: `boolean`

#### leftAlignHeaders

> **leftAlignHeaders**: `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:190](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L190)

***

### textContentMappings

> **textContentMappings**: `object`

Change specific text placeholders in the template.

##### header.title

> **header.title**: `string`

##### breadcrumbs.home

> **breadcrumbs.home**: `string`

##### title.indexPage

> **title.indexPage**: `string`

##### title.memberPage

> **title.memberPage**: `string`

##### title.modulePage

> **title.modulePage**: `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:203](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L203)

***

### typeDeclarationFormat

> **typeDeclarationFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of style for type declaration members.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:214](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L214)

***

### typeDeclarationVisibility

> **typeDeclarationVisibility**: `"compact"` | `"verbose"`

Set the visibility level for type declaration documentation.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:219](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L219)

***

### useCodeBlocks

> **useCodeBlocks**: `boolean`

Wraps signatures and declarations in code blocks.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:224](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L224)

***

### useHTMLAnchors

> **useHTMLAnchors**: `boolean`

Add HTML named anchors to headings and table rows.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:229](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L229)

***

### useHTMLEncodedBrackets

> **useHTMLEncodedBrackets**: `boolean`

Use HTML encoded entities for angle brackets.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:234](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L234)
