[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownRendererHooks

# Interface: MarkdownRendererHooks

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L6)

Describes the hooks available to inject output in the markdown theme.

## Hooks

### page.begin

> **page.begin**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)\]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L12)

Applied at the start of the markdown output.

***

### page.end

> **page.end**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)\]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L19)

Applied at the end of the markdown output.

***

### content.begin

> **content.begin**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)\]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L26)

Applied before the main markdown content is rendered.

***

### index.page.begin

> **index.page.begin**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)\]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:33](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L33)

Applied at the start of the markdown output on the index page.

***

### index.page.end

> **index.page.end**: \[[`MarkdownThemeContext`](../../theme/classes/MarkdownThemeContext.md)\]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer-hooks.ts#L40)

Applied at the end of the markdown output on the index page.
