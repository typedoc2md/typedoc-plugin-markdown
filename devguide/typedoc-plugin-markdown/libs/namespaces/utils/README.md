[Developer Guide](../../../../README.md) / [typedoc-plugin-markdown](../../../README.md) / [libs](../../README.md) / utils

# utils

General utility pure functions.

## Functions

### camelToTitleCase()

> **camelToTitleCase**(`text`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/camel-to-title-case.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/camel-to-title-case.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### encodeAngleBrackets()

> **encodeAngleBrackets**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/encode-angle-brackets.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/encode-angle-brackets.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`

***

### escapeChars()

> **escapeChars**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/escape-chars.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/escape-chars.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`

***

### formatMarkdown()

> **formatMarkdown**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/format-markdown.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/format-markdown.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`

***

### formatTableCell()

> **formatTableCell**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/format-table-cell.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/format-table-cell.ts#L6)

- Replace new lines with spaces
- Replaces code blocks with single backticks
- Replaces multiple spaces with single spaces

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`

***

### getFileNameWithExtension()

> **getFileNameWithExtension**(`fileName`, `fileExtension`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/get-file-name-with-extension.ts:6](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/get-file-name-with-extension.ts#L6)

Returns a filename with extension while normalizing both the input name and input extension.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |
| `fileExtension` | `string` |

#### Returns

`string`

***

### isQuoted()

> **isQuoted**(`str`): `boolean`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/is-quoted.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/is-quoted.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`boolean`

***

### removeFirstScopedDirectory()

> **removeFirstScopedDirectory**(`urlString`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/remove-first-scoped-directory.ts:3](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/remove-first-scoped-directory.ts#L3)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `urlString` | `string` |

#### Returns

`string`

***

### removeLineBreaks()

> **removeLineBreaks**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/remove-line-breaks.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/remove-line-breaks.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`

***

### sanitizeComments()

> **sanitizeComments**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/sanitize-comments.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/sanitize-comments.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`

***

### slugify()

> **slugify**(`url`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/slugify.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/slugify.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |

#### Returns

`string`

***

### toPascalCase()

> **toPascalCase**(`text`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/to-pascal-case.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/to-pascal-case.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### unEscapeChars()

> **unEscapeChars**(`str`): `string`

Defined in: [packages/typedoc-plugin-markdown/src/libs/utils/un-escape-chars.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown/blob/main/packages/typedoc-plugin-markdown/src/libs/utils/un-escape-chars.ts#L1)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`string`
