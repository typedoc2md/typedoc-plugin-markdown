# vuepress-plugin-typedoc

A [VuePress](https://vuepress.vuejs.org/) plugin to build API documentation with [TypeDoc](https://github.com/TypeStrong/typedoc) and the [Markdown plugin](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown).

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

- Generates pages as part of the build.
- Adds Front Matter to pages.
- Generates sidebars config to enable navigation.

## Installation

This guide assumes that a VuePress project has been setup. See [getting started docs](https://vuepress.vuejs.org/guide/getting-started.html).

```shell
npm install typedoc typedoc-plugin-markdown vuepress-plugin-typedoc --save-dev
```

_Install in the same location as the VuePress root directory._

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

**out**`<string>`

- Output directory relative to docs directory. Defaults to `"api"`.

**allReflectionsHaveOwnDocument**`<boolean>`

- Output all reflections into seperate output files. Defaults to `false`.

**hideInPageTOC**`<boolean>`

- Do not render in-page table of contents items. Defaults to `false`.

**sidebar**`<object>`

- Options object for auto generated sidebar. (pass `null` to skip generation completely)

  - **fullNames**`<object>`

  Display full names with module path if applicable. Default to `false`.

  - **parentCategory**`<string>`

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

Once built the docs will be available at `/api` or equivalent out directory.