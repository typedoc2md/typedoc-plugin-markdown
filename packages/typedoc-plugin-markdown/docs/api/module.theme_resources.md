[typedoc-plugin-markdown](README.md) > theme/resources

# theme/resources

Contains templates and partials used when generating output.

## Templates

### Function: memberTemplate()

```ts
memberTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                          |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                   |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\> |

#### Returns

`string`

---

### Function: projectTemplate()

```ts
projectTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                           |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

---

### Function: readmeTemplate()

```ts
readmeTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                                                                                                           |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

---

### Function: reflectionTemplate()

```ts
reflectionTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                          |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                   |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\> |

#### Returns

`string`

## Partials

### Function: commentParts()

```ts
commentParts(context, parts): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| parts     | [`CommentDisplayPart`](https://typedoc.org/api/types/Models.CommentDisplayPart.html)[]      |

#### Returns

`string`

---

### Function: comment()

```ts
comment(
  context,
  comment,
  headingLevel?): string
```

#### Parameters

| Parameter     | Type                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------ |
| context       | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| comment       | `Comment`                                                                                   |
| headingLevel? | `number`                                                                                    |

#### Returns

`string`

---

### Function: footer()

```ts
footer(context): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |

#### Returns

`string`

---

### Function: header()

```ts
header(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                                                                                                           |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

---

### Function: declarationMemberIdentifier()

```ts
declarationMemberIdentifier(context, reflection): string
```

#### Parameters

| Parameter  | Type                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------- |
| context    | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  |
| reflection | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

---

### Function: declarationMemberName()

```ts
declarationMemberName(
  context,
  declaration,
  emphasis = true): string
```

#### Parameters

| Parameter   | Type                                                                                         | Default value |
| :---------- | :------------------------------------------------------------------------------------------- | :------------ |
| context     | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  | undefined     |
| declaration | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | undefined     |
| emphasis    | `boolean`                                                                                    | true          |

#### Returns

`string`

---

### Function: declarationMember()

```ts
declarationMember(
  context,
  declaration,
  headingLevel,
  showSources = true): string
```

#### Parameters

| Parameter    | Type                                                                                         | Default value |
| :----------- | :------------------------------------------------------------------------------------------- | :------------ |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  | undefined     |
| declaration  | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | undefined     |
| headingLevel | `number`                                                                                     | undefined     |
| showSources  | `boolean`                                                                                    | true          |

#### Returns

`string`

---

### Function: indexSignatureTitle()

```ts
indexSignatureTitle(context, signature): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| signature | `SignatureReflection`                                                                       |

#### Returns

`string`

---

### Function: referenceMember()

