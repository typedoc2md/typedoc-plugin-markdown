# docusaurus-plugin-typedoc [beta]

A [Docusaurus v2](https://v2.docusaurus.io/) plugin to build API documentation with [TypeDoc](https://github.com/TypeStrong/typedoc) and the [Markdown plugin](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown).

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

- Generates static TypeDoc pages in Markdown as part of the build.
- Adds Front Matter to pages.
- Generates a sidebar file to enable navigation.

## Installation

This guide assumes that Docusaurus has already been installed. See [installation docs](https://v2.docusaurus.io/docs/installation).

```shell
npm install typedoc typedoc-plugin-markdown docusaurus-plugin-typedoc --save-dev
```

_Install in the same location as the Docusaurus root directory._

## Usage

Add the plugin to `docusaurus.config.js` and specify the required plugin options and any additional TypeDoc options.

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // Plugin options
        inputFiles: ['../src/'],

        // TypeDoc options (see typedoc --help)
        mode: 'file',
      },
    ],
  ],
};
```

## Plugin Options

### inputFiles

List of input files relative to the root directory.

```js
inputFiles: [../src]
```

### docsRoot

Docs directory relative to the the root directory. Defaults to `"docs"`.

```js
docsRoot: 'docs',
```

### out

Output directory relative to docs directory. Defaults to `"api"`.

```js
out: 'api',
```

### sidebar

Options object for auto generated sidebar. Pass `null` to skip generation completely.

- **sidebarFile**

  The name of the sidebars file. Will also accept a path relative to the root directory. Defaults to `typedoc-sidebar.js`.

- **fullNames**

  Display full names with module path if applicable. Default to `false`.

- **readmeLabel**

  The label of the README sidebar item. Default to `"README"`.
  _Ignored if `readme=none`_.

- **globalsLabel**

  The label of the "Globals" sidebar item Default to `"Globals"`.

```js
sidebar: {
  sidebarFile: 'typedoc-sidebar.js',
  fullNames: false,
  readmeLabel: 'README',
  globalsLabel: 'Globals',
}
```

To consume the sidebar, update `sidebars.js` (or equivalent entry sidebars file) and require the generated sidebar:

```js
module.exports = {
  someSidebar: {
    Guides: ['doc1', 'doc2', 'doc3'],
    API: require('./typedoc-sidebar.js'),
  },
};
```

### readmeTitle

The Front Matter `title` of the README page. This option will update the document title but does not change the inline h1 title, which is derived from the project README file. Defaults to `"{project_name}"`. _Ignored if `readme=none`_.

```js
readmeTitle: 'Introduction';
```

### globalsTitle

The Front Matter `title` of the globals page. This option also updates the inline h1 title. Defaults to `"{project_name}"`.

```js
globalsTitle: 'Overview';
```

## Full example

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // Plugin options
        inputFiles: ['../src/'],
        docsRoot: 'docs',
        out: 'api',
        sidebar: {
          sidebarFile: 'typedoc-sidebar.js'
          readmeLabel: 'README'
          globalsLabel: 'Globals',
          fullNames: false,
        },
        readmeTitle: 'Introduction',
        globalsTitle: 'Overview',

        // Additional TypeDoc options (see typedoc --help)
        mode: 'file',
        target: `ES2017`
        plugin: ['typedoc-plugin-xyz'],
        // ..etc
      },
    ],
  ],
};
```

## Notes

- Once built the docs will be available at `/docs/api` or equivalent out directory.
- By default TypeDoc will attempt to clean-up the output directory and will error if the directory contains un-recognised documents. To skip this step and copy files on-top of the output directory use the `disableOutputCheck: true` option.
