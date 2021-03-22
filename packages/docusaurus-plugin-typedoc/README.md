# docusaurus-plugin-typedoc

A [Docusaurus v2](https://v2.docusaurus.io/) plugin to build API docs with [typedoc](https://github.com/TypeStrong/typedoc) and the [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown).

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

- Generates static TypeDoc pages in Markdown as part of the build.
- Adds Front Matter to pages.
- Generates a sidebar file to enable navigation.

## Installation

> Install in the same location as the Docusaurus website directory.

This guide assumes that a Docusaurus project has already been setup. See [installation docs](https://v2.docusaurus.io/docs/installation).

```shell
npm install typedoc typedoc-plugin-markdown docusaurus-plugin-typedoc --save-dev
```

## Usage

### Config

Add the plugin to `docusaurus.config.js` and specify the required options (see [options](#options)).

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

TypeDoc will be bootstraped with the Docusaurus `start` and `build` [cli commands](https://v2.docusaurus.io/docs/cli):

```javascript
"start": "docusaurus start",
"build": "docusaurus build",
```

Once built the docs will be available at `/docs/api` or equivalent out directory.

```
website/ (docusaururs website root)
├── build/ (static site dir)
├── docs/
│   ├── api/ (compiled typedoc markdown)
├── docusaurus.config.js
├── package.json
├── sidebars.js (docusaurus sidebars)
├── typedoc-sidebar.js (generated typedoc sidebar)
```

### Sidebar usage

To consume the sidebar simply `require()` the generated sidebar in `sidebars.js`:

```js
module.exports = {
  sidebar: {
    Guides: ['doc1'],
    API: require('./typedoc-sidebar.js'),
  },
};
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

Note: TypeDoc options can also be declared under the `typedocOptions` key in `tsconfig.json`.

### Plugin options

| Name                            | Default                | Description                                                                            |
| :------------------------------ | :--------------------- | :------------------------------------------------------------------------------------- |
| `docsRoot`                      | `"docs"`               | Docs directory relative to the the root directory.                                     |
| `out`                           | `"api"`                | Output directory relative to docs directory.                                           |
| `allReflectionsHaveOwnDocument` | `false`                | Output all reflections into seperate output files.                                     |
| `sidebar.sidebarFile`           | `"typedoc-sidebar.js"` | The name of the sidebars file. Will also accept a path relative to the root directory. |
| `sidebar.fullNames`             | `false`                | Display full names with module path if applicable.                                     |

### Example config

```js
module.exports = {

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        plugin:['typedoc-plugin-xyz'],

        // Plugin options
        docsRoot: 'docs',
        out: 'api',
        allReflectionsHaveOwnDocument: false,
        sidebar: {
          sidebarFile: 'typedoc-sidebar.js',
          fullNames: false
        },
      },
    ],
  ],
};
```

## Additional config

### Multi instance

It is possible to build multi TypeDoc instances by passing in multiple configs with unique ids:

`docusaurus.config.js`
```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id:'api-1',
        entryPoints: ['../api-1/src/index.ts'],
        tsconfig: '../api-1/tsconfig.json',
        sidebar: {
          sidebarFile: 'api-1-sidebar.js',
        },
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id:'api-2',
        entryPoints: ['../api-2/src/index.ts'],
        tsconfig: '../api-2/tsconfig.json',
        sidebar: {
          sidebarFile: 'api-2-sidebar.js',
        },
      },
    ],
  ],
};
```

`sidebars.js`
```js
module.exports = {
  sidebar: {
    API1: require('./sidebars/api-1-sidebar.js'),
    API2: require('./sidebars/api-2-sidebar.js'),
  },
};
```

### Watch mode

Watching files is supported by passing in the `watch: true` option see [https://typedoc.org/guides/options/#watch](https://typedoc.org/guides/options/#watch).

Targetting the option in development mode only can be achieved using Node.js Environment Variables:

`package.json`

```json
"start": "TYPEDOC_WATCH=true docusaurus start",
"build": "TYPEDOC_WATCH=false docusaurus build",
```

`docusaurus.config.js`

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
  ],
};
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/docusaurus-plugin-typedoc/LICENSE)
