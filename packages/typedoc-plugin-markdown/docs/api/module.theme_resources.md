[**typedoc-plugin-markdown - v4.0.0-next.13**](README.md)

---

[typedoc-plugin-markdown](README.md) > theme/resources

# theme/resources

Contains templates and partials used when generating output.

## Templates

### memberTemplate()

```ts
memberTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                            |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                      |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \> |

#### Returns

`string`

---

### projectTemplate()

```ts
projectTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                              |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

#### Returns

`string`

---

### readmeTemplate()

```ts
readmeTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                                                                                                              |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

#### Returns

`string`

---

### reflectionTemplate()

```ts
reflectionTemplate(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                            |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                      |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \> |

#### Returns

`string`

## Partials

### commentParts()

```ts
commentParts(context, parts): string
```

#### Parameters

| Parameter | Type                                                                                   |
| :-------- | :------------------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)             |
| `parts`   | [`CommentDisplayPart`](https://typedoc.org/api/types/Models.CommentDisplayPart.html)[] |

#### Returns

`string`

---

### comment()

```ts
comment(
  context,
  comment,
  headingLevel?): string
```

#### Parameters

| Parameter       | Type                                                                       |
| :-------------- | :------------------------------------------------------------------------- |
| `context`       | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `comment`       | `Comment`                                                                  |
| `headingLevel`? | `number`                                                                   |

#### Returns

`string`

---

### footer()

```ts
footer(context): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |

#### Returns

`string`

---

### header()

```ts
header(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                                                                                                              |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

#### Returns

`string`

---

### declarationMemberAccessor()

```ts
declarationMemberAccessor(context, declaration): string
```

#### Parameters

| Parameter     | Type                                                                                         |
| :------------ | :------------------------------------------------------------------------------------------- |
| `context`     | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   |
| `declaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

---

### declarationMemberIdentifier()

```ts
declarationMemberIdentifier(context, reflection): string
```

#### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `context`    | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

---

### declarationMember()

```ts
declarationMember(
  context,
  declaration,
  headingLevel,
  nested = false): string
```

#### Parameters

| Parameter      | Type                                                                                         | Default value |
| :------------- | :------------------------------------------------------------------------------------------- | :------------ |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   | `undefined`   |
| `declaration`  | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | `undefined`   |
| `headingLevel` | `number`                                                                                     | `undefined`   |
| `nested`       | `boolean`                                                                                    | `false`       |

#### Returns

`string`

---

### indexSignatureTitle()

```ts
indexSignatureTitle(context, signature): string
```

#### Parameters

| Parameter   | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `context`   | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `signature` | `SignatureReflection`                                                      |

#### Returns

`string`

---

### referenceMember()

```ts
referenceMember(context, props): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `props`   | `ReferenceReflection`                                                      |

#### Returns

`string`

---

### reflectionMember()

```ts
reflectionMember(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                         |
| :------------- | :------------------------------------------------------------------------------------------- |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   |
| `reflection`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `headingLevel` | `number`                                                                                     |

#### Returns

`string`

---

### signatureMemberIdentifier()

```ts
signatureMemberIdentifier(context, signature): string
```

#### Parameters

| Parameter   | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `context`   | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `signature` | `SignatureReflection`                                                      |

#### Returns

`string`

---

### signatureMember()

```ts
signatureMember(
  context,
  signature,
  headingLevel,
  showSources = true): string
```

#### Parameters

| Parameter      | Type                                                                       | Default value |
| :------------- | :------------------------------------------------------------------------- | :------------ |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) | `undefined`   |
| `signature`    | `SignatureReflection`                                                      | `undefined`   |
| `headingLevel` | `number`                                                                   | `undefined`   |
| `showSources`  | `boolean`                                                                  | `true`        |

#### Returns

`string`

---

### sources()

```ts
sources(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                                                  |
| :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                            |
| `reflection`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |
| `headingLevel` | `number`                                                                                                              |

#### Returns

`string`

---

### memberTitle()

```ts
memberTitle(
  context,
  reflection,
  typeParams = false): string
```

#### Parameters

| Parameter    | Type                                                                                         | Default value |
| :----------- | :------------------------------------------------------------------------------------------- | :------------ |
| `context`    | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   | `undefined`   |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | `undefined`   |
| `typeParams` | `boolean`                                                                                    | `false`       |

#### Returns

`string`

---

### member()

```ts
member(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                         |
| :------------- | :------------------------------------------------------------------------------------------- |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   |
| `reflection`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |
| `headingLevel` | `number`                                                                                     |

#### Returns

`string`

---

### typeDeclarationMember()

```ts
typeDeclarationMember(
  context,
  typeDeclaration,
  headingLevel,
  parentName?,
  dividers? = true): string
```

#### Parameters

| Parameter         | Type                                                                                         | Default value |
| :---------------- | :------------------------------------------------------------------------------------------- | :------------ |
| `context`         | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   | `undefined`   |
| `typeDeclaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | `undefined`   |
| `headingLevel`    | `number`                                                                                     | `undefined`   |
| `parentName`?     | `string`                                                                                     | `undefined`   |
| `dividers`?       | `boolean`                                                                                    | `true`        |

#### Returns

`string`

---

### navigation()

```ts
navigation(context, navigationItems): string
```

#### Parameters

| Parameter         | Type                                                                       |
| :---------------- | :------------------------------------------------------------------------- |
| `context`         | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `navigationItems` | [`NavigationItem`](module.theme.md#navigationitem)[]                       |

#### Returns

`string`

---

### pageTitle()

```ts
pageTitle(context, page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                                                                                                              |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

#### Returns

`string`

---

### pageTOC()

```ts
pageTOC(
  context,
  page,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                                                                                                                                                                                    |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                                                                                                              |
| `page`         | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |
| `headingLevel` | `number`                                                                                                                                                                                                                                                |

#### Returns

`string`

---

### enumMembersTable()

```ts
enumMembersTable(context, props): string
```

#### Parameters

| Parameter | Type                                                                                           |
| :-------- | :--------------------------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                     |
| `props`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] |

#### Returns

`string`

---

### parametersTable()

```ts
parametersTable(context, parameters): string
```

#### Parameters

| Parameter    | Type                                                                       |
| :----------- | :------------------------------------------------------------------------- |
| `context`    | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `parameters` | `ParameterReflection`[]                                                    |

#### Returns

`string`

---

### propertiesTable()

```ts
propertiesTable(
  context,
  props,
  nameCol = 'Property'): string
```

#### Parameters

| Parameter | Type                                                                                           | Default value |
| :-------- | :--------------------------------------------------------------------------------------------- | :------------ |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                     | `undefined`   |
| `props`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)[] | `undefined`   |
| `nameCol` | `string`                                                                                       | `'Property'`  |

#### Returns

`string`

---

### typeParametersTable()

```ts
typeParametersTable(context, typeParameters): string
```

#### Parameters

| Parameter        | Type                                                                       |
| :--------------- | :------------------------------------------------------------------------- |
| `context`        | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `typeParameters` | `TypeParameterReflection`[]                                                |

#### Returns

`string`

---

### arrayType()

```ts
arrayType(context, arrayType): string
```

#### Parameters

| Parameter   | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `context`   | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `arrayType` | `ArrayType`                                                                |

#### Returns

`string`

---

### conditionalType()

```ts
conditionalType(context, conditionalType): string
```

#### Parameters

| Parameter         | Type                                                                       |
| :---------------- | :------------------------------------------------------------------------- |
| `context`         | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `conditionalType` | `ConditionalType`                                                          |

#### Returns

`string`

---

### declarationType()

```ts
declarationType(
  context,
  declarationReflection,
  collapse = false): string
```

#### Parameters

| Parameter               | Type                                                                                         | Default value |
| :---------------------- | :------------------------------------------------------------------------------------------- | :------------ |
| `context`               | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                   | `undefined`   |
| `declarationReflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | `undefined`   |
| `collapse`              | `boolean`                                                                                    | `false`       |

#### Returns

`string`

---

### functionType()

```ts
functionType(context, modelSignatures): string
```

#### Parameters

| Parameter         | Type                                                                       |
| :---------------- | :------------------------------------------------------------------------- |
| `context`         | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `modelSignatures` | `SignatureReflection`[]                                                    |

#### Returns

`string`

---

### indexAccessType()

```ts
indexAccessType(context, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `model`   | `IndexedAccessType`                                                        |

#### Returns

`string`

---

### inferredType()

```ts
inferredType(context, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `model`   | `InferredType`                                                             |

#### Returns

`string`

---

### intersectionType()

```ts
intersectionType(context, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `model`   | `IntersectionType`                                                         |

#### Returns

`string`

---

### intrinsicType()

```ts
intrinsicType(context, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `model`   | `IntrinsicType`                                                            |

#### Returns

`string`

---

### literalType()

```ts
literalType(context, literalType): string
```

#### Parameters

| Parameter     | Type                                                                       |
| :------------ | :------------------------------------------------------------------------- |
| `context`     | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `literalType` | `LiteralType`                                                              |

#### Returns

`string`

---

### namedTupleType()

```ts
namedTupleType(context, member): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `member`  | `NamedTupleMember`                                                         |

#### Returns

`string`

---

### queryType()

```ts
queryType(context, queryType): string
```

#### Parameters

| Parameter   | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `context`   | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `queryType` | `QueryType`                                                                |

#### Returns

`string`

---

### referenceType()

```ts
referenceType(context, referenceType): string
```

#### Parameters

| Parameter       | Type                                                                       |
| :-------------- | :------------------------------------------------------------------------- |
| `context`       | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `referenceType` | `ReferenceType`                                                            |

#### Returns

`string`

---

### reflectionType()

```ts
reflectionType(
  context,
  reflectionType,
  collapse): string
```

#### Parameters

| Parameter        | Type                                                                       |
| :--------------- | :------------------------------------------------------------------------- |
| `context`        | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `reflectionType` | `ReflectionType`                                                           |
| `collapse`       | `boolean`                                                                  |

#### Returns

`string`

---

### someType()

```ts
someType(
  context,
  someType,
  collapse = false): string
```

#### Parameters

| Parameter  | Type                                                                       | Default value |
| :--------- | :------------------------------------------------------------------------- | :------------ |
| `context`  | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) | `undefined`   |
| `someType` | `SomeType`                                                                 | `undefined`   |
| `collapse` | `boolean`                                                                  | `false`       |

#### Returns

`string`

---

### tupleType()

```ts
tupleType(context, tupleType): string
```

#### Parameters

| Parameter   | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `context`   | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `tupleType` | `TupleType`                                                                |

#### Returns

`string`

---

### typeOperatorType()

```ts
typeOperatorType(context, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `model`   | `TypeOperatorType`                                                         |

#### Returns

`string`

---

### unionType()

```ts
unionType(context, unionType): string
```

#### Parameters

| Parameter   | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `context`   | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `unionType` | `UnionType`                                                                |

#### Returns

`string`

---

### unknownType()

```ts
unknownType(context, model): string
```

#### Parameters

| Parameter | Type                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `model`   | `UnknownType`                                                              |

#### Returns

`string`

## Other

### breadcrumbs()

```ts
breadcrumbs(context, page): string
```

Renders the breadcrumbs

#### Merge Target

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                    |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `context` | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                                                                                                              |
| `page`    | [`PageEvent`](https://typedoc.org/api/classes/PageEvent.html)\< [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) \> |

#### Returns

`string`

---

### memberHierarchy()

```ts
memberHierarchy(
  context,
  declarationHierarchy,
  headingLevel): string
```

#### Parameters

| Parameter              | Type                                                                       |
| :--------------------- | :------------------------------------------------------------------------- |
| `context`              | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `declarationHierarchy` | `DeclarationHierarchy`                                                     |
| `headingLevel`         | `number`                                                                   |

#### Returns

`string`

---

### inheritance()

```ts
inheritance(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                                                  |
| :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                            |
| `reflection`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| `SignatureReflection` |
| `headingLevel` | `number`                                                                                                              |

#### Returns

`string`

---

### memberTOC()

```ts
memberTOC(
  context,
  reflection,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                                                                                                                                 |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext)                                                                                                           |
| `reflection`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `headingLevel` | `number`                                                                                                                                                                             |

#### Returns

`string`

---

### members()

```ts
members(
  context,
  container,
  headingLevel): string
```

#### Parameters

| Parameter      | Type                                                                       |
| :------------- | :------------------------------------------------------------------------- |
| `context`      | [`MarkdownThemeRenderContext`](module.theme.md#markdownthemerendercontext) |
| `container`    | `ContainerReflection`                                                      |
| `headingLevel` | `number`                                                                   |

#### Returns

`string`
