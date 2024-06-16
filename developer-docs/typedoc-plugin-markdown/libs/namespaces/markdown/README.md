[Packages Index](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [libs](../../README.md) / markdown

# markdown

Helpers to render markdown elements.

## Contents

* [Functions](#functions)
  * [backTicks()](#backticks)
  * [blockQuoteBlock()](#blockquoteblock)
  * [bold()](#bold)
  * [codeBlock()](#codeblock)
  * [heading()](#heading)
  * [horizontalRule()](#horizontalrule)
  * [htmlTable()](#htmltable)
  * [indentBlock()](#indentblock)
  * [italic()](#italic)
  * [link()](#link)
  * [strikeThrough()](#strikethrough)
  * [table()](#table)
  * [unorderedList()](#unorderedlist)

## Functions

### backTicks()

> **backTicks**(`text`): `string`

Wraps a string in backticks.
If the input string itself contains a backtick, pipe, or backslash (which can result in unwanted side effects) the string is escaped instead.

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/back-ticks.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/back-ticks.ts#L7)

***

### blockQuoteBlock()

> **blockQuoteBlock**(`content`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/block-quote-block.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/block-quote-block.ts#L1)

***

### bold()

> **bold**(`text`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/bold.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/bold.ts#L1)

***

### codeBlock()

> **codeBlock**(`content`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/code-block.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/code-block.ts#L3)

***

### heading()

> **heading**(`level`, `text`): `string`

Returns a heading in markdown format

#### Parameters

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| `level`   | `number` | The level of the heading |
| `text`    | `string` | The text of the heading  |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/heading.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/heading.ts#L6)

***

### horizontalRule()

> **horizontalRule**(): `string`

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/horizontal-rule.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/horizontal-rule.ts#L1)

***

### htmlTable()

> **htmlTable**(`headers`, `rows`, `leftAlignHeadings`): `string`

#### Parameters

| Parameter           | Type           | Default value |
| ------------------- | -------------- | ------------- |
| `headers`           | `string`\[]    | `undefined`   |
| `rows`              | `string`\[]\[] | `undefined`   |
| `leftAlignHeadings` | `boolean`      | `false`       |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/html-table.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/html-table.ts#L1)

***

### indentBlock()

> **indentBlock**(`content`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/indent-block.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/indent-block.ts#L1)

***

### italic()

> **italic**(`text`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/italic.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/italic.ts#L1)

***

### link()

> **link**(`label`, `url`): `string`

The link element

#### Parameters

| Parameter | Type               | Description                      |
| --------- | ------------------ | -------------------------------- |
| `label`   | `string`           | The text to display for the link |
| `url`     | `null` \| `string` | The url to link to               |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/link.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/link.ts#L6)

***

### strikeThrough()

> **strikeThrough**(`content`): `string`

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/strike-through.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/strike-through.ts#L1)

***

### table()

> **table**(`headers`, `rows`, `headerLeftAlign`): `string`

Comments for table

#### Parameters

| Parameter         | Type           | Default value |
| ----------------- | -------------- | ------------- |
| `headers`         | `string`\[]    | `undefined`   |
| `rows`            | `string`\[]\[] | `undefined`   |
| `headerLeftAlign` | `boolean`      | `false`       |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/table.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/table.ts#L7)

***

### unorderedList()

> **unorderedList**(`items`): `string`

#### Parameters

| Parameter | Type        |
| --------- | ----------- |
| `items`   | `string`\[] |

#### Returns

`string`

#### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/unordered-list.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/ca82c8abd3682b5495f6a7750ba0ce30ff4e4f1e/packages/typedoc-plugin-markdown/src/libs/markdown/unordered-list.ts#L1)
