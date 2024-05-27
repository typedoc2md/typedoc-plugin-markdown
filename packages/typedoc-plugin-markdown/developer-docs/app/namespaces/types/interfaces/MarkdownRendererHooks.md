[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownRendererHooks

# Interface: MarkdownRendererHooks

Describes the hooks available to inject output in the markdown theme.

## Table of Contents

* [Example](#example)
* [Hooks](#hooks)

## Example

```ts
 app.renderer.markdownHooks.on(
   'page.end',
   () => `**Generated using \`page.end\` hook**`,
);
```

## Hooks

### page.begin

```ts
page.begin: [MarkdownThemeContext];
```

Applied at the start of the markdown output.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:22](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L22)

***

### page.end

```ts
page.end: [MarkdownThemeContext];
```

Applied at the end of the markdown output.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L29)

***

### content.begin

```ts
content.begin: [MarkdownThemeContext];
```

Applied before the main markdown content is rendered.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L36)

***

### index.page.begin

```ts
index.page.begin: [MarkdownThemeContext];
```

Applied at the start of the markdown output on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:43](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L43)

***

### index.page.end

```ts
index.page.end: [MarkdownThemeContext];
```

Applied at the end of the markdown output on the index page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts:50](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer-hooks.ts#L50)
