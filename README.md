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
  Target a specific documentation/hosting platform (see [Wiki page](https://github.com/tgreyuk/typedoc-plugin-markdown/wiki/1.-Targeting-Platforms) for further documentation),
- `--hideSources`<br>
  Suppress source file linking from output.

## Acknowledgements

Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
