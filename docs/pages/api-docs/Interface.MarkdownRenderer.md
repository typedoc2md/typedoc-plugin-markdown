# MarkdownRenderer

An extended typing of TypeDoc's Renderer class.

Incoudes updated typings for hooks and async jobs.

## Usage

```ts
import { MarkdownApplication } from 'typedoc-plugin-markdown';

export function load(app: MarkdownApplication) {

app.renderer.markdownHooks.on(
 'page.begin', () => '> This is some markdown at the top of the page',
);

app.renderer.preRenderAsyncJobs.push(async (event) => {
  await doSomethingAsync(event);
});

app.renderer.postRenderAsyncJobs.push(async (event) => {
  await doSomethingAsync(event);
});

}
```

## Extends

- [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

## Properties

### markdownHooks

> **markdownHooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<[`MarkdownRendererHooks`](/api-docs/Interface.MarkdownRendererHooks.md), `string`\>

***

### preRenderAsyncJobs

> **preRenderAsyncJobs**: (`output`) => `Promise`\<`void`\>[]

#### Overrides

`Renderer.preRenderAsyncJobs`

***

### postRenderAsyncJobs

> **postRenderAsyncJobs**: (`output`) => `Promise`\<`void`\>[]

#### Overrides

`Renderer.postRenderAsyncJobs`
