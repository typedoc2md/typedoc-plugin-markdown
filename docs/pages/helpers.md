# Helpers

## flattenDeclarations()

```ts
function flattenDeclarations(props: DeclarationReflection[], includeSignatures: boolean): any[];
```

Flattens declarations into a single array, useful for displaying items in tables.

### Parameters

| Parameter           | Type                                                                                            | Default value |
| :------------------ | :---------------------------------------------------------------------------------------------- | :------------ |
| `props`             | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html)\[] | `undefined`   |
| `includeSignatures` | `boolean`                                                                                       | `false`       |

### Returns

`any`\[]

---

## getDeclarationType()

```ts
function getDeclarationType(declaration: DeclarationReflection): undefined | SomeType;
```

### Parameters

| Parameter     | Type                                                                                         |
| :------------ | :------------------------------------------------------------------------------------------- |
| `declaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`undefined` | `SomeType`

---

## getIndexTitle()

```ts
function getIndexTitle(textContent: string, name: string, version?: string): string;
```

### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `textContent` | `string` |
| `name`        | `string` |
| `version`?    | `string` |

### Returns

`string`

---

## getKeyword()

```ts
function getKeyword(kind: ReflectionKind): any;
```

### Parameters

| Parameter | Type             |
| :-------- | :--------------- |
| `kind`    | `ReflectionKind` |

### Returns

`any`

---

## getModifier()

```ts
function getModifier(reflection: DeclarationReflection): string | null;
```

### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`string` | `null`

---

## getParameterDefaultValue()

```ts
function getParameterDefaultValue(parameter: ParameterReflection): string;
```

### Parameters

| Parameter   | Type                  |
| :---------- | :-------------------- |
| `parameter` | `ParameterReflection` |

### Returns

`string`

---

## isGroupKind()

```ts
function isGroupKind(reflection: DeclarationReflection | SignatureReflection): boolean;
```

### Parameters

| Parameter    | Type                                                                                         |
| :----------- | :------------------------------------------------------------------------------------------- | --------------------- |
| `reflection` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) | `SignatureReflection` |

### Returns

`boolean`

---

## parseComments()

```ts
function parseComments(comments: string): string;
```

Exposed to additionally parse comments.

### Parameters

| Parameter  | Type     | Description |
| :--------- | :------- | :---------- |
| `comments` | `string` |             |

### Returns

`string`

---

## parseUrl()

```ts
function parseUrl(url: string): string;
```

Additional url parsing

### Parameters

| Parameter | Type     |
| :-------- | :------- |
| `url`     | `string` |

### Returns

`string`
