---
title: Getting Started
description: Instructions on how to start developing locally.
---

# Getting Started

## Machine Setup

### Fork and clone the repository

Start by forking the repository to your own GitHub account. Then, clone the repository to your local machine. Please replace `<your-username>` with your actual GitHub username.

```bash
git clone git@github.com:<your-username>/typedoc-plugin-markdown.git
```

### Install dependencies

Navigate to the repository root and install the necessary dependencies:

```bash
cd typedoc-plugin-markdown

npm install
```

### Build the package

Next cd into the package itself and run npm run build.

```bash
cd packages/typedoc-plugin-markdown

npm run build
```

The build process triggers several setup tasks. If the project builds successfully you are ready to start developing.

## Development Playground

To get started you can create a simple task of running a playground and editing a template.

### Run playground docs

Run the playground from the project root.

```shell
npm run playground
```

### View playground docs

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

### Perform a simple task

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
