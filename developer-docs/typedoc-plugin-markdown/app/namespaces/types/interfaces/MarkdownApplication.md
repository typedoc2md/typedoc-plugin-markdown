[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [app](../../../README.md) / [types](../README.md) / MarkdownApplication

# Interface: MarkdownApplication

This interface is essentially an extended typing of TypeDoc's [`Application`](https://typedoc.org/api/classes/Application.html) instance.

## Contents

* [Extends](#extends)
* [Properties](#properties)
* [Accessors](#accessors)
  * [lang](#lang)
    * [Inherited from](#inherited-from)
  * [skipErrorChecking](#skiperrorchecking)
    * [Inherited from](#inherited-from-1)
  * [entryPointStrategy](#entrypointstrategy)
    * [Inherited from](#inherited-from-2)
  * [entryPoints](#entrypoints)
    * [Inherited from](#inherited-from-3)
  * [application](#application)
    * [Inherited from](#inherited-from-4)
  * [owner](#owner)
    * [Inherited from](#inherited-from-5)
  * [\_listenId](#_listenid)
    * [Inherited from](#inherited-from-6)
* [Methods](#methods)
  * [getTypeScriptPath()](#gettypescriptpath)
    * [Inherited from](#inherited-from-7)
  * [getTypeScriptVersion()](#gettypescriptversion)
    * [Inherited from](#inherited-from-8)
  * [getEntryPoints()](#getentrypoints)
    * [Inherited from](#inherited-from-9)
  * [convert()](#convert)
    * [Inherited from](#inherited-from-10)
  * [convertAndWatch()](#convertandwatch)
    * [Inherited from](#inherited-from-11)
  * [validate()](#validate)
    * [Inherited from](#inherited-from-12)
  * [generateDocs()](#generatedocs)
    * [Inherited from](#inherited-from-13)
  * [generateJson()](#generatejson)
    * [Inherited from](#inherited-from-14)
  * [toString()](#tostring)
    * [Inherited from](#inherited-from-15)
  * [initialize()](#initialize)
    * [Inherited from](#inherited-from-16)
  * [bubble()](#bubble)
    * [Inherited from](#inherited-from-17)
  * [getComponent()](#getcomponent)
    * [Inherited from](#inherited-from-18)
  * [getComponents()](#getcomponents)
    * [Inherited from](#inherited-from-19)
  * [hasComponent()](#hascomponent)
    * [Inherited from](#inherited-from-20)
  * [addComponent()](#addcomponent)
    * [Type Parameters](#type-parameters)
    * [Inherited from](#inherited-from-21)
  * [removeComponent()](#removecomponent)
    * [Inherited from](#inherited-from-22)
  * [removeAllComponents()](#removeallcomponents)
    * [Inherited from](#inherited-from-23)
  * [on()](#on)
    * [on(eventMap, context)](#oneventmap-context)
    * [on(eventMap, callback, context, priority)](#oneventmap-callback-context-priority)
    * [on(name, callback, context, priority)](#onname-callback-context-priority)
  * [once()](#once)
    * [once(eventMap, context)](#onceeventmap-context)
    * [once(name, callback, context, priority)](#oncename-callback-context-priority)
  * [off()](#off)
    * [off(undefined)](#offundefined)
    * [off(eventMap, context)](#offeventmap-context)
    * [off(name, callback, context)](#offname-callback-context)
  * [listenTo()](#listento)
    * [Inherited from](#inherited-from-32)
  * [listenToOnce()](#listentoonce)
    * [listenToOnce(obj, eventMap)](#listentoonceobj-eventmap)
    * [listenToOnce(obj, name, callback, priority)](#listentoonceobj-name-callback-priority)
  * [stopListening()](#stoplistening)
    * [Inherited from](#inherited-from-35)
  * [trigger()](#trigger)
    * [Inherited from](#inherited-from-36)

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

| Property               | Type                                                                    | Description                                                                            | Overrides              | Inherited from                     |
| ---------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------- |
| `converter`            | `Converter`                                                             | The converter used to create the declaration reflections.                              | -                      | `Application.converter`            |
| `serializer`           | `Serializer`                                                            | The serializer used to generate JSON output.                                           | -                      | `Application.serializer`           |
| `deserializer`         | `Deserializer`                                                          | The deserializer used to restore previously serialized JSON output.                    | -                      | `Application.deserializer`         |
| `logger`               | `Logger`                                                                | The logger that should be used to output messages.                                     | -                      | `Application.logger`               |
| `internationalization` | `Internationalization`                                                  | Internationalization module which supports translating according to the `lang` option. | -                      | `Application.internationalization` |
| `i18n`                 | `TranslationProxy`                                                      | Proxy based shortcuts for internationalization keys.                                   | -                      | `Application.i18n`                 |
| `options`              | [`Options`](https://typedoc.org/api/classes/Configuration.Options.html) | -                                                                                      | -                      | `Application.options`              |
| `files`                | `FileRegistry`                                                          | -                                                                                      | -                      | `Application.files`                |
| `componentName`        | `string`                                                                | The name of this component as set by the `@Component` decorator.                       | -                      | `Application.componentName`        |
| `renderer`             | [`MarkdownRenderer`](MarkdownRenderer.md)                               | Re-types the `renderer` instance to [`MarkdownRenderer`](MarkdownRenderer.md).         | `Application.renderer` | -                                  |

## Accessors

### lang

#### Inherited from

`Application.lang`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:64

***

### skipErrorChecking

#### Inherited from

`Application.skipErrorChecking`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:66

***

### entryPointStrategy

#### Inherited from

`Application.entryPointStrategy`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:68

***

### entryPoints

#### Inherited from

`Application.entryPoints`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:70

***

### application

> `get` **application**(): [`Application`](https://typedoc.org/api/classes/Application.html)

Return the application / root component instance.

#### Returns

[`Application`](https://typedoc.org/api/classes/Application.html)

#### Inherited from

`Application.application`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:61

***

### owner

> `get` **owner**(): `O`

Return the owner of this component.

#### Returns

`O`

#### Inherited from

`Application.owner`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:65

***

### \_listenId

> `get` `private` **\_listenId**(): `any`

A unique id that identifies this instance.

#### Returns

`any`

#### Inherited from

`Application._listenId`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:70

## Methods

### getTypeScriptPath()

> **getTypeScriptPath**(): `string`

Return the path to the TypeScript compiler.

#### Returns

`string`

#### Inherited from

`Application.getTypeScriptPath`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:116

***

### getTypeScriptVersion()

> **getTypeScriptVersion**(): `string`

#### Returns

`string`

#### Inherited from

`Application.getTypeScriptVersion`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:117

***

### getEntryPoints()

> **getEntryPoints**(): `undefined` | `DocumentationEntryPoint`\[]

Gets the entry points to be documented according to the current `entryPoints` and `entryPointStrategy` options.
May return undefined if entry points fail to be expanded.

#### Returns

`undefined` | `DocumentationEntryPoint`\[]

#### Inherited from

`Application.getEntryPoints`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:122

***

### convert()

> **convert**(): `Promise`\<`undefined` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)>

Run the converter for the given set of files and return the generated reflections.

#### Returns

`Promise`\<`undefined` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)>

An instance of ProjectReflection on success, undefined otherwise.

#### Inherited from

`Application.convert`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:128

***

### convertAndWatch()

> **convertAndWatch**(`success`): `void`

#### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `success` | (`project`) => `Promise`\<`void`> |

#### Returns

`void`

#### Inherited from

`Application.convertAndWatch`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:129

***

### validate()

> **validate**(`project`): `void`

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

`void`

#### Inherited from

`Application.validate`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:130

***

### generateDocs()

> **generateDocs**(`project`, `out`): `Promise`\<`void`>

Render HTML for the given project

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `out`     | `string`                                                                             |

#### Returns

`Promise`\<`void`>

#### Inherited from

`Application.generateDocs`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:134

***

### generateJson()

> **generateJson**(`project`, `out`): `Promise`\<`void`>

Write the reflections to a json file.

#### Parameters

| Parameter | Type                                                                                 | Description                                |
| --------- | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) | -                                          |
| `out`     | `string`                                                                             | The path and file name of the target file. |

#### Returns

`Promise`\<`void`>

Whether the JSON file could be written successfully.

#### Inherited from

`Application.generateJson`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:141

***

### toString()

> **toString**(): `string`

Print the version number.

#### Returns

`string`

#### Inherited from

`Application.toString`

#### Defined in

node\_modules/typedoc/dist/lib/application.d.ts:145

***

### initialize()

> `protected` **initialize**(): `void`

Initialize this component.

#### Returns

`void`

#### Inherited from

`Application.initialize`

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

`Application.bubble`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:57

***

### getComponent()

> **getComponent**(`name`): `undefined` | `AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)>

Retrieve a plugin instance.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `name`    | `string` |

#### Returns

`undefined` | `AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)>

The instance of the plugin or undefined if no plugin with the given class is attached.

#### Inherited from

`Application.getComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:88

***

### getComponents()

> **getComponents**(): `AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)>\[]

#### Returns

`AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)>\[]

#### Inherited from

`Application.getComponents`

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

`Application.hasComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:90

***

### addComponent()

> **addComponent**\<`T`>(`name`, `componentClass`): `T`

#### Type Parameters

| Type Parameter                                                                                        |
| ----------------------------------------------------------------------------------------------------- |
| `T` *extends* `AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)> |

#### Parameters

| Parameter        | Type                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `name`           | `string`                                                                                         |
| `componentClass` | `T` \| `ComponentClass`\<`T`, [`Application`](https://typedoc.org/api/classes/Application.html)> |

#### Returns

`T`

#### Inherited from

`Application.addComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:91

***

### removeComponent()

> **removeComponent**(`name`): `undefined` | `AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)>

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `name`    | `string` |

#### Returns

`undefined` | `AbstractComponent`\<[`Application`](https://typedoc.org/api/classes/Application.html)>

#### Inherited from

`Application.removeComponent`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:92

***

### removeAllComponents()

> **removeAllComponents**(): `void`

#### Returns

`void`

#### Inherited from

`Application.removeAllComponents`

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

`Application.on`

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

`Application.on`

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

`Application.on`

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

`Application.once`

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

`Application.once`

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

`Application.off`

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

`Application.off`

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

`Application.off`

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

`Application.listenTo`

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

`Application.listenToOnce`

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

`Application.listenToOnce`

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

`Application.stopListening`

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

`Application.trigger`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:122
