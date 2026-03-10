---
'typedoc-plugin-markdown': minor
---

- Improved rendering of union types when documented type details are present (#857).
- Improved rendering of union types used in parameter declarations.
- When a function returns another function, full documentation for the returned function is now only shown when meaningful comments are present, aligning with the default theme.
- Index signature declarations are now rendered as blockquotes for improved consistency.
- All pipe characters (`|`) in union type output are now escaped.
