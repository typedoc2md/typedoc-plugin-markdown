# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

The plugin will replace the default theme with a built-in markdown theme, and expose some additional arguments.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

```bash
$ node_modules/.bin/typedoc --plugin typedoc-plugin-markdown [plugin args] [typedoc args]
```

_Note: the `--plugin` arg is optional - if omitted all installed plugins will run_

## Arguments

**Configuring a theme**

The plugin comes packaged with a built-in markdown theme, but can also be extended for with custom themes in the same vain as per https://typedoc.org/guides/themes/.

- `--theme <markdown|docusaurus|vuepress|bitbucket|path/to/markdown/theme>`<br>
  - `markdown` Loaded by default, the theme will attempt to render standard Common Mark. suitable for the majority of markdown engines.
  - `docusaurus` Adds Front Matter definitions to pages, and attempts to update sidebars.json for navigation.
  - `vuepress` Adds Front Matter definitions to pages, and configures vuepress configs.
  - `bitbucket` Parses internal anchor links to support Bitbucket's internal anchor linking. _Note: if using Bitbucket Server ignore this and use the --namedAnchors option_.

**Configuring output**

- `--fileExt`<br>
  The file extension to use for doc generations. Set `none` to omit file extension. Defaults to `md`.
- `--namedAnchors`<br>
  Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.
- `--hideSources`<br>
  Suppress source file link rendering.

## License

MIT
