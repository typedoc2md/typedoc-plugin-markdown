# MarkdownRendererHooks

Describes the hooks available to inject output in the markdown theme.

## Usage

```ts
 app.renderer.markdownHooks.on(
   'page.end',
   () => `**Generated using \`page.end\` hook**`,
);
```

## Hooks

### page.begin

> **page.begin**: [[`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)]

Applied at the start of the markdown output.

***

### page.end

> **page.end**: [[`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)]

Applied at the end of the markdown output.

***

### content.begin

> **content.begin**: [[`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)]

Applied before the main markdown content is rendered.

***

### index.page.begin

> **index.page.begin**: [[`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)]

Applied at the start of the markdown output on the index page.

***

### index.page.end

> **index.page.end**: [[`MarkdownThemeRenderContext`](/api-docs/Class.MarkdownThemeRenderContext.md)]

Applied at the end of the markdown output on the index page.
