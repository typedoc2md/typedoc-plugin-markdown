# typedoc-plugin-markdown

![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown%2Fnext?&logo=npm) [![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

> **Please note this pre-release version may contain breaking changes within the same semantic version.**

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown.

## Contents

- [What does it do?](#what-does-it-do)
- [Installation](#installation)
- [Usage](#usage)
- [Plugin Options](#plugin-options)
- [Customization](#customization)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## What does it do?

By default, [TypeDoc](https://typedoc.org) will render API documentation as a webpage, e.g. HTML files.

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options. This is useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install typedoc typedoc-plugin-markdown@next --save-dev
```

## Usage

Specify the using the `plugin` configuration option.

```bash
typedoc --plugin typedoc-plugin-markdown
```

This guide assumes familarity with TypeDoc and please refer to [TypeDoc documenation](https://typedoc.org/guides/installation/) on how to use TypeDoc in general.

Please note:

- All of TypeDoc's [Configuration](https://typedoc.org/options/configuration/), [Input](https://typedoc.org/options/input/) and [Organization](https://typedoc.org/options/organization/) options are all respected as these are executed at the conversion phase of the project.

- TypeDoc's [Output](https://typedoc.org/options/output/) options are relevant to the rendering phase and are HTML output specific and are ignored by this plugin with the exception of [`--cleanOutputDir`]().

## Options

Additional [Output](./docs/guides/options/output.md), [Frontmatter](./docs/guides/options/ui.md) and [Remark](./docs/guides/options/utility.md) options exposed by this plugin.

### File Options

Options which control how output files are generated.

- [`--outputFileStrategy`]()
- [`--includeFileNumberPrefixes`]()
- [`--flattenOutputFiles`]()
- [`--entryFileName`]()
- [`--indexFileName`]()
- [`--indexPageTitle`]()
- [`--skipIndexPage`]()

### UI Options

Options which control the format of the output on the page.

- [`--excludeGroups`]()
- [`--hidePageHeader`]()
- [`--hidePageTitle`]()
- [`--hideBreadcrumbs`]()
- [`--hideInPageTOC`]()
- [`--hideHierarchy`]()
- [`--identifiersAsCodeBlocks`]()
- [`--propertiesFormat`]()
- [`--enumMembersFormat`]()
- [`--typeDeclarationFormat`]()
- [`--tocFormat`]()
- [`--titleTemplate`]()

### Utility Options

- [`--remarkPlugins`]()
- [`--translations`]()
- [`--preserveAnchorCasing`]()

## Custom templates

Coming soon

## Examples

Coming soon

## Contributing

Contributions and suggestions are welcome. Please see the [contributing guidelines](CONTRIBUTING.md) for further details.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
