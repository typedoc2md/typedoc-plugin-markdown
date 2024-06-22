# Developer Guide

## Contents

* [Monorepo Overview](#monorepo-overview)
* [Machine Setup](#machine-setup)
* [Packages](#packages)

## Monorepo Overview

This is a simple monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

Please view individual packages for further insights:

* [ typedoc-plugin-markdown](typedoc-plugin-markdown/README.md) is the core package and is the package that is used to generate the markdown documentation.
* [ typedoc-plugin-frontmatter](typedoc-plugin-frontmatter/README.md) and [ typedoc-plugin-remark](typedoc-plugin-remark/README.md) provide metadata or adjust the output.
* [ typedoc-github-wiki-theme](typedoc-github-wiki-theme/README.md), [ typedoc-gitlab-wiki-theme](typedoc-gitlab-wiki-theme/README.md),
  [ typedoc-vitepress-theme](typedoc-vitepress-theme/README.md) and [ docusaurus-plugin-typedoc](docusaurus-plugin-typedoc/README.md) target specific implementations.

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

## Packages

| Name                                                               | Description                                                                                                              |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [typedoc-plugin-markdown](typedoc-plugin-markdown/README.md)       | A plugin for TypeDoc that enables TypeScript API documentation to be generated in Markdown.                              |
| [typedoc-plugin-frontmatter](typedoc-plugin-frontmatter/README.md) | A plugin for TypeDoc ( + typedoc-plugin-markdown ) that prepends configurable frontmatter to page content.               |
| [typedoc-plugin-remark](typedoc-plugin-remark/README.md)           | A plugin for TypeDoc ( + typedoc-plugin-markdown ) that enables additional markdown transformations with remark plugins. |
| [typedoc-github-wiki-theme](typedoc-github-wiki-theme/README.md)   | A TypeDoc ( + typedoc-plugin-markdown ) theme that generates Markdown compatible with Github Wiki.                       |
| [typedoc-gitlab-wiki-theme](typedoc-gitlab-wiki-theme/README.md)   | A TypeDoc ( + typedoc-plugin-markdown ) theme that generates Markdown compatible with Gitlab Wiki.                       |
| [typedoc-vitepress-theme](typedoc-vitepress-theme/README.md)       | A TypeDoc ( + typedoc-plugin-markdown ) theme that generates Markdown compatible with VitePress.                         |
| [docusaurus-plugin-typedoc](docusaurus-plugin-typedoc/README.md)   | A Docusaurus plugin to integrate TypeDoc ( + typedoc-plugin-markdown ) into a Docusaurus project.                        |
