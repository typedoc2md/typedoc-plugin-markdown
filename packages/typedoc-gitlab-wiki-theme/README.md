# typedoc-gitlab-wiki-theme

A [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md) theme that publishes Markdown pages compatible with [Gitlab Wiki](https://docs.gitlab.com/ee/user/project/wiki/).

[![npm](https://img.shields.io/npm/v/typedoc-gitlab-wiki-theme.svg)](https://www.npmjs.com/package/typedoc-gitlab-wiki-theme)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What does it do?

This theme customises the output from [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md):

- Generates Wiki friendly file names.
- Updates internal urls to a compatible format.
- Writes a `_sidebar.md` file to enable custom sidebar navigation.

## Installation

```shell
npm install typedoc typedoc-plugin-markdown@next typedoc-gitlab-wiki-theme@next --save-dev
```

## Usage

**typedoc.json**

```json
{
  "plugin": ["typedoc-plugin-markdown", "typedoc-gitlab-wiki-theme"]
}
```

## Options

For options please refer to [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md#options).

The following options are preset with the theme:

```json
{
  "entryFileName": "home.md",
  "flattenOutputFiles": true,
  "hideBreadcrumbs": true,
  "hideInPageTOC": true,
  "hidePageHeader": true,
  "hidePageTitle": true
}
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-gitlab-wiki-theme/LICENSE)
