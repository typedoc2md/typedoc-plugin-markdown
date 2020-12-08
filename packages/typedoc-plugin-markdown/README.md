# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

The plugin will replaces the default HTML theme with a built-in Markdown theme.

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

- `--hideBreadcrumbs<boolean>`<br>
  Do not render breadcrumbs in template header. Defaults to `false`.
- `--allReflectionsHaveOwnDocument<boolean>`<br>
  Output all reflections into seperate output files. Defaults to `false`.
- `--publicPath<string>`<br>
  Specify the base path for all urls. If undefined urls will be relative. Defaults to `undefined`.
- `--namedAnchors<boolean>`<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.

## Additional plugins / themes

If using specifically for [Docusaurus v2](https://v2.docusaurus.io/) or [VuePress](https://vuepress.vuejs.org/) check out the respective plugin for the platform:

- [docusaurus-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc/README.md)
- [vuepress-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/vuepress-plugin-typedoc/README.md)

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)