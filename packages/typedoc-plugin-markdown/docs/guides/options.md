# Options Guide

## Contents

* [File output options](#file-output-options)
  * [`--outputFileStrategy`](#--outputfilestrategy)
  * [`--membersWithOwnFile`](#--memberswithownfile)
  * [`--entryFileName`](#--entryfilename)
* [Structure and formatting options](#structure-and-formatting-options)
  * [`--hidePageHeader`](#--hidepageheader)
  * [`--hidePageTitle`](#--hidepagetitle)
  * [`--hideBreadcrumbs`](#--hidebreadcrumbs)
  * [`--hideInPageTOC`](#--hideinpagetoc)
  * [`--indexPageTitle`](#--indexpagetitle)
  * [`--titleTemplate`](#--titletemplate)
  * [`--excludeGroups`](#--excludegroups)
  * [`--useCodeBlocks`](#--usecodeblocks)
  * [`--expandObjects`](#--expandobjects)
  * [`--parametersFormat`](#--parametersformat)
  * [`--propertiesFormat`](#--propertiesformat)
  * [`--enumMembersFormat`](#--enummembersformat)
  * [`--typeDeclarationFormat`](#--typedeclarationformat)
  * [`--indexFormat`](#--indexformat)
* [Utility options](#utility-options)
  * [`--preserveAnchorCasing`](#--preserveanchorcasing)
  * [`--anchorPrefix`](#--anchorprefix)
  * [`--namedAnchors`](#--namedanchors)

## File output options

### `--outputFileStrategy`

Determines how output files are generated. Defaults to `"members"`.

```shell
--outputFileStrategy <"members"|"modules">
```

#### Usage

TypeDoc creates documentation according to exports. The structure will be driven by the implemented entryPoints config. https://typedoc.org/guides/options/#entrypointstrategy.

This options aims to provide some flexibility as to how files can be generated.

**`--outputFileStrategy members`**

Generates an individual file for each exported member. This is the standard behaviour of the HTML theme and the plugin default.

In this example output folder structure modules `module-a` and `module-b` export two classes and variables each:

```
├── README.md
├── API.md
├── module-a
├── ├── README.md
│   ├── classes
│   │   ├── ClassA.md
│   │   ├── ClassB.md
├── ├── variables
│   │   ├── VariableA.md
│   │   ├── VariableB.md
├── module-b
├── ├── README.md
│   ├── classes
│   │   ├── ClassA.md
│   │   ├── ClassB.md
├── ├── variables
│   │   ├── VariableA.md
│   │   ├── VariableB.md
```

When `members` is set, it is also possible to further refine what members are exported to individual files with the [`membersWithOwnFile`](#membersWithOwnFile) option.

**`--outputFileStrategy modules`**

Generates a single file for every Module or Namespace where all members are hoisted to a single module file. This creates a flat navigation structure and reduces the amount of files generated.

The above example will output the following folder structure:

```
├── README.md
├── API.md
├── module-a.md
├── module-b.md
```

[↑ Top](#options-guide)

***

### `--membersWithOwnFile`

Determines which members are exported to their own file. Ignored when `outputFileStrategy` = `modules`. Defaults to `['Enum', 'Variable', 'Function', 'Class', 'Interface', 'TypeAlias']`.

```shell
--membersWithOwnFile Array<
    ['Enum' | 'Variable' | 'Function' | 'Class' | 'Interface' | 'TypeAlias']
  >
```

#### Usage

To export only Interfaces, classes and enums to their own file, the option should be configured in an options file as follows:

```js
{
  membersWithOwnFile: ['Interface', 'Class', 'Enum']
}
```

[↑ Top](#options-guide)

***

### `--entryFileName`

The file name of the entry page. Defaults to `"README.md"`.

```shell
--entryFileName <string>
```

#### Usage

The entry page in this context is the reference to the file that acts as a root page for a project and it's folders, equivalent to `index.html` for web pages.

`README.md` is recognised when browsing folders on repos and Wikis. `index.md` might be better if published as a web site.

The content of this file at the root of the project is conditional on if a readme file is resolved for the project.

A. If a readme file is resolved then two root files are generated:

```
├── README.md - (the project readme file)
├── API.md - (API index page)
```

B. If a readme file is NOT resolved (when `readme` = `none`), then the index page becomes the `entryFileName` page and there is no seperate index page.

```
├── README.md - (API index page)
```

[↑ Top](#options-guide)

***

## Structure and formatting options

### `--hidePageHeader`

Do not print page header. Defaults to `false`.

```shell
--hidePageHeader <boolean>
```

[↑ Top](#options-guide)

***

### `--hidePageTitle`

Do not print page title. Defaults to `false`.

```shell
--hidePageTitle <boolean>
```

[↑ Top](#options-guide)

***

### `--hideBreadcrumbs`

Do not print breadcrumbs. Defaults to `false`.

```shell
--hideBreadcrumbs <boolean>
```

[↑ Top](#options-guide)

***

### `--hideInPageTOC`

Do not render in-page TOC/Index items. Defaults to `false`.

```shell
--hideInPageTOC <boolean>
```

[↑ Top](#options-guide)

***

### `--indexPageTitle`

The title of project index page. Defaults to `"{projectName}"`.

```shell
--indexPageTitle <string>
```

#### Usage

This provides a mechanism to change the main project index page title.

Note this will also serve as the root breadcrumb text.

[↑ Top](#options-guide)

***

### `--titleTemplate`

Specify a template for displaying page titles. Defaults to `"{kind}: {name}"`.

```shell
--titleTemplate <string>
```

#### Usage

Supports {kind} and {name} placeholders.

Example for displaying name only:

```
titleTemplate: "{name}"
```

Example for displaying kind in backticks:

```
titleTemplate: "{name} `{kind}`"
```

[↑ Top](#options-guide)

***

### `--excludeGroups`

Excludes grouping by reflection kind so all members are rendered and sorted at the same level. Defaults to `false`.

```shell
--excludeGroups <boolean>
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

### `--useCodeBlocks`

Format signatures and declarations in code blocks. Defaults to `false`.

```shell
--useCodeBlocks <boolean>
```

#### Usage

This option can be used to improve readability and aesthetics when defining signatures and declarations.

*Default example:*

> **basicFunction**(someParam): `string`

*Example inside code block:*

```ts
basicFunction(someParam): string
```

Note when this option is set to `true` it is not possible to link to other references.

As a work around the {@link} tag can be be used to manually reference types.

[↑ Top](#options-guide)

***

### `--expandObjects`

Expand objects inside declarations. Defaults to `false`.

```shell
--expandObjects <boolean>
```

#### Usage

By default objects inside declaration are collapsed to preserve space and improve readability.

*Default example:*

`object`

*Expanded example:*

{ `x`: `string` }

[↑ Top](#options-guide)

***

### `--parametersFormat`

Specify the render style of parameter and type parameter groups. Defaults to `"list"`.

```shell
--parametersFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--propertiesFormat`

Specify the render style of properties groups for interfaces and classes. Defaults to `"list"`.

```shell
--propertiesFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--enumMembersFormat`

Specify the render style of Enum members. Defaults to `"list"`.

```shell
--enumMembersFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--typeDeclarationFormat`

Specify the render style for type declaration members. Defaults to `"list"`.

```shell
--typeDeclarationFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

### `--indexFormat`

Render indexes either as a simple list or a table with a description. Defaults to `"list"`.

```shell
--indexFormat <"list"|"table">
```

[↑ Top](#options-guide)

***

## Utility options

### `--preserveAnchorCasing`

Preserve anchor casing when generating links. Defaults to `false`.

```shell
--preserveAnchorCasing <boolean>
```

[↑ Top](#options-guide)

***

### `--anchorPrefix`

Custom anchor prefix Defaults to `"undefined"`.

```shell
--anchorPrefix <string>
```

[↑ Top](#options-guide)

***

### `--namedAnchors`

Use HTML named anchor tags for internal anchor links. Defaults to `{"headings":false,"tableRows":false}`.

```shell
--namedAnchors <{"headings": boolean}, {"tableRows": boolean}>
```

#### Usage

Internal anchor links are used when referencing symbols with in-page table of contents or when referenced with  by {@link} tags.

There are two flags exposed by this option:

* `headings` - Add HTML named anchors to heading for implementations that do not assign header ids.
* `tableRows` - Add anchors to table rows when table formats are selected and no heading elements are present.

[↑ Top](#options-guide)

***
