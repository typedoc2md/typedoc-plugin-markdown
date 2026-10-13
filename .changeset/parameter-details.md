---
'typedoc-plugin-markdown': patch
---

- Mark a parameter as optional (`a?`) in tables when it has a default value, as the signature title and list format already do, and only by its own flag for members of an object parameter instead of every row after the first optional one. Show the default value of a union-typed parameter and the type of an object parameter with no members to list (such as an index signature alone) in list format, and show an elided property default as `...` in properties tables instead of `undefined`.
