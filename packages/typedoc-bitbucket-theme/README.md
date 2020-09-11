# typedoc-bitbucket-theme

An extension of the default theme from [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown) to fix Bitbucket Cloud's internal anchor linking implementation.

[![npm](https://img.shields.io/npm/v/typedoc-bitbucket-theme.svg)](https://www.npmjs.com/package/typedoc-bitbucket-theme)

_If using Bitbucket Server do not use this theme but set the `--namedAnchors` option instead._

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-bitbucket-theme --save-dev
```

### Usage

```bash
$ npx typedoc --plugin typedoc-plugin-markdown --theme bitbucket [args]
```
