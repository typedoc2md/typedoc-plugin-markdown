[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [theme](../README.md) / MarkdownThemeContext

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
  * [hook()](#hook)
    * [Type Parameters](#type-parameters)
* [Methods](#methods)
  * [getPackageMetaData()](#getpackagemetadata)
  * [getRelativeUrl()](#getrelativeurl)
* [Resources](#resources)
  * [templates](#templates)
    * [document()](#document)
    * [project()](#project)
    * [readme()](#readme)
    * [reflection()](#reflection)
  * [partials](#partials)
    * [comment()](#comment)
    * [body()](#body)
    * [categories()](#categories)
    * [groups()](#groups)
    * [members()](#members)
    * [accessor()](#accessor)
    * [constructor()](#constructor)
    * [memberContainer()](#membercontainer)
    * [declaration()](#declaration)
    * [declarationTitle()](#declarationtitle)
    * [documents()](#documents)
    * [enumMembersTable()](#enummemberstable)
    * [hierarchy()](#hierarchy)
    * [indexSignature()](#indexsignature)
    * [inheritance()](#inheritance)
    * [memberTitle()](#membertitle)
    * [memberWithGroups()](#memberwithgroups)
    * [parametersList()](#parameterslist)
    * [parametersTable()](#parameterstable)
    * [propertiesTable()](#propertiestable)
    * [referenceMember()](#referencemember)
    * [reflectionIndex()](#reflectionindex)
    * [signature()](#signature)
    * [signatureParameters()](#signatureparameters)
    * [signatureReturns()](#signaturereturns)
    * [signatureTitle()](#signaturetitle)
    * [signatures()](#signatures)
    * [sources()](#sources)
    * [member()](#member)
    * [typeAndParent()](#typeandparent)
    * [typeArguments()](#typearguments)
    * [typeDeclaration()](#typedeclaration)
    * [typeDeclarationList()](#typedeclarationlist)
    * [typeDeclarationTable()](#typedeclarationtable)
    * [typeParametersList()](#typeparameterslist)
    * [typeParametersTable()](#typeparameterstable)
    * [breadcrumbs()](#breadcrumbs)
    * [footer()](#footer)
    * [header()](#header)
    * [packagesIndex()](#packagesindex)
    * [pageTitle()](#pagetitle)
    * [arrayType()](#arraytype)
    * [conditionalType()](#conditionaltype)
    * [indexAccessType()](#indexaccesstype)
    * [inferredType()](#inferredtype)
    * [intersectionType()](#intersectiontype)
    * [intrinsicType()](#intrinsictype)
    * [literalType()](#literaltype)
    * [namedTupleType()](#namedtupletype)
    * [queryType()](#querytype)
    * [referenceType()](#referencetype)
    * [declarationType()](#declarationtype)
    * [functionType()](#functiontype)
    * [reflectionType()](#reflectiontype)
    * [someType()](#sometype)
    * [tupleType()](#tupletype)
    * [typeOperatorType()](#typeoperatortype)
    * [unionType()](#uniontype)
    * [unknownType()](#unknowntype)
  * [helpers](#helpers)
    * [getAngleBracket()](#getanglebracket)
    * [getCommentForReflection()](#getcommentforreflection)
    * [getCommentParts()](#getcommentparts)
    * [getDeclarationType()](#getdeclarationtype)
    * [getDescriptionForComment()](#getdescriptionforcomment)
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

| Parameter | Type                                                                                                                               | Description                              |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `theme`   | [`MarkdownTheme`](MarkdownTheme.md)                                                                                                | The theme instance.                      |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)> | The current page event.                  |
| `options` | [`Options`](https://typedoc.org/api/types/Configuration.Options.html)                                                              | The options provided to the application. |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:44](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L44)

## Properties

Properties are passed into the constructor and are used to provide context to the theme.

### internationalization

> **internationalization**: `Internationalization`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L38)

***

### i18n

> **i18n**: `TranslationProxy`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:39](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L39)

***

### theme

> `private` **theme**: [`MarkdownTheme`](MarkdownTheme.md)

The theme instance.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:48](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L48)

***

### page

> `readonly` **page**: [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)>

The current page event.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:52](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L52)

***

### options

> `readonly` **options**: [`Options`](https://typedoc.org/api/types/Configuration.Options.html)

The options provided to the application.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:56](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L56)

***

### packagesMetaData

> `private` **packagesMetaData**: `Record`\<`string`, [`PackageMetaData`](../../types/interfaces/PackageMetaData.md)>

Holds meta data for individual packages (if entryPointStrategy equals `packages`).

This is required for generating package specific documentation.

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:70](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L70)

***

### hook()

> **hook**: \<`K`>(`event`, ...`args`) => `string`\[]

Emits an event to all currently subscribed listeners.

#### Type Parameters

| Type Parameter                                                                                 |
| ---------------------------------------------------------------------------------------------- |
| `K` *extends* keyof [`MarkdownRendererHooks`](../../types/interfaces/MarkdownRendererHooks.md) |

#### Parameters

| Parameter | Type                                                                             | Description                           |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| `event`   | `K`                                                                              | the event to emit.                    |
| ...`args` | [`MarkdownRendererHooks`](../../types/interfaces/MarkdownRendererHooks.md)\[`K`] | any arguments required for the event. |

#### Returns

`string`\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:162](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L162)

## Methods

General context aware helper methods not bound to any specific models that can be used by the theme resources.

### getPackageMetaData()

> **getPackageMetaData**(`packageName`): [`PackageMetaData`](../../types/interfaces/PackageMetaData.md)

**`Internal`**

Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.

#### Parameters

| Parameter     | Type     | Description                                               |
| ------------- | -------- | --------------------------------------------------------- |
| `packageName` | `string` | The package name as per `name` field from `package.json`. |

#### Returns

[`PackageMetaData`](../../types/interfaces/PackageMetaData.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:120](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L120)

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

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:132](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L132)

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

| Parameter | Type                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<`DocumentReflection`> |

##### Returns

`string`

#### project()

> **project**: (`page`) => `string`

Template that maps to the root project reflection. This will be the index page / documentation root page.

##### Parameters

| Parameter | Type                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

##### Returns

`string`

#### readme()

> **readme**: (`page`) => `string`

Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.

##### Parameters

| Parameter | Type                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

##### Returns

`string`

#### reflection()

> **reflection**: (`page`) => `string`

Template that maps to individual reflection models.

##### Parameters

| Parameter | Type                                                                                                                                                            |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)> |

##### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:78](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L78)

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

#### comment()

> **comment**: (`model`, `options`) => `string`

##### Parameters

| Parameter                | Type                                                             |
| ------------------------ | ---------------------------------------------------------------- |
| `model`                  | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html) |
| `options`                | `object`                                                         |
| `options.headingLevel`?  | `number`                                                         |
| `options.showSummary`?   | `boolean`                                                        |
| `options.showTags`?      | `boolean`                                                        |
| `options.isTableColumn`? | `boolean`                                                        |

##### Returns

`string`

#### body()

> **body**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `model`                | [`ContainerReflection`](https://typedoc.org/api/classes/Models.ContainerReflection.html) |
| `options`              | `object`                                                                                 |
| `options.headingLevel` | `number`                                                                                 |

##### Returns

`string`

#### categories()

> **categories**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                               |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| `model`                | [`ReflectionCategory`](https://typedoc.org/api/types/ReflectionCategory.DeclarationOption.html)\[] |
| `options`              | `object`                                                                                           |
| `options.headingLevel` | `number`                                                                                           |

##### Returns

`string`

#### groups()

> **groups**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                           |
| ---------------------- | ------------------------------------------------------------------------------ |
| `model`                | [`ReflectionGroup`](https://typedoc.org/api/classes/ReflectionGroup.html)\[]   |
| `options`              | `object`                                                                       |
| `options.headingLevel` | `number`                                                                       |
| `options.kind`         | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html) |

##### Returns

`string`

#### members()

> **members**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`              | `object`                                                                                        |
| `options.headingLevel` | `number`                                                                                        |

##### Returns

`string`

#### accessor()

> **accessor**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

##### Returns

`string`

#### constructor()

> **constructor**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

##### Returns

`string`

#### memberContainer()

> **memberContainer**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

##### Returns

`string`

#### declaration()

> **declaration**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

##### Returns

`string`

#### declarationTitle()

> **declarationTitle**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`string`

#### documents()

> **documents**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                                                                                                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \| [`ContainerReflection`](https://typedoc.org/api/classes/Models.ContainerReflection.html) |
| `options`              | `object`                                                                                                                                                                                                                                                                         |
| `options.headingLevel` | `number`                                                                                                                                                                                                                                                                         |

##### Returns

`string`

#### enumMembersTable()

> **enumMembersTable**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |

##### Returns

`string`

#### hierarchy()

> **hierarchy**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `model`                | [`DeclarationHierarchy`](https://typedoc.org/api/classes/Models.DeclarationHierarchy.html) |
| `options`              | `object`                                                                                   |
| `options.headingLevel` | `number`                                                                                   |

##### Returns

`string`

#### indexSignature()

> **indexSignature**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `model`   | [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |

##### Returns

`string`

#### inheritance()

> **inheritance**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |
| `options`              | `object`                                                                                                                                                                          |
| `options.headingLevel` | `number`                                                                                                                                                                          |

##### Returns

`string`

#### memberTitle()

> **memberTitle**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`string`

#### memberWithGroups()

> **memberWithGroups**: (`model`, `options`) => `string`

Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

##### Returns

`string`

#### parametersList()

> **parametersList**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/ParameterReflection.html)\[] |

##### Returns

`string`

#### parametersTable()

> **parametersTable**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/ParameterReflection.html)\[] |

##### Returns

`string`

#### propertiesTable()

> **propertiesTable**: (`model`, `options`?) => `string`

Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.

##### Parameters

| Parameter               | Type                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| `model`                 | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`?              | `object`                                                                                        |
| `options.isEventProps`? | `boolean`                                                                                       |

##### Returns

`string`

#### referenceMember()

> **referenceMember**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `model`   | [`ReferenceReflection`](https://typedoc.org/api/classes/ReferenceReflection.html) |

##### Returns

`string`

#### reflectionIndex()

> **reflectionIndex**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `options`              | `object`                                                                                                                                                                             |
| `options.headingLevel` | `number`                                                                                                                                                                             |

##### Returns

`string`

#### signature()

> **signature**: (`model`, `options`) => `string`

##### Parameters

| Parameter                     | Type                                                                              |
| ----------------------------- | --------------------------------------------------------------------------------- |
| `model`                       | [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |
| `options`                     | `object`                                                                          |
| `options.headingLevel`        | `number`                                                                          |
| `options.nested`?             | `boolean`                                                                         |
| `options.accessor`?           | `string`                                                                          |
| `options.multipleSignatures`? | `boolean`                                                                         |

##### Returns

`string`

#### signatureParameters()

> **signatureParameters**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/ParameterReflection.html)\[] |

##### Returns

`string`

#### signatureReturns()

> **signatureReturns**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                              |
| ---------------------- | --------------------------------------------------------------------------------- |
| `model`                | [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |
| `options`              | `object`                                                                          |
| `options.headingLevel` | `number`                                                                          |

##### Returns

`string`

#### signatureTitle()

> **signatureTitle**: (`model`, `options`?) => `string`

##### Parameters

| Parameter              | Type                                                                              |
| ---------------------- | --------------------------------------------------------------------------------- |
| `model`                | [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |
| `options`?             | `object`                                                                          |
| `options.accessor`?    | `string`                                                                          |
| `options.includeType`? | `boolean`                                                                         |

##### Returns

`string`

#### signatures()

> **signatures**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

##### Returns

`string`

#### sources()

> **sources**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |
| `options`              | `object`                                                                                                                                                                          |
| `options.headingLevel` | `number`                                                                                                                                                                          |

##### Returns

`string`

#### member()

> **member**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

##### Returns

`string`

#### typeAndParent()

> **typeAndParent**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                                                                          |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`   | [`ReferenceType`](https://typedoc.org/api/classes/ReferenceType.html) \| [`ArrayType`](https://typedoc.org/api/classes/Models.ArrayType.html) |

##### Returns

`string`

#### typeArguments()

> **typeArguments**: (`model`, `options`?) => `string`

##### Parameters

| Parameter                | Type                                                           |
| ------------------------ | -------------------------------------------------------------- |
| `model`                  | [`SomeType`](https://typedoc.org/api/classes/SomeType.html)\[] |
| `options`?               | `object`                                                       |
| `options.forceCollapse`? | `boolean`                                                      |

##### Returns

`string`

#### typeDeclaration()

> **typeDeclaration**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

##### Returns

`string`

#### typeDeclarationList()

> **typeDeclarationList**: (`model`, `options`) => `string`

##### Parameters

| Parameter              | Type                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`              | `object`                                                                                        |
| `options.headingLevel` | `number`                                                                                        |

##### Returns

`string`

#### typeDeclarationTable()

> **typeDeclarationTable**: (`model`, `options`) => `string`

##### Parameters

| Parameter       | Type                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `model`         | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`       | `object`                                                                                        |
| `options.kind`? | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)                  |

##### Returns

`string`

#### typeParametersList()

> **typeParametersList**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`TypeParameterReflection`](https://typedoc.org/api/classes/TypeParameterReflection.html)\[] |

##### Returns

`string`

#### typeParametersTable()

> **typeParametersTable**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`TypeParameterReflection`](https://typedoc.org/api/classes/TypeParameterReflection.html)\[] |

##### Returns

`string`

#### breadcrumbs()

> **breadcrumbs**: () => `string`

##### Returns

`string`

#### footer()

> **footer**: () => `string`

##### Returns

`string`

#### header()

> **header**: () => `string`

##### Returns

`string`

#### packagesIndex()

> **packagesIndex**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `model`   | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

##### Returns

`string`

#### pageTitle()

> **pageTitle**: () => `string`

##### Returns

`string`

#### arrayType()

> **arrayType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| `model`   | [`ArrayType`](https://typedoc.org/api/classes/Models.ArrayType.html) |

##### Returns

`string`

#### conditionalType()

> **conditionalType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `model`   | [`ConditionalType`](https://typedoc.org/api/classes/Models.ConditionalType.html) |

##### Returns

`string`

#### indexAccessType()

> **indexAccessType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                          |
| --------- | --------------------------------------------------------------------------------------------- |
| `model`   | [`IndexedAccessType`](https://typedoc.org/api/types/IndexedAccessType.DeclarationOption.html) |

##### Returns

`string`

#### inferredType()

> **inferredType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                |
| --------- | ----------------------------------------------------------------------------------- |
| `model`   | [`InferredType`](https://typedoc.org/api/types/InferredType.DeclarationOption.html) |

##### Returns

`string`

#### intersectionType()

> **intersectionType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| `model`   | [`IntersectionType`](https://typedoc.org/api/types/IntersectionType.DeclarationOption.html) |

##### Returns

`string`

#### intrinsicType()

> **intrinsicType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                  |
| --------- | ------------------------------------------------------------------------------------- |
| `model`   | [`IntrinsicType`](https://typedoc.org/api/types/IntrinsicType.DeclarationOption.html) |

##### Returns

`string`

#### literalType()

> **literalType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `model`   | [`LiteralType`](https://typedoc.org/api/types/LiteralType.DeclarationOption.html) |

##### Returns

`string`

#### namedTupleType()

> **namedTupleType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| `model`   | [`NamedTupleMember`](https://typedoc.org/api/types/NamedTupleMember.DeclarationOption.html) |

##### Returns

`string`

#### queryType()

> **queryType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| `model`   | [`QueryType`](https://typedoc.org/api/classes/Models.QueryType.html) |

##### Returns

`string`

#### referenceType()

> **referenceType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `model`   | [`ReferenceType`](https://typedoc.org/api/classes/ReferenceType.html) |

##### Returns

`string`

#### declarationType()

> **declarationType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`string`

#### functionType()

> **functionType**: (`model`, `options`?) => `string`

##### Parameters

| Parameter                     | Type                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `model`                       | [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html)\[] |
| `options`?                    | `object`                                                                             |
| `options.forceParameterType`? | `boolean`                                                                            |

##### Returns

`string`

#### reflectionType()

> **reflectionType**: (`model`, `options`?) => `string`

##### Parameters

| Parameter                | Type                                                                    |
| ------------------------ | ----------------------------------------------------------------------- |
| `model`                  | [`ReflectionType`](https://typedoc.org/api/classes/ReflectionType.html) |
| `options`?               | `object`                                                                |
| `options.forceCollapse`? | `boolean`                                                               |

##### Returns

`string`

#### someType()

> **someType**: (`model`?) => `string`

##### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `model`?  | [`SomeType`](https://typedoc.org/api/classes/SomeType.html) |

##### Returns

`string`

#### tupleType()

> **tupleType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                          |
| --------- | ------------------------------------------------------------- |
| `model`   | [`TupleType`](https://typedoc.org/api/classes/TupleType.html) |

##### Returns

`string`

#### typeOperatorType()

> **typeOperatorType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------- |
| `model`   | [`TypeOperatorType`](https://typedoc.org/api/TypeDocOptions,TypeOperatorType/TypeDocOptions.html) |

##### Returns

`string`

#### unionType()

> **unionType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                          |
| --------- | ----------------------------------------------------------------------------- |
| `model`   | [`UnionType`](https://typedoc.org/api/types/UnionType.DeclarationOption.html) |

##### Returns

`string`

#### unknownType()

> **unknownType**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `model`   | [`UnknownType`](https://typedoc.org/api/types/UnknownType.DeclarationOption.html) |

##### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:98](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L98)

***

### helpers

> **helpers**: `object`

The `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.

Please note that partials:

* Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
* Can reference other helpers but should not reference partials.
* Can return strings or other models.

#### getAngleBracket()

> **getAngleBracket**: (`bracket`) => `string`

##### Parameters

| Parameter | Type           |
| --------- | -------------- |
| `bracket` | `"<"` \| `">"` |

##### Returns

`string`

#### getCommentForReflection()

> **getCommentForReflection**: (`model`) => `undefined` | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html)

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`undefined` | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html)

#### getCommentParts()

> **getCommentParts**: (`model`) => `string`

##### Parameters

| Parameter | Type                                                                                      |
| --------- | ----------------------------------------------------------------------------------------- |
| `model`   | [`CommentDisplayPart`](https://typedoc.org/api/classes/Models.CommentDisplayPart.html)\[] |

##### Returns

`string`

#### getDeclarationType()

> **getDeclarationType**: (`model`) => `undefined` | [`SomeType`](https://typedoc.org/api/classes/SomeType.html)

##### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`undefined` | [`SomeType`](https://typedoc.org/api/classes/SomeType.html)

#### getDescriptionForComment()

> **getDescriptionForComment**: (`comment`) => `null` | `string`

##### Parameters

| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| `comment` | [`Comment`](https://typedoc.org/api/classes/Models.Comment.html) |

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

> **getGroupIndexTable**: (`children`) => `string`

##### Parameters

| Parameter  | Type                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `children` | `DocumentReflection`\[] \| [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |

##### Returns

`string`

#### getGroupIndex()

> **getGroupIndex**: (`group`) => `any`

##### Parameters

| Parameter | Type                                                                                                                                                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `group`   | [`ReflectionCategory`](https://typedoc.org/api/types/ReflectionCategory.DeclarationOption.html) \| [`ReflectionGroup`](https://typedoc.org/api/classes/ReflectionGroup.html) |

##### Returns

`any`

#### getHierarchyType()

> **getHierarchyType**: (`model`, `options`?) => `string`

##### Parameters

| Parameter           | Type                                                        |
| ------------------- | ----------------------------------------------------------- |
| `model`             | [`SomeType`](https://typedoc.org/api/classes/SomeType.html) |
| `options`?          | `object`                                                    |
| `options.isTarget`? | `boolean`                                                   |

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

| Parameter | Type                                                                              |
| --------- | --------------------------------------------------------------------------------- |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/ParameterReflection.html) |

##### Returns

`string`

#### getProjectName()

> **getProjectName**: (`stringWithPlaceholders`, `page`) => `string`

##### Parameters

| Parameter                | Type                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `stringWithPlaceholders` | `string`                                                                                                                           |
| `page`                   | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)> |

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

> **getReflectionFlags**: (`reflectionFlags`) => `string`

##### Parameters

| Parameter         | Type                                                                      |
| ----------------- | ------------------------------------------------------------------------- |
| `reflectionFlags` | [`ReflectionFlags`](https://typedoc.org/api/classes/ReflectionFlags.html) |

##### Returns

`string`

#### getReturnType()

> **getReturnType**: (`model`?) => `string`

##### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `model`?  | [`SomeType`](https://typedoc.org/api/classes/SomeType.html) |

##### Returns

`string`

#### isGroupKind()

> **isGroupKind**: (`model`) => `boolean`

##### Parameters

| Parameter | Type                                                                                                                                                                              |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/SignatureReflection.html) |

##### Returns

`boolean`

#### useTableFormat()

> **useTableFormat**: (`key`, `reflectionKind`?) => `boolean`

##### Parameters

| Parameter         | Type                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------- |
| `key`             | `"parameters"` \| `"properties"` \| `"enums"` \| `"typeDeclarations"` \| `"propertyMembers"` |
| `reflectionKind`? | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)               |

##### Returns

`boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts:111](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-themeContext.ts#L111)
