---
'typedoc-plugin-markdown': patch
---

- Function-typed properties are now rendered without parentheses in headings. This avoids implying that the member is a method and more accurately reflects that it is a property whose type is a function.
- Optional properties are now indicated with ? in the property name, making the optionality explicit.
- All pipe characters (`|`) in union type output are now escaped.
