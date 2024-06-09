[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [theme](../README.md) / MarkdownThemeContext

# Class: MarkdownThemeContext

The theme context class that is provided as context on the rendering of every page.
It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.

This class can be used to customize the theme output by extending the class and overriding the templates, partials and helpers.

## Contents

* [Constructors](#constructors)
  * [new MarkdownThemeContext()](#new-markdownthemecontext)
* [Properties](#properties)
  * [internationalization](#internationalization)
  * [i18n](#i18n)
  * [theme](#theme)
  * [page](#page)
  * [options](#options)
  * [packagesMetaData](#packagesmetadata)
* [Methods](#methods)
  * [getPackageMetaData()](#getpackagemetadata)
  * [getRelativeUrl()](#getrelativeurl)
  * [hook()](#hook)
* [Resources](#resources)
  * [templates](#templates)
    * [document()](#document)
    * [project()](#project)
    * [readme()](#readme)
    * [reflection()](#reflection)
  * [partials](#partials)
    * [Comment Partials](#comment-partials)
    * [Container Partials](#container-partials)
    * [Member Partials](#member-partials)
    * [Page Partials](#page-partials)
    * [Type Partials](#type-partials)
  * [helpers](#helpers)
    * [getCommentParts()](#getcommentparts)
    * [getDeclarationType()](#getdeclarationtype)
    * [getDescriptionForReflection()](#getdescriptionforreflection)
    * [getFlattenedDeclarations()](#getflatteneddeclarations)
    * [getGroupIndexList()](#getgroupindexlist)
    * [getGroupIndexTable()](#getgroupindextable)
    * [getGroupIndex()](#getgroupindex)
    * [getHierarchyType()](#gethierarchytype)
    * [getKeyword()](#getkeyword)
    * [getModifier()](#getmodifier)
    * [getParameterDefaultValue()](#getparameterdefaultvalue)
    * [getProjectName()](#getprojectname)
    * [getPropertyDefaultValue()](#getpropertydefaultvalue)
    * [getReflectionFlags()](#getreflectionflags)
    * [getReturnType()](#getreturntype)
    * [isGroupKind()](#isgroupkind)
    * [useTableFormat()](#usetableformat)

## Constructors

### new MarkdownThemeContext()

> **new MarkdownThemeContext**(`theme`, `page`, `options`): [`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Parameters

| Parameter | Type                                                                                                                                                     | Description                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `theme`   | [`MarkdownTheme`](MarkdownTheme.md)                                                                                                                      | The theme instance.                      |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> | The current page event.                  |
| `options` | [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)                                                                                  | The options provided to the application. |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:43](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L43)

## Properties

Properties are passed into the constructor and are used to provide context to the theme.

### internationalization

> **internationalization**: `Internationalization`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:37](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L37)

***

### i18n

> **i18n**: `TranslationProxy`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L38)

***

### theme

> `private` **theme**: [`MarkdownTheme`](MarkdownTheme.md)

The theme instance.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L47)

***

### page

> `readonly` **page**: [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>

The current page event.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L51)

***

### options

> `readonly` **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

The options provided to the application.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:55](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L55)

***

### packagesMetaData

> `private` **packagesMetaData**: `Record`\<`string`, [`PackageMetaData`](../namespaces/types/interfaces/PackageMetaData.md)>

Holds meta data for individual packages (if entryPointStrategy equals `packages`).

This is required for generating package specific documentation.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:67](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L67)

## Methods

General context aware helper methods not bound to any specific models that can be used by the theme resources.

### getPackageMetaData()

> **getPackageMetaData**(`packageName`): [`PackageMetaData`](../namespaces/types/interfaces/PackageMetaData.md)

Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.

#### Parameters

| Parameter     | Type     | Description                                               |
| ------------- | -------- | --------------------------------------------------------- |
| `packageName` | `string` | The package name as per `name` field from `package.json`. |

#### Returns

[`PackageMetaData`](../namespaces/types/interfaces/PackageMetaData.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:115](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L115)

***

### getRelativeUrl()

> **getRelativeUrl**(`url`, `ignorePublicPath`): `string`

Returns the relative URL (from the current page context url).

If public path is set, it will be used as the base URL.

#### Parameters

| Parameter          | Type      | Default value | Description                        |
| ------------------ | --------- | ------------- | ---------------------------------- |
| `url`              | `string`  | `undefined`   | The URL to make relative.          |
| `ignorePublicPath` | `boolean` | `false`       | Whether to ignore the public path. |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:127](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L127)

***

### hook()

`Internal`

> **hook**(`name`): `string`\[]

Hook into the TypeDoc rendering system.

#### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `name`    | keyof [`MarkdownRendererHooks`](../../app/namespaces/types/interfaces/MarkdownRendererHooks.md) |

#### Returns

`string`\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:157](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L157)

## Resources

Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.

### templates

> **templates**: `object`

Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.

All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.

#### document()

> **document**: (`page`) => `string`

Template that maps to a project document.

##### Parameters

| Parameter | Type                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`DocumentReflection`> |

##### Returns

`string`

#### project()

> **project**: (`page`) => `string`

Template that maps to the root project reflection. This will be the index page / documentation root page.

##### Parameters

| Parameter | Type                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

##### Returns

`string`

#### readme()

> **readme**: (`page`) => `string`

Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.

##### Parameters

| Parameter | Type                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

##### Returns

`string`

#### reflection()

> **reflection**: (`page`) => `string`

Template that maps to individual reflection models.

##### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)> |

##### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:75](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L75)

***

### partials

> **partials**: `object`

The `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.

Please note that partials::

* Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
* Can call other partials and helpers.
* Must return a string.

Partials are categorised by their use:

* Page Partials: Partials that render core page elements such as header and breadcrumbs.
* Container Partials: Partials that are used to render reflection groups and categories.
* Member Partials: Partials that render specific parts of reflections.
* Comment Partials: Partials that render comments.
* Type Partials: Partials that render specific TypeDoc model types.

#### Comment Partials

| Name           | Type                             |
| -------------- | -------------------------------- |
| `comment`      | (`model`, `options`) => `string` |
| `commentParts` | (`model`) => `string`            |

#### Container Partials

| Name         | Type                             | Description                                    |
| ------------ | -------------------------------- | ---------------------------------------------- |
| `body`       | (`model`, `options`) => `string` | -                                              |
| `categories` | (`model`, `options`) => `string` | Renders a collection of reflection categories. |
| `groups`     | (`model`, `options`) => `string` | Renders a collection of reflection groups.     |
| `members`    | (`model`, `options`) => `string` | Renders a collection of members.               |

#### Member Partials

| Name                   | Type                              | Description                                                                                                                                            |
| ---------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessor`             | (`model`, `options`) => `string`  | Renders an accessor member.                                                                                                                            |
| `constructor`          | (`model`, `options`) => `string`  | Renders an constructor member.                                                                                                                         |
| `memberContainer`      | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `declaration`          | (`model`, `options`) => `string`  | Renders a standard declaration member.                                                                                                                 |
| `declarationTitle`     | (`model`) => `string`             | Comments for declaration                                                                                                                               |
| `documents`            | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `enumMembersTable`     | (`model`) => `string`             | Renders enum members as a table.                                                                                                                       |
| `hierarchy`            | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `indexSignature`       | (`model`) => `string`             | Renders an index signature block                                                                                                                       |
| `inheritance`          | (`model`, `options`) => `string`  | Renders an inheritance section.                                                                                                                        |
| `memberTitle`          | (`model`) => `string`             | Renders the main member title.                                                                                                                         |
| `memberWithGroups`     | (`model`, `options`) => `string`  | Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.                                                |
| `parametersList`       | (`model`) => `string`             | -                                                                                                                                                      |
| `parametersTable`      | (`model`) => `string`             | -                                                                                                                                                      |
| `propertiesTable`      | (`model`, `options`?) => `string` | Renders a collection of properties in a table. There is no association list partial for properties as these are handled as a standard list of members. |
| `referenceMember`      | (`model`) => `string`             | Renders an reference member.                                                                                                                           |
| `reflectionIndex`      | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `signature`            | (`model`, `options`) => `string`  | Renders a signature member.                                                                                                                            |
| `signatureParameters`  | (`model`) => `string`             | -                                                                                                                                                      |
| `signatureReturns`     | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `signatureTitle`       | (`model`, `options`?) => `string` | -                                                                                                                                                      |
| `signatures`           | (`model`, `options`) => `string`  | Renders a signature collection.                                                                                                                        |
| `sources`              | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `member`               | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `typeAndParent`        | (`model`) => `string`             | -                                                                                                                                                      |
| `typeArguments`        | (`model`, `options`?) => `string` | -                                                                                                                                                      |
| `typeDeclaration`      | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `typeDeclarationList`  | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `typeDeclarationTable` | (`model`, `options`) => `string`  | -                                                                                                                                                      |
| `typeParametersList`   | (`model`) => `string`             | -                                                                                                                                                      |
| `typeParametersTable`  | (`model`) => `string`             | -                                                                                                                                                      |

#### Page Partials

| Name            | Type                  |
| --------------- | --------------------- |
| `breadcrumbs`   | () => `string`        |
| `footer`        | () => `string`        |
| `header`        | () => `string`        |
| `packagesIndex` | (`model`) => `string` |
| `pageTitle`     | () => `string`        |

#### Type Partials

| Name               | Type                              | Description                                                      |
| ------------------ | --------------------------------- | ---------------------------------------------------------------- |
| `arrayType`        | (`model`) => `string`             | -                                                                |
| `conditionalType`  | (`model`) => `string`             | -                                                                |
| `indexAccessType`  | (`model`) => `string`             | -                                                                |
| `inferredType`     | (`model`) => `string`             | -                                                                |
| `intersectionType` | (`model`) => `string`             | -                                                                |
| `intrinsicType`    | (`model`) => `string`             | -                                                                |
| `literalType`      | (`model`) => `string`             | -                                                                |
| `namedTupleType`   | (`model`) => `string`             | -                                                                |
| `queryType`        | (`model`) => `string`             | -                                                                |
| `referenceType`    | (`model`) => `string`             | -                                                                |
| `declarationType`  | (`model`) => `string`             | -                                                                |
| `functionType`     | (`model`, `options`?) => `string` | -                                                                |
| `reflectionType`   | (`model`, `options`?) => `string` | -                                                                |
| `someType`         | (`model`?) => `string`            | Takes a generic Type and returns the appropriate partial for it. |
| `tupleType`        | (`model`) => `string`             | -                                                                |
| `typeOperatorType` | (`model`) => `string`             | -                                                                |
| `unionType`        | (`model`) => `string`             | -                                                                |
| `unknownType`      | (`model`) => `string`             | -                                                                |

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:95](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L95)

***

### helpers

> **helpers**: `object`

The `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.

Please note that partials:

* Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
* Can reference other helpers but should not reference partials.
* Can return strings or other models.

#### getCommentParts()

> **getCommentParts**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `model`   | [`CommentDisplayPart`](https://typedoc.org/api/types/Models.CommentDisplayPart.html)\[] |

##### Returns

`string`

#### getDeclarationType()

> **getDeclarationType**: (`model`) => `undefined` | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`undefined` | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)

#### getDescriptionForReflection()

> **getDescriptionForReflection**: (`model`) => `null` | `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`null` | `string`

#### getFlattenedDeclarations()

> **getFlattenedDeclarations**: (`model`, `options`?) => [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[]

##### Parameters

| Parameter                    | Type                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `model`                      | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`?                   | `object`                                                                                        |
| `options.includeSignatures`? | `boolean`                                                                                       |

##### Returns

[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[]

#### getGroupIndexList()

> **getGroupIndexList**: (`children`) => `string`

##### Parameters

| Parameter  | Type                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `children` | `DocumentReflection`\[] \| [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |

##### Returns

`string`

#### getGroupIndexTable()

> **getGroupIndexTable**: (`children`, `kind`?) => `string`

##### Parameters

| Parameter  | Type                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `children` | `DocumentReflection`\[] \| [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `kind`?    | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)                                             |

##### Returns

`string`

#### getGroupIndex()

> **getGroupIndex**: (`group`) => `any`

##### Parameters

| Parameter | Type                                                                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `group`   | [`ReflectionCategory`](https://typedoc.org/api/types/Models.ReflectionCategory.html) \| [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html) |

##### Returns

`any`

#### getHierarchyType()

> **getHierarchyType**: (`model`, `options`?) => `string`

##### Parameters

| Parameter           | Type                                                               |
| ------------------- | ------------------------------------------------------------------ |
| `model`             | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html) |
| `options`?          | `object`                                                           |
| `options.isTarget`? | `boolean`                                                          |

##### Returns

`string`

#### getKeyword()

> **getKeyword**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `model`   | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html) |

##### Returns

`string`

#### getModifier()

> **getModifier**: (`model`) => `null` | `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`null` | `string`

#### getParameterDefaultValue()

> **getParameterDefaultValue**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                     |
| --------- | ---------------------------------------------------------------------------------------- |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html) |

##### Returns

`string`

#### getProjectName()

> **getProjectName**: (`stringWithPlaceholders`, `page`) => `string`

##### Parameters

| Parameter                | Type                                                                                                                                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stringWithPlaceholders` | `string`                                                                                                                                                 |
| `page`                   | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> |

##### Returns

`string`

#### getPropertyDefaultValue()

> **getPropertyDefaultValue**: (`model`) => `null` | `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`null` | `string`

#### getReflectionFlags()

> **getReflectionFlags**: (`reflection`) => `string`\[]

##### Parameters

| Parameter    | Type                                                                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

##### Returns

`string`\[]

#### getReturnType()

> **getReturnType**: (`model`?) => `string`

##### Parameters

| Parameter | Type                                                               |
| --------- | ------------------------------------------------------------------ |
| `model`?  | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html) |

##### Returns

`string`

#### isGroupKind()

> **isGroupKind**: (`model`) => `boolean`

##### Parameters

| Parameter | Type                                                                                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

##### Returns

`boolean`

#### useTableFormat()

> **useTableFormat**: (`key`) => `boolean`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `key`     | `"parameters"` \| `"properties"` \| `"enums"` \| `"typeDeclarations"` \| `"propertyMembers"` |

##### Returns

`boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts:108](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/theme/markdown-theme-context.ts#L108)
