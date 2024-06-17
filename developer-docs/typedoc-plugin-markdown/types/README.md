[Packages Index](../../README.md) / [typedoc-plugin-markdown](../README.md) / types

# types

All plugin types are exported from this module.

## Index

### Interfaces

| Interface                                                    | Description                                                                                                                                               |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TranslatableStrings](interfaces/TranslatableStrings.md)     | The model of translatable strings specific to the Markdown theme.                                                                                         |
| [MarkdownApplication](interfaces/MarkdownApplication.md)     | This interface is essentially an extended typing of TypeDoc's [`Application`](https://typedoc.org/api/classes/Application.html) instance.                 |
| [MarkdownRendererHooks](interfaces/MarkdownRendererHooks.md) | Describes the hooks available to inject output in the markdown theme.                                                                                     |
| [MarkdownRenderer](interfaces/MarkdownRenderer.md)           | An extended typing of TypeDoc's [`Renderer`](https://typedoc.org/api/classes/Renderer.html) class that includes updated typings for hooks and async jobs. |
| [PluginOptions](interfaces/PluginOptions.md)                 | Describes the options declared by the plugin.                                                                                                             |
| [PackageMetaData](interfaces/PackageMetaData.md)             | The model used to define the package metadata when in packages mode.                                                                                      |
| [UrlMapping](interfaces/UrlMapping.md)                       | The model used to define the URL mapping structure.                                                                                                       |
| [NavigationItem](interfaces/NavigationItem.md)               | The model used to define the navigation structure.                                                                                                        |
| [TemplateMapping](interfaces/TemplateMapping.md)             | Defines how reflections are mapped to urls.                                                                                                               |
| [UrlOption](interfaces/UrlOption.md)                         | Used internally when building the URL mapping.                                                                                                            |

### Type Aliases

| Type alias                                       | Description                                     |
| ------------------------------------------------ | ----------------------------------------------- |
| [RenderTemplate](type-aliases/RenderTemplate.md) | Defines the template type to use for rendering. |
