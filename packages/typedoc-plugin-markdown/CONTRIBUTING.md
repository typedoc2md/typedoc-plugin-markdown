# Contributing to "typedoc-plugin-markdown"

Thank you for showing interest in contributing to the project.

This package is the core package of the repository monorepo. For a general overview and machine setup please see the [root-level contributing guide](../../CONTRIBUTING.md).

## Overview

The best place to start is to have a look at the code in the [`src`](./src) directory.
You can also view the [auto-generated code docs]() to gain an understanding of code structure and architecture.
These docs will be referred to throughout the guide.

## Getting Started

To get started we can spin up a simple playground environment.

### Run the playground

To get started you can create a simple task of running a playground and editing a template.

#### 1. Setup project

If you have not done this yet please see [Machine Setup]() in the overall contributing docs for the project.

#### 2. cd into package

From the repository root cd into package.

```shell
cd packages/typedoc-plugin-markdown
```

#### 3. Run playground docs

> This will run several pre-build tasks. You don't need to worry about this for now but is explained in [Prebuild Tasks]() section.

```shell
npm run playground
```

### Viewing the docs

The above commands will generate some the markdown docs in the `./playground/docs` folder.

You may find it easier to visually view the docs in a browser. You have 2 options.

1. Using [Markdown Viewer](https://chromewebstore.google.com/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk?hl=en&pli=1) chrome extension and viewing the docs as a local file through the browser.
2. Using [markserv](https://www.npmjs.com/package/markserv) and spinning up the docs folder on a server.

We will use option 2 as an example here:

1. Install `markserv` globally.

```
 npm i -g markserv
```

2. View the playground in the browser:

```
markserv ./playground/docs/README.md
```

## Development Tasks

> _We are simply detailing the steps to perform tasks here. If you would like a deeper dive into the code please visit the [automated code docs]()._

Now we have a playground setup we can perform some typical development tasks.

For the sake of demo task we will

1. Customize some output (add a timestamp to the page template).
2. Introduce an option to format the date.
3. Finally add some localization support.

### 1. Customize Some Output

Templates and Partials are provided by the inbuilt theme context.

Lets say we wanted to add a timestamp to the main template.

1. Open up the index template located at `packages/index.ts`.

2. Add the current date after the defining the `const md= []`;

```ts
const md: string[] = [];

md.push(`Updated: ${new Date().toUTCString()}`);
```

_We use an array to build up strings and then join them with new lines. This is a good and common practice especially when you need to construct complex strings or handle multi-line text and is easier to manage than pure template literals._

3. Run the playground again (we don't currently have any live reloading development capability)

```
npm run playground
```

4. View the `README.md` again and you should see the timestamp added to the top of the page.

### 2. Add a New Option

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

### 3. Add a new locale

TODO

## Prebuild Tasks

TODO

- Prebuild options
- Prebuild docs
- Prebuild theme resources

## Linting

TODO

- markdownlint
- remark-mdx
