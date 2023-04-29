# typedoc-vuepress-theme

A [TypeDoc](https://github.com/TypeStrong/typedoc) plugin that publishes Markdown pages compatible with [VuePress](https://vuepress.vuejs.org/).

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

> Previously this project was consumed as a VuePress plugin. However in hindsight this was an overly complicated abstraction.

## Installation

Install the plugin in the same location as your VuePress project root.

[TypeDoc](https://github.com/TypeStrong/typedoc) and [TypeDoc Plugin Markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) are required peer dependencies.

```shell
npm install typedoc typedoc-plugin-markdown@next typedoc-vuepress-theme@next --save-dev
```

### Typical project structure

```
│ docs/ (docs root)
│ └── .vuepress
│ │    └── config.js|ts (VuePress config)
│ │    └── dist/ (static site dir)
| |
│ └── api/ (output directory / compiled typedoc markdown and generated typedoc-sidebar.json file)
├── package.json (vuepress project package.json)
├── tsconfig.json
```

## Usage

Simply build TypeDoc pages and then bootstrap VuePress. The following is a guideline only and can be tailored as required.

### 1. Create a script to build Markdown pages

Please refer to [TypeDoc](https://github.com/TypeStrong/typedoc) for general TypeDoc usage.

```js
"publish-typedoc": "typedoc --options typedoc.json"
```

`typedoc.json`

```json
{
  "entryPoints": ["../src"],
  "tsconfig": "../src/tsconfig.json",
  "plugin": ["typedoc-plugin-markdown", "typedoc-vuepress-theme"],
  "sidebar": { "autoConfiguration": true, "version": "v1" }
}
```

### 2. Run the script before bootstrapping VuePress

```json
"docs:dev": "npm run publish-typedoc && vuepress dev docs",
"docs:build": "npm run publish-typedoc && vuepress build docs && npx http-server ./docs/.vuepress/dist -o"
```

### 3. Configure Navbar and Sidebar

A VuePress sidebar can be auto-generated for documentation can be generated with the `--sidebar` option targetting a specific version.

#### V1

`docs/.vuepress/config.js`

```js
const typedocSidebar = require('../api/typedoc-sidebar.json');

 themeConfig: {
    nav: [
      {
        text: 'API',
        link: '/api/',
      },
    ],
    sidebar: {
      // the out directory (./docs/api)
      '/api/': [
        {
          title: 'API',
          children: typedocSidebar,
        },
      ],
    },
  }
```

#### V2

`docs/.vuepress/config.ts`

```js
import typedocSidebar from '../api/typedoc-sidebar.json';

module.exports = {
  theme: defaultTheme({
    navbar: [
      {
        text: 'API',
        link: '/api/',
      },
    ],
    sidebar: {
      // the out directory (./docs/api)
      '/api/': [
        {
          text: 'API',
          children: typedocSidebar,
        },
      ],
    },
  }),
};
```

## Options

### Plugin options

In addition to TypeDoc options there are some custom plugin options that can be configured.

- **`--sidebar`**<br>
  The target version of VuePress. Expected values [`none` `v1` `v2`]. Defaults to `none` (no sidebar generated).
- **`--sourceDir`**<br>
  The VuePress docs folder. The Defaults to `./docs`.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/vuepress-plugin-typedoc/LICENSE)
