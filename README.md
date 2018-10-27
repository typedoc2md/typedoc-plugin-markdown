# typedoc-plugin-markdown

![typedoc-plugin-markdown](logos.png)

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that exposes a theme and additional arguments for rendering markdown.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

The plugin provides an additional theme named 'markdown' that can be referenced by name:

#### shell

```bash
$ node_modules/.bin/typedoc --theme markdown
```

#### npm script

```json
"scripts": {
 "docs": "typedoc --theme markdown"
}
```

## Arguments

The plugin exposes the following arguments in addition to TypeDoc's defaults:

### --mdEngine `<github|bitbucket|gitbook>`

The target markdown rendering engine:

| Engine           | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| github (default) | Optimized for GitHub Flavored markdown.                             |
| bitbucket        | Renders markdown to support Bitbucket's internal anchor linking.    |
| gitbook          | Generates additional SUMMARY.md file to enable a table of contents. |

### --mdHideSources

Suppress source file linking from output.

### --mdSourceRepo `<path.to.repo>`(_Ignored on GitHub repositories_)

For projects hosted on GitHub TypeDoc resolves source files. This argument allows targeting of source files hosted on other environments.

For Bitbucket use: `https://bitbucket.org/owner/repository_name`.

## What does it look like?

The markdown theme aims to provide the same functionality as the default theme with a simple breadcrumb navigation. To get an idea of the output view [some generic example output](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/examples/out/README.md).

## Acknowledgements

Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
