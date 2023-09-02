# typedoc-plugin-markdown

![npm](https://img.shields.io/npm/v/typedoc-plugin-markdown%2Fnext?\&logo=npm) [![Build Status](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/tgreyuk/typedoc-plugin-markdown/actions/workflows/ci.yml)

> **Please note this pre-release version may contain breaking changes within the same semantic version.**

A plugin for [TypeDoc](https://typedoc.org) that renders TypeScript API documentation as Markdown.

## Contents

*   [What does it do?](#what-does-it-do)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Options](#options)
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

Plugins are loaded by using the `plugin` configuration option:

```bash
typedoc --plugin typedoc-plugin-markdown
```

Please see <https://typedoc.org/options/configuration>.

## Options

### TypeDoc options

All of TypeDoc's [Configuration](https://typedoc.org/options/configuration/), [Input](https://typedoc.org/options/input/) and [Organization](https://typedoc.org/options/organization/) options are respected as they are executed at the conversion phase of the project.

TypeDoc's [Output](https://typedoc.org/options/output/) options are on the whole only relevant to the HTML theme and the majority are ignored by this plugin. Supported Output options are [`out`](https://typedoc.org/options/output/#out), `cleanOutputDir`.

### Plugin Options

This plugin exposes additional options. Please see [Options Guide](./docs/guides/options.md) for detailed usage.

#### File output options

*   [`--outputFileStrategy`](./docs/guides/options.md#--outputfilestrategy)
*   [`--membersWithOwnFile`](./docs/guides/options.md#--memberswithownfile)
*   [`--entryFileName`](./docs/guides/options.md#--entryfilename)

#### Structure and formatting options

*   [`--hidePageHeader`](./docs/guides/options.md#--hidepageheader)
*   [`--hidePageTitle`](./docs/guides/options.md#--hidepagetitle)
*   [`--hideBreadcrumbs`](./docs/guides/options.md#--hidebreadcrumbs)
*   [`--hideInPageTOC`](./docs/guides/options.md#--hideinpagetoc)
*   [`--indexPageTitle`](./docs/guides/options.md#--indexpagetitle)
*   [`--titleTemplate`](./docs/guides/options.md#--titletemplate)
*   [`--excludeGroups`](./docs/guides/options.md#--excludegroups)
*   [`--identifiersAsCodeBlocks`](./docs/guides/options.md#--identifiersascodeblocks)
*   [`--parametersFormat`](./docs/guides/options.md#--parametersformat)
*   [`--propertiesFormat`](./docs/guides/options.md#--propertiesformat)
*   [`--enumMembersFormat`](./docs/guides/options.md#--enummembersformat)
*   [`--typeDeclarationFormat`](./docs/guides/options.md#--typedeclarationformat)
*   [`--indexFormat`](./docs/guides/options.md#--indexformat)

#### Utility options

*   [`--preserveAnchorCasing`](./docs/guides/options.md#--preserveanchorcasing)
*   [`--anchorPrefix`](./docs/guides/options.md#--anchorprefix)
*   [`--htmlHeadingAnchors`](./docs/guides/options.md#--htmlheadinganchors)
*   [`--htmlTableAnchors`](./docs/guides/options.md#--htmltableanchors)

## Contributing

Contributions and suggestions are welcome. Contributing guidelines coming soon.

## License

[MIT](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/master/LICENSE)
