# MarkdownTheme

The main theme class for the plugin.

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

- [`Theme`](https://typedoc.org/api/classes/Theme.html)

## Constructors

### new MarkdownTheme()

```ts
new MarkdownTheme(owner): MarkdownTheme
```

Create new Component instance.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) |

#### Returns

[`MarkdownTheme`](/api-docs/Class.MarkdownTheme.md)

#### Inherited from

`Theme.constructor`

## Methods

### getRenderContext()

```ts
getRenderContext(page): MarkdownThemeContext
```

Creates a new instance of the current theme context.

This method can be overridden to provide an alternative theme context.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `page` | [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\> |

#### Returns

[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)

***

### getUrls()

```ts
getUrls(project): UrlMapping<Reflection>[]
```

Maps the models of the given project to the desired output files.

This method can be overriden to provide an alternative url structure.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlMapping`](/api-docs/Interface.UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>[]

#### Overrides

`Theme.getUrls`

***

### getNavigation()

```ts
getNavigation(project): NavigationItem[]
```

Map the models of the given project to a navigation structure.

This method can be overriden to provide an alternative navigation structure.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationItem`](/api-docs/Interface.NavigationItem.md)[]
