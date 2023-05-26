[**typedoc-plugin-markdown - v4.0.0-next.13**](README.md)

---

[typedoc-plugin-markdown](README.md) > support/utils

# support/utils

A set of pure utils to be consumed accross the plugin.

## escapeChars()

```ts
escapeChars(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`

---

## escapeAngleBrackets()

```ts
escapeAngleBrackets(str): string
```

Escapes non html tag angle brackets inside comment blocks.
Ignores strings inside code blocks

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`

---

## escapeTableCol()

```ts
escapeTableCol(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`

---

## unEscapeChars()

```ts
unEscapeChars(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`

---

## stripComments()

```ts
stripComments(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`

---

## tableComments()

```ts
tableComments(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`

---

## stripLineBreaks()

```ts
stripLineBreaks(str, includeHTML = true): string
```

### Parameters

| Parameter     | Type      | Default value |
| :------------ | :-------- | :------------ |
| `str`         | `string`  | `undefined`   |
| `includeHTML` | `boolean` | `true`        |

### Returns

`string`

---

## camelToTitleCase()

```ts
camelToTitleCase(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `text`    | `string` |

### Returns

`string`

---

## slugify()

```ts
slugify(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `str`     | `string` |

### Returns

`string`
