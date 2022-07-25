# vuepress-plugin-typedoc

A [VuePress](https://vuepress.vuejs.org/) plugin to build API documentation with [typedoc](https://github.com/TypeStrong/typedoc).

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What it does?

- Generates pages in Markdown as part of the build.
- Generates sidebar configuration.

## Installation

> Install in the same location as your VuePress project root.

```shell
npm install typedoc typedoc-plugin-markdown vuepress-plugin-typedoc --save-dev
```

## Usage

### v1.x

- Setup a VuePress project https://v1.vuepress.vuejs.org/guide/getting-started.html.
- Add the plugin to `.vuepress/config.js` and specify the required options (see [options](#options)).
- TypeDoc will be bootstraped with the Vuepress `dev` and `build` [cli commands](https://vuepress.vuejs.org/api/cli.html).

#### `.vuepress/config.js`

```js
plugins: [
  [
    'vuepress-plugin-typedoc',

    // plugin options
    {
      entryPoints: ['../src/index.ts'],
      tsconfig: '../tsconfig.json'
    },
  ],
],
```

### v2.x

- Setup a VuePress v2 project https://v2.vuepress.vuejs.org/guide/getting-started.html.
- Using a plugin via string is not supported. Import the plugin directly in `.vuepress/config.ts` under the `next` entrypoint and specify the required options (see [options](#options)).
- TypeDoc will be bootstraped with the Vuepress `dev` and `build` [cli commands](https://v2.vuepress.vuejs.org/reference/cli.html).

#### `.vuepress/config.ts`

```ts
import { defaultTheme } from 'vuepress';
import { typedocPlugin } from 'vuepress-plugin-typedoc/next';

module.exports = {
  theme: defaultTheme({}),
  plugins: [
    typedocPlugin({
      // plugin options
      entryPoints: ['../src/index.ts'],
      tsconfig: '../tsconfig.json',
    }),
  ],
};
```

### Typical project structure

```
docs/ (Vuepress website root)
│ └── .vuepress
│ │    └── config.js|ts
│ │    └── dist/ (static site dir)
│ └── api/ (output directory / compiled typedoc markdown)
├── package.json
├─ ─src (typescript source files)
├── tsconfig.json
```

## Options

### TypeDoc options

To configure TypeDoc, pass any relevant [TypeDoc options](https://typedoc.org/guides/options/) to the config.

At a minimum the `entryPoints` and `tsconfig` options will need to be set.

```js
entryPoints: ['../src/index.ts'],
tsconfig: '../tsconfig.json'
```

Additional TypeDoc plugins will need to be explicitly set:

```js
plugin: ['typedoc-plugin-xyz'];
```

TypeDoc options can also be declared:

- Using a `typedoc.json` file.
- Under the `typedocOptions` key in `tsconfig.json`.

Note: Options declared in this manner will take priority and overwrite options declared in `docusaurus.config.js`.

### Plugin options

In addition to TypeDoc options there are some custom plugin options that can be configured.

| Name                        | Default | Description                                                                  |
| :-------------------------- | :------ | :--------------------------------------------------------------------------- |
| `out`                       | `"api"` | Output directory relative to docs directory.                                 |
| `hideInPageTOC`             | `false` | Do not render in-page table of contents items.                               |
| `sidebar.autoConfiguration` | `true`  | Set to `false` to disable auto sidebar configuration.                        |
| `sidebar.fullNames`         | `false` | Display full names with module path if applicable.                           |
| `sidebar.parentCategory`    | `"API"` | The parent category label for sidebar. Pass `"none"` for no parent category. |

### Example options object

```js
{
  // TypeDoc options
  entryPoints: ['../src/index.ts'],
  tsconfig: '../tsconfig.json',
  cleanOutputDir: true

  // Plugin options
  out: 'api',
  sidebar: {
    fullNames: true,
    parentCategory: 'API',
  }
}
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/vuepress-plugin-typedoc/LICENSE)
