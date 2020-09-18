# docusaurus-plugin-typedoc

A [Docusaurus v2](https://v2.docusaurus.io/) plugin to build API documentation with [TypeDoc](https://github.com/TypeStrong/typedoc).

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

- Generates pages as part of the build.
- Adds Front Matter to pages.
- Appends JSON to sidebars.js to enable navigation.

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
        // list of input files relative to project (required)
        inputFiles: ['../src/'],

        // docs directory relative to the site directory (defaults to `docs`)
        docsRoot: 'docs',

        // output directory relative to docs directory - use '' for docs root (defaults to `api`
        out: 'api',

        // options for auto generated sidebars.json (pass `null` to skip generation completely)
        sidebar: {
          // display full names with module path if applicable - (defaults to 'false')
          fullNames: false,
          // the parent category label for sidebar - (defaults to `none` - no parent category)
          parentCategory: 'none',
        },

        // include additional TypeDoc plugins in addition to the markdown plugin (optional)
        plugin: ['typedoc-plugin-xyz'],

        // Pass in any additional TypeDoc options (see typedoc --help)
        mode: 'modules',
      },
    ],
  ],
};
```

### Notes

- Once built the docs will be available at `/docs/api/index` or equivalent out directory.
- By default TypeDoc will attempt to clean-up the output directory and will error if the directory contains un-recognised documents. To skip this step and copy files on-top of the output directory use the `disableOutputCheck: true` option.
