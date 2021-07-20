# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that renders TypeScript API documentation as Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
![CI](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)

## What it does?

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options.

Useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface).

```bash
typedoc --out docs src/index.ts
```

**Note:**

- If using with the default HTML theme or other themes, use `--plugin none` to switch the plugin off.
- The plugin should be executed in the same location as TypeDoc. Use `npx` if running command directly in shell.

## Options

The following options can be used in addition to relevant [TypeDoc options](https://typedoc.org/guides/options/).

- `--entryDocument<string>`<br>
  The file name of the entry document. Defaults to `README.md`.
- `--hideBreadcrumbs<boolean>`<br>
  Do not render breadcrumbs in template header. Defaults to `false`.
- `--hideInPageTOC<boolean>`<br>
  Do not render in-page table of contents items.  Defaults to `false`.
- `--publicPath<string>`<br>
  Specify the base path for all urls. If undefined urls will be relative. Defaults to `.`.
- `--namedAnchors<boolean>`<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.


## Additional plugins and themes

If targeting specific static site generators or wiki platforms the following plugins and themes may be of interest:

### Plugins

Plugins that integrates TypeDoc seamlessly with a particular platform ecosystem:

- Docusaurus v2 - [docusaurus-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc/README.md)
- VuePress - [vuepress-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/vuepress-plugin-typedoc/README.md)

### Themes

Themes that target output to particular Markdown platforms:

- GitHub Wiki - [typedoc-github-wiki-theme](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-github-wiki-theme/README.md)
- GitLab Wiki - [typedoc-gitlab-wiki-theme](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/packages/typedoc-gitlab-wiki-theme/README.md)

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
