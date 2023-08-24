# Options Guide

## Contents

*   [File Options](#file-options)

    *   [`--outputFileStrategy`](#--outputfilestrategy)
    *   [`--includeFileNumberPrefixes`](#--includefilenumberprefixes)
    *   [`--flattenOutputFiles`](#--flattenoutputfiles)
    *   [`--entryFileName`](#--entryfilename)
    *   [`--indexFileName`](#--indexfilename)
    *   [`--indexPageTitle`](#--indexpagetitle)
    *   [`--skipIndexPage`](#--skipindexpage)
    *   [`--preserveAnchorCasing`](#--preserveanchorcasing)
    *   [`--anchorPrefix`](#--anchorprefix)

*   [UI Options](#ui-options)

    *   [`--excludeGroups`](#--excludegroups)
    *   [`--hidePageHeader`](#--hidepageheader)
    *   [`--hidePageTitle`](#--hidepagetitle)
    *   [`--hideBreadcrumbs`](#--hidebreadcrumbs)
    *   [`--hideInPageTOC`](#--hideinpagetoc)
    *   [`--hideHierarchy`](#--hidehierarchy)
    *   [`--identifiersAsCodeBlocks`](#--identifiersascodeblocks)
    *   [`--propertiesFormat`](#--propertiesformat)
    *   [`--enumMembersFormat`](#--enummembersformat)
    *   [`--typeDeclarationFormat`](#--typedeclarationformat)
    *   [`--tocFormat`](#--tocformat)
    *   [`--titleTemplate`](#--titletemplate)

## File Options

Options that define how output files are generated.

***

### `--outputFileStrategy`

> Determines how output files are generated.

#### Type

`"members" | "modules"`

#### Default

```json
{
  "outputFileStrategy": "members"
}  
```

#### Usage

TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.

This options aims to provide some flexibility as to how files can be generated.

**"members"**

Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.

![outputFileStrategy members folders](../images/options/outputFileStrategy-members.png)

**"modules"**

Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

![outputFileStrategy modules folders](../images/options/outputFileStrategy-modules.png)

[↑ Top](#options-guide)

***

### `--includeFileNumberPrefixes`

> Prefixes generated files and folders with number prefixes.

#### Type

`boolean`

#### Default

```json
{
  "includeFileNumberPrefixes": "false"
}  
```

#### Usage

This makes files and folders appear in the file system in the same order as they are sorted. This is useful where auto sidebar generation may be required.

![includeFileNumberPrefixes folders](../images/options/includeFileNumberPrefixes.png)

[↑ Top](#options-guide)

***

### `--flattenOutputFiles`

> Flatten output files without folders.

#### Type

`boolean`

#### Default

```json
{
  "flattenOutputFiles": "false"
}  
```

#### Usage

This creates a flat folder structure without any folders - a required format for some Wikis.

![flattenOutputFiles folders](../images/options/flattenOutputFiles.png)

[↑ Top](#options-guide)

***

### `--entryFileName`

> The file name of the entry page.

#### Type

`string`

#### Default

```json
{
  "entryFileName": "README.md"
}  
```

#### Usage

`README.md` is recognised when browsing folders on repos and Wikis. `index.md` might be better if published as a web site.

Note the content of this file is either the API entry / index page, or the project readme (dependant on if a readme file is resolved or not).

a. If a readme file is resolved then two root files are generated:

├── {entryFileName} - (the project readme file)
├── API.md - (API index page)

b. If a readme file is NOT resolved, then the index page becomes the entryFileName page.

├── {entryFileName} - (API index page)

[↑ Top](#options-guide)

***

### `--indexFileName`

> The file name the seperate index page.

#### Type

`string`

#### Default

```json
{
  "indexFileName": "API.md"
}  
```

#### Usage

This page either contains the module index or exported symbols depending on the given `entryPoints`.

This page may not be required (if navigation is present for example) and can be skipped. See `skipIndexPage`.

This option is ignored if `readme=none` or `skipIndexPage=true`.

[↑ Top](#options-guide)

***

### `--indexPageTitle`

> The title of API index page.

#### Type

`string`

#### Default

```json
{
  "indexPageTitle": "API"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--skipIndexPage`

> Skips generation of a seperate API index page.

#### Type

`boolean`

#### Default

```json
{
  "skipIndexPage": "false"
}  
```

#### Usage

This option skips the generation of the index page if it is not required.

Please note this option will be ignored if a single entryPoint is defined as it will contain exported symbols.

[↑ Top](#options-guide)

***

### `--preserveAnchorCasing`

> Preserve anchor casing when generating links.

#### Type

`boolean`

#### Default

```json
{
  "preserveAnchorCasing": "false"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--anchorPrefix`

> Custom anchor prefix

#### Type

`string`

#### Default

```json
{
  "anchorPrefix": "undefined"
}  
```

#### Usage

[↑ Top](#options-guide)

***

## UI Options

UI Options

***

### `--excludeGroups`

> Excludes grouping by reflection kind so all members are rendered and sorted at the same level.

#### Type

`boolean`

#### Default

```json
{
  "excludeGroups": "false"
}  
```

#### Usage

By default members are grouped by kind (eg Classes, Functions etc).

This creates a flat structure where all members are displayed at the same level.

**With groups**

```markdown
# SomeModule

## Classes

### ClassA

## Functions

### FunctionA
```

**Without groups**

```markdown
# SomeModule

## ClassA

## FunctionA
```

[↑ Top](#options-guide)

***

### `--hidePageHeader`

> Do not print page header.

#### Type

`boolean`

#### Default

```json
{
  "hidePageHeader": "false"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--hidePageTitle`

> Do not print page title.

#### Type

`boolean`

#### Default

```json
{
  "hidePageTitle": "false"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--hideBreadcrumbs`

> Do not print breadcrumbs.

#### Type

`boolean`

#### Default

```json
{
  "hideBreadcrumbs": "false"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--hideInPageTOC`

> Do not render in-page TOC/Index items.

#### Type

`boolean`

#### Default

```json
{
  "hideInPageTOC": "false"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--hideHierarchy`

> Do not print reflection hierarchy.

#### Type

`boolean`

#### Default

```json
{
  "hideHierarchy": "false"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--identifiersAsCodeBlocks`

> Format signature and declaration identifiers in code blocks.

#### Type

`boolean`

#### Default

```json
{
  "identifiersAsCodeBlocks": "false"
}  
```

#### Usage

Note if `true` references will not be linked.

[↑ Top](#options-guide)

***

### `--propertiesFormat`

> Specify the render style of properties groups for interfaces and classes.

#### Type

`"list" | "table"`

#### Default

```json
{
  "propertiesFormat": "list"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--enumMembersFormat`

> Specify the render style of Enum members.

#### Type

`"list" | "table"`

#### Default

```json
{
  "enumMembersFormat": "list"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--typeDeclarationFormat`

> Specify the render style for type declaration members.

#### Type

`"list" | "table"`

#### Default

```json
{
  "typeDeclarationFormat": "list"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--tocFormat`

> Render TOC either as a simple list or a table with a description.

#### Type

`"list" | "table"`

#### Default

```json
{
  "tocFormat": "list"
}  
```

#### Usage

[↑ Top](#options-guide)

***

### `--titleTemplate`

> Specify a template for displaying page titles.

#### Type

`string`

#### Default

```json
{
  "titleTemplate": "{kind}: {name}"
}  
```

#### Usage

Supports {kind} and {name} placeholders.

    titleTemplate: "{kind}: {name}"

[↑ Top](#options-guide)

***
