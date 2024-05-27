[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownRenderer

# Interface: MarkdownRenderer

An extended typing of TypeDoc's [`Renderer`](https://typedoc.org/api/classes/Renderer.html) class that includes updated typings for hooks and async jobs.

## Table of Contents

* [Example](#example)
* [Extends](#extends)
* [Properties](#properties)

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

```ts
markdownHooks: EventHooks<MarkdownRendererHooks, string>;
```

Replaces the event hooks typings the [`MarkdownRendererHooks`](MarkdownRendererHooks.md) used by the plugin.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L36)

***

### packagesMeta

`Internal`

```ts
packagesMeta: Record<string, object>;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L38)

***

### defineTheme()

`Internal`

```ts
defineTheme: (name, theme) => void;
```

#### Parameters

| Parameter | Type                                                                          |
| --------- | ----------------------------------------------------------------------------- |
| `name`    | `string`                                                                      |
| `theme`   | (`renderer`) => [`MarkdownTheme`](../../../../theme/classes/MarkdownTheme.md) |

#### Returns

`void`

#### Overrides

`Renderer.defineTheme`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L40)

***

### preRenderAsyncJobs

```ts
preRenderAsyncJobs: (output) => Promise<void>[];
```

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.preRenderAsyncJobs`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L47)

***

### postRenderAsyncJobs

```ts
postRenderAsyncJobs: (output) => Promise<void>[];
```

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.postRenderAsyncJobs`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L51)
