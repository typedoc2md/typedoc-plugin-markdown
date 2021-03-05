# typedoc-gitlab-wiki-theme

A [Gitlab Wiki](https://docs.gitlab.com/ee/user/project/wiki/) compatible Markdown theme extended from [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown).

[![npm](https://img.shields.io/npm/v/typedoc-gitlab-wiki-theme.svg)](https://www.npmjs.com/package/typedoc-gitlab-wiki-theme)

## What is does?

- Generates Wiki friendly file names.
- Updates internal urls to a compatible format.
- Writes a `_sidebar.md` file to enable custom sidebar navigation.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown typedoc-gitlab-wiki-theme --save-dev
```

## Usage

**npm script**
```javascript
"docs": "typedoc --theme ./node_modules/typedoc-gitlab-wiki-theme/dist ...options"
```

**shell**
```bash
$ npx typedoc --theme ./node_modules/typedoc-gitlab-wiki-theme/dist ...options
```
