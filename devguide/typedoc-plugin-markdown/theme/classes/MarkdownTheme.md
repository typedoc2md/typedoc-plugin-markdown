[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [theme](../README.md) / MarkdownTheme

# Class: MarkdownTheme

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L25)

The main theme class for the plugin.

The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.

You would typically only be interested in overriding the the theme's render context instance.

The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.

## Extends

- [`Theme`](https://typedoc.org/api/classes/Theme.html)

## Constructors

### new MarkdownTheme()

> **new MarkdownTheme**(`owner`): [`MarkdownTheme`](MarkdownTheme.md)

Defined in: node\_modules/typedoc/dist/lib/utils/component.d.ts:29

Create new Component instance.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) |

#### Returns

[`MarkdownTheme`](MarkdownTheme.md)

#### Inherited from

`Theme.constructor`

## Methods

### render()

> **render**(`page`, `template`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L29)

Renders a template and page model to a string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `page` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)\> |
| `template` | [`RenderTemplate`](../../types/README.md#rendertemplatet)\<[`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)\>\> |

#### Returns

`string`

#### Overrides

`Theme.render`

***

### getRenderContext()

> **getRenderContext**(`page`): [`MarkdownThemeContext`](MarkdownThemeContext.md)

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L46)

Creates a new instance of the current theme context.

This method can be overridden to provide an alternative theme context.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `page` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)\> |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

***

### getUrls()

> **getUrls**(`project`): [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)\>[]

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:53](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L53)

Maps the models of the given project to the desired output files.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Reflection.html)\>[]

#### Overrides

`Theme.getUrls`

***

### getNavigation()

> **getNavigation**(`project`): [`NavigationItem`](../../types/interfaces/NavigationItem.md)[]

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:60](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L60)

Map the models of the given project to a navigation structure.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationItem`](../../types/interfaces/NavigationItem.md)[]

***

### getTemplateMapping()

> **getTemplateMapping**(`kind`, `outputFileStrategy`?): `any`

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:67](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L67)

Returns the template mapping for a given reflection kind.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `kind` | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html) |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../options/namespaces/maps/README.md#outputfilestrategy) |

#### Returns

`any`

***

### documentTemplate()

> **documentTemplate**(`page`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:188](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L188)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `page` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<`DocumentReflection`\> |

#### Returns

`string`

***

### readmeTemplate()

> **readmeTemplate**(`page`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:192](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L192)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `page` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

***

### projectTemplate()

> **projectTemplate**(`page`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:196](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L196)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `page` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)\> |

#### Returns

`string`

***

### reflectionTemplate()

> **reflectionTemplate**(`page`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:200](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L200)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `page` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\> |

#### Returns

`string`
