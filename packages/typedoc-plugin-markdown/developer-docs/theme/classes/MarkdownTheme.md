[typedoc-plugin-markdown v4.0.3](../../README.md) / [theme](../README.md) / MarkdownTheme

# Class: MarkdownTheme

The main theme class for the plugin.

## Table of Contents

* [Example](#example)
* [Extends](#extends)
* [Constructors](#constructors)
* [Methods](#methods)

## Remarks

The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.

You would typically only be interested in overriding the the theme's render context instance.

The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.

## Example

```ts
export function load(app) {
  app.renderer.defineTheme('customTheme', MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {
 ...
}
```

## Extends

* [`Theme`](https://typedoc.org/api/classes/Theme.html)

## Constructors

### new MarkdownTheme()

```ts
new MarkdownTheme(owner): MarkdownTheme
```

Create new Component instance.

#### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `owner`   | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) |

#### Returns

[`MarkdownTheme`](MarkdownTheme.md)

#### Inherited from

`Theme.constructor`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:52

## Methods

### render()

`Internal`

```ts
render(page, template): string
```

Renders a template and page model to a string.

#### Parameters

| Parameter  | Type                                                                                                                                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`     | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>                                                                          |
| `template` | [`RenderTemplate`](../namespaces/types/type-aliases/RenderTemplate.md)\<[`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>> |

#### Returns

`string`

#### Overrides

`Theme.render`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L47)

***

### getRenderContext()

```ts
getRenderContext(page): MarkdownThemeContext
```

Creates a new instance of the current theme context.

This method can be overridden to provide an alternative theme context.

#### Parameters

| Parameter | Type                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:64](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L64)

***

### getUrls()

```ts
getUrls(project): UrlMapping<Reflection>[]
```

Maps the models of the given project to the desired output files.

This method can be overriden to provide an alternative url structure.

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlMapping`](../namespaces/types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Overrides

`Theme.getUrls`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:73](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L73)

***

### getNavigation()

```ts
getNavigation(project): NavigationItem[]
```

Map the models of the given project to a navigation structure.

This method can be overriden to provide an alternative navigation structure.

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationItem`](../namespaces/types/interfaces/NavigationItem.md)\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:82](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L82)

***

### getTemplateMapping()

`Internal`

```ts
getTemplateMapping(kind, outputFileStrategy?): any
```

#### Parameters

| Parameter             | Type                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)           |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../options/namespaces/maps/enumerations/OutputFileStrategy.md) |

#### Returns

`any`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:89](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L89)

***

### documentTemplate()

`Internal`

```ts
documentTemplate(page): string
```

#### Parameters

| Parameter | Type                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`DocumentReflection`> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:213](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L213)

***

### readmeTemplate()

`Internal`

```ts
readmeTemplate(page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:220](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L220)

***

### projectTemplate()

`Internal`

```ts
projectTemplate(page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:227](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L227)

***

### reflectionTemplate()

`Internal`

```ts
reflectionTemplate(page): string
```

#### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:234](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L234)
