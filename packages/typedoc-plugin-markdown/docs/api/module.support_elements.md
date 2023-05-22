[typedoc-plugin-markdown](README.md) > support/elements

# support/elements

A set of pure functions that returns markdown elements as strings.

## Function: heading()

```ts
heading(level, text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| level     | `number` |
| text      | `string` |

### Returns

`string`

---

## Function: link()

```ts
link(label, url): string
```

### Parameters

| Parameter | Type               |
| :-------- | :----------------- |
| label     | `string`           |
| url       | `null` \| `string` |

### Returns

`string`

---

## Function: bold()

```ts
bold(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| text      | `string` |

### Returns

`string`

---

## Function: italic()

```ts
italic(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| text      | `string` |

### Returns

`string`

---

## Function: backTicks()

```ts
backTicks(text): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| text      | `string` |

### Returns

`string`

---

## Function: unorderedList()

```ts
unorderedList<T>(items): string
```

### Type parameters

| Parameter |
| :-------- |
| T         |

### Parameters

| Parameter | Type  |
| :-------- | :---- |
| items     | `T`[] |

### Returns

`string`

---

## Function: horizontalRule()

```ts
horizontalRule(): string
```

### Returns

`string`

---

## Function: codeBlock()

```ts
codeBlock(content): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| content   | `string` |

### Returns

`string`

---

## Function: table()

```ts
table(headers, rows): string
```

### Parameters

| Parameter | Type         |
| :-------- | :----------- |
| headers   | `string`[]   |
| rows      | `string`[][] |

### Returns

`string`

---

## Function: blockQuoteBlock()

```ts
blockQuoteBlock(content): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| content   | `string` |

### Returns

`string`

---

## Function: indentBlock()

```ts
indentBlock(content): string
```

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| content   | `string` |

### Returns

`string`
