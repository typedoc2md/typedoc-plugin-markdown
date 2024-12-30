[Developer Guide](../README.md) / typedoc-plugin-markdown

# typedoc-plugin-markdown

The core package of this monorepo and is the package that is used to generate the markdown documentation.

Package features include:

- Extends some methods on the TypeDoc renderer to make compatible with Markdown output.
- Exposes some additional options to TypeDoc.
- Creates a new MarkdownTheme class that overrides the HTML DefaultTheme.
- Exposes some types on a public API.

## Documents

| Document | Description |
| ------ | ------ |
| [Test and Validation](documents/Test-and-Validation.md) | Guidance on running tests, creating fixtures and validating output. |

## Modules

| Module | Description |
| ------ | ------ |
| [core](core/README.md) | The entry point for initializing and bootstrapping the plugin. |
| [renderer](renderer/README.md) | Includes functionality and override methods on the TypeDoc Renderer. |
| [events](events/README.md) | Contains the events classes used by the plugin. |
| [options](options/README.md) | Contains all the option declarations and types used in the plugin. |
| [internationalization](internationalization/README.md) | Exposes additional i18n keys and translations used by the theme. |
| [theme](theme/README.md) | Contains all functionality relevant to the markdown theme. |
| [libs](libs/README.md) | General pure library functions to be consumed across the plugin. |
| [types](types/README.md) | All plugin types are exported from this module. |
