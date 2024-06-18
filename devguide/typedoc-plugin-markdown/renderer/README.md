[Home](../../README.md) / [typedoc-plugin-markdown](../README.md) / renderer

# renderer

Includes functionality and override methods on the TypeDoc Renderer.

## Contents

* [generateDocs()](#generatedocs)
* [render()](#render)
* [resolvePackages()](#resolvepackages)

## generateDocs()

> **generateDocs**(`project`, `out`): `Promise`\<`void`>

Replacement of TypeDoc's Application.generateDocs method to decouple HTML logic.

### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `out`     | `string`                                                                             |

### Returns

`Promise`\<`void`>

### Defined in

[renderer/overrides.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/renderer/overrides.ts#L16)

***

## render()

> **render**(`project`, `outputDirectory`): `Promise`\<`void`>

Replacement of TypeDoc's Renderer.render method to decouple HTML logic.

This is essentially a copy of the base method with a few tweaks.

* Removes unnecessary async calls to load highlighters only required for html theme.
* Removes hooks logic that are jsx specific.
* Adds any logic specific to markdown rendering.

### Parameters

| Parameter         | Type                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------ |
| `project`         | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `outputDirectory` | `string`                                                                             |

### Returns

`Promise`\<`void`>

### Defined in

[renderer/overrides.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/renderer/overrides.ts#L38)

***

## resolvePackages()

> **resolvePackages**(`app`, `context`, `packageDir`): `void`

Currently options set for packages are only stored on the converter and are destroyed before being passed to the Renderer.

By intercepting the package options set in the converter and storing them on the renderer we can use them later in the theme.

### Parameters

| Parameter    | Type                                                              |
| ------------ | ----------------------------------------------------------------- |
| `app`        | [`Application`](https://typedoc.org/api/classes/Application.html) |
| `context`    | `Context`                                                         |
| `packageDir` | `string`                                                          |

### Returns

`void`

### Defined in

[renderer/packages.ts:11](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/7934b23566f374f44fe6de5fd9240ab185bf799f/packages/typedoc-plugin-markdown/src/renderer/packages.ts#L11)
