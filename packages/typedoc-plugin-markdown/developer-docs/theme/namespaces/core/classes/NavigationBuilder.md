[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [theme](../../../README.md) / [core](../README.md) / NavigationBuilder

# Class: NavigationBuilder

## Table of Contents

* [Constructors](#constructors)
* [Methods](#methods)
* [Properties](#properties)

## Constructors

### new NavigationBuilder()

```ts
new NavigationBuilder(theme, project): NavigationBuilder
```

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `theme`   | [`MarkdownTheme`](../../../classes/MarkdownTheme.md)                                 |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationBuilder`](NavigationBuilder.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L25)

## Methods

### getNavigation()

```ts
getNavigation(): NavigationItem[]
```

#### Returns

[`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L40)

## Properties

### theme

```ts
theme: MarkdownTheme;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L26)

***

### project

```ts
project: ProjectReflection;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts:27](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/core/navigation-builder.ts#L27)
