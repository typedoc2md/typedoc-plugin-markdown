[Developer Guide](../../README.md) / [typedoc-plugin-markdown](../README.md) / types

# types

All plugin types are exported from this module.

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TranslatableStrings](interfaces/TranslatableStrings.md) | The model of translatable strings specific to the Markdown theme. |
| [MarkdownApplication](interfaces/MarkdownApplication.md) | The MarkdownApplication extends TypeDoc's [Application](https://typedoc.org/api/classes/Application.html) instance with a custom renderer. |
| [MarkdownRendererHooks](interfaces/MarkdownRendererHooks.md) | Describes the hooks available to inject output in the markdown theme. |
| [MarkdownRenderer](interfaces/MarkdownRenderer.md) | The MarkdownRenderer extends TypeDoc's [Renderer](https://typedoc.org/api/classes/Renderer.html) instance with custom hooks and async jobs. |
| [PluginOptions](interfaces/PluginOptions.md) | Describes the options declared by the plugin. |
| [PackageMetaData](interfaces/PackageMetaData.md) | The model used to define the package metadata when in packages mode. |
| [UrlMapping](interfaces/UrlMapping.md) | The model used to define the URL mapping structure. |
| [NavigationItem](interfaces/NavigationItem.md) | The model used to define the navigation structure. |
| [TemplateMapping](interfaces/TemplateMapping.md) | Defines how reflections are mapped to urls. |
| [UrlOption](interfaces/UrlOption.md) | Used internally when building the URL mapping. |

## Type Aliases

### RenderTemplate()\<T\>

> **RenderTemplate**\<`T`\>: (`data`) => `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/theme.ts:62](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L62)

Defines the template type to use for rendering.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`T`](../../types/typedoc-plugin-markdown.types.RenderTemplate.html#t) |

#### Returns

`string`
