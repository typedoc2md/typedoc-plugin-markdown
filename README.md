# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

The plugin provides an additional theme named 'markdown' that can be referenced by name:

```bash
$ typedoc --theme markdown [plugin args] [typedoc args]
```

### Arguments

The plugin exposes the following additional arguments:

- `--platform <docusaurus|vuepress|gitbook|bitbucket>`<br>
  Attempt to target a specific documentation/hosting platform (see [Wiki page](https://github.com/tgreyuk/typedoc-plugin-markdown/wiki/1.-Targeting-Platforms)) for further docs.
- `--hideSources`<br>
  Suppress source file linking from output.
- `--hideBreadcrumbs`<br>
  Prevent breadcrumbs from rendering in output.
- `--hideIndexes`<br>
  Prevent indexes from rendering in output.
- `--namedAnchors`<br>
  Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids.

## Acknowledgements

Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
