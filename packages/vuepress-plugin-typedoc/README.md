# vuepress-plugin-typedoc

A [VuePress](https://vuepress.vuejs.org/) plugin to build documentation with [TypeDoc](https://github.com/TypeStrong/typedoc).

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)
![Build Status](https://travis-ci.com/tgreyuk/typedoc-plugin-markdown.svg?branch=master)

## What it does?

- Generates pages as part of the build.
- Adds Front Matter to pages.
- Generates sidebars config to enable navigation.

## Installation

> Install in the same location as the VuePress root directory.

This guide assumes that a VuePress project has been setup. See [getting started docs](https://vuepress.vuejs.org/guide/getting-started.html).

```shell
npm install typedoc typedoc-plugin-markdown vuepress-plugin-typedoc --save-dev
```

## Usage

### Config

Add the plugin to `.vuepress/config.js` and specify the required options (see [options](#options)).

```js
plugins: [
  [
    'vuepress-plugin-typedoc',

    // Plugin / TypeDoc options
    {
      entryPoints: ['../src/index.ts'],
      tsconfig: '../tsconfig.json'
    },
  ],
],
```

TypeDoc will be bootstraped with the Vuepress `dev` and `build` [cli commands](https://vuepress.vuejs.org/api/cli.html):

```javascript
"dev": "vuepress dev [targetDir]",
"build": "vuepress build [targetDir]",
```

Once built the docs will be available at `/api` or equivalent out directory.

```
docs/ (Vuepress website root)
├── src/
│   └── .vuepress
│   │    └───config.js
│   │    └───dist/ (static site dir)
│   └── api/ (compiled typedoc markdown)
├── package.json
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
plugin:['typedoc-plugin-xyz']
```

TypeDoc options can also be declared:

- Using a `typedoc.json` file.
- Under the `typedocOptions` key in `tsconfig.json`.

Note: Options declared in this manner will take priority and overwrite options declared in `docusaurus.config.js`.


### Plugin options

| Name                     | Default | Description                                                                  |
| :----------------------- | :------ | :--------------------------------------------------------------------------- |
| `out`                    | `"api"` | Output directory relative to docs directory.                                 |
| `hideInPageTOC`          | `false` | Do not render in-page table of contents items.                               |
| `sidebar.fullNames`      | `false` | Display full names with module path if applicable.                           |
| `sidebar.parentCategory` | `"API"` | The parent category label for sidebar. Pass `"none"` for no parent category. |


### Example config

```js

  plugins: [
    [
      'vuepress-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',

        // Plugin options
        out: 'api',
        sidebar: {
          fullNames: true,
          parentCategory: 'API',
        },
      },
    ],
  ],

```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/vuepress-plugin-typedoc/LICENSE)