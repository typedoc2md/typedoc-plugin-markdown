# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that renders TypeScript API documentation as Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

## What it does?

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options.

Useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface).

```bash
typedoc --plugin typedoc-plugin-markdown
```

The `--plugin` arg is optional (all plugins are loaded by default), however if using with the default html theme, use `--plugin none` to switch the plugin off.

## Options

The following options can be used in addition to relevant [TypeDoc options](https://typedoc.org/guides/options/)
(please note that TypeDoc options specific to the html theme will be ignored).

Do not render breadcrumbs in template header. Defaults to `false`.

- **`--entryDocument`**<br>
  The file name of the entry document. Defaults to `README.md`.
- **`--hideBreadcrumbs`**<br>
  Do not render breadcrumbs in template header. Defaults to `false`.
- **`--hideInPageTOC`**<br>
  Do not add special symbols for class members. Defaults to `false`.
- **`--hideHorizontalDivider`**<br>
  Do not render horizontal divider between content. Defaults to `false`.
- **`--hasOwnDocument`**<br>
  Determines which symbols should be hoisted to their own document. Expected values are `None`, `All` OR Array of `['class', 'interface', 'enum', 'function', 'variable', 'type']` Defaults to `None` (all symbols included in a single module page). See [directory strategy]().
- **`--namedAnchors`**<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.
- **`--embedHeadingsInCodeBlock`**<br>
  Wraps the heading of a reflection in a code block. Defaults to `false`.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
