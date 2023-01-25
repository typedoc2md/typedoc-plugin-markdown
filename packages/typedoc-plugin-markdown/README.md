# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that renders TypeScript API documentation as Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

## What it does?

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options.

Useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown@next
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface)

```bash
typedoc --plugin typedoc-plugin-markdown
```

The `--plugin` arg is optional (all plugins are loaded by default unless set). Use `--plugin none` to switch the plugin off.

## Options

The following options can be used in addition to relevant [TypeDoc options](https://typedoc.org/guides/options/)
(please note that TypeDoc options specific to the HTML theme will be ignored).

### File output options

See [File output options](./docs/file-output-options.md) for further documentation.

- **`--entryDocument`**<br>
  The file name of the entry document. Defaults to `README.md`.
- **`--symbolsWithOwnFile`**<br>
  Determines which symbols should be written to their own file. Expected values [`none`, `all`] OR Array of [`class`, `interface`, `enum`, `function`, `var`, `type`] Defaults to `all` (all symbols exported to an individual file).

### UI options

- **`--hideBreadcrumbs`**<br>
  Do not print breadcrumbs header. Defaults to `false`.
- **`--hideInPageTOC`**<br>
  Do not print in-page index items. Defaults to `false`.
- **`--hidePageTitle`**<br>
  Do not print the page title. Defaults to `false`.
- **`--hideHierarchy`**<br>
  Do not print reflection hierarchy. Defaults to `false`.
- **`--enableLongTitles`**<br>
  Display full name including module paths in page titles. Defaults to `false`.

### Frontmatter options

See [Front matter options](./docs/frontmatter.md) for further documentation.

- **`--enableFrontmatter`**<br>
  Prepend output with a YAML front matter block. Defaults to `false`.
- **`--frontmatterTags`**<br>
  Specify which file comment tags should be added to front matter variables (as an array).
- **`--frontmatterGlobals`**<br>
  Specify global static variables to be added to all front matter blocks (as an object).

### Utility options

- **`--namedAnchors`**<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.
- **`--baseUrl`**<br>
  Specifies the base url for internal link. If omitted all urls will be relative. Defaults to `.`

## Documentation

- [File output options](./docs/file-output-options.md)
- [Frontmatter options](./docs/frontmatter.md)
- [Readme files](./docs/readme-files.md)

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
