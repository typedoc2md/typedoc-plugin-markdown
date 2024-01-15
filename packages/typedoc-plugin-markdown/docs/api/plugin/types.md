# plugin/types

## MarkdownApplication

The plugin amends the renderer with additional hooks and options.

This interface augments the TypeDoc Application with the updated renderer.

### Extends

- [`Application`](https://typedoc.org/api/classes/Application.html)

### Properties

#### renderer

> **renderer**: [`MarkdownRenderer`](types.md#markdownrenderer)

##### Overrides

`Application.renderer`

##### Source

[plugin/types.ts:10](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/types.ts#L10)

***

## MarkdownRenderer

The plugin amends the renderer with additional hooks and options.

### Extends

- [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

### Properties

#### markdownHooks

> **markdownHooks**: `EventHooks`\<[`MarkdownRendererHooks`](types.md#markdownrendererhooks), `string`\>

##### Source

[plugin/types.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/types.ts#L17)

#### packageOptions

> **packageOptions**: `Record`\<`string`, [`Options`](https://typedoc.org/api/classes/Configuration.Options.html)\>

##### Source

[plugin/types.ts:18](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/types.ts#L18)

***

## MarkdownRendererHooks

This is the custom render hooks method based on the equivalent TypeDoc class.

### Properties

#### page.begin

> **page.begin**: [`MarkdownThemeRenderContext`]

Applied at the start of the markdown output.

##### Source

[plugin/types.ts:28](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/types.ts#L28)

#### page.end

> **page.end**: [`MarkdownThemeRenderContext`]

Applied at the end of the markdown output.

##### Source

[plugin/types.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/types.ts#L33)

#### content.begin

> **content.begin**: [`MarkdownThemeRenderContext`]

Applied before the main markdown content is rendered.

##### Source

[plugin/types.ts:38](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/8b03c29e/packages/typedoc-plugin-markdown/src/plugin/types.ts#L38)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
