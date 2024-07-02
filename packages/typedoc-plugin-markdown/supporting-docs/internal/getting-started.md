---
title: Getting Started
description: How to start developing locally.
---

# Getting Started

This guide provides some high-level steps with some typical development tasks.

## Development Playground

To get started you can create a simple task of running a playground and editing a template.

### Run Playground Docs

Start by navigating to the package directory:

```shell
cd packages/typedoc-plugin-markdown
```

Run the playground from the project root:

```shell
npm run playground
```

### View Playground Docs

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

### Perform a Simple Task

Now we have a playground setup we can perform some typical development tasks.

For the sake of demo task we will

1. Customize some output (add a timestamp to the page template).
2. Introduce an option to format the date.
3. Finally add some localization support.

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

## Next Steps

This should be enough to get up and running and have some idea of now to start developing. Please continue to read the docs
and have a look at how the modules are structured.

Some suggested additional tasks:

- Create a new option to format the date.
- Replace the "Updated" label with a translatable string.
