# MarkdownApplication

An extended typing of TypeDoc's Application instance.

This is essentially a copy of the main class with the `renderer` property overridden to the custom [MarkdownRenderer](/api-docs/Interface.MarkdownRenderer.md).

## Usage

```ts
import {MarkdownApplication} from 'typedoc-plugin-markdown';

export function load(app: MarkdownApplication) {
  ...
}
```

## Extends

- [`Application ↗️`]( https://typedoc.org/api/classes/Application.html )

## Properties

### renderer

> **renderer**: [`MarkdownRenderer`](/api-docs/Interface.MarkdownRenderer.md)

#### Overrides

`Application.renderer`
