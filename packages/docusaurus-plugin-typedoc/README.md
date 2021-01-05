# docusaurus-plugin-typedoc

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

      // Plugin / TypeDoc options
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json'
      },
    ],
  ],
};
```

Once built the docs will be available at `/docs/api` or equivalent out directory.

## Options

### TypeDoc options

At a minimum the `entryPoints` and `tsconfig` options will need to be set.

```js
entryPoints: ['../src/index.ts'],
tsconfig: '../tsconfig.json'
```

Please refer to [TypeDoc](https://typedoc.org/guides/options/) for further options.

### Plugin options

#### docsRoot`<string>`

Docs directory relative to the the root directory. Defaults to `"docs"`.

```js
docsRoot: 'docs',
```

#### out`<string>`

Output directory relative to docs directory. Defaults to `"api"`.

```js
out: 'api',
```

#### allReflectionsHaveOwnDocument`<boolean>`

Output all reflections into seperate output files. Defaults to `false`.

#### sidebar`<object>`

Options object for auto generated sidebar. Pass `null` to skip generation completely.

- **sidebarFile`<string>`**

  The name of the sidebars file. Will also accept a path relative to the root directory. Defaults to `typedoc-sidebar.js`.

- **fullNames`<boolean>`**

  Display full names with module path if applicable. Default to `false`.

- **readmeLabel`<string>`**

  The label of the `README` sidebar item. Default to `"Readme"`.
  _Ignored if `readme=none`_.

- **indexLabel`<string>`**

  The label of the globals/index sidebar item. Default to `"Index"`.


To consume the sidebar, update `sidebars.js` (or equivalent entry sidebars file) and require the generated sidebar:

```js
module.exports = {
  someSidebar: {
    Guides: ['doc1', 'doc2', 'doc3'],
    API: require('./typedoc-sidebar.js'),
  },
};
```

## Full example

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        plugin: ['some-typedoc-plugin'],

        // Plugin options
        docsRoot: 'docs',
        out: 'api',
        sidebar: {
          sidebarFile: 'some-sidebar.js'
          fullNames: true,
          readmeLabel: 'Overview'
        },
      },
    ],
  ],
};
```

