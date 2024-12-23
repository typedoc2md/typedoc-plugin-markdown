---
title: Customizing Output
description: How to extend and customize output.
---

# Customizing Output

It is possible to customize the output of the generated markdown files by creating local plugins.
See the [Local Plugins](/api-docs/Document.Local-Plugins) guide for implementation details.

## Hooks

Hooks allows strings to be injected into the output in specific locations and are the most basic form of customization.

### Example

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.markdownHooks.on('page.end', () => `**Generated using \`page.end\` hook**`);
}
```

### See

- {@link MarkdownRendererHooks}

## Events

Events are more powerful than hooks and allow for more complex customizations and provide a context that can be used to modify the output.

### Page Events

Page events emitted before and after the markdown of each page is rendered.
You would typically use this event to modify content of a page.

#### Example

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    page.contents = page.contents.replace('foo', 'bar');
  });
}
```

#### See

- [MarkdownPageEvent](/api-docs/Class.MarkdownPageEvent).

### Renderer Events

Renderer events are emitted at the beginning (before pages are rendered) and end (after pages are rendered) of the rendering process.
You could typically use this event to modify urls or navigation structure.

#### Example

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownRendererEvent.BEGIN, (renderer) => {
    ...
  });
}
```

#### See

- [MarkdownRendererEvent](/api-docs/Class.MarkdownRendererEvent).

## Async Jobs

Async jobs are used to perform asynchronous tasks before or after rendering with a provided context.

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app: MarkdownApplication) {
  app.renderer.preRenderAsyncJobs.push(async (renderer) => {
    await doSomethingAsync(renderer);
  });

  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    await doSomethingAsync(renderer);
  });
}
```
