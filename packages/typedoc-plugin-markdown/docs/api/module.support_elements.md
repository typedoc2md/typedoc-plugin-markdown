[**typedoc-plugin-markdown - v4.0.0-next.13**](README.md)

---

[typedoc-plugin-markdown](README.md) > support/elements

# support/elements

A set of pure functions that returns markdown elements as strings.

## heading()

```ts
heading(level, text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `level`   | `number` |
| `text`    | `string` |

### Returns

`string`

---

## link()

```ts
link(label, url): string
```

### Parameters

| Parameter | Type               |
| :-------- | :----------------- |
| `label`   | `string`           |
| `url`     | `null` \| `string` |

### Returns

`string`

---

## bold()

```ts
bold(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `text`    | `string` |

### Returns

`string`

---

## italic()

```ts
italic(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `text`    | `string` |

### Returns

`string`

---

## backTicks()

```ts
backTicks(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `text`    | `string` |

### Returns

`string`

---

## unorderedList()

```ts
unorderedList<T>(items): string
```

### Type parameters

| Parameter |
| :-------- |
| `T`       |

### Parameters

| Parameter | Type  |
| :-------- | :---- |
| `items`   | `T`[] |

### Returns

`string`

---

## horizontalRule()

```ts
horizontalRule(): string
```

### Returns

`string`

---

## codeBlock()

```ts
codeBlock(content): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `content` | `string` |

### Returns

`string`

---

## table()

```ts
table(headers, rows): string
```

### Parameters

| Parameter | Type         |
| :-------- | :----------- |
| `headers` | `string`[]   |
| `rows`    | `string`[][] |

### Returns

`string`

---

## blockQuoteBlock()

```ts
blockQuoteBlock(content): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `content` | `string` |

### Returns

`string`

---

## indentBlock()

```ts
indentBlock(content): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `content` | `string` |

### Returns

`string`
