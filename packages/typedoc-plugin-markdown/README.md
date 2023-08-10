# typedoc-plugin-markdown

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown.svg)](https://www.npmjs.com/package/typedoc-plugin-markdown)
[![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

## What does it do?

By default, TypeDoc will render API documentation as a webpage, e.g. HTML files.

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options. This is useful if documentation is required to be included in project README files, Wikis and static site generators.

<!--
## Quick Links

- [Installation]()
- [Options]()
- [Adding Frontmatter]()
- [Output formatting]()
- [Customizing / extending]()
- [Recipes / demos]()
- [Real life examples]()
-->

## Installation

**Please note this pre-release version may contain breaking changes within the same semantic version.**

<!--To see whats changed between version 3 and 4 please see [v4 release notes](xx).-->

> [TypeDoc](https://typedoc.org/guides/installation/) is a required peer dependency.

```bash
npm install typedoc-plugin-markdown@next --save-dev
```

## Usage

The plugin needs to be specified using the `plugin` argument:

**command-line**

```bash
typedoc --plugin typedoc-plugin-markdown
```

**typedoc.json**

```json
{
  "plugin": ["typedoc-plugin-markdown"]
}
```

## Options

The following options can be used in addition to relevant [TypeDoc options](https://typedoc.org/options/)
(please note that TypeDoc options specific to the HTML theme will be ignored).

Please see [options guide](./docs/usage/options.md) for more detailed descriptions of available plugin options.

Below is a summary of the available options:

<!-- DO NOT EDIT THE OPTIONS BELOW DIRECTLY - THEY ARE INJECTED DYNAMICALLY FROM OPTIONS CONFIG -->

<!-- START OPTIONS -->
**`--outputFileStrategy`** `"members" | "modules"`

> Determines how output files are generated. Defaults to `members`. <small>[more »](./docs/usage/options.md#outputfilestrategy)</small>

**`--includeFileNumberPrefixes`** `boolean`

> Prefixes generated files and folders with number prefixes. Defaults to `false`. <small>[more »](./docs/usage/options.md#includefilenumberprefixes)</small>

**`--flattenOutputFiles`** `boolean`

> Flatten output files without folders. Defaults to `false`. <small>[more »](./docs/usage/options.md#flattenoutputfiles)</small>

**`--entryFileName`** `string`

> The file name of the entry page. Defaults to `README.md`. <small>[more »](./docs/usage/options.md#entryfilename)</small>

**`--indexFileName`** `string`

> The file name the seperate index page. Defaults to `API.md`. <small>[more »](./docs/usage/options.md#indexfilename)</small>

**`--indexPageTitle`** `string`

> The title of API index page. Defaults to `Index`.

**`--skipIndexPage`** `boolean`

> Skips generation of a seperate API index page. Defaults to `false`. <small>[more »](./docs/usage/options.md#skipindexpage)</small>

**`--excludeGroups`** `boolean`

> Excludes grouping by reflection kind so all members are rendered and sorted at the same level. Defaults to `false`. <small>[more »](./docs/usage/options.md#excludegroups)</small>

**`--hidePageHeader`** `boolean`

> Do not print page header. Defaults to `false`.

**`--hidePageTitle`** `boolean`

> Do not print page title. Defaults to `false`.

**`--hideBreadcrumbs`** `boolean`

> Do not print breadcrumbs. Defaults to `false`.

**`--hideInPageTOC`** `boolean`

> Do not render in-page table of contents items. Defaults to `false`.

**`--hideHierarchy`** `boolean`

> Do not print reflection hierarchy. Defaults to `false`.

**`--identifiersAsCodeBlocks`** `boolean`

> Format signature and declaration identifiers in code blocks. Defaults to `false`. <small>[more »](./docs/usage/options.md#identifiersascodeblocks)</small>

**`--propertiesFormat`** `"list" | "table"`

> Specify the render style of properties groups for interfaces and classes. Defaults to `list`.

**`--enumMembersFormat`** `"list" | "table"`

> Specify the render style of Enum members. Defaults to `list`.

**`--typeDeclarationFormat`** `"list" | "table"`

> Specify the render style for type declaration members. Defaults to `list`.

**`--tocFormat`** `"list" | "table"`

> Render TOC either as a simple list or a table with a description. Defaults to `list`.

**`--baseUrl`** `string`

> Specifies the base url for internal link. If omitted all urls will be relative. Defaults to `undefined`.

**`--anchorFormat`** `"lowercase" | "slug" | "none"`

> The anchor format to use when linking to internal symbols. Defaults to `lowercase`.

**`--anchorTemplate`** `string`

> The anchor template to use when linking to internal symbols. Defaults to `undefined`. <small>[more »](./docs/usage/options.md#anchortemplate)</small>

**`--titleTemplate`** `string`

> Specify a template for displaying page titles. Defaults to `{kind}: {name}`. <small>[more »](./docs/usage/options.md#titletemplate)</small>

**`--namedAnchors`** `boolean`

> Use HTML named anchors for engines that do not automatically assign header ids. Defaults to `false`.

<!-- END OPTIONS -->

## Adding Frontmatter

If frontmatter is required for adding further metadata please use [typedoc-plugin-frontmatter](https://github.com/tgreyuk/typedoc-plugin-frontmatter#readme).

## Output formatting

<!--
Generated Markdown is now parsed with [Prettier](https://prettier.io/) which is backed by the remark-parse package. Parsing documents with Prettier has several benefits:

- Produces a consistent format.
- Removes unnecessary escape characters.
- Formats code blocks inside comment fenced blocks.

Any [prettier configuration](https://prettier.io/docs/en/configuration.html) files discovered will be passed as options to the parser.
-->

All test files are linted with [markdownlint](https://github.com/DavidAnson/markdownlint#readme).

<!--
## Customizing / extending

The plugin has been designed to provide as much flexibility as possible out of the box, however it is also possible to easily extend the in-built Markdown theme. For documentation on how to customise the theme please see here.

## Demos

Please visit dedicated demo repo will some example use-cases.

## Real life examples

Coming soon - We would love to showcases some real-life examples here.
-->

## Contributing

Contributions and suggestions are welcome. Please see the [contributing guidelines](CONTRIBUTING.md) for further details.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
