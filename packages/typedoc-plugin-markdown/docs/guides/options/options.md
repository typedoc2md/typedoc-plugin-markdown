# Plugin Options

Some introduction to options.

## Contents

- [outputFileStrategy](#outputfilestrategy)
- [includeFileNumberPrefixes](#includefilenumberprefixes)
- [flattenOutputFiles](#flattenoutputfiles)
- [entryFileName](#entryfilename)
- [indexFileName](#indexfilename)
- [indexPageTitle](#indexpagetitle)
- [skipIndexPage](#skipindexpage)
- [excludeGroups](#excludegroups)
- [hidePageHeader](#hidepageheader)
- [hidePageTitle](#hidepagetitle)
- [hideBreadcrumbs](#hidebreadcrumbs)
- [hideInPageTOC](#hideinpagetoc)
- [hideHierarchy](#hidehierarchy)
- [identifiersAsCodeBlocks](#identifiersascodeblocks)
- [propertiesFormat](#propertiesformat)
- [enumMembersFormat](#enummembersformat)
- [typeDeclarationFormat](#typedeclarationformat)
- [tocFormat](#tocformat)
- [titleTemplate](#titletemplate)
- [preserveAnchorCasing](#preserveanchorcasing)

## Output Options

### `--outputFileStrategy`

`"members" | "modules"`

Determines how output files are generated.

```json
{
  "outputFileStrategy": "members"
}
```

TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. <https://typedoc.org/guides/options/#entrypointstrategy>.

This options aims to provide some flexibility as to how files can be generated.

**"members"**

Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.

![outputFileStrategy members folders](../images/options/outputFileStrategy-members.png)

**"modules"**

Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

![outputFileStrategy modules folders](../images/options/outputFileStrategy-modules.png)

---

### `--includeFileNumberPrefixes`

**`boolean`**

Prefixes generated files and folders with number prefixes.

```json
{
  "includeFileNumberPrefixes": "false"
}
```

This makes files and folders appear in the file system in the same order as they are sorted. This is useful where auto sidebar generation may be required.

![includeFileNumberPrefixes folders](../images/options/includeFileNumberPrefixes.png)

## flattenOutputFiles

**`boolean`**

Flatten output files without folders.

```json
{
  "flattenOutputFiles": "false"
}
```

This creates a flat folder structure without any folders - a required format for some Wikis.

![flattenOutputFiles folders](../images/options/flattenOutputFiles.png)

## entryFileName

**`string`**

The file name of the entry page.

```json
{
  "entryFileName": "README.md"
}
```

`README.md` is recognised when browsing folders on repos and Wikis. `index.md` might be better if published as a web site.

Note the content of this file is either the API entry / index page, or the project readme (dependant on if a readme file is resolved or not).

a. If a readme file is resolved then two root files are generated:

├── {entryFileName} - (the project readme file)
├── API.md - (API index page)

b. If a readme file is NOT resolved, then the index page becomes the entryFileName page.

├── {entryFileName} - (API index page)

## indexFileName

**`string`**

The file name the seperate index page.

```json
{
  "indexFileName": "API.md"
}
```

This page either contains the module index or exported symbols depending on the given `entryPoints`.

This page may not be required (if navigation is present for example) and can be skipped. See `skipIndexPage`.

This option is ignored if `readme=none` or `skipIndexPage=true`.

## indexPageTitle

**`string`**

The title of API index page.

```json
{
  "indexPageTitle": "API Reference"
}
```

## skipIndexPage

**`boolean`**

Skips generation of a seperate API index page.

```json
{
  "skipIndexPage": "false"
}
```

This option skips the generation of the index page if it is not required.

Please note this option will be ignored if a single entryPoint is defined as it will contain exported symbols.

## excludeGroups

**`boolean`**

Excludes grouping by reflection kind so all members are rendered and sorted at the same level.

```json
{
  "excludeGroups": "false"
}
```

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

## hidePageHeader

**`boolean`**

Do not print page header.

```json
{
  "hidePageHeader": "false"
}
```

## hidePageTitle

**`boolean`**

Do not print page title.

```json
{
  "hidePageTitle": "false"
}
```

## hideBreadcrumbs

**`boolean`**

Do not print breadcrumbs.

```json
{
  "hideBreadcrumbs": "false"
}
```

## hideInPageTOC

**`boolean`**

Do not render in-page TOC/Index items.

```json
{
  "hideInPageTOC": "false"
}
```

## hideHierarchy

**`boolean`**

Do not print reflection hierarchy.

```json
{
  "hideHierarchy": "false"
}
```

## identifiersAsCodeBlocks

**`boolean`**

Format signature and declaration identifiers in code blocks.

```json
{
  "identifiersAsCodeBlocks": "false"
}
```

Note if `true` references will not be linked.

## propertiesFormat

**`"list" | "table"`**

Specify the render style of properties groups for interfaces and classes.

```json
{
  "propertiesFormat": "list"
}
```

## enumMembersFormat

**`"list" | "table"`**

Specify the render style of Enum members.

```json
{
  "enumMembersFormat": "list"
}
```

## typeDeclarationFormat

**`"list" | "table"`**

Specify the render style for type declaration members.

```json
{
  "typeDeclarationFormat": "list"
}
```

## tocFormat

**`"list" | "table"`**

Render TOC either as a simple list or a table with a description.

```json
{
  "tocFormat": "list"
}
```

## titleTemplate

**`string`**

Specify a template for displaying page titles.

```json
{
  "titleTemplate": "{kind}: {name}"
}
```

Supports {kind} and {name} placeholders.

    titleTemplate: "{kind}: {name}"

## preserveAnchorCasing

**`boolean`**

Preserve anchor casing when generating links.

```json
{
  "preserveAnchorCasing": "false"
}
```
