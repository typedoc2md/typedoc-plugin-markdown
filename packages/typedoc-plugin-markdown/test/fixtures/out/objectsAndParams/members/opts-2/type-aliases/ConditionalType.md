# Type Alias: ConditionalType\<T\>

```ts
type ConditionalType<T>: T extends string ? "string" : T extends number ? "number" : T extends boolean ? "boolean" : T extends undefined ? "undefined" : "object";
```

Comments for ConditionalType

## Type Parameters

| Type Parameter |
| :------ |
| `T` |
