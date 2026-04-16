# typedoc-plugin-markdown

> Generate TypeScript API documentation as Markdown with [TypeDoc](https://typedoc.org).

## Overview

This repository contains the core Markdown plugin, utility plugins for frontmatter and remark transforms, target-specific themes for wiki and static-site workflows, and a Docusaurus plugin that can run TypeDoc inside the Docusaurus lifecycle.

Start with [typedoc-plugin-markdown](./packages/typedoc-plugin-markdown#readme) for the core Markdown output, then add the package that matches where you publish your docs.

## Packages

| Package                                                                    | Description                                                    | Downloads                                                                        | Changelog                                                       |
| :------------------------------------------------------------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| [typedoc-plugin-markdown](./packages/typedoc-plugin-markdown#readme)       | Generates TypeScript API documentation as Markdown.            | ![Downloads](https://img.shields.io/npm/dw/typedoc-plugin-markdown?label=npm)    | [Changelog](./packages/typedoc-plugin-markdown/CHANGELOG.md)    |
| [typedoc-plugin-frontmatter](./packages/typedoc-plugin-frontmatter#readme) | Adds configurable YAML frontmatter to TypeDoc Markdown output. | ![Downloads](https://img.shields.io/npm/dw/typedoc-plugin-frontmatter?label=npm) | [Changelog](./packages/typedoc-plugin-frontmatter/CHANGELOG.md) |
| [typedoc-plugin-remark](./packages/typedoc-plugin-remark#readme)           | Runs remark plugins on TypeDoc Markdown output.                | ![Downloads](https://img.shields.io/npm/dw/typedoc-plugin-remark?label=npm)      | [Changelog](./packages/typedoc-plugin-remark/CHANGELOG.md)      |
| [typedoc-github-wiki-theme](./packages/typedoc-github-wiki-theme#readme)   | Generates TypeDoc Markdown output for GitHub Wiki.             | ![Downloads](https://img.shields.io/npm/dw/typedoc-github-wiki-theme?label=npm)  | [Changelog](./packages/typedoc-github-wiki-theme/CHANGELOG.md)  |
| [typedoc-gitlab-wiki-theme](./packages/typedoc-gitlab-wiki-theme#readme)   | Generates TypeDoc Markdown output for GitLab Wiki.             | ![Downloads](https://img.shields.io/npm/dw/typedoc-gitlab-wiki-theme?label=npm)  | [Changelog](./packages/typedoc-gitlab-wiki-theme/CHANGELOG.md)  |
| [typedoc-vitepress-theme](./packages/typedoc-vitepress-theme#readme)       | Generates TypeDoc Markdown output for VitePress.               | ![Downloads](https://img.shields.io/npm/dw/typedoc-vitepress-theme?label=npm)    | [Changelog](./packages/typedoc-vitepress-theme/CHANGELOG.md)    |
| [typedoc-docusaurus-theme](./packages/typedoc-docusaurus-theme#readme)     | Generates TypeDoc Markdown output for Docusaurus.              | ![Downloads](https://img.shields.io/npm/dw/typedoc-docusaurus-theme?label=npm)   | [Changelog](./packages/typedoc-docusaurus-theme/CHANGELOG.md)   |
| [docusaurus-plugin-typedoc](./packages/docusaurus-plugin-typedoc#readme)   | Runs TypeDoc inside the Docusaurus lifecycle.                  | ![Downloads](https://img.shields.io/npm/dw/docusaurus-plugin-typedoc?label=npm)  | [Changelog](./packages/docusaurus-plugin-typedoc/CHANGELOG.md)  |

For Docusaurus, use `docusaurus-plugin-typedoc` if you want Docusaurus to run TypeDoc for you, or `typedoc-docusaurus-theme` if you run TypeDoc directly.

## Documentation

See [typedoc-plugin-markdown.org](https://typedoc-plugin-markdown.org) for installation, options, guides, and package documentation.

## Contributing

If you would like to contribute towards this project please read the [contributing guide](./CONTRIBUTING.md).

## License

Released under the [MIT License](./LICENSE).
