[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownRendererHooks

# Interface: MarkdownRendererHooks

Describes the hooks available to inject output in the markdown theme.

## Hooks

### page.begin

> **page.begin**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)]

Applied at the start of the markdown output.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L12)

***

### page.end

> **page.end**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)]

Applied at the end of the markdown output.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L19)

***

### content.begin

> **content.begin**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)]

Applied before the main markdown content is rendered.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L26)

***

### index.page.begin

> **index.page.begin**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)]

Applied at the start of the markdown output on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:33](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L33)

***

### index.page.end

> **index.page.end**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)]

Applied at the end of the markdown output on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L40)
