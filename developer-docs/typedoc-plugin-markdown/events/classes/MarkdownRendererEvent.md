[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [events](../README.md) / MarkdownRendererEvent

# Class: MarkdownRendererEvent

An event emitted at the beginning and end of the rendering process.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [project](#project)
  * [outputDirectory](#outputdirectory)
  * [urls?](#urls)
  * [navigation?](#navigation)
* [Events](#events)
  * [BEGIN](#begin)
  * [END](#end)

## Example

```ts
app.renderer.on(MarkdownRendererEvent.BEGIN, (event) => {
  console.log(`Render Starting for ${event.project.name}!`);
});
```

## Extends

* [`Event`](https://typedoc.org/api/classes/Event.html)

## Properties

### project

> `readonly` **project**: [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)

The project the renderer is currently processing.

#### Defined in

[events/markdown-renderer-event.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L21)

***

### outputDirectory

> `readonly` **outputDirectory**: `string`

The path of the directory the documentation should be written to.

#### Defined in

[events/markdown-renderer-event.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L26)

***

### urls?

> `optional` **urls**: [`UrlMapping`](../../types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

A list of all pages that should be generated.

#### Defined in

[events/markdown-renderer-event.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L31)

***

### navigation?

> `optional` **navigation**: [`NavigationItem`](../../types/interfaces/NavigationItem.md)\[]

The navigation structure of the project that can be utilised by plugins.

#### Defined in

[events/markdown-renderer-event.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L36)

## Events

### BEGIN

> `readonly` `static` **BEGIN**: `"beginRender"` = `'beginRender'`

Triggered before the renderer starts rendering a project.

#### Defined in

[events/markdown-renderer-event.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L42)

***

### END

> `readonly` `static` **END**: `"endRender"` = `'endRender'`

Triggered after the renderer has written all documents.

#### Defined in

[events/markdown-renderer-event.ts:48](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/352ce41370cee18034e72b7c2f3874bbfe56f96f/packages/typedoc-plugin-markdown/src/events/markdown-renderer-event.ts#L48)
