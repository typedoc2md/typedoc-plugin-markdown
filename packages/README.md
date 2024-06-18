# Developer Guide

## Monorepo Overview

This is a simple monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

Please view individual packages for further insights:

- {@link typedoc-plugin-markdown} is the core package and is the package that is used to generate the markdown documentation.
- {@link typedoc-plugin-frontmatter} and {@link typedoc-plugin-remark} provide metadata or adjust the output.
- {@link typedoc-github-wiki-theme}, {@link typedoc-gitlab-wiki-theme},
  {@link typedoc-vitepress-theme} and {@link docusaurus-plugin-typedoc} target specific implementations.

## Machine Setup

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
