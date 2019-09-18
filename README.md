# typedoc-plugin-markdown

<img align="right" width="160" src="https://github.com/tgreyuk/typedoc-plugin-markdown/raw/master/logos.png">

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

The plugin will replace the default HTML theme with a built-in Markdown theme, and expose some additional arguments.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

```bash
$ node_modules/.bin/typedoc --plugin typedoc-plugin-markdown [args]
```

### Note:

- The `--plugin` arg is optional - if omitted all installed plugins will run.
- If using with the default HTML theme or other themes, use `--plugin none` to switch the plugin off.

## Arguments

**Configuring a theme**

By default, the Markdown theme will attempt to render standard CommonMark, suitable for the majority of Markdown engines.
It follows the same structure and file patterns as the default HTML theme. The plugin also comes packaged with some additional built-in themes and can be extended with a custom theme.
Please visit the [Wiki](https://github.com/tgreyuk/typedoc-plugin-markdown/wiki) for further details.

- `--theme`<br>
  - `markdown` Standard Markdown theme (default).
  - `docusaurus` Adds Front Matter header to pages, and attempts to update sidebars.json.
  - `vuepress` Adds Front Matter header to pages, and configures vuepress configs.
  - `bitbucket` Parses internal anchor links to support Bitbucket's internal anchor linking.
  - `path/to/theme` Path to a custom theme.

**Configuring output**

- `--namedAnchors`<br>
  Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.
- `--hideSources`<br>
  Do not print source file link rendering.
- `--hideBreadcrumbs`<br>
  Do not print breadcrumbs.

## License

MIT
