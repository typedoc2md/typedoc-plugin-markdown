[Home](../../README.md) / [typedoc-plugin-markdown](../README.md) / Test and Validation

# Test and Validation

This document contains guidance on running tests and creating fixtures.

## Contents

* [Tooling](#tooling)
* [Get Started](#get-started)
* [Fixtures](#fixtures)
  * [Building Fixtures](#building-fixtures)
* [Test](#test)
  * [Specs](#specs)
  * [Updating Snapshots](#updating-snapshots)
* [Validation](#validation)
  * [Validation Scripts](#validation-scripts)

## Tooling

* We use [Jest](https://jestjs.io/) with [ts-Jest](https://kulshekhar.github.io/ts-jest/) to run our test suites.
* We use [markdownlint](https://github.com/DavidAnson/markdownlint) and [remark-mdx](https://mdxjs.com/packages/remark-mdx/) to validate markdown.

## Get Started

The following command runs all tests.

```bash
npm run test
```

This command:

* Generates a suite of fixtures on a `prebuild` task.
* Runs some validation scripts to check the output of the fixtures.
* Runs Jest and triggers the spec files.

## Fixtures

We reply heavily (but not exclusively) on snapshot testing. We do this because we need to ensure output is correct
after converting with TypeDoc.

A series of snapshot tests are used to ensure the output of the plugin is consistent.

### Building Fixtures

* The `/fixtures/src` folder contains a set of TypeScript source files that are used as entrypoints.
* The `/fixtures/config.ts` is a configuration file that generates a set of fixture output files that are used by the Jest snapshot tests. It provides a mechanism to easily provide a combination of options.

The fixtures are build in `pretest` script using a an internal package workspace. See `devtools/packages/fixtures`.

## Test

Tests are run on the Jest test suite.

### Specs

* There are a suite of tests located in `/test/specs`. These tests run a series of snapshot tests against some output fixtures.
* All pure utility lib methods also have specs run against them in `/src/libs/utils`.

### Updating Snapshots

If you make a change to any code the you can update the snapshot source and add a test in the relevant spec file.

If you require to update the snapshots run the following command:

```bash
npm run test:update
```

## Validation

Validation is undertaken by the markdownlint and remark-mdx libraries.
When the fixtures are build the output markdown is validated.

### Validation Scripts

* `markdownlint` ensures that all output is commonMark complaint. See `/test/script/lint.md`.
* `remark-mdx` ensures that the output is also MDX compliant. See `/test/script/lint.mdx`.
