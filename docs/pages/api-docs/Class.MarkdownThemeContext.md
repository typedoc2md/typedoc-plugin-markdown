# MarkdownThemeContext

The theme context class that is provided as context on the rendering of every page.

It is heavily influenced by the equivalent [DefaultThemeRenderContext](https://typedoc.org/api/classes/DefaultThemeRenderContext.html) from the default theme.

This class can be used to customize the theme output by extending the class and overriding the [templates](#templates), [partials](#partials) and [helpers](#helpers).

## Usage

```ts
class MyMarkdownTheme extends MarkdownTheme {
  getRenderContext(page) {
    return new MyMarkdownThemeContext(this, page, this.application.options);
  }
}
```

## Constructors

### new MarkdownThemeContext()

> **new MarkdownThemeContext**(`theme`, `page`, `options`): [`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `theme` | [`MarkdownTheme`](/api-docs/Class.MarkdownTheme.md) | The theme instance. |
| `page` | [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\> | The current page event. |
| `options` | [`Options`](https://typedoc.org/api/classes/Configuration.Options.html) | The options provided to the application. |

#### Returns

[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)

## Properties

Properties are passed into the constructor and are used to provide context to the theme.

### page

> `readonly` **page**: [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>

The current page event.

***

### options

> `readonly` **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

The options provided to the application.

## Methods

General context aware helper methods not bound to any specific models that can be used by the theme resources.

### getText()

> **getText**(`key`): `string`

Get text mappings from the theme.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | keyof [`TextContentMappings`](/api-docs/Interface.TextContentMappings.md) | The key of the text mappings |

#### Returns

`string`

***

### getPackageMetaData()

> **getPackageMetaData**(`packageName`): [`PackageMetaData`](/api-docs/Interface.PackageMetaData.md)

Returns the package meta data for a given package name when entrypointStrategy is set to `packages`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | The package name as per `name` field from `package.json`. |

#### Returns

[`PackageMetaData`](/api-docs/Interface.PackageMetaData.md)

***

### getRelativeUrl()

> **getRelativeUrl**(`url`, `ignorePublicPath`): `string`

Returns the relative URL (from the current page context url).

If public path is set, it will be used as the base URL.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | The URL to make relative. |
| `ignorePublicPath` | `boolean` | `false` | Whether to ignore the public path. |

#### Returns

`string`

## Resources

Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.

### templates

> **templates**: `object`

Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.

All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.

#### project()

> **project**: () => `string`

Template that maps to the root project reflection. This will be the index page / documentation root page.

##### Returns

`string`

#### readme()

> **readme**: () => `string`

Template that specifically maps to the resolved readme file. This template is not used when 'readme' is set to 'none'.

##### Returns

`string`

#### reflection()

> **reflection**: () => `string`

Template that maps to individual reflection models.

##### Returns

`string`

***

### partials

> **partials**: `object`

The `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.

Please note that partials::

- Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
- Can call other partials and helpers.
- Must return a string.

Partials are categorised by their use:

- [Page Partials](#page-partials): Partials that render core page elements such as header and breadcrumbs.
- [Container Partials](#container-partials): Partials that are used to render reflection groups and categories.
- [Member Partials](#member-partials): Partials that render specific parts of reflections.
- [Comment Partials](#comment-partials): Partials that render comments.
- [Type Partials](#type-partials): Partials that render specific TypeDoc model types.

#### Page Partials

##### breadcrumbs()

> **breadcrumbs**: () => `string`

###### Returns

`string`

##### header()

> **header**: () => `string`

###### Returns

`string`

##### packagesIndex()

> **packagesIndex**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

###### Returns

`string`

##### pageTitle()

> **pageTitle**: () => `string`

###### Returns

`string`

#### Container Partials

##### body()

> **body**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ContainerReflection`](https://typedoc.org/api/classes/Models.ContainerReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### categories()

> **categories**: (`model`, `options`) => `string`

Renders a collection of reflection categories.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReflectionCategory`](https://typedoc.org/api/types/Models.ReflectionCategory.html)[] |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### groups()

> **groups**: (`model`, `options`) => `string`

Renders a collection of reflection groups.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html)[] |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### members()

> **members**: (`model`, `options`) => `string`

Renders a collection of members.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

#### Member Partials

##### accessor()

> **accessor**: (`model`, `options`) => `string`

Renders an accessor member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### constructor()

> **constructor**: (`model`, `options`) => `string`

Renders an constructor member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### declaration()

> **declaration**: (`model`, `options`) => `string`

Renders a standard declaration member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |
| `options.nested`? | `boolean` |

###### Returns

`string`

##### declarationTitle()

> **declarationTitle**: (`model`) => `string`

Remders a declaration title.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

###### Returns

`string`

##### enumMembersTable()

> **enumMembersTable**: (`model`) => `string`

Renders enum members as a table.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |

###### Returns

`string`

##### hierarchy()

> **hierarchy**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationHierarchy`]( https://typedoc.org/api/classes/Models.DeclarationHierarchy.html ) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### indexSignature()

> **indexSignature**: (`model`) => `string`

Renders an index signature block

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

###### Returns

`string`

##### inheritance()

> **inheritance**: (`model`, `options`) => `string`

Renders an inheritance section.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### memberTitle()

> **memberTitle**: (`model`) => `string`

Renders the main member title.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

###### Returns

`string`

##### memberWithGroups()

> **memberWithGroups**: (`model`, `options`) => `string`

Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### parametersList()

> **parametersList**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html)[] |

###### Returns

`string`

##### parametersTable()

> **parametersTable**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html)[] |

###### Returns

`string`

##### declarationsTable()

> **declarationsTable**: (`model`, `options`?) => `string`

Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `options`? | `object` |
| `options.isEventProps`? | `boolean` |

###### Returns

`string`

##### referenceMember()

> **referenceMember**: (`model`) => `string`

Renders an reference member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReferenceReflection`](https://typedoc.org/api/classes/Models.ReferenceReflection.html) |

###### Returns

`string`

##### reflectionFlags()

> **reflectionFlags**: (`model`) => `string`

Renders the flags of a reflection.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) |

###### Returns

`string`

##### reflectionIndex()

> **reflectionIndex**: (`model`, `options`) => `string`

Renders the index section of a reflection.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### signature()

> **signature**: (`model`, `options`) => `string`

Renders a signature member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |
| `options.nested`? | `boolean` |
| `options.accessor`? | `string` |

###### Returns

`string`

##### signatureParameters()

> **signatureParameters**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html)[] |

###### Returns

`string`

##### signatureReturns()

> **signatureReturns**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### signatureTitle()

> **signatureTitle**: (`model`, `options`?) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options`? | `object` |
| `options.accessor`? | `string` |
| `options.includeType`? | `boolean` |

###### Returns

`string`

##### sources()

> **sources**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### member()

> **member**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `options` | `object` |
| `options.headingLevel` | `number` |
| `options.nested`? | `boolean` |

###### Returns

`string`

##### typeAndParent()

> **typeAndParent**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReferenceType`](https://typedoc.org/api/classes/Models.ReferenceType.html) \| [`ArrayType`](https://typedoc.org/api/types/Models.ArrayType.html) |

###### Returns

`string`

##### typeArguments()

> **typeArguments**: (`model`, `options`?) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SomeType`]( https://typedoc.org/api/classes/Models.SomeType.html )[] |
| `options`? | `object` |
| `options.foreCollpase`? | `boolean` |

###### Returns

`string`

##### typeDeclaration()

> **typeDeclaration**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `options` | `object` |
| `options.headingLevel` | `number` |

###### Returns

`string`

##### typeDeclarationList()

> **typeDeclarationList**: (`model`, `headingLevel`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `headingLevel` | `number` |

###### Returns

`string`

##### typeDeclarationTable()

> **typeDeclarationTable**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |

###### Returns

`string`

##### typeParametersList()

> **typeParametersList**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`TypeParameterReflection`](https://typedoc.org/api/classes/Models.TypeParameterReflection.html)[] |

###### Returns

`string`

##### typeParametersTable()

> **typeParametersTable**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`TypeParameterReflection`](https://typedoc.org/api/classes/Models.TypeParameterReflection.html)[] |

###### Returns

`string`

#### Comment Partials

##### comment()

> **comment**: (`model`, `options`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Comment`](https://typedoc.org/api/types/Models.Comment.html) |
| `options` | `object` |
| `options.headingLevel`? | `number` |
| `options.showSummary`? | `boolean` |
| `options.showTags`? | `boolean` |
| `options.isTableColumn`? | `boolean` |

###### Returns

`string`

##### commentParts()

> **commentParts**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`CommentDisplayPart`]( https://typedoc.org/api/types/Models.CommentDisplayPart.html )[] |

###### Returns

`string`

#### Type Partials

##### arrayType()

> **arrayType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ArrayType`](https://typedoc.org/api/types/Models.ArrayType.html) |

###### Returns

`string`

##### conditionalType()

> **conditionalType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ConditionalType`](https://typedoc.org/api/types/Models.ConditionalType.html) |

###### Returns

`string`

##### indexAccessType()

> **indexAccessType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`IndexedAccessType`](https://typedoc.org/api/types/Models.IndexedAccessType.html) |

###### Returns

`string`

##### inferredType()

> **inferredType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`InferredType`](https://typedoc.org/api/types/Models.InferredType.html) |

###### Returns

`string`

##### intersectionType()

> **intersectionType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`IntersectionType`](https://typedoc.org/api/types/Models.IntersectionType.html) |

###### Returns

`string`

##### intrinsicType()

> **intrinsicType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`IntrinsicType`](https://typedoc.org/api/types/Models.IntrinsicType.html) |

###### Returns

`string`

##### literalType()

> **literalType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`LiteralType`](https://typedoc.org/api/types/Models.LiteralType.html) |

###### Returns

`string`

##### namedTupleType()

> **namedTupleType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`NamedTupleMember`](https://typedoc.org/api/types/Models.NamedTupleMember.html) |

###### Returns

`string`

##### queryType()

> **queryType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`QueryType`](https://typedoc.org/api/types/Models.QueryType.html) |

###### Returns

`string`

##### referenceType()

> **referenceType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReferenceType`](https://typedoc.org/api/classes/Models.ReferenceType.html) |

###### Returns

`string`

##### declarationType()

> **declarationType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

###### Returns

`string`

##### functionType()

> **functionType**: (`model`, `options`?) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html)[] |
| `options`? | `object` |
| `options.forceParameterType`? | `boolean` |

###### Returns

`string`

##### reflectionType()

> **reflectionType**: (`model`, `options`?) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReflectionType`](https://typedoc.org/api/classes/Models.ReflectionType.html) |
| `options`? | `object` |
| `options.foreCollpase`? | `boolean` |

###### Returns

`string`

##### someType()

> **someType**: (`model`?) => `string`

Takes a generic Type and returns the appropriate partial for it.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model`? | [`SomeType`]( https://typedoc.org/api/classes/Models.SomeType.html ) |

###### Returns

`string`

##### tupleType()

> **tupleType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`TupleType`](https://typedoc.org/api/classes/Models.TupleType.html) |

###### Returns

`string`

##### typeOperatorType()

> **typeOperatorType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`TypeOperatorType`](https://typedoc.org/api/interfaces/TypeOperatorType.html) |

###### Returns

`string`

##### unionType()

> **unionType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`UnionType`](https://typedoc.org/api/types/Models.UnionType.html) |

###### Returns

`string`

##### unknownType()

> **unknownType**: (`model`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`UnknownType`](https://typedoc.org/api/types/Models.UnknownType.html) |

###### Returns

`string`

***

### helpers

> **helpers**: `object`

The `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.

Please note that partials:

- Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
- Can reference other helpers but should not reference partials.
- Can return strings or other models.

#### getDeclarationComment()

> **getDeclarationComment**: (`model`) => `any`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`any`

#### getDeclarationType()

> **getDeclarationType**: (`model`) => `undefined` \| [`SomeType`]( https://typedoc.org/api/classes/Models.SomeType.html )

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`undefined` \| [`SomeType`]( https://typedoc.org/api/classes/Models.SomeType.html )

#### getFlattenedDeclarations()

> **getFlattenedDeclarations**: (`model`, `options`?) => [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `options`? | `object` |
| `options.includeSignatures`? | `boolean` |

##### Returns

[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

#### getHierarchyType()

> **getHierarchyType**: (`model`, `options`?) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`SomeType`]( https://typedoc.org/api/classes/Models.SomeType.html ) |
| `options`? | `object` |
| `options.isTarget`? | `boolean` |

##### Returns

`string`

#### getKeyword()

> **getKeyword**: (`model`) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReflectionKind`]( https://typedoc.org/api/enums/Models.ReflectionKind-1.html ) |

##### Returns

`string`

#### getModifier()

> **getModifier**: (`model`) => `null` \| `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`null` \| `string`

#### getParameterDefaultValue()

> **getParameterDefaultValue**: (`model`) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html) |

##### Returns

`string`

#### getPropertyDefaultValue()

> **getPropertyDefaultValue**: (`model`) => `null` \| `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`null` \| `string`

#### getReturnType()

> **getReturnType**: (`model`?) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model`? | [`SomeType`]( https://typedoc.org/api/classes/Models.SomeType.html ) |

##### Returns

`string`

#### isGroupKind()

> **isGroupKind**: (`model`) => `boolean`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

##### Returns

`boolean`
