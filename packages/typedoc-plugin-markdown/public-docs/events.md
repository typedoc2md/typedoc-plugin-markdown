---
title: Events
description: Using events to do stuff.
---

# Events

Events provide a context that can be used to modify the output. The events are emitted before and after the markdown of each page is rendered.

You would typically use this event to modify content of a page.

```ts filename="custom-plugin.mjs"
// @ts-check
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    page.contents = page.contents.replace('foo', 'bar');
  });
}
```

The following page events are available:

- `MarkdownPageEvent.BEGIN`: Applied at the start of the markdown output.
- `MarkdownPageEvent.END`: Applied at the end of the markdown output.
