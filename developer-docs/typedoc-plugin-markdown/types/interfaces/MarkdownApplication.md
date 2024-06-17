[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / MarkdownApplication

# Interface: MarkdownApplication

This interface is essentially an extended typing of TypeDoc's [`Application`](https://typedoc.org/api/classes/Application.html) instance.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [renderer](#renderer)

## Example

```ts
import { MarkdownApplication } from 'typedoc-plugin-markdown';

export function load(app: MarkdownApplication) {
  ...
}
```

## Extends

* [`Application`](https://typedoc.org/api/classes/Application.html)

## Properties

### renderer

> **renderer**: [`MarkdownRenderer`](MarkdownRenderer.md)

Re-types the `renderer` instance to [`MarkdownRenderer`](MarkdownRenderer.md).

#### Overrides

`Application.renderer`

#### Defined in

[types/markdown-application.ts:22](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/types/markdown-application.ts#L22)
