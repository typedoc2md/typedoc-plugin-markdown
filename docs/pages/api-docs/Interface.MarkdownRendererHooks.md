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

> **page.begin**: [[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)]

Applied at the start of the markdown output.

***

### page.end

> **page.end**: [[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)]

Applied at the end of the markdown output.

***

### content.begin

> **content.begin**: [[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)]

Applied before the main markdown content is rendered.

***

### index.page.begin

> **index.page.begin**: [[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)]

Applied at the start of the markdown output on the index page.

***

### index.page.end

> **index.page.end**: [[`MarkdownThemeContext`](/api-docs/Class.MarkdownThemeContext.md)]

Applied at the end of the markdown output on the index page.
