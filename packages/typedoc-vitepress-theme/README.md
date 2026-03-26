# typedoc-vitepress-theme

[![npm](https://img.shields.io/npm/v/typedoc-vitepress-theme.svg?logo=npm)](https://www.npmjs.com/package/typedoc-vitepress-theme) [![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-vitepress-theme.yml/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-vitepress-theme.yml)

## Overview

`typedoc-vitepress-theme` applies VitePress-friendly Markdown defaults and emits the sidebar data needed to wire the generated docs into a VitePress site.

Use it when TypeDoc runs outside VitePress itself but the output still needs to slot cleanly into the VitePress navigation and link model.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-vitepress-theme --save-dev
```

## Features

- Updates internal anchors to be compatible with VitePress.
- Auto generates a VitePress sidebar that can be referenced from the VitePress config.

## Documentation

Please visit [https://typedoc-plugin-markdown.org/plugins/vitepress](https://typedoc-plugin-markdown.org/plugins/vitepress) for comprehensive documentation, including options and usage guides.

## License

MIT