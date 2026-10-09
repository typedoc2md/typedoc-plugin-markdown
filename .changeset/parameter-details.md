---
'typedoc-plugin-markdown': patch
---

- Mark parameters with a default value as optional (`a?`) in parameter tables, as the signature title and list format already do.
- Show the type of an object parameter with no members to list, such as an index signature alone, in list format.
- Show the default value of a union-typed parameter in list format.
- Show an elided property default as `...` in properties tables, instead of `undefined`.
