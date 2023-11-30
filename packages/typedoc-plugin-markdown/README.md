# typedoc-plugin-markdown

![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown%2Fnext?\&logo=npm) [![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=next)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

> **Please note this pre-release version may contain breaking changes within the same semantic version.**

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown. [MDX 2+](https://mdxjs.com/) and [GFM](https://github.github.com/gfm/) compliant.

## Contents

* [What does it do?](#what-does-it-do)
* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
* [Contributing](#contributing)
* [License](#license)

## What does it do?

By default, [TypeDoc](https://typedoc.org) will render API documentation as a webpage, e.g. HTML files.

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options. This is useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install typedoc typedoc-plugin-markdown@next --save-dev
```

## Usage

Plugins are loaded by using the TypeDoc `plugin` configuration option:

```bash
typedoc --plugin typedoc-plugin-markdown
```

For general TypeDoc configuration usage please see <https://typedoc.org/options/configuration>.

## Options

### TypeDoc Options

All of TypeDoc's [Configuration](https://typedoc.org/options/configuration/), [Input](https://typedoc.org/options/input/) and [Organization](https://typedoc.org/options/organization/) options are respected as they are executed at the conversion phase of the project.

TypeDoc's [Output](https://typedoc.org/options/output/) options are on the whole only relevant to the HTML theme and the majority are ignored by this plugin.

Supported Output options are: [`--out`](https://typedoc.org/options/output/#out), [`--cleanOutputDir`](https://typedoc.org/options/output/#cleanoutputdir).

### Plugin Options

This plugin exposes several additional options. Please see [Plugin Options](./docs/plugin-options.md) for detailed usage.

#### File output options

Options that configure how files are generated.

* [`--outputFileStrategy`](./docs/plugin-options.md#--outputfilestrategy)
* [`--membersWithOwnFile`](./docs/plugin-options.md#--memberswithownfile)
* [`--entryFileName`](./docs/plugin-options.md#--entryfilename)
* [`--entryModule`](./docs/plugin-options.md#--entrymodule)

#### Structure and formatting options

Options that alter the format and structure of pages.

* [`--hidePageHeader`](./docs/plugin-options.md#--hidepageheader)
* [`--hidePageTitle`](./docs/plugin-options.md#--hidepagetitle)
* [`--hideBreadcrumbs`](./docs/plugin-options.md#--hidebreadcrumbs)
* [`--hideInPageTOC`](./docs/plugin-options.md#--hideinpagetoc)
* [`--indexPageTitle`](./docs/plugin-options.md#--indexpagetitle)
* [`--memberPageTitle`](./docs/plugin-options.md#--memberpagetitle)
* [`--excludeGroups`](./docs/plugin-options.md#--excludegroups)
* [`--useCodeBlocks`](./docs/plugin-options.md#--usecodeblocks)
* [`--expandObjects`](./docs/plugin-options.md#--expandobjects)
* [`--parametersFormat`](./docs/plugin-options.md#--parametersformat)
* [`--propertiesFormat`](./docs/plugin-options.md#--propertiesformat)
* [`--enumMembersFormat`](./docs/plugin-options.md#--enummembersformat)
* [`--typeDeclarationFormat`](./docs/plugin-options.md#--typedeclarationformat)
* [`--indexFormat`](./docs/plugin-options.md#--indexformat)

#### Utility options

Options that configure additional functionality.

* [`--preserveAnchorCasing`](./docs/plugin-options.md#--preserveanchorcasing)
* [`--anchorPrefix`](./docs/plugin-options.md#--anchorprefix)
* [`--namedAnchors`](./docs/plugin-options.md#--namedanchors)
* [`--publicPath`](./docs/plugin-options.md#--publicpath)

## Contributing

Contributions and suggestions are welcome. Contributing guidelines coming soon.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
