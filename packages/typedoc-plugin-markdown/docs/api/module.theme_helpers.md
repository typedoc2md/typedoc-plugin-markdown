[**typedoc-plugin-markdown - v4.0.0-next.13**](README.md)

---

[typedoc-plugin-markdown](README.md) > theme/helpers

# theme/helpers

A set of helpers that parses TypeDoc models to be consumed by theme resources.

## getDeclarationType()

```ts
getDeclarationType(declaration): undefined | SomeType
```

### Parameters

| Parameter     | Type                                                                                         |
| :------------ | :------------------------------------------------------------------------------------------- |
| `declaration` | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`undefined` \| `SomeType`

---

## getProjectDisplayName()

```ts
getProjectDisplayName(project, includeVersion): string
```

### Parameters

| Parameter        | Type                                                                                 |
| :--------------- | :----------------------------------------------------------------------------------- |
| `project`        | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| `includeVersion` | `boolean`                                                                            |

### Returns

`string`
