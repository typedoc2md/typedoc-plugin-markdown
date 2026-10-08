---
'typedoc-plugin-markdown': patch
---

- Render the return type of a signature when it is an array or intersection of documented object types, or an `@expand` type, instead of an empty "Returns" section.
- Render parameters and return types that reference an `@expand` type as the type, instead of listing union members separately.
- Wrap function, intersection, conditional and type operator types in parentheses when they are array elements or optional tuple elements, e.g. `(() => void)[]` instead of `() => void[]`.
