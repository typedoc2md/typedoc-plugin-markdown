# Function: functionWithNestedParameters()

```ts
function functionWithNestedParameters(
   params: object, 
   context: any, 
   somethingElse?: string): boolean
```

Some nested params.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | \{ `name`: `string`; `nestedObj`: `object`; `parent`: `number`; \} | The parameters passed to the method. |
| `params.name` | `string` | The name of the new group. |
| `params.nestedObj` | \{ `name`: `string`; `obj`: `object`; `value`: `number`; \} | A nested object. |
| `params.nestedObj.name`? | `string` | - |
| `params.nestedObj.obj`? | \{ `name`: () => `void`; \} | - |
| `params.nestedObj.obj.name`? | () => `void` | - |
| `params.nestedObj.value`? | `number` | - |
| `params.parent`? | `number` | - |
| `context`? | `any` | The context of the method call. |
| `somethingElse`? | `string` | - |

## Returns

`boolean`

## Source

[functions.ts:1](http://source-url)
