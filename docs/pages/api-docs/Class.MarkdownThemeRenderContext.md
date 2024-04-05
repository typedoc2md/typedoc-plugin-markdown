# MarkdownThemeRenderContext

The theme context class that is provided as context to every template.

This class can be used to customize the theme output by extending the class and overriding the [templates](#templates), [partials](#partials) and [helpers](#helpers).

## Usage

```ts
class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {

 // customise templates
 templates = {
  ...this.templates,
  reflection: (model) => {
    return `New template for ${model.name}!`;
  },
 };

 // customise partials
 partials = {
  ...this.partials,
  header: (model) => {
    return `
# Welcome to custom header for ${this.page.project.name} project and ${model.name} model!
Use my new helper - ${this.helpers.newHelper()}
   `;
  },
 };

 // customise helpers
 helpers = {
  ...this.helpers,
  newHelper: () => {
    return 'New helper!';
  },
 };
}
```

## Properties

### page

> **`readonly`** **page**: [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>

The current page event.

***

### options

> **`readonly`** **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

The options provided to the application.

***

### textContentMappings

> **`readonly`** **textContentMappings**: `Partial`\<[`TextContentMappings`](/api-docs/Interface.TextContentMappings.md)\>

Holds the textmappings object of the theme.

***

### packagesMetaData

> **`readonly`** **packagesMetaData**: `Record`\<`string`, `object`\>

Holds meta data for individual packages (if entryPointStrategy equals `packages`).

This is required for generating package specific documentation.

## Resources

Theme resources are the main building blocks for the theme context. They are split into three namespaces: `templates`, `partials` and `helpers`.

### templates

> **templates**: `object`

Then `templates` namespace holds the main templates for the theme and are mapped to single pages and configured in the MarkdownTheme.

All templates return a string that is passed back to the renderer. Internally templates call partials and helpers.

#### project()

> **project**: () => `string`

##### Returns

`string`

#### readme()

> **readme**: () => `string`

##### Returns

`string`

#### reflection()

> **reflection**: () => `string`

##### Returns

`string`

***

### partials

> **partials**: `object`

Then `partials` namespace holds the partials for the theme and are used by templates to map speficic models to page output.

Partials take a `model` param (that references a specific TypeDoc model) and an `options` param if required.

All partials return a string and can call other partials and helpers.

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

> **packagesIndex**: (`model`: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)) => `string`

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

> **body**: (`container`: `ContainerReflection`, `headingLevel`: `number`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `container` | `ContainerReflection` |
| `headingLevel` | `number` |

###### Returns

`string`

##### categories()

> **categories**: (`model`: `ReflectionCategory`[], `headingLevel`: `number`) => `string`

Renders a collection of reflection categories.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `ReflectionCategory`[] |
| `headingLevel` | `number` |

###### Returns

`string`

##### groups()

> **groups**: (`model`: [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html)[], `headingLevel`: `number`) => `string`

Renders a collection of reflection groups.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html)[] |
| `headingLevel` | `number` |

###### Returns

`string`

##### members()

> **members**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[], `headingLevel`: `number`) => `string`

Renders a collection of members.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `headingLevel` | `number` |

###### Returns

`string`

#### Member Partials

##### accessor()

> **accessor**: (`declaration`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `headingLevel`: `number`) => `string`

Renders an accessor member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `declaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `headingLevel` | `number` |

###### Returns

`string`

##### constructor()

> **constructor**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `headingLevel`: `number`) => `string`

Renders an constructor member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `headingLevel` | `number` |

###### Returns

`string`

##### declaration()

> **declaration**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `options`: `object`) => `string`

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

> **declarationTitle**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)) => `string`

Remders a declaration title.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

###### Returns

`string`

##### enumMembersTable()

> **enumMembersTable**: (`props`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]) => `string`

Renders enum members as a table.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |

###### Returns

`string`

##### hierarchy()

> **hierarchy**: (`model`: `DeclarationHierarchy`, `headingLevel`: `number`) => `string`

Renders an declaration hierachy section.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `DeclarationHierarchy` |
| `headingLevel` | `number` |

###### Returns

`string`

##### indexSignature()

> **indexSignature**: (`signature`: `SignatureReflection`) => `string`

Renders an index signature block

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `signature` | `SignatureReflection` |

###### Returns

`string`

##### inheritance()

> **inheritance**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`, `headingLevel`: `number`) => `string`

Renders an inheritance section.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |
| `headingLevel` | `number` |

###### Returns

`string`

##### memberTitle()

> **memberTitle**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)) => `string`

Renders the main member title.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

###### Returns

`string`

##### memberWithGroups()

> **memberWithGroups**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `headingLevel`: `number`) => `string`

Renders a top-level member that contains group and child members such as Classes, Interfaces and Enums.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `headingLevel` | `number` |

