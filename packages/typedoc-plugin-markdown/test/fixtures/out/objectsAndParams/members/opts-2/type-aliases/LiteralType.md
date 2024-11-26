# Type Alias: LiteralType

```ts
type LiteralType: {
  someFunctionWithArrow: () => string;
  x: string;
  y: {
     x: string;
     y: boolean | string;
     z: (x: string) => string;
    };
  z: (x: string) => string;
  get set accessorA: Promise<string>;
  get set accessorB: string;
  someFunction: Promise<any>;
};
```

Comments for LiteralType

## Type declaration

### someFunctionWithArrow()

```ts
() => string
```

Comments for someFunctionWithArrow

### x?

```ts
optional x: string;
```

comment for x

### y

```ts
{
  x: string;
  y: boolean | string;
  z: (x: string) => string;
}
```

comment for y

### z()

```ts
(x: string) => string
```

### accessorA

#### Get Signature

```ts
get accessorA(): Promise<string>
```

Comments for accessorA getter

##### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### Set Signature

```ts
set accessorA(x: Promise<string>): void
```

Comments for accessorA setter

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\> |

##### Returns

`void`

### accessorB

#### Get Signature

```ts
get accessorB(): string
```

##### Returns

`string`

#### Set Signature

```ts
set accessorB(x: string): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `string` |

##### Returns

`void`

### someFunction()

Comments for someFunction

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `param` | `string` |  |

#### Returns

[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>
