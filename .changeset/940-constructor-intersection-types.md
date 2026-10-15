---
'typedoc-plugin-markdown': patch
---

- Render constructor types with their `new` and `abstract` keywords instead of as function types (#940).
- Parenthesise function, constructor, union and conditional types inside intersections, so `A & (() => void)` is no longer rendered as `A & () => void` (#940).
