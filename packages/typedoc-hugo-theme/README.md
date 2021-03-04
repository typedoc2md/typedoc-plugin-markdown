# typedoc-hugo-theme

A [Hugo](https://gohugo.io/) compatible Markdown theme extended from [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown).

[![npm](https://img.shields.io/npm/v/typedoc-hugo-theme.svg)](https://www.npmjs.com/package/typedoc-hugo-theme)


## What is does?

- Adds [Hugo Front Matter](https://gohugo.io/content-management/front-matter/) variables in YAML format to pages.
- Writes `_index.md` files to folders to enable [Branch Bundles](https://gohugo.io/content-management/page-bundles/#branch-bundles).

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-hugo-theme --save-dev
```

## Usage

```bash
$ npx typedoc --plugin typedoc-plugin-markdown --theme ./node_modules/typedoc-hugo-theme/dist ...options
```

## Output

### Example page

```
---
title: "Class: SomeClass"
slug: "module.someclass"
linkTitle: "SomeClass"
---

+ page contents
```

### Example directory

```
classes
└─── _index.md
└─── ClassA.md
└─── ClassB.md
```


