[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownRenderer

# Interface: MarkdownRenderer

The MarkdownRenderer extends TypeDoc's Renderer instance with custom hooks and async jobs.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [defineTheme()](#definetheme)
  * [markdownHooks](#markdownhooks)
  * [preRenderAsyncJobs](#prerenderasyncjobs)
  * [postRenderAsyncJobs](#postrenderasyncjobs)
  * [packagesMeta](#packagesmeta)
* [Methods](#methods)
  * [on()](#on)
    * [on(event, callback)](#onevent-callback)
    * [on(event, callback)](#onevent-callback-1)

## Extends

* [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

## Properties

### defineTheme()

> **defineTheme**: (`name`, `theme`) => `void`

Define a new theme that can be used to render output.

#### Parameters

| Parameter | Type                                                                    | Description             |
| --------- | ----------------------------------------------------------------------- | ----------------------- |
| `name`    | `string`                                                                | The name of the theme.  |
| `theme`   | (`renderer`) => [`MarkdownTheme`](../../theme/classes/MarkdownTheme.md) | The theme class to use. |

#### Returns

`void`

#### Overrides

`Renderer.defineTheme`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:48](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L48)

***

### markdownHooks

> **markdownHooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<[`MarkdownRendererHooks`](MarkdownRendererHooks.md), `string`>

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:53](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L53)

***

### preRenderAsyncJobs

> **preRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

A list of async jobs which must be completed before rendering output.

Note: This array is cleared after calling the contained functions on each call.

#### Overrides

`Renderer.preRenderAsyncJobs`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:60](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L60)

***

### postRenderAsyncJobs

> **postRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

A list of async jobs which must be completed after rendering output files but before generation is considered successful.
These functions will be called after all documents have been written to the filesystem.

Note: This array is cleared after calling the contained functions on each call.

#### Overrides

`Renderer.postRenderAsyncJobs`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:68](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L68)

***

### packagesMeta

> **packagesMeta**: `Record`\<`string`, `object`>

**`Internal`**

#### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:71](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L71)

## Methods

### on()

#### on(event, callback)

> **on**(`event`, `callback`): `void`

##### Parameters

| Parameter  | Type                         | Description                                                                                        |
| ---------- | ---------------------------- | -------------------------------------------------------------------------------------------------- |
| `event`    | `"beginPage"` \| `"endPage"` | Triggered before or after a document will be rendered.                                             |
| `callback` | (`page`) => `void`           | Receives the [MarkdownPageEvent](../../events/classes/MarkdownPageEvent.md) object as an argument. |

##### Returns

`void`

##### Example

```ts
app.renderer.on(MarkdownPageEvent.BEGIN, (renderer) => {});
```

##### Overrides

`Renderer.on`

##### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L20)

#### on(event, callback)

> **on**(`event`, `callback`): `void`

##### Parameters

| Parameter  | Type                             | Description                                                                                                |
| ---------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `event`    | `"beginRender"` \| `"endRender"` | Triggered before or after rendering the project.                                                           |
| `callback` | (`page`) => `void`               | Receives the [MarkdownRendererEvent](../../events/classes/MarkdownRendererEvent.md) object as an argument. |

##### Returns

`void`

##### Example

```ts
app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {});
```

##### Overrides

`Renderer.on`

##### Defined in

[packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:35](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L35)
