# Contributing guidelines

> Please note this guide is work in progress so read with caution!

Thank you showing interest in contributing to this plugin. Contributions and feedback are very welcome.

Before you start, you might find it helpful to read the [TypeDoc development guide](https://typedoc.org/guides/development/) to understand the architecture of TypeDoc itself.

## Overview

This is a monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

It consists of the core package ([`typedoc-plugin-markdown`]()) with several other dependent packages providing opt-in functionality.

This guide takes you through how to setup your machine for development and then provide development guidelines for each package.

## Machine Setup

### Setting Up Your Development Environment

#### 1. Fork and Clone the Repository

Start by forking the repository to your own GitHub account. Then, clone the repository to your local machine. Please replace `<your-username>` with your actual GitHub username.

```bash
git clone git@github.com:<your-username>/typedoc-plugin-markdown.git
```

#### 2. Switch to the `next` Branch

This is the branch where we do our development:

```bash
git checkout next
```

#### 3. Install Dependencies

Navigate to the repository root and install the necessary dependencies:

```bash
npm install
```

#### 4. Build the Packages and Run Tests

Finally, you can build all the packages and run the tests to ensure everything is set up correctly.

Build all packages in the workspace.

```bash
npm run build
```

Test all packages in the workspace.

```bash
npm run test
```

If the project builds and the tests run successfully you are ready to get going. Please note that even if you are only contributing to the core package all other packages need to be be built and testd successfully.

## Package: typedoc-plugin-markdown

The core package is the `typedoc-plugin-markdown` package. It is the package that is used to generate the markdown documentation.

At a high-level it consists of a plugin that exposes some additional options to TypeDoc and loads a TypeDoc theme that has specific markdown features.

### Developing

Please view the source code and associated comments for specific details of what the code is doing.

For some initial pointers of a typical development task the following briefly documents how to create a new option and then update some output.

#### 1, Adding a new option

Options exposed to TypeDoc are added as a named export to the declarations `declarations.ts` options config file.

```ts
/**
 * Some more detailed doc comments
 *
 * @category UI
 */
export const myNewOption: Partial<DeclarationOption> = {
  help: 'A short description of the file.',
  type: ParameterType.Boolean,
  defaultValue: false,
};
```

This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.

In addition, when the `prebuild` task is run:

- The option type will be added to `TypeDocOptionsMap`.
- The documentation will be updated using the JSDoc comments.
- The option will be categorised in the documentation using the `@category` tag.

#### 2, Updating the output

TODO

### Testing

Test use the [Jest](https://jestjs.io/) with [ts-jest](https://kulshekhar.github.io/ts-jest/) as the test framework. To run all tests use the following command:

```shell
npm run test
```

Both the code and some example generated markdown are linted using [eslint](https://eslint.org/) and [markdowmlint](https://github.com/DavidAnson/markdownlint) respectively.

Jest snapshots are used quite heavily to compare the output generated from templates. To update the snapshots run with the `update` flag.

## Submitting a PR

Please create a PR with a clear description of what the change is. We use Changesets to manage depoloyments and versioning, however it is sufficient to provide a PR without an associated changeset file as this can be managed indepenedntly.
