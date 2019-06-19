# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

The plugin provides an additional theme named 'markdown' that can be referenced by name:

#### shell

```bash
$ node_modules/.bin/typedoc --theme markdown
```

#### npm script

```json
"scripts": {
 "docs": "typedoc --theme markdown"
}
```

## Arguments

The plugin exposes the following arguments in addition to TypeDoc's defaults:

| Name            | Description                                       |
| --------------- | ------------------------------------------------- |
| `--platform`    | Target a specific documentation/hosting platform. |
| `--hideSources` | Suppress source file linking from output.         |

### Targeting specific platforms

By default the theme will render standard **GitHub Flavored Markdown** / CommonMark suitable for the majority of markdown engines.

The plugin also attempts to target the following platforms:

#### GitBook (`--platform gitbook`)

- Generates additional `SUMMARY.md` file to enable a books's table of contents / navigation.

#### Docusaurus (`--platform docusaurus`)

- Adds metadata to rendered Markdown.
- If the out directory is recognised as a docusaurus `/docs` directory, the plugin will update `website/sidebars.json` so pages are accessible in the sidebar.

#### VuePress (`--platform vuepress`)

- Adds metadata to rendered Markdown.
- If the out directory is recognised as a vuepress `/docs` directory, the plugin will create `.vuepress/api-sidebar.json` so pages are accessible in the sidebar.

`.vuepress/config.json`

```js
const apiSideBar = require('./api-sidebar.json');

// Without groups
module.exports = {
  themeConfig: {
    sidebar: ['some-content', ...apiSideBar],
  },
};

// With groups
module.exports = {
  themeConfig: {
    sidebar: ['some-content', { title: 'API', children: apiSideBar }],
  },
};
```

#### Bitbucket (`--platform bitbucket`)

- Support Bitbucket's internal/anchor links in rendered Markdown.

## Version 2 (June 2019)

Version 2 contains many code and UI improvements. Please raise an issue if anything has broken and suggestions for improvements.

Further documentation and examples to follow.

## Acknowledgements

Thanks to kimamula's [typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme) for the inspiration behind this project.
