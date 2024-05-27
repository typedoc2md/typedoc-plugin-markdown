# Contributing Guide

Thank you for showing interest in contributing to this project. This guide provides some basic guidelines for doing so.

## Overview

This project attempts to align with TypeDoc core as much as possible. Before you start, you might find it helpful to read the TypeDoc development guide to understand the architecture of TypeDoc itself.

## Machine Setup

This is a simple monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

**1. Fork and clone the repository**

Start by forking the repository to your own GitHub account. Then, clone the repository to your local machine. Please replace `<your-username>` with your actual GitHub username.

```bash
git clone git@github.com:<your-username>/typedoc-plugin-markdown.git
```

**2. Install dependencies**

Navigate to the repository root and install the necessary dependencies:

```bash
cd typedoc-plugin-markdown

npm install
```

**3. Build the packages and run tests**

Finally, you can build all the packages and run the tests to ensure everything is set up correctly.

Build all packages in the workspace:

```bash
npm run build
```

Test all packages in the workspace:

```bash
npm run test
```

If the project builds and the tests run successfully you are ready to start contributing to the project.

## Developing

Once setup you can start to develop. Please select the package you would like to contribute to to view the auto-generated developer docs.

- [typedoc-plugin-markdown](./packages/typedoc-plugin-markdown/developer-docs#readme)

## Submitting a PR

## Contributors

Thank you to all the people who have already contributed to typedoc-plugin-markdown.
