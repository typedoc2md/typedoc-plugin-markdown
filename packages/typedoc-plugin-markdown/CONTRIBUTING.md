# Contributing to typedoc-plugin-markdown

`typedoc-plugin-markdown` is the core package of this monorepo and is the package that is used to generate the markdown documentation.

## Getting started

Please read [Contributing Quickstart](../../CONTRIBUTING.md) for a basic introduction and machine setup.

## Overview

At a high-level this plugin exposes some additional options to TypeDoc and loads a TypeDoc theme that outputs markdown rather than HTML.

Please explore the source code `/src` and associated comments to gain a feel for the code architecture.

## Developing

Here are some typical development tasks to help you get started:

### 1. Adding new options

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

- The option type will be added to `TypeDocOptionsMap`.
- The documentation will be updated using the JSDoc comments.

### 2. Updating the output

At a high level each TypeDoc model is mapped to a template file (`/src/theme/resources/templates`). Each template then calls a collection of partial files (`/src/theme/resources/partials`) to generate the markdown.

You can easily test how changes will effect output by updating the fixture source and running the test fixtures (see below).

### 3. Running test fixtures

A series of snapshot tests are used to ensure the output of the plugin is consistent. A `pretest` task is used to generate the fixtures that the tests will compare against.

Example code for fixtures are located at `/test/fixtures/src`. Fixtures output scenarios are setup using a config file (`/test/fixtures/config.ts`) that provides a mechanism to easily provide a combination of options.

## Testing

### Running tests

```bash
npm run test
```

If you require to update the snapshots run the following command:

```bash
npm run test:update
```

## Submitting a PR

- Please open pull requests against the `next` branch.
- Please provide a clear description of what the change is.
