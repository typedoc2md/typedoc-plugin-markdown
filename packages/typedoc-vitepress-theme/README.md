# typedoc-vitepress-theme

A [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-plugin-markdown/README.md) theme that publishes Markdown pages compatible with [VitePress](https://vitepress.dev/).

[![npm](https://img.shields.io/npm/v/typedoc-vitepress-theme.svg)](https://www.npmjs.com/package/typedoc-vitepress-theme)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What does it do?

- Presets relevant options of [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown#readme) targetting VitePress Markdown.
- Auto generates a VitePress sidebar that can be referenced from the VitePress config.

## What about VuePress?

This theme is also compatible with VuePress and the configuration is almost identical. However this theme supersedes previous VuePress TypeDoc plugins and is specifically targetted for VitePress.

See https://vitepress.dev/guide/what-is-vitepress#what-about-vuepress.

## Installation

### 1. Install VitePress

https://vitepress.dev/guide/getting-started

### 2. Install plugin

> Install the plugin in the same location as your VitePress installation.

> [typedoc](https://github.com/TypeStrong/typedoc) and [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) are required peer dependencies.

```shell
npm install typedoc typedoc-plugin-markdown@next typedoc-vitepress-theme@next --save-dev
```

### Typical file structure

```
.
├─ docs
│ ├─ .vitepress
│ │ └─ config.js
│ └─ api (default out dir containing generated TypeDoc pages and typedoc-sidebar.json file)
└─ package.json (package.json project root)
```

## Usage

Create a script that builds TypeDoc pages before bootstraping VitePress. The following is a guideline only and can be tailored as required.

### 1. Create a script to publish TypeDoc pages

```js
"publish-typedoc": "typedoc --options typedoc.json"
```

**typedoc.json**

```json
{
  "plugin": ["typedoc-plugin-markdown", "typedoc-vitepress-theme"]
}
```

### 2. Run the script before bootstrapping VitePress

```json
"docs:dev": "npm run publish-typedoc && vitepress dev docs",
"docs:build": "npm run publish-typedoc && vitepress build docs"
```

### 3. Configure Navbar and Sidebar

A sidebar named `typedoc-sidebar.json` is auto-generated to the out directory. This can then be referenced in the config file to configure the sidebar.

**docs/.vitepress/config.ts**

```js
import typedocSidebar from '../api/typedoc-sidebar.json';

module.exports = {
  themeConfig: {
    nav: [{ text: 'API', link: '/api/' }],
    sidebar: [
      {
        text: 'API',
        items: typedocSidebar,
      },
    ],
  },
};
```

## Options

Options can be declared:

- Passing arguments via the command line.
- Using a `typedoc.json` file.
- Under the `typedocOptions` key in `tsconfig.json`.

Please see https://typedoc.org/options/configuration for general TypeDoc option configuration.

### TypeDoc options

The following TypeDoc / Markdown plugin options can be passed to config:

- [typedoc options](https://typedoc.org/options) (HTML specific output options that will be ignored).
- [typedoc-plugin-markdown options](https://typedoc.org/options) (Some options are already preset to target VitePress).

The following typedoc-plugin-markdown options are preset with the theme.

```json
{
  "anchorFormat": "slug",
  "entryDocument": "index.md",
  "hideBreadcrumbs": true,
  "hidePageHeader": true,
  "out": "./docs/api"
}
```

### Theme options

The following theme options are also exposed, but the defaults should work for most use cases.

#### `--sidebar`

`sidebar.autoConfiguration`

Set to `false` to disable sidebar generation. Defaults to `true`.

`sidebar.format`

The format of the sidebar. This option is exposed to enable backward compatibility with VuePress sidebars. Available options [`vitepress` `vuepress1`, `vuepress2`]. Defaults to `vitepress`.

```json
{
  "sidebar": {
    "autoConfiguration": true,
    "format": "vitepress"
  }
}
```

#### `--docsRoot`

The VitePress docs folder root. Use `./` if no root folder specified. Defaults to `./docs`.

```shell
--docsRoot <path/to/vitepress-docs/>
```

## Frontmatter

Frontmatter can be added to pages by installing [typedoc-plugin-frontmatter](https://github.com/tgreyuk/typedoc-plugin-frontmatter#typedoc-plugin-frontmatter) and adding to the plugin list.

```json
{
  "plugin": [..., "typedoc-plugin-frontmatter"]
}
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/vuepress-plugin-typedoc/LICENSE)