###### Returns

`string`

##### parametersList()

> **parametersList**: (`parameters`: `ParameterReflection`[]) => `string`

Renders parameters section as a list.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `parameters` | `ParameterReflection`[] |

###### Returns

`string`

##### parametersTable()

> **parametersTable**: (`parameters`: `ParameterReflection`[]) => `string`

Renders parameters section as a table.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `parameters` | `ParameterReflection`[] |

###### Returns

`string`

##### declarationsTable()

> **declarationsTable**: (`props`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[], `isEventProps`: `boolean`) => `string`

Renders a collection of properties in a table.

There is no association list partial for properties as these are handled as a standard list of members.

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `props` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] | `undefined` |
| `isEventProps` | `boolean` | `false` |

###### Returns

`string`

##### referenceMember()

> **referenceMember**: (`props`: `ReferenceReflection`) => `string`

Renders an reference member.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | `ReferenceReflection` |

###### Returns

`string`

##### reflectionFlags()

> **reflectionFlags**: (`reflection`: [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)) => `string`

Renders the flags of a reflection.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) |

###### Returns

`string`

##### reflectionIndex()

> **reflectionIndex**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html), `headingLevel`: `number`) => `string`

Renders the index section of a reflection.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `headingLevel` | `number` |

###### Returns

`string`

##### signature()

> **signature**: (`model`: `SignatureReflection`, `headingLevel`: `number`, `nested`: `boolean`, `accessor`?: `string`) => `string`

Renders a signature member.

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `model` | `SignatureReflection` | `undefined` |
| `headingLevel` | `number` | `undefined` |
| `nested` | `boolean` | `false` |
| `accessor`? | `string` | `undefined` |

###### Returns

`string`

##### signatureParameters()

> **signatureParameters**: (`parameters`: `ParameterReflection`[]) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `parameters` | `ParameterReflection`[] |

###### Returns

`string`

##### signatureReturns()

