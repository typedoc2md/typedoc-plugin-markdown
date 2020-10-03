# docusaurus-plugin-typedoc [beta]

A [Docusaurus v2](https://v2.docusaurus.io/) plugin to build API documentation with [TypeDoc](https://github.com/TypeStrong/typedoc) and the [Markdown plugin](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown).

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

- Generates static TypeDoc pages in Markdown as part of the build.
- Adds Front Matter to pages.
- Generates a sidebar file to enable navigation.

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
        // list of input files relative to project (defaults to `[../src/]`)
        inputFiles: ['../src/'],

        // docs directory relative to the site directory (defaults to `docs`)
        docsRoot: 'docs',

        // output directory relative to docs directory - use '' for docs root (defaults to `api`
        out: 'api',

        // options for auto generated sidebar (pass `null` to skip generation completely)
        sidebar: {
          // the name of the sidebars file relative to siteDir (typedoc-sidebar.js`)
          sidebarFile: 'typedoc-sidebar.js'
          // display full names with module path if applicable - (defaults to 'false')
          fullNames: false,
          // The label for the "Globals" page (defaults to 'Globals')
          globalsLabel: 'Globals',
          // The label for the "README" page (defaults to 'README')
          readmeLabel: 'README'
        },

        // include additional TypeDoc plugins in addition to the Markdown plugin (optional)
        plugin: ['typedoc-plugin-xyz'],

        // Pass in any additional TypeDoc options (see typedoc --help)
        mode: 'modules',
        target: `ES2017`
        // ..etc
      },
    ],
  ],
};
```

### Sidebar config

To consume the sidebar, update `sidebars.js` (or equivalent entry sidebars file) and require the generated sidebar:

```js
module.exports = {
  someSidebar: {
    Guides: ['doc1', 'doc2', 'doc3'],
  },
  typedocSidebar: require('./typedoc-sidebar.js'),
};
```

or with parent category:

```js
module.exports = {
  someSidebar: {
    Guides: ['doc1', 'doc2', 'doc3'],
    API: require('./typedoc-sidebar.js'),
  },
};
```

### Notes

- Once built the docs will be available at `/docs/api` or equivalent out directory.
- By default TypeDoc will attempt to clean-up the output directory and will error if the directory contains un-recognised documents. To skip this step and copy files on-top of the output directory use the `disableOutputCheck: true` option.
