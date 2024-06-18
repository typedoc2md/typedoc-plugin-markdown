[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownRenderer

# Interface: MarkdownRenderer

An extended typing of TypeDoc's [`Renderer`](https://typedoc.org/api/classes/Renderer.html) class that includes updated typings for hooks and async jobs.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [markdownHooks](#markdownhooks)
  * [packagesMeta](#packagesmeta)
  * [defineTheme()](#definetheme)
  * [preRenderAsyncJobs](#prerenderasyncjobs)
  * [postRenderAsyncJobs](#postrenderasyncjobs)

## Extends

* [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

## Properties

### markdownHooks

> **markdownHooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<[`MarkdownRendererHooks`](MarkdownRendererHooks.md), `string`>

Replaces the event hooks typings the [`MarkdownRendererHooks`](MarkdownRendererHooks.md) used by the plugin.

#### Defined in

[types/markdown-renderer.ts:13](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L13)

***

### packagesMeta

> **packagesMeta**: `Record`\<`string`, `object`>

**`Internal`**

#### Defined in

[types/markdown-renderer.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L15)

***

### defineTheme()

> **defineTheme**: (`name`, `theme`) => `void`

**`Internal`**

#### Parameters

| Parameter | Type                                                                    |
| --------- | ----------------------------------------------------------------------- |
| `name`    | `string`                                                                |
| `theme`   | (`renderer`) => [`MarkdownTheme`](../../theme/classes/MarkdownTheme.md) |

#### Returns

`void`

#### Overrides

`Renderer.defineTheme`

#### Defined in

[types/markdown-renderer.ts:17](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L17)

***

### preRenderAsyncJobs

> **preRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.preRenderAsyncJobs`

#### Defined in

[types/markdown-renderer.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L24)

***

### postRenderAsyncJobs

> **postRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.postRenderAsyncJobs`

#### Defined in

[types/markdown-renderer.ts:28](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L28)
