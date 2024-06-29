[Home](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [libs](../../README.md) / utils

# utils

General utility pure functions.

## Contents

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

> **camelToTitleCase**(`text`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/camel-to-title-case.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/camel-to-title-case.ts#L1)

***

## escapeChars()

> **escapeChars**(`str`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/escape-chars.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/escape-chars.ts#L1)

***

## formatMarkdown()

> **formatMarkdown**(`str`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/format-markdown.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/format-markdown.ts#L1)

***

## formatTableCell()

> **formatTableCell**(`str`): `string`

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

[packages/typedoc-plugin-markdown/src/libs/utils/format-table-cell.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/format-table-cell.ts#L6)

***

## getFileNameWithExtension()

> **getFileNameWithExtension**(`fileName`, `fileExtension`): `string`

Returns a filename with extension while normalizing both the input name and input extension.

### Parameters

| Parameter       | Type     |
| --------------- | -------- |
| `fileName`      | `string` |
| `fileExtension` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/get-file-name-with-extension.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/get-file-name-with-extension.ts#L6)

***

## isQuoted()

> **isQuoted**(`str`): `boolean`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`boolean`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/is-quoted.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/is-quoted.ts#L1)

***

## normalizeLineBreaks()

> **normalizeLineBreaks**(`str`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/normalize-line-breaks.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/normalize-line-breaks.ts#L1)

***

## removeFirstScopedDirectory()

> **removeFirstScopedDirectory**(`urlString`): `string`

### Parameters

| Parameter   | Type     |
| ----------- | -------- |
| `urlString` | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/remove-first-scoped-directory.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/remove-first-scoped-directory.ts#L3)

***

## removeLineBreaks()

> **removeLineBreaks**(`str`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/remove-line-breaks.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/remove-line-breaks.ts#L1)

***

## sanitizeComments()

> **sanitizeComments**(`str`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/sanitize-comments.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/sanitize-comments.ts#L1)

***

## slugify()

> **slugify**(`url`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `url`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/slugify.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/slugify.ts#L1)

***

## toPascalCase()

> **toPascalCase**(`text`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `text`    | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/to-pascal-case.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/to-pascal-case.ts#L1)

***

## unEscapeChars()

> **unEscapeChars**(`str`): `string`

### Parameters

| Parameter | Type     |
| --------- | -------- |
| `str`     | `string` |

### Returns

`string`

### Defined in

[packages/typedoc-plugin-markdown/src/libs/utils/un-escape-chars.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/un-escape-chars.ts#L1)
