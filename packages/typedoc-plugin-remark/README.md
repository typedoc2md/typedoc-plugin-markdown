# typedoc-plugin-remark

[![npm](https://img.shields.io/npm/v/typedoc-plugin-remark.svg?logo=npm)](https://www.npmjs.com/package/typedoc-plugin-remark) [![Downloads](https://img.shields.io/npm/dw/typedoc-plugin-remark?label=downloads)](https://www.npmjs.com/package/typedoc-plugin-remark) [![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-plugin-remark.yml/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-plugin-remark.yml)

## Overview

`typedoc-plugin-remark` runs the Markdown emitted by `typedoc-plugin-markdown` through a configurable remark pipeline before files are written.

Use it to apply GFM or MDX transforms, enforce Markdown conventions, or add your own AST-based post-processing without forking the Markdown theme.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-plugin-remark --save-dev
```

## Features

- Pass in a list of remark plugins to the TypeDoc config.
- Write your own custom plugin.

## Documentation

See the [documentation](https://typedoc-plugin-markdown.org/plugins/remark) for installation, configuration options, and usage guides.

## License

MIT
