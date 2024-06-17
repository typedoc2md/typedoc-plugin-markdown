[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [theme](../README.md) / MarkdownTheme

# Class: MarkdownTheme

The main theme class for the plugin.
The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.

You would typically only be interested in overriding the the theme's render context instance.

The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.

## Contents

* [Extends](#extends)
* [Constructors](#constructors)
  * [new MarkdownTheme()](#new-markdowntheme)
* [Methods](#methods)
  * [render()](#render)
  * [getRenderContext()](#getrendercontext)
  * [getUrls()](#geturls)
  * [getNavigation()](#getnavigation)
  * [getTemplateMapping()](#gettemplatemapping)
  * [documentTemplate()](#documenttemplate)
  * [readmeTemplate()](#readmetemplate)
  * [projectTemplate()](#projecttemplate)
  * [reflectionTemplate()](#reflectiontemplate)

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

> **new MarkdownTheme**(`renderer`): [`MarkdownTheme`](MarkdownTheme.md)

#### Parameters

| Parameter  | Type                                                        |
| ---------- | ----------------------------------------------------------- |
| `renderer` | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) |

#### Returns

[`MarkdownTheme`](MarkdownTheme.md)

#### Overrides

`Theme.constructor`

#### Defined in

[theme/markdown-theme.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L38)

## Methods

### render()

> **render**(`page`, `template`): `string`

**`Internal`**

Renders a template and page model to a string.

#### Parameters

| Parameter  | Type                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`     | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>                                                                  |
| `template` | [`RenderTemplate`](../../types/type-aliases/RenderTemplate.md)\<[`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>> |

#### Returns

`string`

#### Overrides

`Theme.render`

#### Defined in

[theme/markdown-theme.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L47)

***

### getRenderContext()

> **getRenderContext**(`page`): [`MarkdownThemeContext`](MarkdownThemeContext.md)

Creates a new instance of the current theme context.

This method can be overridden to provide an alternative theme context.

#### Parameters

| Parameter | Type                                                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Defined in

[theme/markdown-theme.ts:64](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L64)

***

### getUrls()

> **getUrls**(`project`): [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

Maps the models of the given project to the desired output files.

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Overrides

`Theme.getUrls`

#### Defined in

[theme/markdown-theme.ts:71](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L71)

***

### getNavigation()

> **getNavigation**(`project`): [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

Map the models of the given project to a navigation structure.

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

#### Defined in

[theme/markdown-theme.ts:78](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L78)

***

### getTemplateMapping()

> **getTemplateMapping**(`kind`, `outputFileStrategy`?): `any`

**`Internal`**

#### Parameters

| Parameter             | Type                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)           |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../options/namespaces/maps/enumerations/OutputFileStrategy.md) |

#### Returns

`any`

#### Defined in

[theme/markdown-theme.ts:85](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L85)

***

### documentTemplate()

> **documentTemplate**(`page`): `string`

**`Internal`**

#### Parameters

| Parameter | Type                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<`DocumentReflection`> |

#### Returns

`string`

#### Defined in

[theme/markdown-theme.ts:209](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L209)

***

### readmeTemplate()

> **readmeTemplate**(`page`): `string`

**`Internal`**

#### Parameters

| Parameter | Type                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

#### Returns

`string`

#### Defined in

[theme/markdown-theme.ts:216](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L216)

***

### projectTemplate()

> **projectTemplate**(`page`): `string`

**`Internal`**

#### Parameters

| Parameter | Type                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

#### Returns

`string`

#### Defined in

[theme/markdown-theme.ts:223](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L223)

***

### reflectionTemplate()

> **reflectionTemplate**(`page`): `string`

**`Internal`**

#### Parameters

| Parameter | Type                                                                                                                                                            |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)> |

#### Returns

`string`

#### Defined in

[theme/markdown-theme.ts:230](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L230)
