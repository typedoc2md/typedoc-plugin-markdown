[Home](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / UrlMapping

# Interface: UrlMapping\<Model>

The model used to define the URL mapping structure.

## Contents

* [Type Parameters](#type-parameters)
* [Properties](#properties)
  * [url](#url)
  * [model](#model)
  * [template()](#template)

## Type Parameters

| Type Parameter |
| -------------- |
| `Model`        |

## Properties

### url

> **url**: `string`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/theme.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L19)

***

### model

> **model**: `Model`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/theme.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L20)

***

### template()

> **template**: (`data`) => `string`

#### Parameters

| Parameter | Type                                                                       |
| --------- | -------------------------------------------------------------------------- |
| `data`    | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<`Model`> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/types/theme.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L21)
