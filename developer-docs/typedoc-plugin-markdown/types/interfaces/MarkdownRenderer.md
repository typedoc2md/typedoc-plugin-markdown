[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownRenderer

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

## Example

```ts
import { MarkdownApplication } from 'typedoc-plugin-markdown';

export function load(app: MarkdownApplication) {

app.renderer.markdownHooks.on(
 'page.begin', () => '> This is some markdown at the top of the page',
);

app.renderer.preRenderAsyncJobs.push(async (output: MarkdownRendererEvent) => {
  await doSomethingAsync(output);
});

app.renderer.postRenderAsyncJobs.push(async (output: MarkdownRendererEvent)) => {
  await doSomethingAsync(output);
});

}
```

## Extends

* [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

## Properties

### markdownHooks

> **markdownHooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<[`MarkdownRendererHooks`](MarkdownRendererHooks.md), `string`>

Replaces the event hooks typings the [`MarkdownRendererHooks`](MarkdownRendererHooks.md) used by the plugin.

#### Defined in

[types/markdown-renderer.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L36)

***

### packagesMeta

> **packagesMeta**: `Record`\<`string`, `object`>

**`Internal`**

#### Defined in

[types/markdown-renderer.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L38)

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

[types/markdown-renderer.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L40)

***

### preRenderAsyncJobs

> **preRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.preRenderAsyncJobs`

#### Defined in

[types/markdown-renderer.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L47)

***

### postRenderAsyncJobs

> **postRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.postRenderAsyncJobs`

#### Defined in

[types/markdown-renderer.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/types/markdown-renderer.ts#L51)