```ts
referenceMember(context, props): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| props     | `ReferenceReflection`                                                                       |

#### Returns

`string`

---

### Function: reflectionMember()

```ts
reflectionMember(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  |
| reflection   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| headingLevel | `number`                                                                                     |

#### Returns

`string`

---

### Function: signatureMemberIdentifier()

```ts
signatureMemberIdentifier(context, signature): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| signature | `SignatureReflection`                                                                       |

#### Returns

`string`

---

### Function: signatureMember()

```ts
signatureMember(
  context,
  signature,
  headingLevel,
  showSources = true): string
```

#### Parameters

| Parameter    | Type                                                                                        | Default value |
| :----------- | :------------------------------------------------------------------------------------------ | :------------ |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) | undefined     |
| signature    | `SignatureReflection`                                                                       | undefined     |
| headingLevel | `number`                                                                                    | undefined     |
| showSources  | `boolean`                                                                                   | true          |

#### Returns

`string`

---

### Function: sources()

```ts
sources(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter    | Type                                                                                                                  |
| :----------- | :-------------------------------------------------------------------------------------------------------------------- |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                           |
| reflection   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |
| headingLevel | `number`                                                                                                              |

#### Returns

`string`

---

### Function: memberTitle()

```ts
memberTitle(
  context,
  reflection,
  typeParams = false): string
```

#### Parameters

| Parameter  | Type                                                                                         | Default value |
| :--------- | :------------------------------------------------------------------------------------------- | :------------ |
| context    | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  | undefined     |
| reflection | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | undefined     |
| typeParams | `boolean`                                                                                    | false         |

#### Returns

`string`

---

### Function: member()

```ts
member(
  context,
  reflection,
  headingLevel,
  parentName?): string
```

#### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  |
| reflection   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| headingLevel | `number`                                                                                     |
| parentName?  | `string`                                                                                     |

#### Returns

`string`

---

### Function: typeDeclarationMember()

```ts
typeDeclarationMember(
  context,
  typeDeclaration,
  headingLevel,
  parentName?): string
```

#### Parameters

| Parameter       | Type                                                                                         |
| :-------------- | :------------------------------------------------------------------------------------------- |
| context         | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  |
| typeDeclaration | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| headingLevel    | `number`                                                                                     |
| parentName?     | `string`                                                                                     |

#### Returns

`string`

---

### Function: navigation()

```ts
navigation(context, navigationItems): string
```

#### Parameters

| Parameter       | Type                                                                                        |
| :-------------- | :------------------------------------------------------------------------------------------ |
| context         | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| navigationItems | [`NavigationItem`](module.theme_models.md#interface-navigationitem)[]                       |

#### Returns

`string`

---

### Function: pageTitle()

```ts
pageTitle(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                                                                                                           |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

---

### Function: pageTOC()

```ts
pageTOC(
  context,
  page,
  headingLevel): string
```

#### Parameters

| Parameter    | Type                                                                                                                                                                                                                                                  |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                                                                                                           |
| page         | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |
| headingLevel | `number`                                                                                                                                                                                                                                              |

#### Returns

`string`

---

### Function: enumMembersTable()

```ts
enumMembersTable(context, props): string
```

#### Parameters

| Parameter | Type                                                                                           |
| :-------- | :--------------------------------------------------------------------------------------------- |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)    |
| props     | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |

#### Returns

`string`

---

### Function: parametersTable()

```ts
parametersTable(context, parameters): string
```

#### Parameters

| Parameter  | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| context    | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| parameters | `ParameterReflection`[]                                                                     |

#### Returns

`string`

---

### Function: propertiesTable()

```ts
propertiesTable(
  context,
  props,
  nameCol = 'Property'): string
```

#### Parameters

| Parameter | Type                                                                                           | Default value |
| :-------- | :--------------------------------------------------------------------------------------------- | :------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)    | undefined     |
| props     | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] | undefined     |
| nameCol   | `string`                                                                                       | 'Property'    |

#### Returns

`string`

---

### Function: typeParametersTable()

```ts
typeParametersTable(context, typeParameters): string
```

#### Parameters

| Parameter      | Type                                                                                        |
| :------------- | :------------------------------------------------------------------------------------------ |
| context        | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| typeParameters | `TypeParameterReflection`[]                                                                 |

#### Returns

`string`

---

### Function: arrayType()

```ts
arrayType(context, arrayType): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| arrayType | `ArrayType`                                                                                 |

#### Returns

`string`

---

### Function: conditionalType()

```ts
conditionalType(context, conditionalType): string
```

#### Parameters

| Parameter       | Type                                                                                        |
| :-------------- | :------------------------------------------------------------------------------------------ |
| context         | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| conditionalType | `ConditionalType`                                                                           |

#### Returns

`string`

---

### Function: declarationType()

```ts
declarationType(
  context,
  declarationReflection,
  collapse = false): string
```

#### Parameters

| Parameter             | Type                                                                                         | Default value |
| :-------------------- | :------------------------------------------------------------------------------------------- | :------------ |
| context               | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)  | undefined     |
| declarationReflection | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | undefined     |
| collapse              | `boolean`                                                                                    | false         |

#### Returns

`string`

---

### Function: functionType()

```ts
functionType(context, modelSignatures): string
```

#### Parameters

| Parameter       | Type                                                                                        |
| :-------------- | :------------------------------------------------------------------------------------------ |
| context         | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| modelSignatures | `SignatureReflection`[]                                                                     |

#### Returns

`string`

---

### Function: indexAccessType()

```ts
indexAccessType(context, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| model     | `IndexedAccessType`                                                                         |

#### Returns

`string`

---

### Function: inferredType()

```ts
inferredType(context, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| model     | `InferredType`                                                                              |

#### Returns

`string`

---

### Function: intersectionType()

```ts
intersectionType(context, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| model     | `IntersectionType`                                                                          |

#### Returns

`string`

---

### Function: intrinsicType()

```ts
intrinsicType(context, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| model     | `IntrinsicType`                                                                             |

#### Returns

`string`

---

### Function: literalType()

```ts
literalType(context, literalType): string
```

#### Parameters

| Parameter   | Type                                                                                        |
| :---------- | :------------------------------------------------------------------------------------------ |
| context     | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| literalType | `LiteralType`                                                                               |

#### Returns

`string`

---

### Function: namedTupleType()

```ts
namedTupleType(context, member): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| member    | `NamedTupleMember`                                                                          |

#### Returns

`string`

---

### Function: queryType()

```ts
queryType(context, queryType): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| queryType | `QueryType`                                                                                 |

#### Returns

`string`

---

### Function: referenceType()

```ts
referenceType(context, referenceType): string
```

#### Parameters

| Parameter     | Type                                                                                        |
| :------------ | :------------------------------------------------------------------------------------------ |
| context       | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| referenceType | `ReferenceType`                                                                             |

#### Returns

`string`

---

### Function: reflectionType()

```ts
reflectionType(
  context,
  reflectionType,
  collapse): string
```

#### Parameters

| Parameter      | Type                                                                                        |
| :------------- | :------------------------------------------------------------------------------------------ |
| context        | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| reflectionType | `ReflectionType`                                                                            |
| collapse       | `boolean`                                                                                   |

#### Returns

`string`

---

### Function: someType()

```ts
someType(
  context,
  someType,
  collapse = false): string
```

#### Parameters

| Parameter | Type                                                                                        | Default value |
| :-------- | :------------------------------------------------------------------------------------------ | :------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) | undefined     |
| someType  | `SomeType`                                                                                  | undefined     |
| collapse  | `boolean`                                                                                   | false         |

#### Returns

`string`

---

### Function: tupleType()

```ts
tupleType(context, tupleType): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| tupleType | `TupleType`                                                                                 |

#### Returns

`string`

---

### Function: typeOperatorType()

```ts
typeOperatorType(context, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| model     | `TypeOperatorType`                                                                          |

#### Returns

`string`

---

### Function: unionType()

```ts
unionType(context, unionType): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| unionType | `UnionType`                                                                                 |

#### Returns

`string`

---

### Function: unknownType()

```ts
unknownType(context, model): string
```

#### Parameters

| Parameter | Type                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------ |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| model     | `UnknownType`                                                                               |

#### Returns

`string`

## Other

### Function: breadcrumbs()

```ts
breadcrumbs(context, page): string
```

Renders the breadcrumbs

#### Merge Target

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                                                                                                           |
| page      | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

---

### Function: memberHierarchy()

```ts
memberHierarchy(
  context,
  declarationHierarchy,
  headingLevel): string
```

#### Parameters

| Parameter            | Type                                                                                        |
| :------------------- | :------------------------------------------------------------------------------------------ |
| context              | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| declarationHierarchy | `DeclarationHierarchy`                                                                      |
| headingLevel         | `number`                                                                                    |

#### Returns

`string`

---

### Function: inheritance()

```ts
inheritance(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter    | Type                                                                                                                  |
| :----------- | :-------------------------------------------------------------------------------------------------------------------- |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                           |
| reflection   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |
| headingLevel | `number`                                                                                                              |

#### Returns

`string`

---

### Function: memberTOC()

```ts
memberTOC(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter    | Type                                                                                                                                                                                 |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext)                                                                                          |
| reflection   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| headingLevel | `number`                                                                                                                                                                             |

#### Returns

`string`

---

### Function: members()

```ts
members(
  context,
  container,
  headingLevel): string
```

#### Parameters

| Parameter    | Type                                                                                        |
| :----------- | :------------------------------------------------------------------------------------------ |
| context      | [`MarkdownThemeRenderContext`](module.theme_definition.md#class-markdownthemerendercontext) |
| container    | `ContainerReflection`                                                                       |
| headingLevel | `number`                                                                                    |

#### Returns

`string`
