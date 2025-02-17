# Utilizing Navigation

By default navigation is not present but can be consumed programmatically. This is useful if you want to provide a custom sidebar/navigation implementation (if relevant to your environment).

You can configure the navigation structure by utilizing the TypeDoc [navigation](https://typedoc.org/documents/Options.Output.html#navigation) option, which should provide the same structure navigation as the default HTML theme.

## Usage

The navigation can be accessed by utilizing the [`postRenderAsyncJobs`](/docs/customizing-output#async-jobs) on the renderer.

The navigation is returned as `JSON` and can be mapped to a custom structure and written to a file.

```ts filename="custom-plugin.mjs"
// @ts-check

import { MarkdownApplication } from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.postRenderAsyncJobs.push(async (renderer) => {
    // The navigation JSON structure is available on the navigation object.
    const navigation = renderer.navigation;

    // This can be parsed to something else or written straight to a file:
    fs.writeFileSync('navigation.json', JSON.stringify(navigation));
  });
}
```
