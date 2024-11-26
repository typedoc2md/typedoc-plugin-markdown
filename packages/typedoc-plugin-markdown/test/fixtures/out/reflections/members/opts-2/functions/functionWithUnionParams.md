# Function: functionWithUnionParams()

```ts
function functionWithUnionParams(
   primitiveUnions: string | number, 
   objectUnions: object, 
   mixedUnions: string | {
  a: string;
  b: string;
 }, 
   noUnions: string): undefined
```

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `primitiveUnions` | `string` \| `number` | Comments for primitiveUnions |
| `objectUnions` | \{ `a`: `string`; `b`: `1`; \} | Comments for objectUnions |
| `objectUnions.a` | `string` | Comments for a |
| `objectUnions.b` | `1` | - |
| `mixedUnions` | `string` \| \{ `a`: `string`; `b`: `string`; \} | - |
| `noUnions` | `string` | Comments for noUnions |

## Returns

`undefined`

## Source

[functions.ts:1](http://source-url)
