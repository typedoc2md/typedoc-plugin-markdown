# typedoc-plugin-markdown

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

## What does it do?

By default, TypeDoc will render API documentation as a webpage, e.g. HTML files.

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options. This is useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

> Please note the `next` pre-release version may contain breaking changes within the same semantic version.

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

### File output options

See [File output options](./docs/file-output-options.md) for further documentation.

- **`--entryDocument`**<br>
  The file name of the entry document. Defaults to `README.md`.
- **`--kindsWithOwnFile`**<br>
  Determines which reflection kinds should be written to its own file. Expected values [`None`, `All`] OR Array of [`Class`, `Interface`, `Enum`, `Function`, `Variable`, `TypeAlias`]. Defaults to `All`.
- **`--flattenOutputFiles`**<br>
  Flatten output files without folders. Note this does not effect the UI. Defaults to `false`.
- **`--numberPrefixOutput`**<br>
  Prefixes docs and folders by number prefixes if applicable. Useful for auto sidebar generation. Defaults to `false`.

### UI options

- **`--hideBreadcrumbs`**<br>
  Do not print breadcrumbs header. Defaults to `false`.
- **`--hideInPageTOC`**<br>
  Do not print in-page index items. Defaults to `false`.
- **`--hidePageTitle`**<br>
  Do not print the page title. Defaults to `false`.
- **`--hideKindTag`**<br>
  Do not print the kind tag beneath the page title. Defaults to `false`.
- **`--hideHierarchy`**<br>
  Do not print reflection hierarchy. Defaults to `false`.
- **`--indexPageTitle`**<br>
  The title of the main index / modules page. If not set will default to the project name.
- **`--groupByKinds`**<br>
  Group reflection kinds by headings (if applicable). If set to `false` all reflections will group at the same level. Note this effects directory stucture and UI organisation heading structure. Defaults to `true`.
- **`--indentifiersAsCodeBlocks`**<br>
  Format signature and declaration identifiers in code blocks. Note if `true` references will not be linked. Defaults to `false`.
- **`--propertiesFormat`**<br>
  Specify the render style of properties groups for interfaces, classes and type literals. Expected values [`list`, `table`]. Defaults to `list`.
- **`--enumMembersFormat`**<br>
  Specify the render style of Enum members. Expected values [`list`, `table`]. Defaults to `list`.

### Frontmatter options

See [Front matter options](./docs/frontmatter.md) for further documentation.

- **`--enableFrontmatter`**<br>
  Prepend output with a YAML front matter block. Defaults to `false`.
- **`--frontmatterTags`**<br>
  Specify which file comment tags should be added to front matter variables (as an array).
- **`--frontmatterGlobals`**<br>
  Specify global static variables to be added to all front matter blocks (as an object).
- **`--frontmatterNamingConvention`**<br>
  Specify the naming convention of front matter variables. Expected values [`camelCase`, `snakeCase`,`kebabCase`]. Defaults to `camelCase`.

### Utility options

- **`--anchorFormat`**<br>
  The anchor pattern to use when linking to internal symbols. Expected values [`lowercase`, `slug`, `none`]. Defaults to `lowercase`.
- **`--namedAnchors`**<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.
- **`--baseUrl`**<br>
  Specifies the base url for internal link. If omitted all urls will be relative. Defaults to `.`

## Output formatting (Prettier)

Generated Markdown is now parsed with [Prettier](https://prettier.io/) which is backed by the remark-parse package. This does require an additional peer dependency but has several benefits:

- Produces a consistent format.
- Remove unnecessary escape characters.
- Formats code blocks inside comment fenced blocks.

Any [prettier configuration](https://prettier.io/docs/en/configuration.html) files discovered will be passed as options to the parser.

## Further Documentation

- [File output options](./docs/file-output-options.md)
- [Frontmatter options](./docs/frontmatter.md)
- [Readme files](./docs/readme-files.md)

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
