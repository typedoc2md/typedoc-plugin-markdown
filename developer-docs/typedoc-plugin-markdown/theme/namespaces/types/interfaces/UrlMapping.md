[Packages Index](../../../../../README.md) / [typedoc-plugin-markdown](../../../../README.md) / [theme](../../../README.md) / [types](../README.md) / UrlMapping

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

[packages/typedoc-plugin-markdown/src/theme/types.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/types.ts#L19)

***

### model

> **model**: `Model`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/types.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/types.ts#L20)

***

### template()

> **template**: (`data`) => `string`

#### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `data`    | [`MarkdownPageEvent`](../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`Model`> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/types.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/theme/types.ts#L21)
