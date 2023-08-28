[**typedoc-plugin-markdown**](../../README.md)

***

[API](../../API.md) > [interfaces](../README.md) > Base

# Interface: Base

Comments for Class Base

## Properties

### functionProp

```ts
functionProp: (s) => boolean
```

Comments for functionProper [Base](interface.Base.md)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | Comment for param s [propWithProps](interface.Base.md#propwithprops) |

#### Returns

`boolean`

#### Source

[interfaces.ts:35](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c50784c/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L35)

***

### optionalProp

```ts
optionalProp?: string
```

Comments for optional prop

#### Source

[interfaces.ts:19](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c50784c/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L19)

***

### prop

```ts
prop: string
```

Comments for prop

#### Source

[interfaces.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c50784c/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L14)

***

### propWithProps

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

#### Source

[interfaces.ts:40](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c50784c/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L40)

***

### readonlyProp

```ts
readonly readonlyProp: string
```

Comments for readonlyProp

#### Source

[interfaces.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c50784c/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L24)

***

### readonlyPropAndOptional

```ts
readonlyPropAndOptional?: string
```

Comments for readonlyPropAndOptional

#### Source

[interfaces.ts:29](https://github.com/tgreyuk/typedoc-plugin-markdown/blob/c50784c/packages/typedoc-plugin-markdown/test/stubs/default/interfaces.ts#L29)
