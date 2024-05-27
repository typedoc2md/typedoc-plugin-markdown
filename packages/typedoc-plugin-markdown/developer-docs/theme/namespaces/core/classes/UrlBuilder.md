[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [theme](../../../README.md) / [core](../README.md) / UrlBuilder

# Class: UrlBuilder

Map the models of the given project to the desired output files.
Based on TypeDoc DefaultTheme.getUrls()

## Table of Contents

* [Param](#param)
* [Constructors](#constructors)
* [Methods](#methods)
* [Properties](#properties)

## Param

The project whose urls should be generated.

## Constructors

### new UrlBuilder()

```ts
new UrlBuilder(theme, project): UrlBuilder
```

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `theme`   | [`MarkdownTheme`](../../../classes/MarkdownTheme.md)                                 |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlBuilder`](UrlBuilder.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L40)

## Methods

### getUrls()

```ts
getUrls(): UrlMapping<Reflection>[]
```

#### Returns

[`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:65](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L65)

***

### getFlattenedUrl()

```ts
getFlattenedUrl(reflection): string
```

#### Parameters

| Parameter    | Type                                                                                         |
| ------------ | -------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:401](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L401)

## Properties

### theme

```ts
theme: MarkdownTheme;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L41)

***

### project

```ts
project: ProjectReflection;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/url-builder.ts#L42)
