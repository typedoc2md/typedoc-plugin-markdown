[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [app](../../../README.md) / [events](../README.md) / MarkdownRendererEvent

# Class: MarkdownRendererEvent

An event emitted at the beginning and end of the rendering process.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [project](#project)
  * [outputDirectory](#outputdirectory)
  * [urls?](#urls)
  * [navigation?](#navigation)
* [Accessors](#accessors)
  * [name](#name)
  * [isPropagationStopped](#ispropagationstopped)
* [Methods](#methods)
  * [stopPropagation()](#stoppropagation)
    * [Inherited from](#inherited-from)
  * [preventDefault()](#preventdefault)
    * [Inherited from](#inherited-from-1)
  * [isDefaultPrevented()](#isdefaultprevented)
    * [Inherited from](#inherited-from-2)
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

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L21)

***

### outputDirectory

> `readonly` **outputDirectory**: `string`

The path of the directory the documentation should be written to.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L26)

***

### urls?

> `optional` **urls**: [`UrlMapping`](../../../../theme/namespaces/types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

A list of all pages that should be generated.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L31)

***

### navigation?

> `optional` **navigation**: [`NavigationItem`](../../../../theme/namespaces/types/interfaces/NavigationItem.md)\[]

The navigation structure of the project that can be utilised by plugins.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L36)

## Accessors

### name

> `get` **name**(): `string`

Return the event name.

#### Returns

`string`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:38

***

### isPropagationStopped

> `get` **isPropagationStopped**(): `boolean`

Has [Event.stopPropagation](MarkdownPageEvent.md#stoppropagation) been called?

#### Returns

`boolean`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:42

## Methods

### stopPropagation()

> **stopPropagation**(): `void`

Stop the propagation of this event. Remaining event handlers will not be executed.

#### Returns

`void`

#### Inherited from

`Event.stopPropagation`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:30

***

### preventDefault()

> **preventDefault**(): `void`

Prevent the default action associated with this event from being executed.

#### Returns

`void`

#### Inherited from

`Event.preventDefault`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:34

***

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

Has [Event.preventDefault](MarkdownPageEvent.md#preventdefault) been called?

#### Returns

`boolean`

#### Inherited from

`Event.isDefaultPrevented`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:46

## Events

### BEGIN

> `static` `readonly` **BEGIN**: `"beginRender"` = `'beginRender'`

Triggered before the renderer starts rendering a project.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:42](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L42)

***

### END

> `static` `readonly` **END**: `"endRender"` = `'endRender'`

Triggered after the renderer has written all documents.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts:48](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/app/events/markdown-renderer-event.ts#L48)
