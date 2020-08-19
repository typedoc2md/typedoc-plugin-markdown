# vuepress-plugin-typedoc (beta)

A VuePress plugin to build api documentation with TypeDoc.

[![npm](https://img.shields.io/npm/v/vuepress-plugin-typedoc.svg)](https://www.npmjs.com/package/vuepress-plugin-typedoc)

## What it does?

- Generates pages as part of the build.
- Adds Front Matter to pages.
- Generates sidebars config.

## Installation

This guide assumes that VuePress has already been locally installed. See [getting started docs](https://vuepress.vuejs.org/guide/getting-started.html).

```shell
npm install typedoc typedoc-plugin-markdown vuepress-plugin-typedoc --save-dev
```

## Usage

Add the plugin to `./vuepress/config.js`:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-typedoc',

      // plugin options
      {
        // list of input files relative to docusaurus.config.js
        inputFiles: ['../../src/'],

        // out directory relative to docs folder (defaults to `api`)
        out: 'api',

        // Skip auto generation of sidebar content (defaults to `false`)
        skipSidebar: false,

        // Pass in any additional TypeDoc options `(see typedoc --help)`
        name: 'My API',
        excludeExternals: true,
        //...etc
      },
    ],
  ],
};
```

Once built the docs will be available at `/api/` or equivalent out directory.
