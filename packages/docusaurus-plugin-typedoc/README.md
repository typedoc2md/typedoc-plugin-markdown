# docusaurus-plugin-typedoc

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg?logo=npm)](https://www.npmjs.com/package/docusaurus-plugin-typedoc) [![Downloads](https://img.shields.io/npm/dw/docusaurus-plugin-typedoc?label=downloads)](https://www.npmjs.com/package/docusaurus-plugin-typedoc) [![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.docusaurus-plugin-typedoc.yml/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.docusaurus-plugin-typedoc.yml)

## Overview

**`docusaurus-plugin-typedoc`** runs TypeDoc as part of the Docusaurus toolchain, so API docs can be generated during the normal Docusaurus dev and build flow.

Use it when you want Docusaurus to own the TypeDoc execution step instead of maintaining a separate docs generation command.

Internally, it uses **`typedoc-docusaurus-theme`** to generate Docusaurus-compatible Markdown and sidebar data.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown docusaurus-plugin-typedoc --save-dev
```

## Features

- Bootstraps TypeDoc from the Docusaurus CLI.
- Uses `typedoc-docusaurus-theme` internally for Docusaurus-compatible output.
- Supports generating API docs as part of the standard Docusaurus workflow.

## Documentation

See the [documentation](https://typedoc-plugin-markdown.org/plugins/docusaurus) for installation, configuration options, and usage guides.

## License

MIT
