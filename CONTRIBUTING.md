# Contributing Quickstart

Thank you showing interest in contributing. Contributions and feedback are very welcome.

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

## Packages

If the project builds and the tests run successfully you are ready to start contributing to the project.

Below are links to the contibuting guide for each project.

- [typedoc-plugin-markdown](./packages/typedoc-plugin-markdown/CONTRIBUTING.md) (core package)
