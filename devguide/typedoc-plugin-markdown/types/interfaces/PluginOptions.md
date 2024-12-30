[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L7)

Describes the options declared by the plugin.

## Extended by

- [`PluginOptions`](../../../docusaurus-plugin-typedoc/core/interfaces/PluginOptions.md)

## Properties

### anchorPrefix

> **anchorPrefix**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L11)

Custom anchor prefix when anchoring to in-page symbols.

***

### blockTagsPreserveOrder

> **blockTagsPreserveOrder**: `string`[]

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L16)

Specifies comment block tags that should preserve their position.

***

### classPropertiesFormat

> **classPropertiesFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L21)

Sets the format of property groups for classes.

***

### entryFileName

> **entryFileName**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L26)

The file name of the entry page.

***

### entryModule

> **entryModule**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L31)

The name of a module that should act as the root page for the documentation.

***

### enumMembersFormat

> **enumMembersFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L36)

Sets the format of enumeration members.

***

### ~~excludeGroups~~

> **excludeGroups**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L41)

#### Deprecated

This option has been renamed hideGroupHeadings to better reflect its purpose.

***

### excludeScopesInPaths

> **excludeScopesInPaths**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L46)

Exclude writing @ scope directories in paths.

***

### expandObjects

> **expandObjects**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L51)

Expand objects inside declarations.

***

### expandParameters

> **expandParameters**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:56](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L56)

Expand parameters in signature parentheses to display type information.

***

### fileExtension

> **fileExtension**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:61](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L61)

Specify the file extension for generated output files.

***

### flattenOutputFiles

> **flattenOutputFiles**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:66](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L66)

Flatten output files to a single directory.

***

### formatWithPrettier

> **formatWithPrettier**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:71](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L71)

Apply additional output formatting with Prettier.

***

### hideBreadcrumbs

> **hideBreadcrumbs**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:76](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L76)

Do not print breadcrumbs.

***

### hideGroupHeadings

> **hideGroupHeadings**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:81](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L81)

Excludes grouping by kind so all members are rendered at the same level.

***

### hidePageHeader

> **hidePageHeader**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:86](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L86)

Do not print page header.

***

### hidePageTitle

> **hidePageTitle**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:91](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L91)

Do not print page title.

***

### indexFormat

> **indexFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:96](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L96)

Sets the format of index items.

***

### interfacePropertiesFormat

> **interfacePropertiesFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:101](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L101)

Sets the format of property groups for interfaces.

***

### membersWithOwnFile

> **membersWithOwnFile**: (`"Enum"` \| `"Variable"` \| `"Function"` \| `"Class"` \| `"Interface"` \| `"TypeAlias"`)[]

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:106](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L106)

Determines which members are exported to their own file.

***

### mergeReadme

> **mergeReadme**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:118](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L118)

Appends the documentation index page to the readme page.

***

### modulesFileName

> **modulesFileName**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:123](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L123)

The file name of the separate modules / index page.

***

### ~~navigationModel~~

> **navigationModel**: `object`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:128](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L128)

#### ~~excludeGroups~~

> **excludeGroups**: `boolean`

#### ~~excludeCategories~~

> **excludeCategories**: `boolean`

#### ~~excludeFolders~~

> **excludeFolders**: `boolean`

#### Deprecated

This option has been deprecated in favour of TypeDoc `navigation` option.

***

### outputFileStrategy

> **outputFileStrategy**: `"members"` \| `"modules"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:137](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L137)

Determines how output files are generated.

***

### pageTitleTemplates

> **pageTitleTemplates**: `object`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:142](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L142)

Change specific text placeholders in the template.

#### index

> **index**: `string` \| (`name`) => `string`

#### member

> **member**: `string` \| (`name`) => `string`

#### module

> **module**: `string` \| (`name`) => `string`

***

### parametersFormat

> **parametersFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:155](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L155)

Sets the format of parameter and type parameter groups.

***

### preserveAnchorCasing

> **preserveAnchorCasing**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:160](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L160)

Preserve anchor casing when generating link to symbols.

***

### prettierConfigFile

> **prettierConfigFile**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:165](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L165)

Specify a custom Prettier configuration file location.

***

### ~~propertiesFormat~~

> **propertiesFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:170](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L170)

#### Deprecated

This option has been deprecated in favour of `--interfacePropertiesFormat` and `--classPropertiesFormat`.

***

### propertyMembersFormat

> **propertyMembersFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:175](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L175)

Sets the format of style for property members for interfaces and classes.

***

### publicPath

> **publicPath**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:180](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L180)

Specify the base path for all urls.

***

### sanitizeComments

> **sanitizeComments**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:185](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L185)

Sanitize HTML and JSX inside JsDoc comments.

***

### tableColumnSettings

> **tableColumnSettings**: `object`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:190](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L190)

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

***

### ~~textContentMappings~~

> **textContentMappings**: `object`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:203](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L203)

##### ~~header.title~~

> **header.title**: `string`

##### ~~breadcrumbs.home~~

> **breadcrumbs.home**: `string`

##### ~~title.indexPage~~

> **title.indexPage**: `string`

##### ~~title.memberPage~~

> **title.memberPage**: `string`

##### ~~title.modulePage~~

> **title.modulePage**: `string`

#### Deprecated

This option has been deprecated in favour of `--pageTitleTemplates`.

***

### typeDeclarationFormat

> **typeDeclarationFormat**: `"table"` \| `"list"` \| `"htmlTable"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:214](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L214)

Sets the format of style for type declaration members.

***

### typeDeclarationVisibility

> **typeDeclarationVisibility**: `"compact"` \| `"verbose"`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:219](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L219)

Set the visibility level for type declaration documentation.

***

### useCodeBlocks

> **useCodeBlocks**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:224](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L224)

Wraps signatures and declarations in code blocks.

***

### useHTMLAnchors

> **useHTMLAnchors**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:229](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L229)

Add HTML anchors to page headings.

***

### useHTMLEncodedBrackets

> **useHTMLEncodedBrackets**: `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/types/options.ts:234](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/options.ts#L234)

Use HTML encoded entities for angle brackets.
