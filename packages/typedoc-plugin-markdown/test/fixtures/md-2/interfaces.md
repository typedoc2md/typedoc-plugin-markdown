[**typedoc-plugin-markdown**](README.md)

***

[API](API.md) > interfaces

# Module: interfaces

Interfaces

## Index

### Interfaces

- [Base](interfaces.md#base)
- [FunctionInterface](interfaces.md#functioninterface)
- [IndexableInterface](interfaces.md#indexableinterface)

## Interfaces

### Base

Comments for Class Base

#### Properties

##### functionProp

```ts
functionProp: (s) => boolean
```

Comments for functionProper

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | Comment for param s |

###### Returns

`boolean`

###### Source

[interfaces.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L35)

##### optionalProp

```ts
optionalProp?: string
```

Comments for optional prop

###### Source

[interfaces.ts:19](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L19)

##### prop

```ts
prop: string
```

Comments for prop

###### Source

[interfaces.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L14)

##### propWithProps

```ts
propWithProps: {
  nestedPropA: string;
  nestedPropB: boolean;
  nestedPropC: {
    nestedPropCA: string;
    nestedPropCB: boolean;
  };
  nestedPropD: () => boolean;
 }
```

Comments for propWithProps

###### Source

[interfaces.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L40)

##### readonlyProp

```ts
readonly readonlyProp: string
```

Comments for readonlyProp

###### Source

[interfaces.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L24)

##### readonlyPropAndOptional

```ts
readonlyPropAndOptional?: string
```

Comments for readonlyPropAndOptional

###### Source

[interfaces.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L29)

***

### FunctionInterface

```ts
FunctionInterface(source, subString): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `source` | `string` |
| `subString` | `string` |

#### Returns

`boolean`

#### Source

[interfaces.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c071d51/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L74)

***

### IndexableInterface

#### Indexable

 \[`s`: `string`\]: `string`
