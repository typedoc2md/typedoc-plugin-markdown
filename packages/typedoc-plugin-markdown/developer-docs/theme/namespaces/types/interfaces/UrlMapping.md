[typedoc-plugin-markdown v4.0.3](../../../../README.md) / [theme](../../../README.md) / [types](../README.md) / UrlMapping

# Interface: UrlMapping\<Model>

The model used to define the URL mapping structure.

## Table of Contents

* [Type Parameters](#type-parameters)
* [Properties](#properties)

## Type Parameters

| Type Parameter |
| -------------- |
| `Model`        |

## Properties

### url

```ts
url: string;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/types.ts:19](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/types.ts#L19)

***

### model

```ts
model: Model;
```

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/types.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/types.ts#L20)

***

### template()

```ts
template: (data) => string;
```

#### Parameters

| Parameter | Type                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------- |
| `data`    | [`MarkdownPageEvent`](../../../../app/namespaces/events/classes/MarkdownPageEvent.md)\<`Model`> |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/theme/types.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/theme/types.ts#L21)
