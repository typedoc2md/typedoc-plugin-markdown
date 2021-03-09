# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables TypeScript API documentation to be generated in Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown.svg?branch=master)](https://travis-ci.org/tgreyuk/typedoc-plugin-markdown)

## What it does?

The plugin replaces the default HTML theme with a built-in Markdown theme.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

**npm script**
```javascript
"docs": "typedoc ...options"
```

**shell**
```bash
$ npx typedoc ...options
```

### Note:

- If using with the default HTML theme or other themes, use `--plugin none` to switch the plugin off.
- The plugin needs to be executed from the same location as TypeDoc (using a script or `npx typedoc`).

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


## Additional themes and plugins

If targeting specific static site generators or wiki platforms the following themes and plugins may be of interest:

### Themes

Themes that target particular Markdown platforms:

- Github Wiki: [typedoc-github-wiki-theme](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-github-wiki-theme/README.md)
- GitLab Wiki: [typedoc-gitlab-wiki-theme](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-gitlab-wiki-theme/README.md)
- Hugo: [typedoc-hugo-theme](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-hugo-theme/README.md)

### Plugins

Plugins that integrates TypeDoc seamlessly with a particular platform ecosystem:

- Docusaurus v2: [docusaurus-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc/README.md)
- VuePress: [vuepress-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/vuepress-plugin-typedoc/README.md)



## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)