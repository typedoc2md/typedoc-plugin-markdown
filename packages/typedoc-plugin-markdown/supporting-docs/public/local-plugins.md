---
title: Local Plugins
description: How to write local plugins to consume APIs.
---

# Local plugins

Plugins are the building blocks for extending the TypeDoc output. Plugins export a load function with context of the resolved application.

Here is a basic plugin skeleton:

```js filename="local-plugins/my-custom-plugin.mjs"
// @ts-check

import { MarkdownApplication } from 'typedoc-plugin-markdown';

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

Note plugins can either be consumed as CommonJs or ESM.

## See

- https://typedoc.org/guides/development/#plugins
