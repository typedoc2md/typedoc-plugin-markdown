[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownRenderer

# Interface: MarkdownRenderer

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:12](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L12)

The MarkdownRenderer extends TypeDoc's [Renderer](https://typedoc.org/api/classes/Renderer.html) instance with custom hooks and async jobs.

## Extends

- [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

## Properties

### defineTheme()

> **defineTheme**: (`name`, `theme`) => `void`

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L51)

Define a new theme that can be used to render output.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | The name of the theme. |
| `theme` | (`renderer`) => [`MarkdownTheme`](../../theme/classes/MarkdownTheme.md) | The theme class to use. |

#### Returns

`void`

#### Overrides

`Renderer.defineTheme`

***

### markdownHooks

> **markdownHooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<[`MarkdownRendererHooks`](MarkdownRendererHooks.md), `string`\>

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:59](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L59)

Dedicated markdown hooks to add to the renderer

***

### preMarkdownRenderAsyncJobs

> **preMarkdownRenderAsyncJobs**: (`output`) => `Promise`\<`void`\>[]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:72](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L72)

A list of async jobs which must be completed before rendering output.

Note: This array is cleared after calling the contained functions on each call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `output` | [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md) |

#### Returns

`Promise`\<`void`\>

***

### postMarkdownRenderAsyncJobs

> **postMarkdownRenderAsyncJobs**: (`output`) => `Promise`\<`void`\>[]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:82](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L82)

A list of async jobs which must be completed after rendering output files but before generation is considered successful.
These functions will be called after all documents have been written to the filesystem.

Note: This array is cleared after calling the contained functions on each call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `output` | [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md) |

#### Returns

`Promise`\<`void`\>

***

### preRenderAsyncJobs

> **preRenderAsyncJobs**: (`output`) => `Promise`\<`void`\>[]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:87](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L87)

A list of async jobs which must be completed *before* rendering output.
They will be called after RendererEvent.BEGIN has fired, but before any files have been written.

This may be used by plugins to register work that must be done to prepare output files. For example: asynchronously
transform markdown to HTML.

Note: This array is cleared after calling the contained functions on each Renderer.render call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `output` | [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

`Renderer.preRenderAsyncJobs`

***

### postRenderAsyncJobs

> **postRenderAsyncJobs**: (`output`) => `Promise`\<`void`\>[]

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:88](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L88)

A list of async jobs which must be completed after rendering output files but before generation is considered successful.
These functions will be called after all documents have been written to the filesystem.

This may be used by plugins to register work that must be done to finalize output files. For example: asynchronously
generating an image referenced in a render hook.

Note: This array is cleared after calling the contained functions on each Renderer.render call.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `output` | [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

`Renderer.postRenderAsyncJobs`

***

### packagesMeta

> **packagesMeta**: `Record`\<`string`, \{ `description`: `string`; `options`: [`Options`](https://typedoc.org/api/types/Configuration.Options.html); \}\>

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:93](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L93)

Store meta data about packages

## Methods

### on()

#### Call Signature

> **on**(`event`, `callback`): `void`

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:23](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L23)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"beginPage"` \| `"endPage"` | Triggered before or after a document will be rendered. |
| `callback` | (`page`) => `void` | Receives the [MarkdownPageEvent](../../events/classes/MarkdownPageEvent.md) object as an argument. |

##### Returns

`void`

##### Example

```ts
app.renderer.on(MarkdownPageEvent.BEGIN, (renderer) => {});
```

##### Overrides

`Renderer.on`

#### Call Signature

> **on**(`event`, `callback`): `void`

Defined in: [packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L38)

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `event` | `"beginRender"` \| `"endRender"` | Triggered before or after rendering the project. |
| `callback` | (`page`) => `void` | Receives the [MarkdownRendererEvent](../../events/classes/MarkdownRendererEvent.md) object as an argument. |

##### Returns

`void`

##### Example

```ts
app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {});
```

##### Overrides

`Renderer.on`
