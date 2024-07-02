[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

Describes the options declared by the plugin.

## Contents

* [Extended by](#extended-by)
* [Properties](#properties)
  * [anchorPrefix](#anchorprefix)
  * [classPropertiesFormat](#classpropertiesformat)
  * [entryFileName](#entryfilename)
  * [entryModule](#entrymodule)
  * [enumMembersFormat](#enummembersformat)
  * [~~excludeGroups~~](#excludegroups)
    * [Deprecated](#deprecated)
  * [excludeScopesInPaths](#excludescopesinpaths)
  * [expandObjects](#expandobjects)
  * [expandParameters](#expandparameters)
  * [fileExtension](#fileextension)
  * [flattenOutputFiles](#flattenoutputfiles)
  * [hideBreadcrumbs](#hidebreadcrumbs)
  * [hideGroupHeadings](#hidegroupheadings)
  * [hidePageHeader](#hidepageheader)
  * [hidePageTitle](#hidepagetitle)
  * [indexFormat](#indexformat)
  * [interfacePropertiesFormat](#interfacepropertiesformat)
  * [membersWithOwnFile](#memberswithownfile)
  * [mergeReadme](#mergereadme)
  * [navigationModel](#navigationmodel)
    * [excludeGroups](#excludegroups-1)
    * [excludeCategories](#excludecategories)
    * [excludeFolders](#excludefolders)
  * [outputFileStrategy](#outputfilestrategy)
  * [parametersFormat](#parametersformat)
  * [preserveAnchorCasing](#preserveanchorcasing)
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
    * [header.title](#headertitle)
    * [header.docs](#headerdocs)
    * [breadcrumbs.home](#breadcrumbshome)
    * [title.indexPage](#titleindexpage)
    * [title.memberPage](#titlememberpage)
    * [footer.text](#footertext)
  * [typeDeclarationFormat](#typedeclarationformat)
  * [useCodeBlocks](#usecodeblocks)
  * [useHTMLAnchors](#usehtmlanchors)
  * [useHTMLEncodedBrackets](#usehtmlencodedbrackets)

## Extended by

## Properties

### anchorPrefix

> **anchorPrefix**: `string`

Custom anchor prefix when anchoring to in-page symbols.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L11)

***

### classPropertiesFormat

> **classPropertiesFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of property groups for classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L16)

***

### entryFileName

> **entryFileName**: `string`

The file name of the entry page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L21)

***

### entryModule

> **entryModule**: `string`

The name of a module that should act as the root page for the documentation.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L26)

***

### enumMembersFormat

> **enumMembersFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of enumeration members.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L31)

***

### ~~excludeGroups~~

> **excludeGroups**: `boolean`

#### Deprecated

This option has been renamed hideGroupHeadings to better reflect its purpose.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L36)

***

### excludeScopesInPaths

> **excludeScopesInPaths**: `boolean`

Exclude writing @ scope directories in paths.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L41)

***

### expandObjects

> **expandObjects**: `boolean`

Expand objects inside declarations.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L46)

***

### expandParameters

> **expandParameters**: `boolean`

Expand parameters in signature parentheses to display type information.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L51)

***

### fileExtension

> **fileExtension**: `string`

Specify the file extension for generated output files.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:56](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L56)

***

### flattenOutputFiles

> **flattenOutputFiles**: `boolean`

Flatten output files to a single directory.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:61](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L61)

***

### hideBreadcrumbs

> **hideBreadcrumbs**: `boolean`

Do not print breadcrumbs.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:66](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L66)

***

### hideGroupHeadings

> **hideGroupHeadings**: `boolean`

Excludes grouping by kind so all members are rendered and sorted at the same level.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:71](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L71)

***

### hidePageHeader

> **hidePageHeader**: `boolean`

Do not print page header.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:76](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L76)

***

### hidePageTitle

> **hidePageTitle**: `boolean`

Do not print page title.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:81](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L81)

***

### indexFormat

> **indexFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of index items.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:86](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L86)

***

### interfacePropertiesFormat

> **interfacePropertiesFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of property groups for interfaces.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:91](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L91)

***

### membersWithOwnFile

> **membersWithOwnFile**: (`"Enum"` | `"Variable"` | `"Function"` | `"Class"` | `"Interface"` | `"TypeAlias"`)\[]

Determines which members are exported to their own file when `outputFileStrategy` equals `members`.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:96](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L96)

***

### mergeReadme

> **mergeReadme**: `boolean`

Merges the resolved readme into the project index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:108](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L108)

***

### navigationModel

> **navigationModel**: `object`

Configures how the navigation model will be generated.

#### excludeGroups

> **excludeGroups**: `boolean`

#### excludeCategories

> **excludeCategories**: `boolean`

#### excludeFolders

> **excludeFolders**: `boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:113](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L113)

***

### outputFileStrategy

> **outputFileStrategy**: `"members"` | `"modules"`

Determines how output files are generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:122](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L122)

***

### parametersFormat

> **parametersFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of parameter and type parameter groups.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:127](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L127)

***

### preserveAnchorCasing

> **preserveAnchorCasing**: `boolean`

Preserve anchor casing when generating link to symbols.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:132](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L132)

***

### propertiesFormat

> **propertiesFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of property groups for interfaces and classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:137](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L137)

***

### propertyMembersFormat

> **propertyMembersFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of style for property members for interfaces and classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:142](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L142)

***

### publicPath

> **publicPath**: `string`

Specify the base path for all urls.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:147](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L147)

***

### sanitizeComments

> **sanitizeComments**: `boolean`

Sanitize HTML and JSX inside JsDoc comments.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:152](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L152)

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

[packages/typedoc-plugin-markdown/src/types/options.ts:157](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L157)

***

### textContentMappings

> **textContentMappings**: `object`

Change specific text placeholders in the template.

#### header.title

> **header.title**: `string`

#### header.docs

> **header.docs**: `string`

#### breadcrumbs.home

> **breadcrumbs.home**: `string`

#### title.indexPage

> **title.indexPage**: `string`

#### title.memberPage

> **title.memberPage**: `string`

#### footer.text

> **footer.text**: `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:170](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L170)

***

### typeDeclarationFormat

> **typeDeclarationFormat**: `"table"` | `"list"` | `"htmlTable"`

Sets the format of style for type declaration members.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:182](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L182)

***

### useCodeBlocks

> **useCodeBlocks**: `boolean`

Wraps signatures and declarations in code blocks.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:187](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L187)

***

### useHTMLAnchors

> **useHTMLAnchors**: `boolean`

Add HTML named anchors to headings and table rows.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:192](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L192)

***

### useHTMLEncodedBrackets

> **useHTMLEncodedBrackets**: `boolean`

Use HTML encoded entities for angle brackets.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/options.ts:197](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L197)
