# PluginOptions

Describes the options declared by the plugin.

## Properties

### outputFileStrategy

> **outputFileStrategy**: `"members"` \| `"modules"`

Determines how output files are generated.

***

### membersWithOwnFile

> **membersWithOwnFile**: (`"Enum"` \| `"Variable"` \| `"Function"` \| `"Class"` \| `"Interface"` \| `"TypeAlias"`)[]

Determines which members are exported to their own file when `outputFileStrategy` equals `members`.

***

### entryFileName

> **entryFileName**: `string`

The file name of the entry page.

***

### fileExtension

> **fileExtension**: `string`

Specify the file extension for generated output files.

***

### entryModule

> **entryModule**: `string`

The name of a module that should act as the root page for the documentation.

***

### mergeReadme

> **mergeReadme**: `boolean`

Merges the resolved readme into the project index page.

***

### excludeScopesInPaths

> **excludeScopesInPaths**: `boolean`

Exclude writing @ scope directories in paths.

***

### hidePageHeader

> **hidePageHeader**: `boolean`

Do not print page header.

***

### hidePageTitle

> **hidePageTitle**: `boolean`

Do not print page title.

***

### hideBreadcrumbs

> **hideBreadcrumbs**: `boolean`

Do not print breadcrumbs.

***

### hideInPageTOC

> **hideInPageTOC**: `boolean`

Do not render in-page TOC items.

***

### indexPageTitle

> **indexPageTitle**: `string`

The title of project index page.

***

### memberPageTitle

> **memberPageTitle**: `string`

The page title of member pages.

***

### excludeGroups

> **excludeGroups**: `boolean`

Excludes grouping by kind so all members are rendered and sorted at the same level.

***

### useCodeBlocks

> **useCodeBlocks**: `boolean`

Wraps signatures and declarations in code blocks.

***

### expandObjects

> **expandObjects**: `boolean`

Expand objects inside declarations.

***

### expandParameters

> **expandParameters**: `boolean`

Expand parameters in signature parentheses to display type information.

***

### parametersFormat

> **parametersFormat**: `"table"` \| `"list"`

Specify the render style of parameter and type parameter groups.

***

### propertiesFormat

> **propertiesFormat**: `"table"` \| `"list"`

Specify the render style of property groups for interfaces and classes.

***

### enumMembersFormat

> **enumMembersFormat**: `"table"` \| `"list"`

Specify the render style of enumuration members.

***

### typeDeclarationFormat

> **typeDeclarationFormat**: `"table"` \| `"list"`

Specify the render style for type declaration members.

***

### indexFormat

> **indexFormat**: `"table"` \| `"list"`

Specify the render format for index items.

***

### textContentMappings

> **textContentMappings**: `Partial`\<[`TextContentMappings`](/api-docs/Interface.TextContentMappings.md)\>

Provides a mechanism to change the content of text used in documentation.

***

### publicPath

> **publicPath**: `string`

Specify the base path for all urls.

***

### preserveMarkup

> **preserveMarkup**: `boolean`

Preserves non-html markup tags in comments.

***

### preserveAnchorCasing

> **preserveAnchorCasing**: `boolean`

Preserve anchor casing when generating link to symbols.

***

### anchorPrefix

> **anchorPrefix**: `string`

Custom anchor prefix

***

### namedAnchors

> **namedAnchors**: `boolean`

Add HTML named anchors to headings and table rows.
