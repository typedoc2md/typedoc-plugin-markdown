[typedoc-plugin-markdown](README.md) > theme/helpers

# theme/helpers

A set of helpers that parses TypeDoc models to be consumed by theme resources.

## Function: getDeclarationType()

```ts
getDeclarationType(declaration): undefined | SomeType
```

### Parameters

| Parameter   | Type                                                                                         |
| :---------- | :------------------------------------------------------------------------------------------- |
| declaration | [`DeclarationReflection`](https://typedoc.org/api/classes/Models.DeclarationReflection.html) |

### Returns

`undefined` \| `SomeType`

---

## Function: getProjectDisplayName()

```ts
getProjectDisplayName(project, includeVersion): string
```

### Parameters

| Parameter      | Type                                                                                 |
| :------------- | :----------------------------------------------------------------------------------- |
| project        | [`ProjectReflection`](https://typedoc.org/api/classes/Models.ProjectReflection.html) |
| includeVersion | `boolean`                                                                            |

### Returns

`string`
