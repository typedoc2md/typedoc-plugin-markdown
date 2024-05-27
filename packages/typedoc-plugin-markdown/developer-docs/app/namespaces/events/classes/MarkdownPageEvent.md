[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [app](../../../README.md) / [events](../README.md) / MarkdownPageEvent

# Class: MarkdownPageEvent\<Model>

An event emitted by before and after the markup of a page is rendered.

## Table of Contents

* [Example](#example)
* [Extends](#extends)
* [Type Parameters](#type-parameters)
* [Events](#events)
* [Properties](#properties)

## Example

```ts
export function load(app: MarkdownApplication) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page: MarkdownPageEvent) => {
   page.contents = page.contents.replace('foo', 'bar');
  });
});
```

## Extends

* [`Event`](https://typedoc.org/api/classes/Event.html)

## Type Parameters

| Type Parameter | Default type                                                           |
| -------------- | ---------------------------------------------------------------------- |
| `Model`        | [`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html) |

## Events

### BEGIN

```ts
static readonly BEGIN: "beginPage" = 'beginPage';
```

Triggered before a document will be rendered.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:63](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L63)

***

### END

```ts
static readonly END: "endPage" = 'endPage';
```

Triggered after a document has been rendered, just before it is written to disc.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:69](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L69)

## Properties

### project

```ts
project: ProjectReflection;
```

The [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) instance the renderer is currently processing.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:23](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L23)

***

### model

```ts
readonly model: Model;
```

The model that that is being rendered on this page.
Either a [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) or [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html).

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:29](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L29)

***

### contents?

```ts
optional contents: string;
```

The final markdown `string` content of the page.

Should be rendered by layout templates and can be modified by plugins.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L36)

***

### url

```ts
url: string;
```

The url `string` of the page.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L41)

***

### filename

```ts
filename: string;
```

The complete `string` filename where the file will be written..

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L46)

***

### frontmatter?

```ts
optional frontmatter: Record<string, any>;
```

The frontmatter of this page represented as a key value object. This property can be utilised by other plugins.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-page-event.ts#L51)
