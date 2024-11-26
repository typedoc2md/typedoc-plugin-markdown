# typedoc-stubs

## Classes

### ClassWithChars&lt;T&gt;

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

#### Constructors

##### new ClassWithChars()

```ts
new ClassWithChars<T>(): ClassWithChars<T>
```

###### Returns

[`ClassWithChars`](README.md#classwithcharst)&lt;`T`&gt;

#### Properties

##### prop

```ts
prop: T;
```

## Interfaces

### InterfaceWithChars&lt;T&gt;

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

#### Properties

##### &lt;

```ts
<: string;
```

##### &lt;tag&gt;

```ts
<tag>: string;
```

##### &gt;

```ts
>: string;
```

##### prop

```ts
prop: T;
```

## Variables

### variableWithChars

```ts
const variableWithChars: {
  <x>: string;
  <y>: string;
  <z>: string;
};
```

#### Type declaration

##### &lt;x&gt;

```ts
<x>: string = '>';
```

##### &lt;y&gt;

```ts
<y>: string = '<';
```

##### &lt;z&gt;

```ts
<z>: string = '<tag>';
```

## Functions

### some_prettier_function()

```ts
function some_prettier_function(param): string;
```

```ts
reallyUgly(javascript);
```

```ts
const originalSingleQuote = "hello";
const originalDoubleQuote = "hello";
```

```css
.h1 {
  color: red;
}
```

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `param`   | `string` |

#### Returns

`string`
