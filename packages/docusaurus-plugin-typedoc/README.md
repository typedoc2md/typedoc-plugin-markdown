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
        // list of input files relative to project (required).
        inputFiles: ['../../src/'],

        // docs directory relative to the site directory (defaults to docs).
        docsRoot: 'docs',

        // output directory relative to docs directory - use '' for docs root (defaults to 'api').
        out: 'api',

        // Skip updating of sidebars.json (defaults to false).
        skipSidebar: false,

        // Pass in any additional Typescript/TypeDoc options (see typedoc --help).
        mode: 'file',
        target: 'ES5',
        //...etc
      },
    ],
  ],
};
```

### Notes

- Once built the docs will be available at `/docs/api/index` or equivalent out directory.
- By default TypeDoc will attempt to clean-up the output directory and will error if the directory contains un-recognised documents. To skip this step and copy files on-top of the output directory use the `disableOutputCheck: true` option.
