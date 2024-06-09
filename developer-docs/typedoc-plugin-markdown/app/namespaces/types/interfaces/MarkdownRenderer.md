[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownRenderer

# Interface: MarkdownRenderer

An extended typing of TypeDoc's [`Renderer`](https://typedoc.org/api/classes/Renderer.html) class that includes updated typings for hooks and async jobs.

## Contents

* [Extends](#extends)
* [Properties](#properties)
  * [theme?](#theme)
    * [Inherited from](#inherited-from)
  * [hooks](#hooks)
    * [Inherited from](#inherited-from-1)
  * [renderStartTime](#renderstarttime)
    * [Inherited from](#inherited-from-2)
  * [componentName](#componentname)
    * [Inherited from](#inherited-from-3)
  * [markdownHooks](#markdownhooks)
  * [packagesMeta](#packagesmeta)
  * [defineTheme()](#definetheme)
    * [Overrides](#overrides)
  * [preRenderAsyncJobs](#prerenderasyncjobs)
    * [Overrides](#overrides-1)
  * [postRenderAsyncJobs](#postrenderasyncjobs)
    * [Overrides](#overrides-2)
* [Accessors](#accessors)
  * [themeName](#themename)
  * [cleanOutputDir](#cleanoutputdir)
  * [cname](#cname)
  * [githubPages](#githubpages)
  * [cacheBust](#cachebust)
  * [lightTheme](#lighttheme)
  * [darkTheme](#darktheme)
  * [highlightLanguages](#highlightlanguages)
  * [pretty](#pretty)
  * [application](#application)
  * [owner](#owner)
  * [\_listenId](#_listenid)
* [Methods](#methods)
  * [render()](#render)
    * [Inherited from](#inherited-from-4)
  * [initialize()](#initialize)
    * [Inherited from](#inherited-from-5)
  * [bubble()](#bubble)
    * [Inherited from](#inherited-from-6)
  * [getComponent()](#getcomponent)
    * [Inherited from](#inherited-from-7)
  * [getComponents()](#getcomponents)
    * [Inherited from](#inherited-from-8)
  * [hasComponent()](#hascomponent)
    * [Inherited from](#inherited-from-9)
  * [addComponent()](#addcomponent)
    * [Type Parameters](#type-parameters)
    * [Inherited from](#inherited-from-10)
  * [removeComponent()](#removecomponent)
    * [Inherited from](#inherited-from-11)
  * [removeAllComponents()](#removeallcomponents)
    * [Inherited from](#inherited-from-12)
  * [on()](#on)
    * [on(eventMap, context)](#oneventmap-context)
      * [Inherited from](#inherited-from-13)
    * [on(eventMap, callback, context, priority)](#oneventmap-callback-context-priority)
      * [Inherited from](#inherited-from-14)
    * [on(name, callback, context, priority)](#onname-callback-context-priority)
      * [Inherited from](#inherited-from-15)
  * [once()](#once)
    * [once(eventMap, context)](#onceeventmap-context)
      * [Inherited from](#inherited-from-16)
    * [once(name, callback, context, priority)](#oncename-callback-context-priority)
      * [Inherited from](#inherited-from-17)
  * [off()](#off)
    * [off(undefined)](#offundefined)
      * [Inherited from](#inherited-from-18)
    * [off(eventMap, context)](#offeventmap-context)
      * [Inherited from](#inherited-from-19)
    * [off(name, callback, context)](#offname-callback-context)
      * [Inherited from](#inherited-from-20)
  * [listenTo()](#listento)
    * [Inherited from](#inherited-from-21)
  * [listenToOnce()](#listentoonce)
    * [listenToOnce(obj, eventMap)](#listentoonceobj-eventmap)
      * [Inherited from](#inherited-from-22)
    * [listenToOnce(obj, name, callback, priority)](#listentoonceobj-name-callback-priority)
      * [Inherited from](#inherited-from-23)
  * [stopListening()](#stoplistening)
    * [Inherited from](#inherited-from-24)
  * [trigger()](#trigger)
    * [Inherited from](#inherited-from-25)

## Example

```ts
import { MarkdownApplication } from 'typedoc-plugin-markdown';

export function load(app: MarkdownApplication) {

app.renderer.markdownHooks.on(
 'page.begin', () => '> This is some markdown at the top of the page',
);

app.renderer.preRenderAsyncJobs.push(async (output: MarkdownRendererEvent) => {
  await doSomethingAsync(output);
});

app.renderer.postRenderAsyncJobs.push(async (output: MarkdownRendererEvent)) => {
  await doSomethingAsync(output);
});

}
```

## Extends

* [`Renderer`](https://typedoc.org/api/classes/Renderer.html)

## Properties

### theme?

> `optional` **theme**: [`Theme`](https://typedoc.org/api/classes/Theme.html)

The theme that is used to render the documentation.

#### Inherited from

`Renderer.theme`

#### Defined in

node\_modules/typedoc/dist/lib/output/renderer.d.ts:149

***

### hooks

> **hooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<`RendererHooks`, `JsxElement`>

Hooks which will be called when rendering pages.
Note:

* Hooks added during output will be discarded at the end of rendering.
* Hooks added during a page render will be discarded at the end of that page's render.

See RendererHooks for a description of each available hook, and when it will be called.

#### Inherited from

`Renderer.hooks`

#### Defined in

node\_modules/typedoc/dist/lib/output/renderer.d.ts:158

***

### renderStartTime

> **renderStartTime**: `number`

#### Inherited from

`Renderer.renderStartTime`

#### Defined in

node\_modules/typedoc/dist/lib/output/renderer.d.ts:170

***

### componentName

> **componentName**: `string`

The name of this component as set by the `@Component` decorator.

#### Inherited from

`Renderer.componentName`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:48

***

### markdownHooks

> **markdownHooks**: [`EventHooks`](https://typedoc.org/api/classes/EventHooks.html)\<[`MarkdownRendererHooks`](MarkdownRendererHooks.md), `string`>

Replaces the event hooks typings the [`MarkdownRendererHooks`](MarkdownRendererHooks.md) used by the plugin.

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:36](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L36)

***

### packagesMeta

`Internal`

> **packagesMeta**: `Record`\<`string`, `object`>

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L38)

***

### defineTheme()

`Internal`

> **defineTheme**: (`name`, `theme`) => `void`

#### Parameters

| Parameter | Type                                                                          |
| --------- | ----------------------------------------------------------------------------- |
| `name`    | `string`                                                                      |
| `theme`   | (`renderer`) => [`MarkdownTheme`](../../../../theme/classes/MarkdownTheme.md) |

#### Returns

`void`

#### Overrides

`Renderer.defineTheme`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:40](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L40)

***

### preRenderAsyncJobs

> **preRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.preRenderAsyncJobs`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:47](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L47)

***

### postRenderAsyncJobs

> **postRenderAsyncJobs**: (`output`) => `Promise`\<`void`>\[]

Re-types the returned argument argument to [`MarkdownRendererEvent`](../../events/classes/MarkdownRendererEvent.md).

#### Overrides

`Renderer.postRenderAsyncJobs`

#### Defined in

[packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts:51](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/6040ac7ed52761100f65c71074bb38fe47f3aa71/packages/typedoc-plugin-markdown/src/app/types/markdown-renderer.ts#L51)

## Accessors

### themeName

***

### cleanOutputDir

***

### cname

***

### githubPages

***

### cacheBust

***

### lightTheme

***

### darkTheme

***

### highlightLanguages

***

### pretty

***

### application

> `get` **application**(): [`Application`](https://typedoc.org/api/classes/Application.html)

Return the application / root component instance.

#### Returns

[`Application`](https://typedoc.org/api/classes/Application.html)

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:61

***

### owner

> `get` **owner**(): `O`

Return the owner of this component.

#### Returns

`O`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:65

***

### \_listenId

> `get` `private` **\_listenId**(): `any`

A unique id that identifies this instance.

#### Returns

`any`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:70

## Methods

### render()

> **render**(`project`, `outputDirectory`): `Promise`\<`void`>

Render the given project reflection to the specified output directory.

#### Parameters

| Parameter         | Type                                                                                 | Description                                                        |
| ----------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `project`         | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) | The project that should be rendered.                               |
| `outputDirectory` | `string`                                                                             | The path of the directory the documentation should be rendered to. |

#### Returns

`Promise`\<`void`>

#### Inherited from

`Renderer.render`

#### Defined in

node\_modules/typedoc/dist/lib/output/renderer.d.ts:185

***

### initialize()

> `protected` **initialize**(): `void`

Initialize this component.

#### Returns

`void`

#### Inherited from

`Renderer.initialize`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:56

***

### bubble()

> `protected` **bubble**(`name`, ...`args`): `this`

#### Parameters

| Parameter | Type                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| `name`    | `string` \| `EventMap` \| [`Event`](https://typedoc.org/api/classes/Event.html) |
| ...`args` | `any`\[]                                                                        |

#### Returns

`this`

#### Inherited from

`Renderer.bubble`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:57

***

### getComponent()

> **getComponent**(`name`): `undefined` | `RendererComponent`

Retrieve a plugin instance.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `name`    | `string` |

#### Returns

`undefined` | `RendererComponent`

The instance of the plugin or undefined if no plugin with the given class is attached.

#### Inherited from

`Renderer.getComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:88

***

### getComponents()

> **getComponents**(): `RendererComponent`\[]

#### Returns

`RendererComponent`\[]

#### Inherited from

`Renderer.getComponents`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:89

***

### hasComponent()

> **hasComponent**(`name`): `boolean`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `name`    | `string` |

#### Returns

`boolean`

#### Inherited from

`Renderer.hasComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:90

***

### addComponent()

> **addComponent**\<`T`>(`name`, `componentClass`): `T`

#### Type Parameters

| Type Parameter                    |
| --------------------------------- |
| `T` *extends* `RendererComponent` |

#### Parameters

| Parameter        | Type                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `name`           | `string`                                                                                         |
| `componentClass` | `T` \| `ComponentClass`\<`T`, [`Application`](https://typedoc.org/api/classes/Application.html)> |

#### Returns

`T`

#### Inherited from

`Renderer.addComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:91

***

### removeComponent()

> **removeComponent**(`name`): `undefined` | `RendererComponent`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `name`    | `string` |

#### Returns

`undefined` | `RendererComponent`

#### Inherited from

`Renderer.removeComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:92

***

### removeAllComponents()

> **removeAllComponents**(): `void`

#### Returns

`void`

#### Inherited from

`Renderer.removeAllComponents`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:93

***

### on()

#### on(eventMap, context)

> **on**(`eventMap`, `context`?): `this`

Bind an event to a `callback` function. Passing `"all"` will bind
the callback to all events fired.

##### Parameters

| Parameter  | Type       |
| ---------- | ---------- |
| `eventMap` | `EventMap` |
| `context`? | `any`      |

##### Returns

`this`

##### Inherited from

`Renderer.on`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:76

#### on(eventMap, callback, context, priority)

> **on**(`eventMap`, `callback`?, `context`?, `priority`?): `this`

##### Parameters

| Parameter   | Type            |
| ----------- | --------------- |
| `eventMap`  | `EventMap`      |
| `callback`? | `EventCallback` |
| `context`?  | `any`           |
| `priority`? | `number`        |

##### Returns

`this`

##### Inherited from

`Renderer.on`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:77

#### on(name, callback, context, priority)

> **on**(`name`, `callback`, `context`?, `priority`?): `this`

##### Parameters

| Parameter   | Type            |
| ----------- | --------------- |
| `name`      | `string`        |
| `callback`  | `EventCallback` |
| `context`?  | `any`           |
| `priority`? | `number`        |

##### Returns

`this`

##### Inherited from

`Renderer.on`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:78

***

### once()

#### once(eventMap, context)

> **once**(`eventMap`, `context`?): `this`

Bind an event to only be triggered a single time. After the first time
the callback is invoked, its listener will be removed. If multiple events
are passed in using the space-separated syntax, the handler will fire
once for each event, not once for a combination of all events.

##### Parameters

| Parameter  | Type       |
| ---------- | ---------- |
| `eventMap` | `EventMap` |
| `context`? | `any`      |

##### Returns

`this`

##### Inherited from

`Renderer.once`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:89

#### once(name, callback, context, priority)

> **once**(`name`, `callback`, `context`?, `priority`?): `this`

##### Parameters

| Parameter   | Type            |
| ----------- | --------------- |
| `name`      | `string`        |
| `callback`  | `EventCallback` |
| `context`?  | `any`           |
| `priority`? | `any`           |

##### Returns

`this`

##### Inherited from

`Renderer.once`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:90

***

### off()

#### off(undefined)

> **off**(): `this`

Remove one or many callbacks. If `context` is null, removes all
callbacks with that function. If `callback` is null, removes all
callbacks for the event. If `name` is null, removes all bound
callbacks for all events.

##### Returns

`this`

##### Inherited from

`Renderer.off`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:97

#### off(eventMap, context)

> **off**(`eventMap`, `context`?): `this`

##### Parameters

| Parameter  | Type                      |
| ---------- | ------------------------- |
| `eventMap` | `undefined` \| `EventMap` |
| `context`? | `any`                     |

##### Returns

`this`

##### Inherited from

`Renderer.off`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:98

#### off(name, callback, context)

> **off**(`name`, `callback`?, `context`?): `this`

##### Parameters

| Parameter   | Type                    |
| ----------- | ----------------------- |
| `name`      | `undefined` \| `string` |
| `callback`? | `EventCallback`         |
| `context`?  | `any`                   |

##### Returns

`this`

##### Inherited from

`Renderer.off`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:99

***

### listenTo()

> **listenTo**(`obj`, `name`, `callback`?, `priority`?): `this`

Inversion-of-control versions of `on`. Tell *this* object to listen to
an event in another object... keeping track of what it's listening to
for easier unbinding later.

#### Parameters

| Parameter   | Type                   |
| ----------- | ---------------------- |
| `obj`       | `EventDispatcher`      |
| `name`      | `string` \| `EventMap` |
| `callback`? | `EventCallback`        |
| `priority`? | `number`               |

#### Returns

`this`

#### Inherited from

`Renderer.listenTo`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:105

***

### listenToOnce()

#### listenToOnce(obj, eventMap)

> **listenToOnce**(`obj`, `eventMap`): `this`

Inversion-of-control versions of `once`.

##### Parameters

| Parameter  | Type              |
| ---------- | ----------------- |
| `obj`      | `EventDispatcher` |
| `eventMap` | `EventMap`        |

##### Returns

`this`

##### Inherited from

`Renderer.listenToOnce`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:109

#### listenToOnce(obj, name, callback, priority)

> **listenToOnce**(`obj`, `name`, `callback`, `priority`?): `this`

##### Parameters

| Parameter   | Type              |
| ----------- | ----------------- |
| `obj`       | `EventDispatcher` |
| `name`      | `string`          |
| `callback`  | `EventCallback`   |
| `priority`? | `number`          |

##### Returns

`this`

##### Inherited from

`Renderer.listenToOnce`

##### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:110

***

### stopListening()

> **stopListening**(`obj`?, `name`?, `callback`?): `this`

Tell this object to stop listening to either specific events ... or
to every object it's currently listening to.

#### Parameters

| Parameter   | Type                   |
| ----------- | ---------------------- |
| `obj`?      | `EventDispatcher`      |
| `name`?     | `string` \| `EventMap` |
| `callback`? | `EventCallback`        |

#### Returns

`this`

#### Inherited from

`Renderer.stopListening`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:115

***

### trigger()

> **trigger**(`name`, ...`args`): `this`

Trigger one or many events, firing all bound callbacks. Callbacks are
passed the same arguments as `trigger` is, apart from the event name
(unless you're listening on `"all"`, which will cause your callback to
receive the true name of the event as the first argument).

#### Parameters

| Parameter | Type                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| `name`    | `string` \| `EventMap` \| [`Event`](https://typedoc.org/api/classes/Event.html) |
| ...`args` | `any`\[]                                                                        |

#### Returns

`this`

#### Inherited from

`Renderer.trigger`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:122
