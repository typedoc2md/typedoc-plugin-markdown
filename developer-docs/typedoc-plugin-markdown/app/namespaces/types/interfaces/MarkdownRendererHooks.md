[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownRendererHooks

# Interface: MarkdownRendererHooks

Describes the hooks available to inject output in the markdown theme.

## Contents

* [Hooks](#hooks)
  * [page.begin](#pagebegin)
  * [page.end](#pageend)
  * [content.begin](#contentbegin)
  * [index.page.begin](#indexpagebegin)
  * [index.content.begin](#indexcontentbegin)
  * [packages.page.begin](#packagespagebegin)
  * [packages.content.begin](#packagescontentbegin)
  * [index.page.end](#indexpageend)

## Hooks

### page.begin

> **page.begin**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied at the start of the markdown output.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L12)

***

### page.end

> **page.end**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied at the end of the markdown output.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L19)

***

### content.begin

> **content.begin**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied before the main markdown content is rendered.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L26)

***

### index.page.begin

> **index.page.begin**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied at the start of the markdown output on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:33](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L33)

***

### index.content.begin

> **index.content.begin**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied before the main markdown content is rendered on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L40)

***

### packages.page.begin

> **packages.page.begin**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied at the start of the markdown output on the packages root page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L47)

***

### packages.content.begin

> **packages.content.begin**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied before the main markdown content is rendered on the packages root page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:54](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L54)

***

### index.page.end

> **index.page.end**: \[[`MarkdownThemeContext`](../../../../theme/classes/MarkdownThemeContext.md)]

Applied at the end of the markdown output on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:61](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L61)
