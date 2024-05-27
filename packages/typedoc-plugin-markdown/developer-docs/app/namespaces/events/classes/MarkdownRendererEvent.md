[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [app](../../../README.md) / [events](../README.md) / MarkdownRendererEvent

# Class: MarkdownRendererEvent

An event emitted at the beginning and end of the rendering process.

```ts
app.renderer.on(MarkdownRendererEvent.BEGIN, (event) => {
  console.log(`Render Starting for ${event.project.name}!`);
});
```

## Table of Contents

* [Extends](#extends)
* [Events](#events)
* [Properties](#properties)

## Extends

* [`Event`](https://typedoc.org/api/classes/Event.html)

## Events

### BEGIN

```ts
static readonly BEGIN: "beginRender" = 'beginRender';
```

Triggered before the renderer starts rendering a project.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:41](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L41)

***

### END

```ts
static readonly END: "endRender" = 'endRender';
```

Triggered after the renderer has written all documents.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L47)

## Properties

### project

```ts
readonly project: ProjectReflection;
```

The project the renderer is currently processing.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L20)

***

### outputDirectory

```ts
readonly outputDirectory: string;
```

The path of the directory the documentation should be written to.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L25)

***

### urls?

```ts
optional urls: UrlMapping<Reflection>[];
```

A list of all pages that should be generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:30](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L30)

***

### navigation?

```ts
optional navigation: NavigationItem[];
```

The navigation structure of the project that can be utilised by plugins.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:35](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L35)
