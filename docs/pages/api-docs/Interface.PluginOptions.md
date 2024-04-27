# PluginOptions

Describes the options declared by the plugin.

## Properties

### anchorPrefix

> **anchorPrefix**: `string`

Custom anchor prefix when anchoring to in-page symbols.

***

### entryFileName

> **entryFileName**: `string`

The file name of the entry page.

***

### entryModule

> **entryModule**: `string`

The name of a module that should act as the root page for the documentation.

***

### enumMembersFormat

> **enumMembersFormat**: `"table"` \| `"list"`

Specify the render style of enumeration members.

***

### excludeGroups

> **excludeGroups**: `boolean`

Excludes grouping by kind so all members are rendered and sorted at the same level.

***

### excludeScopesInPaths

> **excludeScopesInPaths**: `boolean`

Exclude writing @ scope directories in paths.

***

### expandObjects

> **expandObjects**: `boolean`

Expand objects inside declarations.

***

### expandParameters

> **expandParameters**: `boolean`

Expand parameters in signature parentheses to display type information.

***

### fileExtension

> **fileExtension**: `string`

Specify the file extension for generated output files.

***

### flattenOutputFiles

> **flattenOutputFiles**: `boolean`

Flatten output files to a single directory.

***

### hideBreadcrumbs

> **hideBreadcrumbs**: `boolean`

Do not print breadcrumbs.

***

### hidePageHeader

> **hidePageHeader**: `boolean`

Do not print page header.

***

### hidePageTitle

> **hidePageTitle**: `boolean`

Do not print page title.

***

### indexFormat

> **indexFormat**: `"table"` \| `"list"`

Specify the render format for index items.

***

### membersWithOwnFile

> **membersWithOwnFile**: (`"Enum"` \| `"Variable"` \| `"Function"` \| `"Class"` \| `"Interface"` \| `"TypeAlias"`)[]

Determines which members are exported to their own file when `outputFileStrategy` equals `members`.

***

### mergeReadme

> **mergeReadme**: `boolean`

Merges the resolved readme into the project index page.

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

***

### outputFileStrategy

> **outputFileStrategy**: `"members"` \| `"modules"`

Determines how output files are generated.

***

### parametersFormat

> **parametersFormat**: `"table"` \| `"list"`

Specify the render style of parameter and type parameter groups.

***

### preserveAnchorCasing

> **preserveAnchorCasing**: `boolean`

Preserve anchor casing when generating link to symbols.

***

### propertiesFormat

> **propertiesFormat**: `"table"` \| `"list"`

Specify the render style of property groups for interfaces and classes.

***

### publicPath

> **publicPath**: `string`

Specify the base path for all urls.

***

### sanitizeComments

> **sanitizeComments**: `boolean`

Sanitize HTML and JSX inside JsDoc comments.

***

### textContentMappings

> **textContentMappings**: `Partial`\<[`TextContentMappings`](/api-docs/Interface.TextContentMappings.md)\>

Provides a mechanism to change the content of text used in documentation.

***

### typeDeclarationFormat

> **typeDeclarationFormat**: `"table"` \| `"list"`

Specify the render style for type declaration members.

***

### useCodeBlocks

> **useCodeBlocks**: `boolean`

Wraps signatures and declarations in code blocks.

***

### useHTMLAnchors

> **useHTMLAnchors**: `boolean`

Add HTML named anchors to headings and table rows.
