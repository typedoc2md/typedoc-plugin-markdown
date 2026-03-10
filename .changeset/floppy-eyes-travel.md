---
'typedoc-plugin-markdown': minor
---

- Improved rendering of union types when documented type details are present (#857).
- Improved rendering of union types used in parameter declarations.
- When a function returns another function, full documentation for the returned function is now only shown when meaningful comments are present, aligning with the default theme.
- Index signature declarations are now rendered as blockquotes for improved consistency.
- Function-typed properties are now rendered without parentheses in headings. This avoids implying that the member is a method and more accurately reflects that it is a property whose type is a function.
- Optional properties are now indicated with ? in the property name, making the optionality explicit.
- All pipe characters (`|`) in union type output are now escaped.
