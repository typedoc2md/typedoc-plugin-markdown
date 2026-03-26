# typedoc-gitlab-wiki-theme

[![npm](https://img.shields.io/npm/v/typedoc-gitlab-wiki-theme.svg?logo=npm)](https://www.npmjs.com/package/typedoc-gitlab-wiki-theme) [![Build Status](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-gitlab-wiki-theme.yml/badge.svg?branch=main&style=flat-square)](https://github.com/typedoc2md/typedoc-plugin-markdown/actions/workflows/ci.typedoc-gitlab-wiki-theme.yml)

## Overview

`typedoc-gitlab-wiki-theme` applies GitLab Wiki-specific naming and link behavior on top of `typedoc-plugin-markdown`.

Use it when you want the generated API docs to fit the GitLab Wiki file layout and navigation model without additional post-processing.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-gitlab-wiki-theme --save-dev
```

## Features

- Generates Wiki friendly file names.
- Updates internal urls to a compatible format.
- Writes a `_sidebar.md` file to display sidebar navigation.

## Documentation

Please visit [https://typedoc-plugin-markdown.org/plugins/gitlab-wiki](https://typedoc-plugin-markdown.org/plugins/gitlab-wiki) for comprehensive documentation, including options and usage guides.

## License

MIT