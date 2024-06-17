[Packages Index](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [app](../../README.md) / renderer

# renderer

Contains override methods to decouple HTML logic from the TypeDoc's Renderer}

## Contents

* [generateDocs()](#generatedocs)
* [render()](#render)
* [resolvePackages()](#resolvepackages)

## generateDocs()

> **generateDocs**(`project`, `out`): `Promise`\<`void`>

Replacement of TypeDoc's [Application.generateDocs](../types/interfaces/MarkdownApplication.md#generatedocs) method to decouple HTML logic.

### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `project` | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `out`     | `string`                                                                             |

### Returns

`Promise`\<`void`>

### Defined in

[packages/typedoc-plugin-markdown/src/app/renderer.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/app/renderer.ts#L26)

***

## render()

> **render**(`project`, `outputDirectory`): `Promise`\<`void`>

Replacement of TypeDoc's [Renderer.render](../types/interfaces/MarkdownRenderer.md#render) method to decouple HTML logic.

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

[packages/typedoc-plugin-markdown/src/app/renderer.ts:48](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/app/renderer.ts#L48)

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

[packages/typedoc-plugin-markdown/src/app/renderer.ts:145](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/3222766cbd19cef92f31d344e58bbe5b67a3a528/packages/typedoc-plugin-markdown/src/app/renderer.ts#L145)
