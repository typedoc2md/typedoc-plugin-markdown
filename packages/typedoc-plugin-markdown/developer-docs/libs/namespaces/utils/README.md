[typedoc-plugin-markdown v4.0.3](../../../README.md) / [libs](../../README.md) / utils

# Namespace: utils

General utility pure functions.

## Table of Contents

* [camelToTitleCase()](#cameltotitlecase)
* [escapeChars()](#escapechars)
* [formatMarkdown()](#formatmarkdown)
* [formatTableCell()](#formattablecell)
* [getFileNameWithExtension()](#getfilenamewithextension)
* [isQuoted()](#isquoted)
* [normalizeLineBreaks()](#normalizelinebreaks)
* [removeFirstScopedDirectory()](#removefirstscopeddirectory)
* [removeLineBreaks()](#removelinebreaks)
* [sanitizeComments()](#sanitizecomments)
* [slugify()](#slugify)
* [toPascalCase()](#topascalcase)
* [unEscapeChars()](#unescapechars)

## camelToTitleCase()

```ts
function camelToTitleCase(text): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/camel-to-title-case.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/camel-to-title-case.ts#L1)

***

## escapeChars()

```ts
function escapeChars(str): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/escape-chars.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/escape-chars.ts#L1)

***

## formatMarkdown()

```ts
function formatMarkdown(str): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/format-markdown.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/format-markdown.ts#L1)

***

## formatTableCell()

```ts
function formatTableCell(str): string
```

* Replace new lines with spaces
* Replaces code blocks with single backticks
* Replaces multiple spaces with single spaces

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/format-table-cell.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/format-table-cell.ts#L6)

***

## getFileNameWithExtension()

```ts
function getFileNameWithExtension(fileName, fileExtension): string
```

Returns a filename with extension while normalizing both the input name and input extension.

### Parameters

| Parameter       | Type     |
| --------------- | -------- |
| `fileName`      | `string` |
| `fileExtension` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/get-file-name-with-extension.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/get-file-name-with-extension.ts#L6)

***

## isQuoted()

```ts
function isQuoted(str): boolean
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`boolean`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/is-quoted.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/is-quoted.ts#L1)

***

## normalizeLineBreaks()

```ts
function normalizeLineBreaks(str): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/normalize-line-breaks.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/normalize-line-breaks.ts#L1)

***

## removeFirstScopedDirectory()

```ts
function removeFirstScopedDirectory(urlString): string
```

### Parameters

| Parameter   | Type     |
| ----------- | -------- |
| `urlString` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/remove-first-scoped-directory.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/remove-first-scoped-directory.ts#L3)

***

## removeLineBreaks()

```ts
function removeLineBreaks(str): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/remove-line-breaks.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/remove-line-breaks.ts#L1)

***

## sanitizeComments()

```ts
function sanitizeComments(str): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/sanitize-comments.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/sanitize-comments.ts#L1)

***

## slugify()

```ts
function slugify(url): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `url`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/slugify.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/slugify.ts#L1)

***

## toPascalCase()

```ts
function toPascalCase(text): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/to-pascal-case.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/to-pascal-case.ts#L1)

***

## unEscapeChars()

```ts
function unEscapeChars(str): string
```

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/un-escape-chars.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/a350891d3362a78bb12907d480645f9c5cefd0d6/packages/typedoc-plugin-markdown/src/libs/utils/un-escape-chars.ts#L1)
