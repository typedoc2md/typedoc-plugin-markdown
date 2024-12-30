[Developer Guide](../../../README.md) / [typedoc-plugin-markdown](../../README.md) / [types](../README.md) / UrlMapping

# Interface: UrlMapping\<Model\>

Defined in: [packages/typedoc-plugin-markdown/src/types/theme.ts:18](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L18)

The model used to define the URL mapping structure.

## Type Parameters

| Type Parameter |
| ------ |
| `Model` |

## Properties

### url

> **url**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/theme.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L19)

***

### model

> **model**: [`Model`](../../../interfaces/typedoc-plugin-markdown.types.UrlMapping.html#model)

Defined in: [packages/typedoc-plugin-markdown/src/types/theme.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L20)

***

### group?

> `optional` **group**: `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/theme.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L21)

***

### template()

> **template**: (`data`) => `string`

Defined in: [packages/typedoc-plugin-markdown/src/types/theme.ts:22](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/types/theme.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`MarkdownPageEvent`](../../events/classes/MarkdownPageEvent.md)\<[`Model`](../../../interfaces/typedoc-plugin-markdown.types.UrlMapping.html#model)\> |

#### Returns

`string`
