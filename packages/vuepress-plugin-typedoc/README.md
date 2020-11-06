# vuepress-plugin-typedoc

A [VuePress](https://vuepress.vuejs.org/) plugin to build API documentation with [TypeDoc](https://github.com/TypeStrong/typedoc).

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

- Generates pages as part of the build.
- Adds Front Matter to pages.
- Generates sidebars config to enable navigation.

## Installation

This guide assumes that VuePress has already been locally installed. See [getting started docs](https://vuepress.vuejs.org/guide/getting-started.html).

```shell
npm install typedoc typedoc-plugin-markdown vuepress-plugin-typedoc --save-dev
```

## Usage

Add the plugin to `.vuepress/config.js`:

```js
plugins: [
  [
    'vuepress-plugin-typedoc',

    // Plugin / TypeDoc options (see typedoc --help)
    {
      entryPoints: ['../src/index.ts'],
      tsconfig: '../tsconfig.json'
    },
  ],
],
```

## Options

### TypeDoc options

At a minimum the `entryPoints` and `tsconfig` options will need to be set.

```js
entryPoints: ['../src/index.ts'],
tsconfig: '../tsconfig.json'
```

Please refer to [TypeDoc]() for further options.

### Plugin options

#### out

Output directory relative to docs directory. Defaults to `"api"`.

```js
out: 'api',
```

#### sidebar

Options object for auto generated sidebar. (pass `null` to skip generation completely)

- **fullNames**

  Display full names with module path if applicable. Default to `false`.

- **parentCategory**

  The parent category label for sidebar - (defaults to `none` - no parent category)


## Full example

```js

  plugins: [
    [
      'vuepress-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        plugin: ['some-typedoc-plugin'],

        // Plugin options
        out: 'api',
        sidebar: {
          fullNames: true,
          parentCategory: 'API',
        },

        // include additional TypeDoc plugins in addition to the markdown plugin (optional)
        plugin: ['typedoc-plugin-xyz'],

      },
    ],
  ],

```

Once built the docs will be available at `/api` or equivalent out directory.