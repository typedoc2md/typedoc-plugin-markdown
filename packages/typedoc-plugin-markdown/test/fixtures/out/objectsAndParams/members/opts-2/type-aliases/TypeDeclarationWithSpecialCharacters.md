# Type Alias: \_\_TypeDeclarationWithSpecialCharacters\_\<T, U\>

```ts
type __TypeDeclarationWithSpecialCharacters_<T, U>: {
  _: "_";
  _foo_: "_foo_";
  _prop_with_underscore_: "_prop_with_underscore_";
  _x: (_param: T) => U;
  ?: T | U;
  {prop-with-brackets}: "{prop-with-brackets}";
  *: "*";
  **foo**: "**foo**";
  *foo*: "*foo*";
  \: "\";
  \a: "\a";
  \n: "\n";
  `: "`";
  `prop`with`backticks`: "`prop`with`backticks`";
  <: "<";
  <foo>: "<foo>";
  >: ">";
  |: "|";
  |prop|with|pipes|: "|prop|with|pipes|";
  ~: "~";
};
```

Comments for object with special characters

## Type Parameters

| Type Parameter |
| :------ |
| `T` |
| `U` |

## Type declaration

### \_

```ts
_: "_";
```

### \_foo\_

```ts
_foo_: "_foo_";
```

### \_prop\_with\_underscore\_

```ts
_prop_with_underscore_: "_prop_with_underscore_";
```

### \_x()

```ts
(_param: T) => U
```

### ?

```ts
?: T | U;
```

### \{prop-with-brackets\}

```ts
{prop-with-brackets}: "{prop-with-brackets}";
```

### \*

```ts
*: "*";
```

### \*\*foo\*\*

```ts
**foo**: "**foo**";
```

### \*foo\*

```ts
*foo*: "*foo*";
```

### \

```ts
\: "\";
```

### \a

```ts
\a: "\a";
```

### \n

```ts
\n: "\n";
```

### \`

```ts
`: "`";
```

### \`prop\`with\`backticks\`

```ts
`prop`with`backticks`: "`prop`with`backticks`";
```

### \<

```ts
<: "<";
```

### \<foo\>

```ts
<foo>: "<foo>";
```

### \>

```ts
>: ">";
```

### \|

```ts
|: "|";
```

### \|prop\|with\|pipes\|

```ts
|prop|with|pipes|: "|prop|with|pipes|";
```

### ~

```ts
~: "~";
```
