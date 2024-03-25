# MarkdownTheme

The main theme class for the plugin.

The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.

You would typically only be interested in overriding the the theme's render context instance.

The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.

## Usage

This code defines a new theme called "customTheme":

```ts
import { MarkdownAppication, MarkdownRenderer, MarkdownTheme, MarkdownThemeRenderContext } from "typedoc-plugin-markdown";

export function load(app: MarkdownAppication) {
  app.renderer.defineTheme("customTheme", MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {

  constructor(renderer: MarkdownRenderer) {
    super(renderer);
  }

  // Return a new render context
  getRenderContext(page) {
   return new MyMarkdownThemeRenderContext(this, page, this.application.options);
  }

  });
}
}

class MyMarkdownThemeRenderContext extends MarkdownThemeRenderContext {
 ...
}
```

The theme can then be consumed by the `theme` option:

```shell
typedoc --plugin typedoc-plugin-markdown --theme customTheme
```

## Extends

- [`Theme`](https://typedoc.org/api/classes/Theme.html)

## Methods

### getRenderContext()

> **getRenderContext**(`page`: [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>): [`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)

Creates a new instance of the current theme context.

This method can be overridden to provide an alternative theme context.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `page` | [`MarkdownPageEvent`](/api-docs/Class.MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\> |

#### Returns

[`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)

***

### getUrls()

> **getUrls**(`project`: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)): [`UrlMapping`](/api-docs/Interface.UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)\>[]

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

> **getNavigation**(`project`: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)): [`NavigationItem`](/api-docs/Interface.NavigationItem.md)[]

Map the models of the given project to a navigation structure.

This method can be overriden to provide an alternative navigation structure.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationItem`](/api-docs/Interface.NavigationItem.md)[]
