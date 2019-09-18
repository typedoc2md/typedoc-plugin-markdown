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

- `--theme`<br>
  - `markdown` Standard Markdown theme (default).
  - `docusaurus` Adds Front Matter header to pages, and attempts to update sidebars.json.
  - `docusaurus2` Adds Front Matter header to pages, and attempts to update sidebars.js.
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

## Custom theme

The Markdown theme packaged with the plugin can also be extended with a custom Markdown theme using the standard TypeDoc theming pattern as per https://typedoc.org/guides/themes/.

### Create a theme.js class

As per the theme docs create a `theme.js` file that extends the Markdown theme, and TypeDoc will then attempt to load from a given location.

_custom-theme-dir/theme.js_

```js
const MarkdownTheme = require('typedoc-plugin-markdown/dist/theme');

class CustomMarkdownTheme extends MarkdownTheme.default {
  constructor(renderer, basePath) {
    super(renderer, basePath);
  }
}

exports.default = CustomMarkdownTheme;
```

### Update resources

If used with the plugin, the theme will inherit the resources of the Markdown theme (https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/src/resources), rather than the default theme. These can be overdidden by shadowing (or adding new) resources in the custom theme directory.

The resources are based on and follow the same structure as [typedoc-default-themes](https://github.com/TypeStrong/typedoc-default-themes)

### Building the theme

#### CLI

```
node_modules/.bin/typedoc ./src --theme ./custom-theme-dir --out docs
```

#### API

```js
const { Application } = require('typedoc');
const path = require('path');

const app = new Application({
  theme: path.join(__dirname, 'custom-theme-dir'),
  plugin: 'typedoc-plugin-markdown',
});

const project = app.convert(app.expandInputFiles(['src']));
app.generateDocs(project, 'docs');
```

See https://typedoc.org/guides/installation/#node-module

## License

MIT
