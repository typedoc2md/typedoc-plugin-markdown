# typedoc-plugin-markdown

<img align="right" width="160" src="https://github.com/tgreyuk/typedoc-plugin-markdown/raw/master/logos.png">

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

```bash
$ node_modules/.bin/typedoc --plugin typedoc-plugin-markdown [plugin args] [typedoc args]
```

_Note: the `--plugin` arg is optional - if omitted all installed plugins will run._

## What it does?

The plugin will replace the default html theme with a built-in markdown theme, and expose some additional arguments.

## Arguments

**Configuring a theme**

By default, the Markdown theme will attempt to render standard CommonMark, suitable for the majority of Markdown engines.
It follows the same structure and file patterns as the default HTML theme. The plugin also comes packaged with some additional built-in extended themes.

- `--theme`<br>
  - `markdown` Standard Markdown theme (default).
  - `docusaurus` Adds Front Matter definitions to pages, and attempts updates sidebars.json for navigation.
  - `vuepress` Adds Front Matter definitions to pages, and configures vuepress configs.
  - `gitbook` Generates additional SUMMARY.md file to enable Book's table of contents.
  - `bitbucket` Parses internal anchor links to support Bitbucket's internal anchor linking.

Please visit the [Wiki](https://github.com/tgreyuk/typedoc-plugin-markdown/wiki) for details of extended themes.

The theme can also be extended with a custom Markdown theme using the standard TypeDoc theming pattern https://typedoc.org/guides/themes/.

**Configuring output**

- `--namedAnchors`<br>
  Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.
- `--hideSources`<br>
  Do not print source file link rendering.
- `--hideBreadcrumbs`<br>
  Do not print breadcrumbs.
- `--longTitle`<br>
  Use long title instead of default short one.

## License

MIT
