[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownApplication

# Interface: MarkdownApplication

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-application.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-application.ts#L7)

The MarkdownApplication extends TypeDoc's [Application](https://typedoc.org/api/classes/Application.html) instance with a custom renderer.

## Extends

- [`Application`](https://typedoc.org/api/classes/Application.html)

## Properties

### renderer

> **renderer**: [`MarkdownRenderer`](MarkdownRenderer.md) & [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-application.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-application.ts#L8)

The renderer used to generate the HTML documentation output.

#### Overrides

`Application.renderer`
