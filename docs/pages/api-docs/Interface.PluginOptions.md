# PluginOptions

## Properties

### anchorPrefix

```ts
anchorPrefix: string;
```

Custom anchor prefix when anchoring to in-page symbols.

***

### entryFileName

```ts
entryFileName: string;
```

The file name of the entry page.

***

### entryModule

```ts
entryModule: string;
```

The name of a module that should act as the root page for the documentation.

***

### enumMembersFormat

```ts
enumMembersFormat: "table" | "list" | "htmlTable";
```

Specify the render style of enumeration members.

***

### ~~excludeGroups~~

```ts
excludeGroups: boolean;
```

#### Deprecated

This option has been renamed hideGroupHeadings to better reflect its purpose.

***

### excludeScopesInPaths

```ts
excludeScopesInPaths: boolean;
```

Exclude writing @ scope directories in paths.

***

### expandObjects

```ts
expandObjects: boolean;
```

Expand objects inside declarations.

***

### expandParameters

```ts
expandParameters: boolean;
```

Expand parameters in signature parentheses to display type information.

***

### fileExtension

```ts
fileExtension: string;
```

Specify the file extension for generated output files.

***

### flattenOutputFiles

```ts
flattenOutputFiles: boolean;
```

Flatten output files to a single directory.

***

### hideBreadcrumbs

```ts
hideBreadcrumbs: boolean;
```

Do not print breadcrumbs.

***

### hideGroupHeadings

```ts
hideGroupHeadings: boolean;
```

Excludes grouping by kind so all members are rendered and sorted at the same level.

***

### hidePageHeader

```ts
hidePageHeader: boolean;
```

Do not print page header.

***

### hidePageTitle

```ts
hidePageTitle: boolean;
```

Do not print page title.

***

### indexFormat

```ts
indexFormat: "table" | "list";
```

Specify the render format for index items.

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

***

### mergeReadme

```ts
mergeReadme: boolean;
```

Merges the resolved readme into the project index page.

***

### navigationModel

```ts
navigationModel: {
  excludeGroups: boolean;
  excludeCategories: boolean;
  excludeFolders: boolean;
};
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

***

### outputFileStrategy

```ts
outputFileStrategy: "members" | "modules";
```

Determines how output files are generated.

***

### parametersFormat

```ts
parametersFormat: "table" | "list" | "htmlTable";
```

Specify the render style of parameter and type parameter groups.

***

### preserveAnchorCasing

```ts
preserveAnchorCasing: boolean;
```

Preserve anchor casing when generating link to symbols.

***

### propertiesFormat

```ts
propertiesFormat: "table" | "list" | "htmlTable";
```

Specify the render style of property groups for interfaces and classes.

***

### publicPath

```ts
publicPath: string;
```

Specify the base path for all urls.

***

### sanitizeComments

```ts
sanitizeComments: boolean;
```

Sanitize HTML and JSX inside JsDoc comments.

***

### tableColumnSettings

```ts
tableColumnSettings: {
  hideDefaults: boolean;
  hideInherited: boolean;
  hideModifiers: boolean;
  hideOverrides: boolean;
  hideSources: boolean;
  hideValues: boolean;
  leftAlignHeaders: boolean;
};
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

***

### textContentMappings

```ts
textContentMappings: {
  header.title: string;
  header.docs: string;
  breadcrumbs.home: string;
  title.indexPage: string;
  title.memberPage: string;
  footer.text: string;
};
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

***

### typeDeclarationFormat

```ts
typeDeclarationFormat: "table" | "list" | "htmlTable";
```

Specify the render style for type declaration members.

***

### useCodeBlocks

```ts
useCodeBlocks: boolean;
```

Wraps signatures and declarations in code blocks.

***

### useHTMLAnchors

```ts
useHTMLAnchors: boolean;
```

Add HTML named anchors to headings and table rows.
