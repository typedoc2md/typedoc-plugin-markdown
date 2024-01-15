# theme/resources/partials

## Other

### breadcrumbs()

> **breadcrumbs**(`context`, `page`): `string`

Renders the breadcrumbs

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **page**: [`MarkdownPageEvent`](../../plugin/events.md#markdownpageevent)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>

#### Returns

`string`

#### Source

[theme/resources/partials/breadcrumbs.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/breadcrumbs.ts#L10)

***

### header()

> **header**(`context`, `page`): `string`

Docs for header!!!

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **page**: [`MarkdownPageEvent`](../../plugin/events.md#markdownpageevent)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>

#### Returns

`string`

#### Source

[theme/resources/partials/header.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/header.ts#L13)

***

### reflectionIndex()

> **reflectionIndex**(`context`, `reflection`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/index.reflection.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/index.reflection.ts#L10)

***

### linkTo()

> **linkTo**(`context`, `label`, `url`?): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **label**: `string`

• **url?**: `string`

#### Returns

`string`

#### Source

[theme/resources/partials/link-to.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/link-to.ts#L4)

***

### memberHierarchy()

> **memberHierarchy**(`context`, `declarationHierarchy`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **declarationHierarchy**: `DeclarationHierarchy`

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.hierarchy.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.hierarchy.ts#L4)

***

### inheritance()

> **inheritance**(`context`, `reflection`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.inheritance.ts:9](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.inheritance.ts#L9)

***

### members()

> **members**(`context`, `container`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **container**: `ContainerReflection`

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/members.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/members.ts#L10)

***

### typeArguments()

> **typeArguments**(`context`, `typeArguments`, `foreCollpase`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **typeArguments**: `SomeType`[]

• **foreCollpase**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/type-argumentsts.ts:4](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type-argumentsts.ts#L4)

## Partials

### commentParts()

> **commentParts**(`context`, `parts`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **parts**: [`CommentDisplayPart`]( https://typedoc.org/api/types/Models.CommentDisplayPart.html )[]

#### Returns

`string`

#### Source

[theme/resources/partials/comment.parts.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/comment.parts.ts#L8)

***

### comment()

> **comment**(`context`, `comment`, `headingLevel`?, `showSummary`?, `showTags`?): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **comment**: `Comment`

• **headingLevel?**: `number`

• **showSummary?**: `boolean`= `true`

• **showTags?**: `boolean`= `true`

#### Returns

`string`

#### Source

[theme/resources/partials/comment.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/comment.ts#L7)

***

### generator()

> **generator**(`context`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

#### Returns

`string`

#### Source

[theme/resources/partials/generator.ts:6](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/generator.ts#L6)

***

### pageIndex()

> **pageIndex**(`context`, `page`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **page**: [`MarkdownPageEvent`](../../plugin/events.md#markdownpageevent)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/index.page.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/index.page.ts#L13)

***

### parametersList()

> **parametersList**(`context`, `parameters`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **parameters**: `ParameterReflection`[]

#### Returns

`string`

#### Source

[theme/resources/partials/list.parameters.ts:8](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/list.parameters.ts#L8)

***

### typeParametersList()

> **typeParametersList**(`context`, `typeParameters`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **typeParameters**: `TypeParameterReflection`[]

#### Returns

`string`

#### Source

[theme/resources/partials/list.typeparameters.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/list.typeparameters.ts#L7)

***

### accessorMember()

> **accessorMember**(`context`, `declaration`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **declaration**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.accessor.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.accessor.ts#L7)

***

### constructorMember()

> **constructorMember**(`context`, `reflection`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.constructors.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.constructors.ts#L7)

***

### declarationMemberIdentifier()

> **declarationMemberIdentifier**(`context`, `reflection`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

#### Returns

`string`

#### Source

[theme/resources/partials/member.declaration.identifier.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.declaration.identifier.ts#L7)

***

### declarationMember()

> **declarationMember**(`context`, `declaration`, `headingLevel`, `nested`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **declaration**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

• **headingLevel**: `number`

• **nested**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/member.declaration.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.declaration.ts#L12)

***

### indexSignatureTitle()

> **indexSignatureTitle**(`context`, `signature`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **signature**: `SignatureReflection`

#### Returns

`string`

#### Source

[theme/resources/partials/member.indexsignature.title.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.indexsignature.title.ts#L7)

***

### referenceMember()

> **referenceMember**(`context`, `props`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **props**: `ReferenceReflection`

#### Returns

`string`

#### Source

[theme/resources/partials/member.reference.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.reference.ts#L7)

***

### reflectionMember()

> **reflectionMember**(`context`, `reflection`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.reflection.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.reflection.ts#L7)

***

### signatureMemberIdentifier()

> **signatureMemberIdentifier**(`context`, `signature`, `opts`?): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **signature**: `SignatureReflection`

• **opts?**: \{
  `accessor`: `string`;
  `includeType`: `boolean`;
  }

• **opts\.accessor?**: `string`

• **opts\.includeType?**: `boolean`

#### Returns

`string`

#### Source

[theme/resources/partials/member.signature.identifier.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.signature.identifier.ts#L7)

***

### signatureParameters()

> **signatureParameters**(`context`, `parameters`, `format`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **parameters**: `ParameterReflection`[]

• **format**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/member.signature.parameters.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.signature.parameters.ts#L7)

***

### signatureMemberReturns()

> **signatureMemberReturns**(`context`, `signature`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **signature**: `SignatureReflection`

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.signature.returns.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.signature.returns.ts#L13)

***

### signatureMember()

> **signatureMember**(`context`, `signature`, `headingLevel`, `nested`, `accessor`?): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **signature**: `SignatureReflection`

• **headingLevel**: `number`

• **nested**: `boolean`= `false`

• **accessor?**: `string`

#### Returns

`string`

#### Source

[theme/resources/partials/member.signature.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.signature.ts#L7)

***

### sources()

> **sources**(`context`, `reflection`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection`

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.sources.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.sources.ts#L7)

***

### memberTitle()

> **memberTitle**(`context`, `reflection`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

#### Returns

`string`

#### Source

[theme/resources/partials/member.title.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.title.ts#L7)

***

### member()

> **member**(`context`, `reflection`, `headingLevel`, `nested`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

• **headingLevel**: `number`

• **nested**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/member.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.ts#L11)

***

### typeDeclarationMember()

> **typeDeclarationMember**(`context`, `typeDeclaration`, `headingLevel`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **typeDeclaration**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

• **headingLevel**: `number`

#### Returns

`string`

#### Source

[theme/resources/partials/member.type-declaration.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/member.type-declaration.ts#L7)

***

### pageTitle()

> **pageTitle**(`context`, `page`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **page**: [`MarkdownPageEvent`](../../plugin/events.md#markdownpageevent)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\>

#### Returns

`string`

#### Source

[theme/resources/partials/page.title.ts:11](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/page.title.ts#L11)

***

### enumMembersTable()

> **enumMembersTable**(`context`, `props`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **props**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

#### Returns

`string`

#### Source

[theme/resources/partials/table.enum-members.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/table.enum-members.ts#L7)

***

### parametersTable()

> **parametersTable**(`context`, `parameters`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **parameters**: `ParameterReflection`[]

#### Returns

`string`

#### Source

[theme/resources/partials/table.parameters.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/table.parameters.ts#L7)

***

### propertiesTable()

> **propertiesTable**(`context`, `props`, `isEventProps`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **props**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

• **isEventProps**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/table.properties.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/table.properties.ts#L7)

***

### typeDeclarationTable()

> **typeDeclarationTable**(`context`, `props`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **props**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[]

#### Returns

`string`

#### Source

[theme/resources/partials/table.type-declaration.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/table.type-declaration.ts#L7)

***

### typeParametersTable()

> **typeParametersTable**(`context`, `typeParameters`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **typeParameters**: `TypeParameterReflection`[]

#### Returns

`string`

#### Source

[theme/resources/partials/table.typeparameters.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/table.typeparameters.ts#L7)

***

### arrayType()

> **arrayType**(`context`, `arrayType`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **arrayType**: `ArrayType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.array.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.array.ts#L7)

***

### conditionalType()

> **conditionalType**(`context`, `conditionalType`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **conditionalType**: `ConditionalType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.conditional.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.conditional.ts#L7)

***

### declarationType()

> **declarationType**(`context`, `declarationReflection`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **declarationReflection**: [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)

#### Returns

`string`

#### Source

[theme/resources/partials/type.declaration.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.declaration.ts#L7)

***

### functionType()

> **functionType**(`context`, `modelSignatures`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **modelSignatures**: `SignatureReflection`[]

#### Returns

`string`

#### Source

[theme/resources/partials/type.function.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.function.ts#L7)

***

### indexAccessType()

> **indexAccessType**(`context`, `model`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **model**: `IndexedAccessType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.index-access.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.index-access.ts#L7)

***

### inferredType()

> **inferredType**(`context`, `model`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **model**: `InferredType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.inferred.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.inferred.ts#L7)

***

### intersectionType()

> **intersectionType**(`context`, `model`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **model**: `IntersectionType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.intersection.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.intersection.ts#L7)

***

### intrinsicType()

> **intrinsicType**(`context`, `model`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **model**: `IntrinsicType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.intrinsic.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.intrinsic.ts#L7)

***

### literalType()

> **literalType**(`context`, `literalType`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **literalType**: `LiteralType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.literal.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.literal.ts#L7)

***

### namedTupleType()

> **namedTupleType**(`context`, `member`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **member**: `NamedTupleMember`

#### Returns

`string`

#### Source

[theme/resources/partials/type.named-tuple.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.named-tuple.ts#L7)

***

### queryType()

> **queryType**(`context`, `queryType`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **queryType**: `QueryType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.query.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.query.ts#L7)

***

### referenceType()

> **referenceType**(`context`, `referenceType`, `foreCollpase`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **referenceType**: `ReferenceType`

• **foreCollpase**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/type.reference.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.reference.ts#L7)

***

### reflectionType()

> **reflectionType**(`context`, `reflectionType`, `foreCollpase`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **reflectionType**: `ReflectionType`

• **foreCollpase**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/type.reflection.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.reflection.ts#L7)

***

### someType()

> **someType**(`context`, `someType`, `foreCollpase`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **someType**: `SomeType`

• **foreCollpase**: `boolean`= `false`

#### Returns

`string`

#### Source

[theme/resources/partials/type.some.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.some.ts#L23)

***

### tupleType()

> **tupleType**(`context`, `tupleType`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **tupleType**: `TupleType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.tuple.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.tuple.ts#L7)

***

### typeOperatorType()

> **typeOperatorType**(`context`, `model`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **model**: `TypeOperatorType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.type-operator.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.type-operator.ts#L7)

***

### unionType()

> **unionType**(`context`, `unionType`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **unionType**: `UnionType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.union.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.union.ts#L7)

***

### unknownType()

> **unknownType**(`context`, `model`): `string`

#### Parameters

• **context**: `MarkdownThemeRenderContext`

• **model**: `UnknownType`

#### Returns

`string`

#### Source

[theme/resources/partials/type.unknown.ts:7](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/theme/resources/partials/type.unknown.ts#L7)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
