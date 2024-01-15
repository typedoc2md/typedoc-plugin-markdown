# Contributing guidelines

> Please note this guide is work in progress so read with caution!

Thank you showing interest in contributing to this plugin - contributions and suggestions are very welcome.

## Overview

This is a simple monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) with `typedoc-plugin-markdown` the "core" package. This guide is for developing inside the `typedoc-plugin-markdown` core package.

This guide does not cover TypeDoc specifically so it might be useful to read the [TypeDoc development guide](https://typedoc.org/guides/development/) for an overview on TypeDoc's architecture.

## Getting started

1. Clone the repository:<br />`git clone git@github.com:tgreyuk/typedoc-plugin-markdown.git`

2. Checkout the `next` branch:<br />`git checkout next`

3. Install dependecnices from the repository root.<br />`npm install`

4. cd into the package:<br />`cd packages/typedoc-plugin-markdown`

5. Build and run tests:<br />`npm run build-and-test`

If the project builds and the tests run successfully you are ready to get going.

## High-level architecture

At a high level the codebase consists of an exposed TypeDoc plugin along side an assoicated theme.

At a highlevel:

- `index.ts` contains the public api and exports the required `load` funtion.
- The `plugin` folder contains functionality to setup the plugin and configure the renderer.
- The `support` folder contains agnostic support helpers used in the plugin.
- The `theme` folder contains the logic that sets up the custom Markdown theme.

## Testing

Test use the [Jest](https://jestjs.io/) with [ts-jest](https://kulshekhar.github.io/ts-jest/) as the test framework. To run all tests use the following command:

```shell
npm run test
```

Jest snapshots are used quite heavily to compare the output generated from templates. To update the snapshots run with the `update` flag.

## Linting

To run linting on the project use:

```shell
npm run lint
```

Both the code and some example generated markdown are linted using [eslint](https://eslint.org/) and [markdowmlint](https://github.com/DavidAnson/markdownlint) respectively.

## Submitting a PR

Please create a PR with a clear description of what the change is.

If the PR requires a new package release please also create a [changeset](https://github.com/changesets/changesets) which is the tool used for versioning and releasing packages.

Run the changeset command in the project root:

```shell
npx changeset
```

A one line changeset description will be enough but please ensure the correct semantic version is selected `patch` for a bug fix or `minor` for a new feature.

The resulting changeset file will something like this:

```markdown
---
'typedoc-plugin-markdown': patch
---

- A simple description for a patch fix. This message will also appear in the changelog.
```

Please also submit this file with the PR.
