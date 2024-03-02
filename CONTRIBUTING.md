# Contributing Guide

Thank you showing interest in contributing. Contributions and feedback are very welcome.

Before you start, you might find it helpful to read the TypeDoc's [development guide](https://typedoc.org/guides/development/) to understand the architecture of TypeDoc itself.

## Contents

* [Overview](#overview)
* [Machine Setup](#machine-setup)
* [Package Development](#package-development)
* [Contributing to typedoc-plugin-markdown](#contributing-to-typedoc-plugin-markdown)
  * [Adding new options](#adding-new-options)
  * [Updating the output](#updating-the-output)
* [Package Testing](#package-testing)
  * [Running test fixtures](#running-test-fixtures)
  * [Running tests](#running-tests)
* [Submitting a PR](#submitting-a-pr)

## Overview

This is a simple monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

This guide takes you through how to setup your machine for development and then provide development guidelines for each package.

## Machine Setup

**1. Fork and Clone the Repository**

Start by forking the repository to your own GitHub account. Then, clone the repository to your local machine. Please replace `<your-username>` with your actual GitHub username.

```bash
git clone git@github.com:<your-username>/typedoc-plugin-markdown.git
```

**2. Switch to the `next` Branch**

This is the branch where we do our development:

```bash
git checkout next
```

**3. Install Dependencies**

Navigate to the repository root and install the necessary dependencies:

```bash
npm install
```

**4. Build the Packages and Run Tests**

Finally, you can build all the packages and run the tests to ensure everything is set up correctly.

Build all packages in the workspace.

```bash
npm run build
```

**5. Test all packages in the workspace**

```bash
npm run test
```

If the project builds and the tests run successfully you are ready to start contributing to the project.

## Package Development

Below are high-level guidelines for developing inside each package describing some typical development tasks. You are encouraged to explore the source code and associated comments to gain a feel for the code architecture.

## Contributing to typedoc-plugin-markdown

typedoc-plugin-markdown is the core package of this monorepo and is the package that is used to generate the markdown documentation.

At a high-level this plugin exposes some additional options to TypeDoc and loads a TypeDoc theme that outputs markdown rather than HTML.

Below are some typical development tasks to help you get started.

### Adding new options

Options exposed to TypeDoc are added as a named export to the declarations `declarations.ts` options config file.

```ts
/**
 * Some more detailed comments about the option.
 *
 * @category UI
 */
export const myNewOption: Partial<DeclarationOption> = {
  help: 'A short description of the option.',
  type: ParameterType.Boolean,
  defaultValue: false,
};
```

This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.

In addition, when the `prebuild` task is run:

* The option type will be added to `TypeDocOptionsMap`.
* The documentation will be updated using the JSDoc comments.

### Updating the output

At a high level each TypeDoc model is mapped to a template file (`/src/theme/resources/templates`). Each template then calls a collection of partial files (`/src/theme/resources/partials`) to generate the markdown.

You can easily test how changes will effect output by updating the fixture source and running the test fixtures (see below).

## Package Testing

### Running test fixtures

A series of snapshot tests are used to ensure the output of the plugin is consistent. A `pretest` task is used to generate the fixtures that the tests will compare against.

Example code for fixtures are located at `/test/fixtures/src`. Fixtures output scenarios are setup using a config file (`/test/fixtures/config.ts`) that provides a mechanism to easily provide a combination of options.

### Running tests

```bash
npm run test
```

If you require to update the snapshots run the following command:

```bash
npm run test:update
```

## Submitting a PR

* Please open pull requests against the `next` branch.
* Please provide a clear description of what the change is.
