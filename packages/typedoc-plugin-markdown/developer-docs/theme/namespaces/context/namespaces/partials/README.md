[typedoc-plugin-markdown v4.0.3](../../../../../README.md) / [theme](../../../../README.md) / [context](../../README.md) / partials

# Namespace: partials

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

## Table of Contents

* [Page Partials](#page-partials)
* [Container Partials](#container-partials)
* [Member Partials](#member-partials)
* [Comment Partials](#comment-partials)
* [Type Partials](#type-partials)
* [Other](#other)

## Page Partials

### breadcrumbs()

```ts
function breadcrumbs(this): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/page.breadcrumbs.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/page.breadcrumbs.ts#L9)

***

### footer()

```ts
function footer(this): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/page.footer.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/page.footer.ts#L6)

***

### header()

```ts
function header(this): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/page.header.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/page.header.ts#L15)

***

### packagesIndex()

```ts
function packagesIndex(this, model): string
```

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                |
| `model`   | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/page.packagesIndex.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/page.packagesIndex.ts#L10)

***

### pageTitle()

```ts
function pageTitle(this): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/page.pageTitle.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/page.pageTitle.ts#L7)

## Container Partials

### body()

```ts
function body(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                    |
| `model`                | [`ContainerReflection`](https://typedoc.org/api/classes/Models.ContainerReflection.html) |
| `options`              | `object`                                                                                 |
| `options.headingLevel` | `number`                                                                                 |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/container.body.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/container.body.ts#L11)

***

### categories()

```ts
function categories(
   this, 
   model, 
   options): string
```

Renders a collection of reflection categories.

#### Parameters

| Parameter              | Type                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                   |
| `model`                | [`ReflectionCategory`](https://typedoc.org/api/types/Models.ReflectionCategory.html)\[] |
| `options`              | `object`                                                                                |
| `options.headingLevel` | `number`                                                                                |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/container.categories.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/container.categories.ts#L10)

***

### groups()

```ts
function groups(
   this, 
   model, 
   options): string
```

Renders a collection of reflection groups.

#### Parameters

| Parameter              | Type                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)               |
| `model`                | [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html)\[] |
| `options`              | `object`                                                                            |
| `options.headingLevel` | `number`                                                                            |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/container.groups.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/container.groups.ts#L14)

***

### members()

```ts
function members(
   this, 
   model, 
   options): string
```

Renders a collection of members.

#### Parameters

| Parameter              | Type                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                           |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`              | `object`                                                                                        |
| `options.headingLevel` | `number`                                                                                        |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/container.members.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/container.members.ts#L10)

## Member Partials

### accessor()

```ts
function accessor(
   this, 
   model, 
   options): string
```

Renders an accessor member.

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.accessor.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.accessor.ts#L10)

***

### constructor()

```ts
function constructor(
   this, 
   model, 
   options): string
```

Renders an constructor member.

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.constructors.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.constructors.ts#L11)

***

### memberContainer()

```ts
function memberContainer(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.container.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.container.ts#L8)

***

### declaration()

```ts
function declaration(
   this, 
   model, 
   options): string
```

Renders a standard declaration member.

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.declaration.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.declaration.ts#L16)

***

### declarationTitle()

```ts
function declarationTitle(this, model): string
```

Comments for declaration

#### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.declarationTitle.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.declarationTitle.ts#L11)

***

### documents()

```ts
function documents(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                                                                                                                                                                                                             |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                                                                                                                            |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ContainerReflection`](https://typedoc.org/api/classes/Models.ContainerReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `options`              | `object`                                                                                                                                                                                                                                                                         |
| `options.headingLevel` | `number`                                                                                                                                                                                                                                                                         |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.documents.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.documents.ts#L13)

***

### enumMembersTable()

```ts
function enumMembersTable(this, model): string
```

Renders enum members as a table.

#### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                           |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.enumMembersTable.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.enumMembersTable.ts#L11)

***

### hierarchy()

```ts
function hierarchy(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                      |
| `model`                | [`DeclarationHierarchy`](https://typedoc.org/api/classes/Models.DeclarationHierarchy.html) |
| `options`              | `object`                                                                                   |
| `options.headingLevel` | `number`                                                                                   |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.hierarchy.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.hierarchy.ts#L8)

***

### indexSignature()

```ts
function indexSignature(this, model): string
```

Renders an index signature block

#### Parameters

| Parameter | Type                                                                                     |
| --------- | ---------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                    |
| `model`   | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.indexSignature.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.indexSignature.ts#L10)

***

### inheritance()

```ts
function inheritance(
   this, 
   model, 
   options): string
```

Renders an inheritance section.

#### Parameters

| Parameter              | Type                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                                    |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options`              | `object`                                                                                                                                                                                 |
| `options.headingLevel` | `number`                                                                                                                                                                                 |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.inheritance.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.inheritance.ts#L10)

***

### memberTitle()

```ts
function memberTitle(this, model): string
```

Renders the main member title.

#### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.memberTitle.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.memberTitle.ts#L11)

***

### memberWithGroups()

```ts
function memberWithGroups(
   this, 
   model, 
   options): string
```

Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.memberWithGroups.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.memberWithGroups.ts#L10)

***

### parametersList()

```ts
function parametersList(this, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                       |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.parametersList.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.parametersList.ts#L9)

***

### parametersTable()

```ts
function parametersTable(this, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                       |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.parametersTable.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.parametersTable.ts#L9)

***

### propertiesTable()

```ts
function propertiesTable(
   this, 
   model, 
   options?): string
```

Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.

#### Parameters

| Parameter               | Type                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| `this`                  | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                           |
| `model`                 | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`?              | `object`                                                                                        |
| `options.isEventProps`? | `boolean`                                                                                       |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.propertiesTable.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.propertiesTable.ts#L15)

***

### referenceMember()

```ts
function referenceMember(this, model): string
```

Renders an reference member.

#### Parameters

| Parameter | Type                                                                                     |
| --------- | ---------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                    |
| `model`   | [`ReferenceReflection`](https://typedoc.org/api/classes/Models.ReferenceReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.reference.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.reference.ts#L10)

***

### reflectionIndex()

```ts
function reflectionIndex(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                                |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `options`              | `object`                                                                                                                                                                             |
| `options.headingLevel` | `number`                                                                                                                                                                             |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.reflectionIndex.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.reflectionIndex.ts#L13)

***

### signature()

```ts
function signature(
   this, 
   model, 
   options): string
```

Renders a signature member.

#### Parameters

| Parameter                     | Type                                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| `this`                        | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                    |
| `model`                       | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options`                     | `object`                                                                                 |
| `options.headingLevel`        | `number`                                                                                 |
| `options.nested`?             | `boolean`                                                                                |
| `options.accessor`?           | `string`                                                                                 |
| `options.multipleSignatures`? | `boolean`                                                                                |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.signature.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.signature.ts#L10)

***

### signatureParameters()

```ts
function signatureParameters(this, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                       |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatureParameters.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatureParameters.ts#L8)

***

### signatureReturns()

```ts
function signatureReturns(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                    |
| `model`                | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options`              | `object`                                                                                 |
| `options.headingLevel` | `number`                                                                                 |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatureReturns.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatureReturns.ts#L13)

***

### signatureTitle()

```ts
function signatureTitle(
   this, 
   model, 
   options?): string
```

#### Parameters

| Parameter              | Type                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                    |
| `model`                | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options`?             | `object`                                                                                 |
| `options.accessor`?    | `string`                                                                                 |
| `options.includeType`? | `boolean`                                                                                |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatureTitle.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatureTitle.ts#L9)

***

### signatures()

```ts
function signatures(
   this, 
   model, 
   options): string
```

Renders a signature collection.

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatures.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.signatures.ts#L11)

***

### sources()

```ts
function sources(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                                    |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options`              | `object`                                                                                                                                                                                 |
| `options.headingLevel` | `number`                                                                                                                                                                                 |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.sources.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.sources.ts#L9)

***

### member()

```ts
function member(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options`              | `object`                                                                                     |
| `options.headingLevel` | `number`                                                                                     |
| `options.nested`?      | `boolean`                                                                                    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.ts#L11)

***

### typeAndParent()

```ts
function typeAndParent(this, model): string
```

#### Parameters

| Parameter | Type                                                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                              |
| `model`   | [`ReferenceType`](https://typedoc.org/api/classes/Models.ReferenceType.html) \| [`ArrayType`](https://typedoc.org/api/types/Models.ArrayType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeAndParent.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeAndParent.ts#L8)

***

### typeArguments()

```ts
function typeArguments(
   this, 
   model, 
   options?): string
```

#### Parameters

| Parameter               | Type                                                                  |
| ----------------------- | --------------------------------------------------------------------- |
| `this`                  | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`                 | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)\[] |
| `options`?              | `object`                                                              |
| `options.foreCollpase`? | `boolean`                                                             |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeArguments.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeArguments.ts#L7)

***

### typeDeclaration()

```ts
function typeDeclaration(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter              | Type                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `this`                 | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                           |
| `model`                | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`              | `object`                                                                                        |
| `options.headingLevel` | `number`                                                                                        |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeDeclaration.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeDeclaration.ts#L7)

***

### typeDeclarationList()

```ts
function typeDeclarationList(
   this, 
   model, 
   headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `this`         | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                           |
| `model`        | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `headingLevel` | `number`                                                                                        |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeDeclarationList.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeDeclarationList.ts#L7)

***

### typeDeclarationTable()

```ts
function typeDeclarationTable(this, model): string
```

#### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                           |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeDeclarationTable.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeDeclarationTable.ts#L9)

***

### typeParametersList()

```ts
function typeParametersList(this, model): string
```

#### Parameters

| Parameter | Type                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                               |
| `model`   | [`TypeParameterReflection`](https://typedoc.org/api/classes/Models.TypeParameterReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeParametersList.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeParametersList.ts#L8)

***

### typeParametersTable()

```ts
function typeParametersTable(this, model): string
```

#### Parameters

| Parameter | Type                                                                                                |
| --------- | --------------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                               |
| `model`   | [`TypeParameterReflection`](https://typedoc.org/api/classes/Models.TypeParameterReflection.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeParametersTable.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/member.typeParametersTable.ts#L8)

## Comment Partials

### comment()

```ts
function comment(
   this, 
   model, 
   options): string
```

#### Parameters

| Parameter                | Type                                                                  |
| ------------------------ | --------------------------------------------------------------------- |
| `this`                   | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`                  | [`Comment`](https://typedoc.org/api/types/Models.Comment.html)        |
| `options`                | `object`                                                              |
| `options.headingLevel`?  | `number`                                                              |
| `options.showSummary`?   | `boolean`                                                             |
| `options.showTags`?      | `boolean`                                                             |
| `options.isTableColumn`? | `boolean`                                                             |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/comments.comment.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/comments.comment.ts#L9)

***

### commentParts()

```ts
function commentParts(this, model): string
```

#### Parameters

| Parameter | Type                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                   |
| `model`   | [`CommentDisplayPart`](https://typedoc.org/api/types/Models.CommentDisplayPart.html)\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/comments.commentParts.ts:9](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/comments.commentParts.ts#L9)

## Type Partials

### arrayType()

```ts
function arrayType(this, model): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`   | [`ArrayType`](https://typedoc.org/api/types/Models.ArrayType.html)    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.array.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.array.ts#L7)

***

### conditionalType()

```ts
function conditionalType(this, model): string
```

#### Parameters

| Parameter | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)          |
| `model`   | [`ConditionalType`](https://typedoc.org/api/types/Models.ConditionalType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.conditional.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.conditional.ts#L8)

***

### indexAccessType()

```ts
function indexAccessType(this, model): string
```

#### Parameters

| Parameter | Type                                                                               |
| --------- | ---------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)              |
| `model`   | [`IndexedAccessType`](https://typedoc.org/api/types/Models.IndexedAccessType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.index-access.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.index-access.ts#L7)

***

### inferredType()

```ts
function inferredType(this, model): string
```

#### Parameters

| Parameter | Type                                                                     |
| --------- | ------------------------------------------------------------------------ |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)    |
| `model`   | [`InferredType`](https://typedoc.org/api/types/Models.InferredType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.inferred.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.inferred.ts#L8)

***

### intersectionType()

```ts
function intersectionType(this, model): string
```

#### Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)            |
| `model`   | [`IntersectionType`](https://typedoc.org/api/types/Models.IntersectionType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.intersection.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.intersection.ts#L7)

***

### intrinsicType()

```ts
function intrinsicType(this, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| --------- | -------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)      |
| `model`   | [`IntrinsicType`](https://typedoc.org/api/types/Models.IntrinsicType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.intrinsic.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.intrinsic.ts#L8)

***

### literalType()

```ts
function literalType(this, model): string
```

#### Parameters

| Parameter | Type                                                                   |
| --------- | ---------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)  |
| `model`   | [`LiteralType`](https://typedoc.org/api/types/Models.LiteralType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.literal.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.literal.ts#L7)

***

### namedTupleType()

```ts
function namedTupleType(this, model): string
```

#### Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)            |
| `model`   | [`NamedTupleMember`](https://typedoc.org/api/types/Models.NamedTupleMember.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.named-tuple.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.named-tuple.ts#L7)

***

### queryType()

```ts
function queryType(this, model): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`   | [`QueryType`](https://typedoc.org/api/types/Models.QueryType.html)    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.query.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.query.ts#L8)

***

### referenceType()

```ts
function referenceType(this, model): string
```

#### Parameters

| Parameter | Type                                                                         |
| --------- | ---------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)        |
| `model`   | [`ReferenceType`](https://typedoc.org/api/classes/Models.ReferenceType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.reference.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.reference.ts#L8)

***

### declarationType()

```ts
function declarationType(this, model): string
```

#### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.reflection.declaration.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.reflection.declaration.ts#L8)

***

### functionType()

```ts
function functionType(
   this, 
   model, 
   options?): string
```

#### Parameters

| Parameter                     | Type                                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `this`                        | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                       |
| `model`                       | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html)\[] |
| `options`?                    | `object`                                                                                    |
| `options.forceParameterType`? | `boolean`                                                                                   |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.reflection.function.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.reflection.function.ts#L8)

***

### reflectionType()

```ts
function reflectionType(
   this, 
   model, 
   options?): string
```

#### Parameters

| Parameter               | Type                                                                           |
| ----------------------- | ------------------------------------------------------------------------------ |
| `this`                  | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)          |
| `model`                 | [`ReflectionType`](https://typedoc.org/api/classes/Models.ReflectionType.html) |
| `options`?              | `object`                                                                       |
| `options.foreCollpase`? | `boolean`                                                                      |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.reflection.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.reflection.ts#L8)

***

### someType()

```ts
function someType(this, model?): string
```

Takes a generic Type and returns the appropriate partial for it.

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`?  | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.some.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.some.ts#L26)

***

### tupleType()

```ts
function tupleType(this, model): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`   | [`TupleType`](https://typedoc.org/api/classes/Models.TupleType.html)  |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.tuple.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.tuple.ts#L7)

***

### typeOperatorType()

```ts
function typeOperatorType(this, model): string
```

#### Parameters

| Parameter | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)          |
| `model`   | [`TypeOperatorType`](https://typedoc.org/api/interfaces/TypeOperatorType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.type-operator.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.type-operator.ts#L7)

***

### unionType()

```ts
function unionType(this, model): string
```

#### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`   | [`UnionType`](https://typedoc.org/api/types/Models.UnionType.html)    |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.union.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.union.ts#L7)

***

### unknownType()

```ts
function unknownType(this, model): string
```

#### Parameters

| Parameter | Type                                                                   |
| --------- | ---------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)  |
| `model`   | [`UnknownType`](https://typedoc.org/api/types/Models.UnknownType.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/type.unknown.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/type.unknown.ts#L8)

## Other

### isFile()

```ts
function isFile(file): boolean
```

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `file`    | `string` |

#### Returns

`boolean`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/partials/comments.commentParts.ts:67](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/partials/comments.commentParts.ts#L67)
