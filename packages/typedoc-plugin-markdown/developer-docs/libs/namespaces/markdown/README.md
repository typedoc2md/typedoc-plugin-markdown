[typedoc-plugin-markdown v4.0.3](../../../README.md) / [libs](../../README.md) / markdown

# Namespace: markdown

Helpers to render markdown elements.

## Table of Contents

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

## backTicks()

```ts
function backTicks(text): string
```

Wraps a string in backticks.
If the input string itself contains a backtick, pipe, or backslash (which can result in unwanted side effects) the string is escaped instead.

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/back-ticks.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/back-ticks.ts#L7)

***

## blockQuoteBlock()

```ts
function blockQuoteBlock(content): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/block-quote-block.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/block-quote-block.ts#L1)

***

## bold()

```ts
function bold(text): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/bold.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/bold.ts#L1)

***

## codeBlock()

```ts
function codeBlock(content): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/code-block.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/code-block.ts#L3)

***

## heading()

```ts
function heading(level, text): string
```

Returns a heading in markdown format

### Parameters

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| `level`   | `number` | The level of the heading |
| `text`    | `string` | The text of the heading  |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/heading.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/heading.ts#L6)

***

## horizontalRule()

```ts
function horizontalRule(): string
```

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/horizontal-rule.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/horizontal-rule.ts#L1)

***

## htmlTable()

```ts
function htmlTable(
   headers, 
   rows, 
   leftAlignHeadings): string
```

### Parameters

| Parameter           | Type           | Default value |
| ------------------- | -------------- | ------------- |
| `headers`           | `string`\[]    | `undefined`   |
| `rows`              | `string`\[]\[] | `undefined`   |
| `leftAlignHeadings` | `boolean`      | `false`       |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/html-table.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/html-table.ts#L1)

***

## indentBlock()

```ts
function indentBlock(content): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/indent-block.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/indent-block.ts#L1)

***

## italic()

```ts
function italic(text): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/italic.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/italic.ts#L1)

***

## link()

```ts
function link(label, url): string
```

The link element

### Parameters

| Parameter | Type               | Description                      |
| --------- | ------------------ | -------------------------------- |
| `label`   | `string`           | The text to display for the link |
| `url`     | `null` \| `string` | The url to link to               |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/link.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/link.ts#L6)

***

## strikeThrough()

```ts
function strikeThrough(content): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `content` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/strike-through.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/strike-through.ts#L1)

***

## table()

```ts
function table(
   headers, 
   rows, 
   headerLeftAlign): string
```

Comments for table

### Parameters

| Parameter         | Type           | Default value | Description |
| ----------------- | -------------- | ------------- | ----------- |
| `headers`         | `string`\[]    | `undefined`   |             |
| `rows`            | `string`\[]\[] | `undefined`   |             |
| `headerLeftAlign` | `boolean`      | `false`       | -           |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/table.ts:7](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/table.ts#L7)

***

## unorderedList()

```ts
function unorderedList(items): string
```

### Parameters

| Parameter | Type        |
| --------- | ----------- |
| `items`   | `string`\[] |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/markdown/unordered-list.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/markdown/unordered-list.ts#L1)
