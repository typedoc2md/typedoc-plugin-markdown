[Developer Guide](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [libs](../../README.md) / markdown

# markdown

Helpers for generating markdown.

## Functions

### backTicks()

> **backTicks**(`text`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/back-ticks.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/back-ticks.ts#L6)

Wraps a string in backticks.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### blockQuoteBlock()

> **blockQuoteBlock**(`content`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/block-quote-block.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/block-quote-block.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`string`

***

### bold()

> **bold**(`text`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/bold.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/bold.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### codeBlock()

> **codeBlock**(`content`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/code-block.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/code-block.ts#L3)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`string`

***

### heading()

> **heading**(`level`, `text`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/heading.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/heading.ts#L6)

Returns a heading in markdown format

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `level` | `number` | The level of the heading |
| `text` | `string` | The text of the heading |

#### Returns

`string`

***

### horizontalRule()

> **horizontalRule**(): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/horizontal-rule.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/horizontal-rule.ts#L1)

#### Returns

`string`

***

### htmlTable()

> **htmlTable**(`headers`, `rows`, `leftAlignHeadings`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/html-table.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/html-table.ts#L1)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `headers` | `string`[] | `undefined` |
| `rows` | `string`[][] | `undefined` |
| `leftAlignHeadings` | `boolean` | `false` |

#### Returns

`string`

***

### indentBlock()

> **indentBlock**(`content`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/indent-block.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/indent-block.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`string`

***

### italic()

> **italic**(`text`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/italic.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/italic.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### link()

> **link**(`label`, `url`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/link.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/link.ts#L6)

The link element

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label` | `string` | The text to display for the link |
| `url` | `null` \| `string` | The url to link to |

#### Returns

`string`

***

### strikeThrough()

> **strikeThrough**(`content`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/strike-through.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/strike-through.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` |

#### Returns

`string`

***

### table()

> **table**(`headers`, `rows`, `headerLeftAlign`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/table.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/table.ts#L7)

Comments for table

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `headers` | `string`[] | `undefined` |
| `rows` | `string`[][] | `undefined` |
| `headerLeftAlign` | `boolean` | `false` |

#### Returns

`string`

***

### unorderedList()

> **unorderedList**(`items`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/markdown/unordered-list.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/markdown/unordered-list.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `string`[] |

#### Returns

`string`
