[typedoc-plugin-markdown v4.0.3](../../../../../README.md) / [theme](../../../../README.md) / [context](../../README.md) / helpers

# Namespace: helpers

The `helpers` namespace holds the helpers for the theme and are smaller utility functions that return snippets or text or other data transformations.

Please note that partials:

* Take a `model` param (that references a specific TypeDoc model) and an `options` param if required.
* Can reference other helpers but should not reference partials.
* Can return strings or other models.

## Table of Contents

* [getCommentParts()](#getcommentparts)
* [isFile()](#isfile)
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

## getCommentParts()

```ts
function getCommentParts(this, model): string
```

### Parameters

| Parameter | Type                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                   |
| `model`   | [`CommentDisplayPart`](https://typedoc.org/api/types/Models.CommentDisplayPart.html)\[] |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-comment-parts.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-comment-parts.ts#L6)

***

## isFile()

```ts
function isFile(file): boolean
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `file`    | `string` |

### Returns

`boolean`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-comment-parts.ts:64](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-comment-parts.ts#L64)

***

## getDeclarationType()

```ts
function getDeclarationType(model): undefined | SomeType
```

### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`undefined` | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-declaration-type.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-declaration-type.ts#L3)

***

## getDescriptionForReflection()

```ts
function getDescriptionForReflection(this, model): null | string
```

### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                        |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`null` | `string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-description-for-reflection.ts:4](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-description-for-reflection.ts#L4)

***

## getFlattenedDeclarations()

```ts
function getFlattenedDeclarations(model, options?): DeclarationReflection[]
```

### Parameters

| Parameter                    | Type                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `model`                      | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] |
| `options`?                   | `object`                                                                                        |
| `options.includeSignatures`? | `boolean`                                                                                       |

### Returns

[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[]

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-flattened-declarations.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-flattened-declarations.ts#L3)

***

## getGroupIndexList()

```ts
function getGroupIndexList(this, children): string
```

### Parameters

| Parameter  | Type                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `this`     | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                      |
| `children` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] \| `DocumentReflection`\[] |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-group-index-list.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-group-index-list.ts#L6)

***

## getGroupIndexTable()

```ts
function getGroupIndexTable(
   this, 
   children, 
   kind?): string
```

### Parameters

| Parameter  | Type                                                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| `this`     | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                      |
| `children` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] \| `DocumentReflection`\[] |
| `kind`?    | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)                                             |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-group-index-table.ts:10](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-group-index-table.ts#L10)

***

## getGroupIndex()

```ts
function getGroupIndex(group): any
```

### Parameters

| Parameter | Type                                                                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `group`   | [`ReflectionCategory`](https://typedoc.org/api/types/Models.ReflectionCategory.html) \| [`ReflectionGroup`](https://typedoc.org/api/classes/Models.ReflectionGroup.html) |

### Returns

`any`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-group-index.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-group-index.ts#L8)

***

## getHierarchyType()

```ts
function getHierarchyType(
   this, 
   model, 
   options?): string
```

### Parameters

| Parameter           | Type                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| `this`              | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`             | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)    |
| `options`?          | `object`                                                              |
| `options.isTarget`? | `boolean`                                                             |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-hierarchy-type.ts:5](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-hierarchy-type.ts#L5)

***

## getKeyword()

```ts
function getKeyword(model): string
```

### Parameters

| Parameter | Type                                                                           |
| --------- | ------------------------------------------------------------------------------ |
| `model`   | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html) |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-keyword.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-keyword.ts#L3)

***

## getModifier()

```ts
function getModifier(model): string | null
```

### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`string` | `null`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-modifier.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-modifier.ts#L3)

***

## getParameterDefaultValue()

```ts
function getParameterDefaultValue(model): string
```

### Parameters

| Parameter | Type                                                                                     |
| --------- | ---------------------------------------------------------------------------------------- |
| `model`   | [`ParameterReflection`](https://typedoc.org/api/classes/Models.ParameterReflection.html) |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-parameter-default-value.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-parameter-default-value.ts#L3)

***

## getProjectName()

```ts
function getProjectName(stringWithPlaceholders, page): string
```

### Parameters

| Parameter                | Type                                                                                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stringWithPlaceholders` | `string`                                                                                                                                                          |
| `page`                   | [`MarkdownPageEvent`](../../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-project-name.ts:4](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-project-name.ts#L4)

***

## getPropertyDefaultValue()

```ts
function getPropertyDefaultValue(model): null | string
```

### Parameters

| Parameter | Type                                                                                         |
| --------- | -------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`null` | `string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-property-default-value.ts:4](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-property-default-value.ts#L4)

***

## getReflectionFlags()

```ts
function getReflectionFlags(this, reflection): string[]
```

### Parameters

| Parameter    | Type                                                                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `this`       | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md)                                                                                                                    |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

### Returns

`string`\[]

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-reflection-flags.ts:5](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-reflection-flags.ts#L5)

***

## getReturnType()

```ts
function getReturnType(this, model?): string
```

### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `model`?  | [`SomeType`](https://typedoc.org/api/classes/Models.SomeType.html)    |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/get-return-type.ts:5](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/get-return-type.ts#L5)

***

## isGroupKind()

```ts
function isGroupKind(model): boolean
```

### Parameters

| Parameter | Type                                                                                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`   | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) \| [`SignatureReflection`](https://typedoc.org/api/classes/Models.SignatureReflection.html) |

### Returns

`boolean`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/is-group-kind.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/is-group-kind.ts#L7)

***

## useTableFormat()

```ts
function useTableFormat(this, key): boolean
```

### Parameters

| Parameter | Type                                                                  |
| --------- | --------------------------------------------------------------------- |
| `this`    | [`MarkdownThemeContext`](../../../../classes/MarkdownThemeContext.md) |
| `key`     | `"parameters"` \| `"properties"` \| `"enums"` \| `"typeDeclarations"` |

### Returns

`boolean`

### Defined in

[packages/typedoc-plugin-markdown/src/theme/context/helpers/use-table.format.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/context/helpers/use-table.format.ts#L3)
