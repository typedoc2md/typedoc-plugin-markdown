# typedoc-gitlab-wiki-theme

A [Gitlab Wiki](https://docs.gitlab.com/ee/user/project/wiki/) compatible [TypeDoc](https://github.com/TypeStrong/typedoc) theme.

[![npm](https://img.shields.io/npm/v/typedoc-gitlab-wiki-theme.svg)](https://www.npmjs.com/package/typedoc-gitlab-wiki-theme)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What is does?

- Generates Wiki friendly file names.
- Updates internal urls to a compatible format.
- Writes a `_sidebar.md` file to enable custom sidebar navigation.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-gitlab-wiki-theme --save-dev
```

## Usage

```bash
$ npx typedoc --theme ./node_modules/typedoc-gitlab-wiki-theme/dist ...options
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-gitlab-wiki-theme/LICENSE)