# docusaurus-plugin-typedoc

A [Docusaurus v2](https://v2.docusaurus.io/) plugin to build documentation with [TypeDoc](https://github.com/TypeStrong/typedoc).

[![npm](https://img.shields.io/npm/v/docusaurus-plugin-typedoc.svg)](https://www.npmjs.com/package/docusaurus-plugin-typedoc)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What it does?

Generates static TypeDoc pages in Markdown with frontmatter as part of the Docusaurus build.

## Installation

> Install [Docusaurus](https://v2.docusaurus.io/docs/installation) in the root of your project and install the plugin dependencies in the same location as the Docusaurus website directory.

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
        tsconfig: '../tsconfig.json',
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

Once built the docs will be available at `/docs/api` (or equivalent out directory).

### Directory structure

```
├── docusauruss-website
    ├── build/ (static site dir)
    ├── docs/
    │   ├── api/ (compiled typedoc markdown)
    ├── docusaurus.config.js
    ├── package.json
    ├── sidebars.js
├──package.json
├──src (typescript source files)
├──tsconfig.json
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
plugin: ['typedoc-plugin-xyz'];
```

#### Other config options

TypeDoc options can also be declared:

- Using a `typedoc.json` file.
- Under the `typedocOptions` key in `tsconfig.json`.

> Note: Options declared in this manner will take priority and overwrite options declared in `docusaurus.config.js`.

### Plugin options

Options specific to the plugin should also be declared in the same object.

| Name                    | Default | Description                                                                                                                                                                                                  |
| :---------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `out`                   | `"api"` | Output dir relative to docs dir (use `.` for no subdir).                                                                                                                                                     |
| `includeExtension`      | `true`  | Determines whether to preserve the `.md` extension in relative links. `true` is recommended as per [Docusaurus documentation](https://docusaurus.io/docs/docs-markdown-features#referencing-other-documents) |
| `frontmatter`           | `null`  | Additional frontmatter options object. See [Frontmatter](#frontmatter).                                                                                                                                      |
| `sidebar.categoryLabel` | `API`   | The sidebar parent category label.                                                                                                                                                                           |
| `sidebar.collapsed`     | `true`  | Whether the parent category is initially collapsed                                                                                                                                                                     |
| `sidebar.fullNames`     | `false` | Display full names with module path.                                                                                                                                                                         |
| `sidebar.position`      | `auto`  | The position of the sidebar in the tree.                                                                                                                                                                     |

### An example configuration

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // TypeDoc options
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
        plugin: ['typedoc-plugin-xyz'],

        // Plugin options
        out: 'api-xyz',
        sidebar: {
          categoryLabel: 'API XYZ',
          collapsed: false,
          position: 0,
          fullNames: true,
        },
      },
    ],
  ],
};
```

## Recipes

### Sidebar and Navbar

#### Sidebar

`sidebars.js` can be configured in following ways:

1. Generate the entire sidebar from file structure of your docs folder (default behaviour):

```js
module.exports = {
  sidebar: [
    {
      type: 'autogenerated',
      dirName: '.', // '.' means the docs folder
    },
  ],
};
```

2. Alternatively, if you wish to manually control other parts of your sidebar you can use a slice for the TypeDoc sidebar.

> note: `sidebar.categoryLabel`, `sidebar.collapsed`, and `sidebar.position` options are ignored with this implementation)

```js
module.exports = {
  sidebar: {
    'Category 1': ['doc1', 'doc2', 'doc3'],
    API: [
      {
        type: 'autogenerated',
        dirName: 'api', // 'api' is the 'out' directory
      },
    ],
  },
};
```

Please see https://docusaurus.io/docs/sidebar for sidebar documentation.

#### Navbar

A navbar item can be configured in `themeConfig` options in `docusaurus.config.js`:

```js
 themeConfig: {
    navbar: {
      items: [
        {
        to: 'docs/api/',  // 'api' is the 'out' directory
        activeBasePath: 'docs',
        label: 'API',
        position: 'left',
      },
    ],
  },
},
```

Please see https://docusaurus.io/docs/api/themes/configuration#navbar-items for navbar documentation.

### Frontmatter

By default the plugin will configure minimal required [Frontmatter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) configuration.
Additionally required global Frontmatter options can be passed in using the `frontmatter` options object

`docusaurus.config.js`:

```js
plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
      // .... other plugin option
      frontmatter: {
        pagination_prev: null,
        pagination_next: null
      }
    ]
]
```

### Multi instance

It is possible to build multi TypeDoc instances by passing in multiple configs with unique ids:

`docusaurus.config.js`

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api-1',
        entryPoints: ['../api-1/src/index.ts'],
        tsconfig: '../api-1/tsconfig.json',
        out: 'api-1',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'api-2',
        entryPoints: ['../api-2/src/index.ts'],
        tsconfig: '../api-2/tsconfig.json',
        out: 'api-2',
      },
    ],
  ],
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

### Monorepo setup

`docusaurus.config.js`

```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../packages/package-a', '../packages/package-b'],
        entryPointStrategy: 'packages',
        sidebar: {
          fullNames: true,
        },
      },
    ],
  ],
};
```

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/docusaurus-plugin-typedoc/LICENSE)
