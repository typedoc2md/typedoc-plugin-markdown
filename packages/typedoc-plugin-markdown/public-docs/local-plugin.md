---
title: Local plugin
description: How to write a plugin.
---

# Local plugin

Plugins are the building blocks for extending the TypeDoc output. Plugins export a load function with context of the resolved application.

The following is an example a a basic plugin skeleton:

```js filename="local-plugins/my-custom-plugin.mjs"
// @ts-check
/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  // do something with app instance
}
```

The plugin can then be consumed by adding the path to the plugin in your `typedoc.json` file:

```json filename="typedoc.json"
{
  "plugin": ["typedoc-plugin-markdown", "./local-plugins/my-custom-plugin.mjs"]
}
```

See [Writing a TypeDoc plugin](https://typedoc.org/documents/Development.Plugins.html) for more information.
