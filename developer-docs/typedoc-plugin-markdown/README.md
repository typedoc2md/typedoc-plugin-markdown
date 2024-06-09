[Packages Index](../README.md) / typedoc-plugin-markdown

# typedoc-plugin-markdown

"typedoc-plugin-markdown" is the core package of this monorepo and is the package that is used to generate the markdown documentation:

## What does the package do?

* Extends some methods on the TypeDoc renderer to make compatible with Markdown output.
* Exposes some additional options to TypeDoc.
* Creates a new MarkdownTheme class that overrides the HTML DefaultTheme.
* Exposes some types on a public API.

## Documents

| Document                                                                    | Description                                                            |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Internationalization Guidance](documents/Internationalization-Guidance.md) | How to edit or add a new locale to custom plugin translatable strings. |
| [Testing guide](documents/Testing-guide.md)                                 | Guidance of running tests and creating fixtures.                       |

## Modules

| Module                                                 | Description                                                              |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| [app](app/README.md)                                   | The Application class is the main entry point for a TypeDoc application. |
| [options](options/README.md)                           | Configures plugin options.                                               |
| [internationalization](internationalization/README.md) | Exposes additional i18n keys and translations used by the theme.         |
| [theme](theme/README.md)                               | This is the built-in Markdown theme.                                     |
| [libs](libs/README.md)                                 | General pure library functions to be consumed across the plugin.         |
