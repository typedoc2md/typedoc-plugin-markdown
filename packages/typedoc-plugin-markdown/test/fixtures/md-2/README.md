[**typedoc-plugin-markdown**](README.md)

***

# typedoc-plugin-markdown

![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown%2Fnext?\&logo=npm) [![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

> **Please note this pre-release version may contain breaking changes within the same semantic version.**

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown.

## Contents

*   [What does it do?](#what-does-it-do)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Plugin Options](#plugin-options)
*   [Custom templates](#custom-templates)
*   [Contributing](#contributing)
*   [License](#license)

## What does it do?

By default, [TypeDoc](https://typedoc.org) will render API documentation as a webpage, e.g. HTML files.

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options. This is useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install typedoc typedoc-plugin-markdown@next --save-dev
```

## Usage

### How to load the plugin?

Plugins are loaded by using the `plugin` configuration option:

Via the command line.

```bash
typedoc --plugin typedoc-plugin-markdown
```

Using a `typedoc.json` config file or under the `typedocOptions` key in `tsconfig.json`.

```json
{ "plugin": ["typedoc-plugin-markdown"] }
```

Please see <https://typedoc.org/options/configuration> for general TypeDoc option configuration.

### What TypeDoc options are supported?

*   All of TypeDoc's [Configuration](https://typedoc.org/options/configuration/), [Input](https://typedoc.org/options/input/) and [Organization](https://typedoc.org/options/organization/) options are all respected as these are executed at the conversion phase of the project.

*   TypeDoc's [Output](https://typedoc.org/options/output/) options are relevant to the rendering phase and in the main HTML output specific and are ignored by this plugin with the exception of [`--out`]() and [`--cleanOutputDir`]().

## Plugin Options

This plugin exposes additional options. Please see [Options Guide](./docs/guides/options.md) for detailed usage.

### Output Options

Options that define how output files are generated.

*   [`--outputFileStrategy`]()
*   [`--includeFileNumberPrefixes`]()
*   [`--flattenOutputFiles`]()
*   [`--entryFileName`]()
*   [`--indexFileName`]()
*   [`--indexPageTitle`]()
*   [`--skipIndexPage`]()
*   [`--preserveAnchorCasing`]()
*   [`--anchorPrefix`]()

### UI Options

UI Options

*   [`--excludeGroups`](./docs/guides/options.md#--excludegroups)
*   [`--hidePageHeader`](./docs/guides/options.md#--hidepageheader)
*   [`--hidePageTitle`](./docs/guides/options.md#--hidepagetitle)
*   [`--hideBreadcrumbs`](./docs/guides/options.md#--hidebreadcrumbs)
*   [`--hideInPageTOC`](./docs/guides/options.md#--hideinpagetoc)
*   [`--hideHierarchy`](./docs/guides/options.md#--hidehierarchy)
*   [`--identifiersAsCodeBlocks`](./docs/guides/options.md#--identifiersascodeblocks)
*   [`--propertiesFormat`](./docs/guides/options.md#--propertiesformat)
*   [`--enumMembersFormat`](./docs/guides/options.md#--enummembersformat)
*   [`--typeDeclarationFormat`](./docs/guides/options.md#--typedeclarationformat)
*   [`--tocFormat`](./docs/guides/options.md#--tocformat)
*   [`--titleTemplate`](./docs/guides/options.md#--titletemplate)

## Custom templates

Coming soon

## Contributing

Contributions and suggestions are welcome. Please see the [contributing guidelines](CONTRIBUTING.md) for further details.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
