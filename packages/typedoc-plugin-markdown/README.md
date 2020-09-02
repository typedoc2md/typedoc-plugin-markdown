# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

The plugin will replace the default HTML theme with a built-in Markdown theme, and expose some additional arguments.

Please not if using Docusaurus or Vuepress xxx.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

```bash
$ npx typedoc --plugin typedoc-plugin-markdown [args]
```

### Note:

- The `--plugin` arg is optional - if omitted all installed plugins will run.
- If using with the default HTML theme or other themes, use `--plugin none` to switch the plugin off.
- The plugin needs to be executed from the same location as `typedoc`. Either run as an npm script or make sure to run `npx typedoc`.

## Arguments

The following arguments can be used in addition to the default [TypeDoc arguments](https://github.com/TypeStrong/typedoc#arguments).

- `--defaultFileName<string>`<br>
  Specify the filename of the index/entry page (ext not required). Defaults to `README`.
- `--hideBreadcrumbs<boolean>`<br>
  Do not render breadcrumbs. Defaults to `false`.
- `--hideIndexes<boolean>`<br>
  Do not render page indexes. Defaults to `false`.
- `--publicPath<string>`<br>
  Specify the base path for all urls. If undefined urls will be relative. Defaults to `undefined`.

**Anchor links**

The following options can be ignored with the majority of implementations.

- `--namedAnchors<boolean>`<br>
  Use HTML named anchors tags for implementations that do not automatically assign header ids.
- `--bitbucketCloudAnchors<boolean>`<br>
  Fix anchors in Bitbucket Cloud which escapes all HTML and implements a proprietry anchor linking implementation.

## Additional plugins

- docusaurus-plugin-typedoc
- vuepress-plugin-typedoc

## Theme customisation

## Version 3

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
