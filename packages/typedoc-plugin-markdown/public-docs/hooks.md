---
title: Utilizing Hooks
description: Using hooks to add bits.
---

# Hooks

Hooks allow strings to be injected into the output in specific locations and are the most basic form of customization.

The following example demonstrates how to use hooks to inject content into the output:

```ts filename="custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.hooks.on('page.begin', () => `**Generated using \`page.begin\` hook**`);
}
```
