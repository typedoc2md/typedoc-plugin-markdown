[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownApplication

# Interface: MarkdownApplication

The MarkdownApplication extends TypeDoc's Application instance with a custom renderer.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [renderer](#renderer)

## Extends

* [`Application`](https://typedoc.org/api/classes/Application.html)

## Properties

### renderer

> **renderer**: [`MarkdownRenderer`](MarkdownRenderer.md) & [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

The renderer used to generate the documentation output.

#### Overrides

`Application.renderer`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-application.ts:8](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-application.ts#L8)
