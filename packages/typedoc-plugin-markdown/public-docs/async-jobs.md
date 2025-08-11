---
title: Async Jobs
description: ok.
---

# Async Jobs

Async jobs are used to perform asynchronous tasks before or after rendering with a provided context.

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.preRenderAsyncJobs.push(async (renderer) => {
    await doSomethingAsync(renderer);
  });

  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    await doSomethingAsync(renderer);
  });
}
```

The following arrays are available:

- `preRenderAsyncJobs`: A list of async jobs which must be completed before rendering output.
- `postRenderAsyncJobs`: A list of async jobs which must be completed after rendering output files but before generation is considered successful.
