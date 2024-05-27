[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [options](../../../README.md) / [types](../README.md) / PluginOptions

# Interface: PluginOptions

## Table of Contents

* [Properties](#properties)

## Properties

### anchorPrefix

```ts
anchorPrefix: string;
```

Custom anchor prefix when anchoring to in-page symbols.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L14)

***

### entryFileName

```ts
entryFileName: string;
```

The file name of the entry page.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L19)

***

### entryModule

```ts
entryModule: string;
```

The name of a module that should act as the root page for the documentation.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L24)

***

### enumMembersFormat

```ts
enumMembersFormat: "table" | "list" | "htmlTable";
```

Specify the render style of enumeration members.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L29)

***

### ~~excludeGroups~~

```ts
excludeGroups: boolean;
```

#### Deprecated

This option has been renamed hideGroupHeadings to better reflect its purpose.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:34](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L34)

***

### excludeScopesInPaths

```ts
excludeScopesInPaths: boolean;
```

Exclude writing @ scope directories in paths.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:39](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L39)

***

### expandObjects

```ts
expandObjects: boolean;
```

Expand objects inside declarations.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:44](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L44)

***

### expandParameters

```ts
expandParameters: boolean;
```

Expand parameters in signature parentheses to display type information.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:49](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L49)

***

### fileExtension

```ts
fileExtension: string;
```

Specify the file extension for generated output files.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:54](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L54)

***

### flattenOutputFiles

```ts
flattenOutputFiles: boolean;
```

Flatten output files to a single directory.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:59](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L59)

***

### hideBreadcrumbs

```ts
hideBreadcrumbs: boolean;
```

Do not print breadcrumbs.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:64](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L64)

***

### hideGroupHeadings

```ts
hideGroupHeadings: boolean;
```

Excludes grouping by kind so all members are rendered and sorted at the same level.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:69](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L69)

***

### hidePageHeader

```ts
hidePageHeader: boolean;
```

Do not print page header.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:74](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L74)

***

### hidePageTitle

```ts
hidePageTitle: boolean;
```

Do not print page title.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:79](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L79)

***

### indexFormat

```ts
indexFormat: "table" | "list";
```

Specify the render format for index items.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:84](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L84)

***

### membersWithOwnFile

```ts
membersWithOwnFile: (
  | "Enum"
  | "Variable"
  | "Function"
  | "Class"
  | "Interface"
  | "TypeAlias")[];
```

Determines which members are exported to their own file when `outputFileStrategy` equals `members`.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:89](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L89)

***

### mergeReadme

```ts
mergeReadme: boolean;
```

Merges the resolved readme into the project index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:101](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L101)

***

### navigationModel

```ts
navigationModel: object;
```

Configures how the navigation model will be generated.

#### excludeGroups

```ts
excludeGroups: boolean;
```

#### excludeCategories

```ts
excludeCategories: boolean;
```

#### excludeFolders

```ts
excludeFolders: boolean;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:106](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L106)

***

### outputFileStrategy

```ts
outputFileStrategy: "members" | "modules";
```

Determines how output files are generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:115](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L115)

***

### parametersFormat

```ts
parametersFormat: "table" | "list" | "htmlTable";
```

Specify the render style of parameter and type parameter groups.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:120](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L120)

***

### preserveAnchorCasing

```ts
preserveAnchorCasing: boolean;
```

Preserve anchor casing when generating link to symbols.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:125](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L125)

***

### propertiesFormat

```ts
propertiesFormat: "table" | "list" | "htmlTable";
```

Specify the render style of property groups for interfaces and classes.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:130](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L130)

***

### publicPath

```ts
publicPath: string;
```

Specify the base path for all urls.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:135](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L135)

***

### sanitizeComments

```ts
sanitizeComments: boolean;
```

Sanitize HTML and JSX inside JsDoc comments.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:140](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L140)

***

### tableColumnSettings

```ts
tableColumnSettings: object;
```

Control header alignment and column visibility in tables.

#### hideDefaults

```ts
hideDefaults: boolean;
```

#### hideInherited

```ts
hideInherited: boolean;
```

#### hideModifiers

```ts
hideModifiers: boolean;
```

#### hideOverrides

```ts
hideOverrides: boolean;
```

#### hideSources

```ts
hideSources: boolean;
```

#### hideValues

```ts
hideValues: boolean;
```

#### leftAlignHeaders

```ts
leftAlignHeaders: boolean;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:145](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L145)

***

### textContentMappings

```ts
textContentMappings: object;
```

Change specific text placeholders in the template.

#### header.title

```ts
header.title: string;
```

#### header.docs

```ts
header.docs: string;
```

#### breadcrumbs.home

```ts
breadcrumbs.home: string;
```

#### title.indexPage

```ts
title.indexPage: string;
```

#### title.memberPage

```ts
title.memberPage: string;
```

#### footer.text

```ts
footer.text: string;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:158](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L158)

***

### typeDeclarationFormat

```ts
typeDeclarationFormat: "table" | "list" | "htmlTable";
```

Specify the render style for type declaration members.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:170](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L170)

***

### useCodeBlocks

```ts
useCodeBlocks: boolean;
```

Wraps signatures and declarations in code blocks.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:175](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L175)

***

### useHTMLAnchors

```ts
useHTMLAnchors: boolean;
```

Add HTML named anchors to headings and table rows.

#### Defined in

[packages/typedoc-plugin-markdown/src/options/types.ts:180](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/options/types.ts#L180)
