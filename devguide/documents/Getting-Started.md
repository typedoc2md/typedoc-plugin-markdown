[Developer Guide](../README.md) / Getting Started

# Getting Started

## 1. Machine Setup

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
npm run build-all
```

Test all packages in the workspace:

```bash
npm run test-all
```

## 2. Contributing to packages

If the project builds and the tests run successfully you are ready to start contributing to the project.

This is a simple monorepo managed by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

[typedoc-plugin-markdown](../typedoc-plugin-markdown/README.md) is the core package and is the package that is used to generate the Markdown documentation.

Child packages all depend on the core package and provide further functionality:

- [typedoc-plugin-frontmatter](../typedoc-plugin-frontmatter/README.md) and [typedoc-plugin-remark](../typedoc-plugin-remark/README.md) provide metadata or adjust the output.
- [typedoc-github-wiki-theme](../typedoc-github-wiki-theme/README.md), [typedoc-gitlab-wiki-theme](../typedoc-gitlab-wiki-theme/README.md),
  [typedoc-vitepress-theme](../typedoc-vitepress-theme/README.md) and [docusaurus-plugin-typedoc](../docusaurus-plugin-typedoc/README.md) target specific implementations.
