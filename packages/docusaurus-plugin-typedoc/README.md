# docusaurus-plugin-typedoc (beta)

A Docusaurus v2 plugin to build api documentation with TypeDoc.

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)

## What it does?

- Generates pages as part of the build.
- Adds Front Matter to pages.
- Appends releavant JSON to sidebars.js for navigation.

## Installation

This guide assumes that Docusaurus has already been locally installed. See [installation docs](https://v2.docusaurus.io/docs/installation).

```shell
npm install typedoc typedoc-plugin-markdown docusaurus-plugin-typedoc --save-dev
```

## Usage

Add the plugin to `docusaurus.config.js`:

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',

      // plugin options
      {
        // list of input files relative to docusaurus.config.js
        inputFiles: ['../../src/'],

        // directory relative to docs dir (defaults to `''` the docs root)
        out: 'api',

        // Skip updating of sidebars.json (defaults to `false`).
        skipSidebar: true,

        // Pass in any additional TypeDoc options `(see typedoc --help)`.
        name: 'My API',
        excludeExternals: true,
        //...etc
      },
    ],
  ],
};
```
