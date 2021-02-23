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

**npm script**
```javascript
"docs": "typedoc --plugin typedoc-plugin-markdown ...options"
```

**shell**
```bash
$ npx typedoc --plugin typedoc-plugin-markdown ...options
```

### Note:

- The `--plugin` arg is optional - if omitted all installed plugins will run.
- If using with the default HTML theme or other themes, use `--plugin none` to switch the plugin off.
- The plugin needs to be executed from the same location as `TypeDoc`. Either use as an npm script or run `npx typedoc`.

## Options

The following options can be used in addition to relevant [TypeDoc options](https://typedoc.org/guides/options/).

- `--entryDocument<string>`<br>
  The file name of the entry document. Defaults to `README.md`.
- `--hideBreadcrumbs<boolean>`<br>
  Do not render breadcrumbs in template header. Defaults to `false`.
- `--hideInPageTOC<boolean>`<br>
  Do not render in-page table of contents items.  Defaults to `false`.
- `--allReflectionsHaveOwnDocument<boolean>`<br>
  Output all reflections into seperate output files. Defaults to `false`.
- `--publicPath<string>`<br>
  Specify the base path for all urls. If undefined urls will be relative. Defaults to `.`.
- `--namedAnchors<boolean>`<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.


## Additional plugins

If using specifically for [Docusaurus v2](https://v2.docusaurus.io/) or [VuePress](https://vuepress.vuejs.org/) check out the respective plugin for the platform:

- [docusaurus-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc/README.md)
- [vuepress-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/vuepress-plugin-typedoc/README.md)

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)