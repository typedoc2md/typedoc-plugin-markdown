# typedoc-plugin-vuepress

A [TypeDoc](https://github.com/TypeStrong/typedoc) plugin to build API documentation to be consumed with [VuePress](https://vuepress.vuejs.org/).

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## Installation

> Install in the same location as your VuePress project root.

```shell
npm install typedoc typedoc-plugin-markdown@next typedoc-plugin-vuepress@next --save-dev
```

## Usage

Run the script before bootstrapping VuePress. For example a typical might be configured as follows:

```bash
"publish-typedoc": "typedoc --plugin typedoc-plugin-markdown --plugin typedoc-plugin-vuepress [options]",
"docs:dev": "npm run publish-typedoc && vuepress dev docs",
"docs:build": "npm run publish-typedoc && vuepress build docs && npx http-server ./docs/.vuepress/dist -o"
```

### Typical project structure

```
│ docs/ (Vuepress website root)
│ └── .vuepress
│ │    └── config.js|ts
│ │    └── dist/ (static site dir)
| |    └── typedoc-sidebar.json (generated sidebar)
| |
│ └── api/ (output directory / compiled typedoc markdown)
├── package.json
├── tsconfig.json
```

### Sidebar

A VuePress sidebar will be auto-generated into the `.vuepress` folder (or another location of choice) that can be referenced in `config.js|ts`:

**v1 .vuepress/config.js**

```js
const typedocSidebar = require('./typedoc-sidebar.json');

 themeConfig: {
    nav: [
      {
        text: 'API',
        link: '/api/',
      },
    ],
    sidebar: {
      '/api/': [
        {
          title: 'API',
          children: typedocSidebar,
        },
      ],
    },
  }
```

**v2 .vuepress/config.ts**

```js
import typedocSidebar from './typedoc-sidebar.json';

module.exports = {
  theme: defaultTheme({
    navbar: [
      {
        text: 'API',
        link: '/api/',
      },
    ],
    sidebar: {
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

- **`--vuepressVersion`**<br>
  The target version of VuePress. Expected values [`v1` `v2`]. Defaults to `v1`.
- **`--sourceDir`**<br>
  The VuePress source folder. Defaults to `./docs`.
- **`--sidebarPath`**<br>
  The path to write the auto-generated sidebar to. Defaults to `/.vuepress/typedoc-sidebar.json`.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/vuepress-plugin-typedoc/LICENSE)
