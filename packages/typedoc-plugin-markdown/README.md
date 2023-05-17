# typedoc-plugin-markdown

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

## What does it do?

By default, TypeDoc will render API documentation as a webpage, e.g. HTML files.

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options. This is useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

**Please note this pre-release version may contain breaking changes within the same semantic version.**

> [TypeDoc](https://typedoc.org) and [Prettier](https://prettier.io/) are both required peer dependencies.

```bash
npm install typedoc-plugin-markdown@next --save-dev
```

## Usage

```bash
typedoc --plugin typedoc-plugin-markdown
```

## Options

The following options can be used in addition to relevant [TypeDoc options](https://typedoc.org/options/)
(please note that TypeDoc options specific to the HTML theme will be ignored).

### File output and content organization options

- **`--outputFileStrategy`**<br>
  Determines how output files are generated. Allowed values `modules` (all symbols hoisted to a single modules file) or `members` (each symbol exported to a seperate file as per HTML theme). Default to `members`.
- **`--includeFileNumberPrefixes`**<br>
  Prefixes generated files and folders with number prefixes. This is useful for implementations that support auto sidebar generation. Defaults to `false`.
- **`--flattenOutputFiles`**<br>
  Flatten output files without folders. Defaults to `false`.
- **`--entryFileName`**<br>
  The file name of the entry page (either project readme or API index if readme=none). `README.md` is recognised when browsing folders on repos and Wikis, while using `index.md`. Defaults to `README.md`.
- **`--skipIndexPage`**<br>
  Skips generation of a seperate API index page. Note the index page can be inserted into the readme page using the `$TYPEDOC_INDEX` placeholder key. Ignored if readme=none. Defaults to `false`.
- **`--indexPageTitle`**<br>
  The title of API index page. Defaults to the project name.
- **`--excludeGroups`**<br>
  By default members are grouped by kind (eg Classes, Functions etc). This option excludes such groupings so all members are rendered and sorted at the same level. Defaults to `false`.

Please see [File output and content organization options](./docs/file-output-options.md) for further documentation.

### UI options

- **`--hidePageHeader`**<br>
  Do not print the page header. Defaults to `false`.
- **`--hideBreadcrumbs`**<br>
  Do not print breadcrumbs. Defaults to `false`.
- **`--hideInPageTOC`**<br>
  Do not print in-page index items. Defaults to `false`.
- **`--hidePageTitle`**<br>
  Do not print the page title. Defaults to `false`.
- **`--hideKindTag`**<br>
  Do not print the kind tag identifiers for symbols. Defaults to `false`.
- **`--hideHierarchy`**<br>
  Do not print reflection hierarchy. Defaults to `false`.
- **`--identifiersAsCodeBlocks`**<br>
  Format signature and declaration identifiers in code blocks. Note if `true` references will not be linked. Defaults to `false`.
- **`--propertiesFormat`**<br>
  Specify the render style of properties groups for interfaces, classes and type literals. Expected values [`list`, `table`]. Defaults to `list`.
- **`--enumMembersFormat`**<br>
  Specify the render style of Enum members. Expected values [`list`, `table`]. Defaults to `list`.
- **`--typeDeclarationFormat`**<br>
  Specify the render style for type declaration members. Expected values [`list`, `table`]. Defaults to `list`.

### Utility options

- **`--baseUrl`**<br>
  Specifies the base url for internal link. If omitted all urls will be relative. Defaults to `.`
- **`--anchorFormat`**<br>
  The anchor style to use when linking to internal symbols. Expected values [`lowercase`, `slug`, `none`]. Defaults to `lowercase`.
- **`--anchorPattern`**<br>
  The anchor pattern to use when linking to internal symbols. e.g customprefix-{{anchor}}.
- **`--namedAnchors`**<br>
  Use HTML named anchor tags for implementations that do not assign header ids. Defaults to `false`.

## Frontmatter

If frontmatter is required for adding further metadata please use [typedoc-plugin-frontmatter](https://github.com/tgreyuk/typedoc-plugin-frontmatter).

## Output formatting (Prettier)

Generated Markdown is now parsed with [Prettier](https://prettier.io/) which is backed by the remark-parse package. Parsing documents with Prettier has several benefits:

- Produces a consistent format.
- Removes unnecessary escape characters.
- Formats code blocks inside comment fenced blocks.

Any [prettier configuration](https://prettier.io/docs/en/configuration.html) files discovered will be passed as options to the parser.

## Further Documentation

- [File output and content organization options](./docs/file-output-options.md).

## Demos

TODO

## Real life examples

TODO

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)

```

```
