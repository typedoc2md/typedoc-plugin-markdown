[Packages Index](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [theme](../README.md) / MarkdownTheme

# Class: MarkdownTheme

The main theme class for the plugin.
The class controls how TypeDoc models are mapped to files and templates and extends TypeDoc's base Theme class.

You would typically only be interested in overriding the the theme's render context instance.

The API follows the implementation of [TypeDoc's custom theming](https://github.com/TypeStrong/typedoc/blob/master/internal-docs/custom-themes.md) with some minor adjustments.

## Contents

* [Extends](#extends)
* [Constructors](#constructors)
  * [new MarkdownTheme()](#new-markdowntheme)
    * [Inherited from](#inherited-from)
* [Properties](#properties)
  * [componentName](#componentname)
    * [Inherited from](#inherited-from-1)
* [Accessors](#accessors)
  * [application](#application)
    * [Inherited from](#inherited-from-2)
  * [owner](#owner)
    * [Inherited from](#inherited-from-3)
  * [\_listenId](#_listenid)
    * [Inherited from](#inherited-from-4)
* [Methods](#methods)
  * [initialize()](#initialize)
    * [Inherited from](#inherited-from-5)
  * [bubble()](#bubble)
    * [Inherited from](#inherited-from-6)
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
    * [Inherited from](#inherited-from-15)
  * [listenToOnce()](#listentoonce)
    * [listenToOnce(obj, eventMap)](#listentoonceobj-eventmap)
    * [listenToOnce(obj, name, callback, priority)](#listentoonceobj-name-callback-priority)
  * [stopListening()](#stoplistening)
    * [Inherited from](#inherited-from-18)
  * [trigger()](#trigger)
    * [Inherited from](#inherited-from-19)
  * [render()](#render)
    * [Overrides](#overrides)
  * [getRenderContext()](#getrendercontext)
  * [getUrls()](#geturls)
    * [Overrides](#overrides-1)
  * [getNavigation()](#getnavigation)
  * [getTemplateMapping()](#gettemplatemapping)
  * [documentTemplate()](#documenttemplate)
  * [readmeTemplate()](#readmetemplate)
  * [projectTemplate()](#projecttemplate)
  * [reflectionTemplate()](#reflectiontemplate)

## Example

```ts
export function load(app) {
  app.renderer.defineTheme('customTheme', MyMarkdownTheme);
}

class MyMarkdownTheme extends MarkdownTheme {
 ...
}
```

## Extends

* [`Theme`](https://typedoc.org/api/classes/Theme.html)

## Constructors

### new MarkdownTheme()

> **new MarkdownTheme**(`owner`): [`MarkdownTheme`](MarkdownTheme.md)

Create new Component instance.

#### Parameters

| Parameter | Type                                                        |
| --------- | ----------------------------------------------------------- |
| `owner`   | [`Renderer`](https://typedoc.org/api/classes/Renderer.html) |

#### Returns

[`MarkdownTheme`](MarkdownTheme.md)

#### Inherited from

`Theme.constructor`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:52

## Properties

### componentName

> **componentName**: `string`

The name of this component as set by the `@Component` decorator.

#### Inherited from

`Theme.componentName`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:48

## Accessors

### application

> `get` **application**(): [`Application`](https://typedoc.org/api/classes/Application.html)

Return the application / root component instance.

#### Returns

[`Application`](https://typedoc.org/api/classes/Application.html)

#### Inherited from

`Theme.application`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:61

***

### owner

> `get` **owner**(): `O`

Return the owner of this component.

#### Returns

`O`

#### Inherited from

`Theme.owner`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:65

***

### \_listenId

> `get` `private` **\_listenId**(): `any`

A unique id that identifies this instance.

#### Returns

`any`

#### Inherited from

`Theme._listenId`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:70

## Methods

### initialize()

> `protected` **initialize**(): `void`

Initialize this component.

#### Returns

`void`

#### Inherited from

`Theme.initialize`

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

`Theme.bubble`

#### Defined in

node\_modules/typedoc/dist/lib/utils/component.d.ts:57

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

`Theme.on`

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

`Theme.on`

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

`Theme.on`

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

`Theme.once`

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

`Theme.once`

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

`Theme.off`

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

`Theme.off`

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

`Theme.off`

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

`Theme.listenTo`

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

`Theme.listenToOnce`

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

`Theme.listenToOnce`

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

`Theme.stopListening`

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

`Theme.trigger`

#### Defined in

node\_modules/typedoc/dist/lib/utils/events.d.ts:122

***

### render()

> **render**(`page`, `template`): `string`

`Internal`

Renders a template and page model to a string.

#### Parameters

| Parameter  | Type                                                                                                                                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`     | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>                                                                          |
| `template` | [`RenderTemplate`](../namespaces/types/type-aliases/RenderTemplate.md)\<[`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>> |

#### Returns

`string`

#### Overrides

`Theme.render`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:43](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L43)

***

### getRenderContext()

> **getRenderContext**(`page`): [`MarkdownThemeContext`](MarkdownThemeContext.md)

Creates a new instance of the current theme context.

This method can be overridden to provide an alternative theme context.

#### Parameters

| Parameter | Type                                                                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)> |

#### Returns

[`MarkdownThemeContext`](MarkdownThemeContext.md)

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:60](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L60)

***

### getUrls()

> **getUrls**(`project`): [`UrlMapping`](../namespaces/types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

Maps the models of the given project to the desired output files.

This method can be overriden to provide an alternative url structure.

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`UrlMapping`](../namespaces/types/interfaces/UrlMapping.md)\<[`Reflection`](https://typedoc.org/api/classes/Models.Reflection.html)>\[]

#### Overrides

`Theme.getUrls`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:69](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L69)

***

### getNavigation()

> **getNavigation**(`project`): [`NavigationItem`](../namespaces/types/interfaces/NavigationItem.md)\[]

Map the models of the given project to a navigation structure.

This method can be overriden to provide an alternative navigation structure.

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |

#### Returns

[`NavigationItem`](../namespaces/types/interfaces/NavigationItem.md)\[]

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:78](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L78)

***

### getTemplateMapping()

> **getTemplateMapping**(`kind`, `outputFileStrategy`?): `any`

`Internal`

#### Parameters

| Parameter             | Type                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------- |
| `kind`                | [`ReflectionKind`](https://typedoc.org/api/enums/Models.ReflectionKind-1.html)           |
| `outputFileStrategy`? | [`OutputFileStrategy`](../../options/namespaces/maps/enumerations/OutputFileStrategy.md) |

#### Returns

`any`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:85](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L85)

***

### documentTemplate()

> **documentTemplate**(`page`): `string`

`Internal`

#### Parameters

| Parameter | Type                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`DocumentReflection`> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:209](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L209)

***

### readmeTemplate()

> **readmeTemplate**(`page`): `string`

`Internal`

#### Parameters

| Parameter | Type                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:216](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L216)

***

### projectTemplate()

> **projectTemplate**(`page`): `string`

`Internal`

#### Parameters

| Parameter | Type                                                                                                                                                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html)> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:223](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L223)

***

### reflectionTemplate()

> **reflectionTemplate**(`page`): `string`

`Internal`

#### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `page`    | [`MarkdownPageEvent`](../../app/namespaces/events/classes/MarkdownPageEvent.md)\<[`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts:230](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/theme/markdown-theme.ts#L230)
