[typedoc-plugin-markdown](README.md) > support/utils

# support/utils

A set of pure utils to be consumed accross the plugin.

## Function: escapeChars()

```ts
escapeChars(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`

---

## Function: escapeAngleBrackets()

```ts
escapeAngleBrackets(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`

---

## Function: escapeTableCol()

```ts
escapeTableCol(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`

---

## Function: unEscapeChars()

```ts
unEscapeChars(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`

---

## Function: stripComments()

```ts
stripComments(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`

---

## Function: tableComments()

```ts
tableComments(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`

---

## Function: stripLineBreaks()

```ts
stripLineBreaks(str, includeHTML = true): string
```

### Parameters

| Parameter   | Type      | Default value |
| :---------- | :-------- | :------------ |
| str         | `string`  | undefined     |
| includeHTML | `boolean` | true          |

### Returns

`string`

---

## Function: camelToTitleCase()

```ts
camelToTitleCase(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| text      | `string` |

### Returns

`string`

---

## Function: slugify()

```ts
slugify(str): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| str       | `string` |

### Returns

`string`
