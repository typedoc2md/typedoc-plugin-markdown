# typedoc-plugin-markdown

<img align="right" width="160" src="https://github.com/tgreyuk/typedoc-plugin-markdown/raw/master/logos.png">

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

The plugin will replace the default HTML theme with a built-in Markdown theme, and expose some additional arguments.

By default, the Markdown theme will attempt to render standard CommonMark, suitable for the majority of Markdown engines.
It follows the same structure and file patterns as the default HTML theme.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

```bash
$ typedoc --plugin typedoc-plugin-markdown [args]
```

### Note:

- The `--plugin` arg is optional - if omitted all installed plugins will run.
- If using with the default HTML theme or other themes, use `--plugin none` to switch the plugin off.

## Arguments

The following arguments can be used in addition to the default [TypeDoc arguments](https://github.com/TypeStrong/typedoc#arguments).

- `--theme <markdown|docusaurus|docusaurus2|vuepress|bitbucket|path/to/theme>`<br>
  Specify the theme that should be used. Defaults to `markdown`. Please read the [theming guide](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/THEMES.md) for further details.
- `--namedAnchors`<br>
  Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.
- `--hideSources`<br>
  Do not print source file link rendering.
- `--hideBreadcrumbs`<br>
  Do not print breadcrumbs.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
