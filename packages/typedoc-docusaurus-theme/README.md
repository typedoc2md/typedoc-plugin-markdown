# typedoc-docusaurus-theme

[![npm](https://img.shields.io/npm/v/typedoc-docusaurus-theme.svg?logo=npm)](https://www.npmjs.com/package/typedoc-docusaurus-theme) [![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-docusaurus-theme.yml/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-docusaurus-theme.yml)

## Overview

`typedoc-docusaurus-theme` is the standalone integration for Docusaurus. It applies Docusaurus-friendly Markdown defaults and generates sidebar data so you can run TypeDoc separately and then publish the output inside a Docusaurus docs site.

Use it when TypeDoc needs to run outside the Docusaurus CLI, or when API docs are generated as part of a separate build step.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-docusaurus-theme --save-dev
```

## Features

- Presets `typedoc-plugin-markdown` for Docusaurus-compatible output.
- Generates a configurable Docusaurus sidebar file.
- Fits workflows where TypeDoc and Docusaurus run as separate steps.

## Documentation

Please visit [https://typedoc-plugin-markdown.org/plugins/docusaurus](https://typedoc-plugin-markdown.org/plugins/docusaurus) for comprehensive documentation, including options and usage guides.

## License

MIT