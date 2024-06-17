[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownRendererHooks

# Interface: MarkdownRendererHooks

Describes the hooks available to inject output in the markdown theme.

## Hooks

| Property                 | Type                                                                           | Description                                                                     |
| ------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `page.begin`             | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied at the start of the markdown output.                                    |
| `page.end`               | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied at the end of the markdown output.                                      |
| `content.begin`          | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied before the main markdown content is rendered.                           |
| `index.page.begin`       | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied at the start of the markdown output on the index page.                  |
| `index.content.begin`    | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied before the main markdown content is rendered on the index page.         |
| `packages.page.begin`    | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied at the start of the markdown output on the packages root page.          |
| `packages.content.begin` | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied before the main markdown content is rendered on the packages root page. |
| `index.page.end`         | \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)] | Applied at the end of the markdown output on the index page.                    |
