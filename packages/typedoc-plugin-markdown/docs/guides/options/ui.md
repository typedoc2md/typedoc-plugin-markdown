# UI Options

## Contents

*   [indexPageTitle](#indexpagetitle)
*   [excludeGroups](#excludegroups)
*   [hidePageHeader](#hidepageheader)
*   [hidePageTitle](#hidepagetitle)
*   [hideBreadcrumbs](#hidebreadcrumbs)
*   [hideInPageTOC](#hideinpagetoc)
*   [hideHierarchy](#hidehierarchy)
*   [identifiersAsCodeBlocks](#identifiersascodeblocks)
*   [propertiesFormat](#propertiesformat)
*   [enumMembersFormat](#enummembersformat)
*   [typeDeclarationFormat](#typedeclarationformat)
*   [tocFormat](#tocformat)
*   [titleTemplate](#titletemplate)

## indexPageTitle

**`string`**

The title of API index page.

```json
{
  indexPageTitle: "API Reference"
}  
```

## excludeGroups

**`boolean`**

Excludes grouping by reflection kind so all members are rendered and sorted at the same level.

```json
{
  excludeGroups: "false"
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
  hidePageHeader: "false"
}  
```

## hidePageTitle

**`boolean`**

Do not print page title.

```json
{
  hidePageTitle: "false"
}  
```

## hideBreadcrumbs

**`boolean`**

Do not print breadcrumbs.

```json
{
  hideBreadcrumbs: "false"
}  
```

## hideInPageTOC

**`boolean`**

Do not render in-page TOC/Index items.

```json
{
  hideInPageTOC: "false"
}  
```

## hideHierarchy

**`boolean`**

Do not print reflection hierarchy.

```json
{
  hideHierarchy: "false"
}  
```

## identifiersAsCodeBlocks

**`boolean`**

Format signature and declaration identifiers in code blocks.

```json
{
  identifiersAsCodeBlocks: "false"
}  
```

Note if `true` references will not be linked.

## propertiesFormat

**`"list" | "table"`**

Specify the render style of properties groups for interfaces and classes.

```json
{
  propertiesFormat: "list"
}  
```

## enumMembersFormat

**`"list" | "table"`**

Specify the render style of Enum members.

```json
{
  enumMembersFormat: "list"
}  
```

## typeDeclarationFormat

**`"list" | "table"`**

Specify the render style for type declaration members.

```json
{
  typeDeclarationFormat: "list"
}  
```

## tocFormat

**`"list" | "table"`**

Render TOC either as a simple list or a table with a description.

```json
{
  tocFormat: "list"
}  
```

## titleTemplate

**`string`**

Specify a template for displaying page titles.

```json
{
  titleTemplate: "{kind}: {name}"
}  
```

Supports {kind} and {name} placeholders.

    titleTemplate: "{kind}: {name}"
