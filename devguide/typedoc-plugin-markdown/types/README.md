[Home](../../README.md) / [typedoc-plugin-markdown](../README.md) / types

# types

All plugin types are exported from this module.

## Index

### Interfaces

| Interface                                                    | Description                                                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [TranslatableStrings](interfaces/TranslatableStrings.md)     | The model of translatable strings specific to the Markdown theme.                          |
| [MarkdownApplication](interfaces/MarkdownApplication.md)     | The MarkdownApplication extends TypeDoc's Application instance with a custom renderer.     |
| [MarkdownRendererHooks](interfaces/MarkdownRendererHooks.md) | Describes the hooks available to inject output in the markdown theme.                      |
| [MarkdownRenderer](interfaces/MarkdownRenderer.md)           | The MarkdownRenderer extends TypeDoc's Renderer instance with custom hooks and async jobs. |
| [PluginOptions](interfaces/PluginOptions.md)                 | Describes the options declared by the plugin.                                              |
| [PackageMetaData](interfaces/PackageMetaData.md)             | The model used to define the package metadata when in packages mode.                       |
| [UrlMapping](interfaces/UrlMapping.md)                       | The model used to define the URL mapping structure.                                        |
| [NavigationItem](interfaces/NavigationItem.md)               | The model used to define the navigation structure.                                         |
| [TemplateMapping](interfaces/TemplateMapping.md)             | Defines how reflections are mapped to urls.                                                |
| [UrlOption](interfaces/UrlOption.md)                         | Used internally when building the URL mapping.                                             |

### Type Aliases

| Type alias                                       | Description                                     |
| ------------------------------------------------ | ----------------------------------------------- |
| [RenderTemplate](type-aliases/RenderTemplate.md) | Defines the template type to use for rendering. |