> **signatureReturns**: (`signature`: `SignatureReflection`, `headingLevel`: `number`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `signature` | `SignatureReflection` |
| `headingLevel` | `number` |

###### Returns

`string`

##### signatureTitle()

> **signatureTitle**: (`signature`: `SignatureReflection`, `opts`?: `object`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `signature` | `SignatureReflection` |
| `opts`? | `object` |
| `opts.accessor`? | `string` |
| `opts.includeType`? | `boolean` |

###### Returns

`string`

##### sources()

> **sources**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`, `headingLevel`: `number`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |
| `headingLevel` | `number` |

###### Returns

`string`

##### member()

> **member**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html), `headingLevel`: `number`, `nested`: `boolean`) => `string`

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | `undefined` |
| `headingLevel` | `number` | `undefined` |
| `nested` | `boolean` | `false` |

###### Returns

`string`

##### typeArguments()

> **typeArguments**: (`model`: `SomeType`[], `foreCollpase`: `boolean`) => `string`

å

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `model` | `SomeType`[] | `undefined` |
| `foreCollpase` | `boolean` | `false` |

###### Returns

`string`

##### typeDeclaration()

> **typeDeclaration**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[], `headingLevel`: `number`) => `string`

å

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `headingLevel` | `number` |

###### Returns

`string`

##### typeDeclarationList()

> **typeDeclarationList**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[], `headingLevel`: `number`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |
| `headingLevel` | `number` |

###### Returns

`string`

##### typeDeclarationTable()

> **typeDeclarationTable**: (`props`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `props` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |

###### Returns

`string`

##### typeParametersList()

> **typeParametersList**: (`typeParameters`: `TypeParameterReflection`[]) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeParameters` | `TypeParameterReflection`[] |

###### Returns

`string`

##### typeParametersTable()

> **typeParametersTable**: (`typeParameters`: `TypeParameterReflection`[]) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `typeParameters` | `TypeParameterReflection`[] |

###### Returns

`string`

#### Comment Partials

##### comment()

> **comment**: (`model`: `Comment`, `options`: `object`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `Comment` |
| `options` | `object` |
| `options.headingLevel`? | `number` |
| `options.showSummary`? | `boolean` |
| `options.showTags`? | `boolean` |

###### Returns

`string`

##### commentParts()

> **commentParts**: (`model`: [`CommentDisplayPart`]( https://typedoc.org/api/types/Models.CommentDisplayPart.html )[]) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`CommentDisplayPart`]( https://typedoc.org/api/types/Models.CommentDisplayPart.html )[] |

###### Returns

`string`

#### Type Partials

##### arrayType()

> **arrayType**: (`model`: `ArrayType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `ArrayType` |

###### Returns

`string`

##### conditionalType()

> **conditionalType**: (`model`: `ConditionalType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `ConditionalType` |

###### Returns

`string`

##### indexAccessType()

> **indexAccessType**: (`model`: `IndexedAccessType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `IndexedAccessType` |

###### Returns

`string`

##### inferredType()

> **inferredType**: (`model`: `InferredType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `InferredType` |

###### Returns

`string`

##### intersectionType()

> **intersectionType**: (`model`: `IntersectionType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `IntersectionType` |

###### Returns

`string`

##### intrinsicType()

> **intrinsicType**: (`model`: `IntrinsicType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `IntrinsicType` |

###### Returns

`string`

##### literalType()

> **literalType**: (`model`: `LiteralType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `LiteralType` |

###### Returns

`string`

##### namedTupleType()

> **namedTupleType**: (`model`: `NamedTupleMember`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `NamedTupleMember` |

###### Returns

`string`

##### queryType()

> **queryType**: (`model`: `QueryType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `QueryType` |

###### Returns

`string`

##### referenceType()

> **referenceType**: (`model`: `ReferenceType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `ReferenceType` |

###### Returns

`string`

##### declarationType()

> **declarationType**: (`model`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

###### Returns

`string`

##### functionType()

> **functionType**: (`signatures`: `SignatureReflection`[], `forceParameterType`: `boolean`) => `string`

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `signatures` | `SignatureReflection`[] | `undefined` |
| `forceParameterType` | `boolean` | `false` |

###### Returns

`string`

##### reflectionType()

> **reflectionType**: (`model`: `ReflectionType`, `foreCollpase`: `boolean`) => `string`

###### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `model` | `ReflectionType` | `undefined` |
| `foreCollpase` | `boolean` | `false` |

###### Returns

`string`

##### someType()

> **someType**: (`model`: `SomeType`) => `string`

Takes a generic Type and returns the appropriate partial for it.

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `SomeType` |

###### Returns

`string`

##### tupleType()

> **tupleType**: (`model`: `TupleType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `TupleType` |

###### Returns

`string`

##### typeOperatorType()

> **typeOperatorType**: (`model`: `TypeOperatorType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `TypeOperatorType` |

###### Returns

`string`

##### unionType()

> **unionType**: (`model`: `UnionType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `UnionType` |

###### Returns

`string`

##### unknownType()

> **unknownType**: (`model`: `UnknownType`) => `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `UnknownType` |

###### Returns

`string`

***

### helpers

> **helpers**: `object`

Then `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.

They should can reference other helpers but should not reference other partials.

Helpers can return any value types.

#### flattenDeclarations()

> **flattenDeclarations**: (`props`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[], `includeSignatures`: `boolean`) => [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

##### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `props` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] | `undefined` |
| `includeSignatures` | `boolean` | `false` |

##### Returns

[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

#### getDeclarationComment()

> **getDeclarationComment**: (`declaration`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)) => `any`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `declaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`any`

#### getDeclarationType()

> **getDeclarationType**: (`declaration`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)) => `undefined` \| `SomeType`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `declaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`undefined` \| `SomeType`

#### getKeyword()

> **getKeyword**: (`kind`: `ReflectionKind`) => `any`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `kind` | `ReflectionKind` |

##### Returns

`any`

#### getModifier()

> **getModifier**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)) => `null` \| `"set"` \| `"private"` \| `"public"` \| `"readonly"` \| `"protected"` \| `"static"` \| `"abstract"` \| `"get"`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

##### Returns

`null` \| `"set"` \| `"private"` \| `"public"` \| `"readonly"` \| `"protected"` \| `"static"` \| `"abstract"` \| `"get"`

#### getPackagesMeta()

> **getPackagesMeta**: (`key`: `string`) => `object`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`object`

###### options

> **options**: [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)

###### description?

> **`optional`** **description**: `string`

#### getParameterDefaultValue()

> **getParameterDefaultValue**: (`parameter`: `ParameterReflection`) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `parameter` | `ParameterReflection` |

##### Returns

`string`

#### getProjectName()

> **getProjectName**: (`textContent`: `string`) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `textContent` | `string` |

##### Returns

`string`

#### getRelativeUrl()

> **getRelativeUrl**: (`url`: `string`, `ignorePublicPath`: `boolean`) => `string`

##### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `ignorePublicPath` | `boolean` | `false` |

##### Returns

`string`

#### getTextFromKindString()

> **getTextFromKindString**: (`kindString`: `string`, `isPlural`: `boolean`) => `string`

##### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `kindString` | `string` | `undefined` |
| `isPlural` | `boolean` | `false` |

##### Returns

`string`

#### getText()

> **getText**: (`key`: keyof [`TextContentMappings`](/api-docs/Interface.TextContentMappings.md)) => `string`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | keyof [`TextContentMappings`](/api-docs/Interface.TextContentMappings.md) |

##### Returns

`string`

#### isGroupKind()

> **isGroupKind**: (`reflection`: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`) => `boolean`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |

##### Returns

`boolean`
