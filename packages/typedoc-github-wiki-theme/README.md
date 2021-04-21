# typedoc-github-wiki-theme

A [Github Wiki](https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis) compatible [TypeDoc](https://github.com/TypeStrong/typedoc) theme.

[![npm](https://img.shields.io/npm/v/typedoc-github-wiki-theme.svg)](https://www.npmjs.com/package/typedoc-github-wiki-theme)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What is does?

- Generates Wiki friendly file names.
- Updates internal urls to a compatible format.
- Writes a `_Sidebar.md` file to enable custom sidebar navigation.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-github-wiki-theme --save-dev
```

### Usage

```bash
$ npx typedoc --plugin typedoc-plugin-markdown --theme ./node_modules/typedoc-github-wiki-theme/dist [args]
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-github-wiki-theme/LICENSE)