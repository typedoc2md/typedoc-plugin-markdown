[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownApplication

# Interface: MarkdownApplication

This interface is essentially an extended typing of TypeDoc's [`Application`](https://typedoc.org/api/classes/Application.html) instance.

## Table of Contents

* [Example](#example)
* [Extends](#extends)
* [Properties](#properties)

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

```ts
renderer: MarkdownRenderer;
```

Re-types the `renderer` instance to [`MarkdownRenderer`](MarkdownRenderer.md).

#### Overrides

`Application.renderer`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-application.ts:22](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/types/markdown-application.ts#L22)
